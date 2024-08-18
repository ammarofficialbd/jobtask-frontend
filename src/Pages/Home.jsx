import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import BrandFilter from "../Components/BrandFilter";
import CategoriesFilter from "../Components/CategoriesFilter";
import styled from "styled-components";
import axios from "axios";
import SortComponent from "../Components/SortComponent";
import PriceFilter from "../Components/PriceFilter";
import Search from "../Components/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State for filters
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(350);
  const [sortBy, setSortBy] = useState("");

  console.log(minPrice, maxPrice);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:3000/api/v1/products",
          {
            params: {
              page,
              limit: 10,
              search,
              brand: selectedBrands,
              category,
              minPrice,
              maxPrice,
              sortBy,
            },
          }
        );
        //console.log(response);
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, selectedBrands, category, minPrice, maxPrice, sortBy, page]);

  console.log(products);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <Container>
        
      <FilterSection>
        <h2 className="text-xl"> Filter </h2>
        <BrandFilter
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <CategoriesFilter category={category} setCategory={setCategory} />
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </FilterSection>
      <ProductSection>
         <Search/>
        <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
        <ProductGrid>
          {products &&
            products.map((product, index) => <Card key={index} {...product} />)}
        </ProductGrid>
        {/* Pagination Controls */}
        <div>
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          <span>
            {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </ProductSection>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const FilterSection = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 1px solid #eaeaea;
  max-width: 300px; /* You can adjust the width as per your requirement */
`;
const ProductSection = styled.div`
  flex: 3;
  padding: 20px;
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;
