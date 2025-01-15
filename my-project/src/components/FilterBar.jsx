import React, { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    bhk: "",
    bathrooms: "",
    street: "",
    state: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="bhk">BHK</label>
        <select id="bhk" name="bhk" onChange={handleChange} value={filters.bhk}>
          <option value="">Select BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="bathrooms">Bathrooms</label>
        <select
          id="bathrooms"
          name="bathrooms"
          onChange={handleChange}
          value={filters.bathrooms}
        >
          <option value="">Select Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="Enter Street Name"
          onChange={handleChange}
          value={filters.street}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="state">State</label>
        <select
          id="state"
          name="state"
          onChange={handleChange}
          value={filters.state}
        >
          <option value="">Select State</option>
          <option value="CA">California</option>
          <option value="TX">Texas</option>
          <option value="NY">New York</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="price">Price Range</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter Price Range"
          onChange={handleChange}
          value={filters.price}
        />
      </div>
    </div>
  );
};

export default FilterBar;
