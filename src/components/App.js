import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const handleChange = e => setValue(e.target.value);

  return (
    <>
      {/* Controlled: */}
      <label>controlado</label>
      <input value={value} onChange={handleChange} />
      {/* Uncontrolled */}
      <label>não controlado</label>
      <input type="text" />
    </>
  );
};

export default App;
