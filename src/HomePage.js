import React from 'react';
import UploadForm from './UploadForm'; // Assuming UploadForm is inside a 'components' folder
import './App.css'; // Your main CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function HomePage() {
  return (
    <div className="App text-dark" style={{'background-color': '#F5F5DC'}}>
      <Navbar></Navbar>
      {/* Hero Section */}
      <header className="hero-section text-dark text-center py-5" style={{'background-color': '#F5F5DC'}}>
        <h1>Secure Document Verification at Your Fingertips</h1>
        <p>Upload your government documents with confidence. PiiChecker ensures secure and accurate verification.</p>
        {/* <button className="btn btn-light mt-3">Get Started</button> */}
      </header>
      <hr></hr>
      {/* Upload Section */}
      <section id="upload" className="upload-section py-5 text-center" style={{'background-color': '#F5F5DC'}}> 
        <h2>Upload Your Document</h2>
        <p>Choose a file from your computer, and click ‘Verify’ to begin the process.</p>
        <UploadForm />
        <small className="text-muted">All files are processed securely. We do not store any personal information.</small>
      </section>
      {/* Footer */}
      <footer className="footer py-3 text-light bg-dark text-center">
        <p>© 2024 Team Tech-Air. All rights reserved.</p>
        <p>
          <a href="/" className="text-light mx-2">Privacy Policy</a>
          <a href="/" className="text-ligth mx-2">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
