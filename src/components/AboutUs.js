import React from "react";

export default function AboutUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h4>Who We Are</h4>
          <p style={{ fontSize: "0.8rem" }}>
            Welcome to TextUtils! We are passionate about providing efficient,
            user-friendly text manipulation tools to make your life easier.
            From quick text transformations to detailed analysis, we've got you
            covered.
          </p>
          <h4>Our Mission</h4>
          <p style={{ fontSize: "0.8rem" }}>
            Our mission is to create a seamless experience for managing text,
            whether for personal use, work, or academic purposes.
          </p>
          <button className="btn btn-primary btn-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
}
