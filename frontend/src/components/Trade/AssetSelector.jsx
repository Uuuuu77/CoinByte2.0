// AssetSelector.jsx
import React from 'react';
import './AssetSelector.css';

const AssetSelector = ({ selectedAsset, setSelectedAsset }) => {
  return (
    <div className="asset-selector">
      <label htmlFor="asset">Select Asset:</label>
      <select 
        id="asset" 
        value={selectedAsset} 
        onChange={(e) => setSelectedAsset(e.target.value)}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="litecoin">Litecoin</option>
        <option value="dogecoin">Dogecoin</option>
        <option value="tether">Tether</option>
      </select>
    </div>
  );
};

export default AssetSelector;
