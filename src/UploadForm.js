import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './UploadForm.module.css';

function UploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload
    console.log('File submitted:', file);
  };

  return (
    <div className={`container mt-4 ${styles.uploadFormContainer}`}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Upload Document</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input 
                    type="file" 
                    className="form-control" 
                    onChange={handleFileChange} 
                  />
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;

