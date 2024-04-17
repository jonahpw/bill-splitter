import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiptUpload = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onUploadReciptClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/assign');
    }, 1000);
  };

  return (
    <div className="receipt-upload">
      <h1>Upload your receipt</h1>
      <p>Select a photo of your receipt to start splitting the bill</p>
      <button type="button" onClick={onUploadReciptClick} disabled={loading}>
        {loading ? 'Loading...' : 'Upload'}
      </button>
    </div>
  );
};

export default ReceiptUpload;
