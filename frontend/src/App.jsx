import { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageRetrieve from './components/ImageRetrieve';

function App() {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadResult, setUploadResult] = useState(null);

  const handleUploadSuccess = (result) => {
    setUploadResult(result);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Key copied to clipboard!');
    } catch (err) {
      alert('Failed to copy key. Please copy it manually.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📸 Image Pad</h1>
        <p>Upload and share images instantly</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload
        </button>
        <button
          className={`tab ${activeTab === 'retrieve' ? 'active' : ''}`}
          onClick={() => setActiveTab('retrieve')}
        >
          Retrieve
        </button>
      </div>

      <div className={activeTab === 'upload' ? '' : 'hidden'}>
        <ImageUpload onUploadSuccess={handleUploadSuccess} />
        
        {uploadResult && (
          <div className="result-section">
            <h3>✅ Upload Successful!</h3>
            <div className="result-key">
              <div>
                <p style={{ marginBottom: '5px', color: '#666' }}>Your unique key:</p>
                <code>{uploadResult.key}</code>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(uploadResult.key)}
              >
                Copy Key
              </button>
            </div>
            <div className="success">
              Share this key to allow others to view your image!
            </div>
            <img src={uploadResult.url} alt="Uploaded" className="preview-image" />
          </div>
        )}
      </div>

      <div className={activeTab === 'retrieve' ? '' : 'hidden'}>
        <ImageRetrieve />
      </div>
    </div>
  );
}

export default App;
