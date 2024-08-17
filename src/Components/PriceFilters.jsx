import React from 'react';

const PriceFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    return (
        <div>
            <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
            />
            <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
            />
        </div>
    );
};

export default PriceFilter;
