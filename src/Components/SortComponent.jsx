import React from 'react';

const SortComponent = ({ sortBy, setSortBy }) => {
    return (
        <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
        >
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
        </select>
    );
};

export default SortComponent;
