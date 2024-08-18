import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import BrandFilter from "../Components/BrandFilter";
import CategoriesFilter from "../Components/CategoriesFilter";
import styled from "styled-components";
import axios from "axios";
import SortComponent from "../Components/SortComponent";
import PriceFilter from "../Components/PriceFilter";
import Search from "../Components/Search";
import Pagination from "../Components/Pagination";
import { FaBars } from "react-icons/fa";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State for filters
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(350);
  const [sortBy, setSortBy] = useState("");
  const [active, setActive] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  console.log(isMobile);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://products-backend-pi.vercel.app/api/v1/products",
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
        setCurrentPage(response.data.currentPage)
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

      window.addEventListener('resize', handleResize);
      fetchProducts();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
   
  }, [search, selectedBrands, category, minPrice, maxPrice, sortBy, page]);

  console.log(products);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <MainContainer> 
      <Search search={search} setSearch={setSearch}/>
 <Container>
        
        {
          active && <FilterSection className={`${isMobile ? 'absolute mt-10 z-50 bg-white' : 'relative'}`}>
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
        }
        

        <ProductSection>
          <div className="flex justify-between p-2 items-center"> 
          <div className="flex items-center gap-2 cursor-pointer" onClick={()=> setActive(!active)}> 
          <FaBars/> Filter
          </div>
           
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          
          <ProductGrid>
            {products &&
              products.map((product, index) => <Card key={index} {...product} />)}
          </ProductGrid>
          {/* Pagination Controls */}
          <Pagination
          page={page}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
        {/*   <div>
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
          </div> */}
        </ProductSection>
  
      </Container>
    </MainContainer>
   
  );
}

export default Home;

const MainContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;
const Container = styled.div`
  display: flex;
  @media (max-width: 468px) {
    width:100%;
  }
`;
const FilterSection = styled.div`
  flex: 1;
  border-right: 1px solid #eaeaea;
  max-width: 300px; /* You can adjust the width as per your requirement */
`;
const ProductSection = styled.div`
  flex: 3;
  max-width: 1100px;
 
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  @media (max-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
