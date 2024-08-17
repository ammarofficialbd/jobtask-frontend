import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import BrandFilter from "../Components/BrandFilter";
import CategoriesFilter from "../Components/CategoriesFilter";
import styled from "styled-components";
function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State for filters
  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

 /*  
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((b) => b !== category)
        : [...prev, category]
    );
  };
  
 
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }; */
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
  useEffect(() => {
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/products', {
                params: {
                    page,
                    limit: 10,
                    search,
                    brand,
                    category,
                    minPrice,
                    maxPrice,
                    sortBy
                }
            });

            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    fetchProducts();
}, [search, selectedBrands, category, minPrice, maxPrice, sortBy, page]);

const handlePageChange = (newPage) => {
    setPage(newPage);
};

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
  return (
    <Container>
      <FilterSection>
        <BrandFilter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}/>
        <CategoriesFilter category={category} setCategory={setCategory}/>
      </FilterSection>
      <ProductSection>
        <ProductGrid>
          {products &&
            products.map((product, index) => <Card key={index} {...product} />)}
        </ProductGrid>
      </ProductSection>
        {/* Pagination Controls */}
           <div>
                <button
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                >
                    Previous
                </button>
                <span>{page} of {totalPages}</span>
                <button
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(page + 1)}
                >
                    Next
                </button>
            </div>
    </Container>
  );
}

export default Home;
