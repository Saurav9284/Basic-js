import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleButtonClick}>Show Popup</button>
      {showPopup && <div>Hello, {name}!</div>}
    </div>
  );
};

export default MyForm;
