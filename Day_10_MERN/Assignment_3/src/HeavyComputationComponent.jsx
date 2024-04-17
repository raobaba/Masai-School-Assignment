import React, { useState, useMemo } from 'react';

function HeavyComputationComponent({ items }) {
  const [filterTerm, setFilterTerm] = useState('');
  
  const filteredItems = useMemo(() => {
    console.log('Expensive computation executed');
    return items.filter(item => item.includes(filterTerm));
  }, [items, filterTerm]);

  const handleChange = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div>
      <h2>Heavy Computation Component</h2>
      <input type="text" value={filterTerm} onChange={handleChange} placeholder="Filter items..." />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeavyComputationComponent;
