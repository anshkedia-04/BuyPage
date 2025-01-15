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
      <select name="bhk" onChange={handleChange} value={filters.bhk}>
        <option value="">BHK</option>
        <option value="1">1 BHK</option>
        <option value="2">2 BHK</option>
        <option value="3">3 BHK</option>
      </select>
      <select name="bathrooms" onChange={handleChange} value={filters.bathrooms}>
        <option value="">Bathrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        type="text"
        name="street"
        placeholder="Street"
        onChange={handleChange}
        value={filters.street}
      />
      <select name="state" onChange={handleChange} value={filters.state}>
        <option value="">State</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="NY">New York</option>
      </select>
      <input
        type="text"
        name="price"
        placeholder="Price Range"
        onChange={handleChange}
        value={filters.price}
      />
    </div>
  );
};

export default FilterBar;
