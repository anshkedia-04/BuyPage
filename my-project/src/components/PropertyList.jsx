import React, { useState } from "react";

const PropertyApp = () => {
  const [properties, setProperties] = useState([
    { id: 1, bhk: 2, bathrooms: 2, street: "Main St", state: "CA", price: 1500 },
    { id: 2, bhk: 3, bathrooms: 2, street: "Oak St", state: "TX", price: 2000 },
    { id: 3, bhk: 1, bathrooms: 1, street: "Pine St", state: "NY", price: 1200 },
  ]);

  return (
    <div className="app">
      <header>
        <h1>Find Your Dream Home</h1>
      </header>

      <div className="filter-bar">
        <div className="filter-group">
          <label>BHK</label>
          <select>
            <option value="">Select</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Bathrooms</label>
          <select>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Street</label>
          <input type="text" placeholder="Enter street name" />
        </div>
        <div className="filter-group">
          <label>State</label>
          <select>
            <option value="">Select</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="NY">New York</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Price</label>
          <input type="text" placeholder="Enter price range" />
        </div>
      </div>

      <main>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={`house-${property.id}.jpg`} alt="Property" />
              <p>BHK: {property.bhk}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Street: {property.street}</p>
              <p>State: {property.state}</p>
              <p>Price: ${property.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
      <p>
  Welcome to the Buy Page! Here, you can explore an extensive collection of properties that are carefully curated to meet a variety of needs and preferences. Whether you're searching for a cozy apartment in a bustling city or a spacious family home nestled in a quiet neighborhood, we offer a wide range of options to help you find your dream property. 

  From luxurious penthouses with stunning city views to charming suburban homes with large backyards, the possibilities are endless. Our dedicated team is here to assist you every step of the way, providing expert advice and personalized recommendations tailored specifically to your requirements. 

  We understand that buying a home is one of the biggest decisions you'll make, and we're committed to making this process as smooth and enjoyable as possible. Our platform allows you to easily filter and search properties based on your preferences, helping you find exactly what you're looking for in just a few clicks.

  But that's not all – here are just a few reasons why our platform is the best place for your house-hunting journey:

  <ul>
    <li><strong>Wide Variety of Properties:</strong> Whether you’re interested in apartments, villas, townhouses, or luxury estates, we have something for everyone.</li>
    <li><strong>Detailed Property Listings:</strong> Each property listing includes high-quality images, floor plans, and detailed descriptions to help you make an informed decision.</li>
    <li><strong>Advanced Search Filters:</strong> Our intuitive search filters allow you to narrow down properties based on location, price range, size, amenities, and more.</li>
    <li><strong>Expert Guidance:</strong> Our team of real estate professionals is available to answer your questions and offer expert advice throughout the process.</li>
    <li><strong>Seamless Viewing Experience:</strong> Schedule property viewings easily through our platform, making it simple to visit and explore your top choices.</li>
    <li><strong>Competitive Pricing:</strong> We provide transparent pricing information and guide you to the best deals that fit your budget.</li>
    <li><strong>Secure Transactions:</strong> We ensure all transactions are secure and trustworthy, so you can confidently make your purchase.</li>
    <li><strong>Ongoing Support:</strong> Even after your purchase, our team is here to help with any questions or concerns you may have about your new property.</li>
  </ul>

  Happy house hunting! We’re excited to help you find a home that matches your vision and lifestyle. Start exploring today and take the first step towards owning the perfect property.
</p>

      </footer>
    </div>
  );
};

export default PropertyApp;
