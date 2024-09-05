import React from 'react';
import UploadForm from './UploadForm'; // Assuming UploadForm is inside a 'components' folder
import './App.css'; // Your main CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


export default function AboutPage () {
    return (
        <div style={{'background-color': '#F5F5DC'}}>
        <Navbar></Navbar>
            {/* How It Works Section */}
      <section className="how-it-works-section py-5 text-center text-dark">
        <h1><b>How It Works</b></h1>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Step 1</h3>
              <p>Upload Your Document - Choose a government document like an ID, passport, or license.</p>
            </div>
            <div className="col-md-4">
              <h3>Step 2</h3>
              <p>Automatic Verification - Our system uses advanced detection algorithms to verify the authenticity of your document.</p>
            </div>
            <div className="col-md-4">
              <h3>Step 3</h3>
              <p>Instant Results - Receive instant feedback on the document’s status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 text-center text-dark">
        <h1><b>Why Choose PIIProtector?</b></h1>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Fast and Reliable</h4>
              <p>Quick verification with accurate results.</p>
            </div>
            <div className="col-md-3">
              <h4>Secure Processing</h4>
              <p>Data encryption ensures your documents remain private.</p>
            </div>
            <div className="col-md-3">
              <h4>User-Friendly Interface</h4>
              <p>Simple design for an easy experience.</p>
            </div>
            <div className="col-md-3">
              <h4>No Data Retention</h4>
              <p>We do not store your documents after verification.</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="about-section text-dark py-5 text-center">
        <h1><b>About PIIProtector</b></h1>
        <hr/>
        <p>PIIProtector is dedicated to providing secure and reliable document verification services. Our team of experts has developed cutting-edge technology to safeguard your personal information during the verification process.</p>
      </section>
      
      {/* FAQs Section */}
      <section className="faqs-section py-5 text-center">
        <h1><b>Frequently Asked Questions</b></h1>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className='text-success'>What types of documents can I upload?</h5>
              <p>You can upload government-issued documents like IDs, passports, and licenses.</p>
            </div>
            <div className="col-md-6">
              <h5 className='text-success'>Is my data safe with PIIProtector?</h5>
              <p>Absolutely. We use advanced encryption and do not store your documents after verification.</p>
            </div>
            <div className="col-md-6">
              <h5 className='text-success'> How long does the verification process take?</h5>
              <p>Verification is usually completed within a few seconds.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="contact-section text-dark py-5 text-center">
        <h1><b>Get in Touch</b></h1>
        <hr/>
        <p>Have questions or need assistance? Contact us at <a href="mailto:contact@piiprotector.com" className="text-success">contact@piiprotector.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer text-light py-3 text-center">
        <p>© 2024 PIIProtector. All rights reserved.</p>
        <p>
          <a href="/" className="text-white mx-2">Privacy Policy</a>
          <a href="/" className="text-white mx-2">Terms of Service</a>
        </p>
      </footer>
        </div>
    )
}