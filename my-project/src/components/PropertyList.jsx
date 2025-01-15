import React, { useState } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([
    { id: 1, bhk: 2, bathrooms: 2, street: "Main St", state: "CA", price: 1500 },
    { id: 2, bhk: 3, bathrooms: 2, street: "Oak St", state: "TX", price: 2000 },
    { id: 3, bhk: 1, bathrooms: 1, street: "Pine St", state: "NY", price: 1200 },
  ]);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <p>BHK: {property.bhk}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Street: {property.street}</p>
          <p>State: {property.state}</p>
          <p>Price: ${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
