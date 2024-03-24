import React from "react";

const Select = ({ value, items, onChange }) => {
    return (
      <select value={value} onChange={onChange}>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;