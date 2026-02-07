import { useState } from 'react';
import { getImageByKey } from '../services/api';

const ImageRetrieve = () => {
  const [key, setKey] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRetrieve = async (e) => {
    e.preventDefault();
    if (!key.trim()) {
      setError('Please enter a key');
      return;
    }

    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const result = await getImageByKey(key.trim());
      setImage(result.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to retrieve image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="retrieve-section">
      <h2>Retrieve Image</h2>
      <form onSubmit={handleRetrieve}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter image key..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Loading...' : 'Retrieve'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Retrieving your image...</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {image && (
        <div className="result-section">
          <img src={image.url} alt="Retrieved" className="preview-image" />
          <div className="image-info">
            <p><strong>Key:</strong> {image.key}</p>
            <p><strong>Format:</strong> {image.format}</p>
            <p><strong>Dimensions:</strong> {image.width} x {image.height}</p>
            <p><strong>Uploaded:</strong> {new Date(image.uploadedAt).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageRetrieve;
