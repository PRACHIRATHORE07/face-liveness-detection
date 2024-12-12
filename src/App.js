import React, { useState } from "react";

const App = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const handleButtonClick = () => {
    if (cameraEnabled) {
      // Stop Camera: Refresh the page
      window.location.reload();
    } else {
      // Start Camera: Toggle the state
      setCameraEnabled(true);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#4CAF50" }}>Face Liveness Detection</h1>
      <p>Aadhaar Authentication Platform by UIDAI</p>

      {/* Button to toggle camera */}
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          backgroundColor: cameraEnabled ? "#FF5733" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {cameraEnabled ? "Stop Camera" : "Start Camera"}
      </button>

      {/* Display the video feed when the camera is enabled */}
      <div style={{ margin: "20px auto", maxWidth: "640px" }}>
        {cameraEnabled && (
          <img
            src="http://localhost:5000/video_feed" // Flask backend video feed URL
            alt="Face Detection Feed"
            style={{
              borderRadius: "50%", // Circular border for the video feed
              width: "50%",       // Make it responsive
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
