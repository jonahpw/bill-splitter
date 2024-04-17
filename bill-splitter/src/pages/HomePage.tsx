import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onUploadReciptClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/receipt-upload');
    }, 1000);
  };

  return (
    <div className="homepage">
      <h1>Bill Splitter</h1>
      <p>Split your restaurant bills with ease!</p>
      <button type="button" onClick={onUploadReciptClick} disabled={loading}>
        {loading ? 'Loading...' : 'Upload Recipt'}
      </button>
    </div>
  );
};

export default HomePage;
