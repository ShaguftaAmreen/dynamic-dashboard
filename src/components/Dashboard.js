import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm)
    )
  }));

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {filteredCategories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import Category from './Category';

// const Dashboard = () => {
//   const categories = useSelector(state => state.categories);

//   return (
//     <div className="dashboard">
//       {categories.map(category => (
//         <Category key={category.id} category={category} />
//       ))}
//     </div>
//   );
// };

// export default Dashboard;
