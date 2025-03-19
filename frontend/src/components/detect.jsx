import React, { useState } from "react";

function Detect() {
  const [message, setMessage] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [outputImage, setOutputImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(styles.button); // State for button hover

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage("No file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://127.0.0.1:5000/classify", {
        method: "POST",
        body: formData,
        mode: "cors", // Remove headers, CORS must be handled in backend
      });

      const data = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(data);
      } catch {
        setMessage("Error: Response was not valid JSON.\n" + data);
        return;
      }

      if (parsed.message) {
        setMessage(parsed.message);
      } else {
        setMessage("");
      }

      setInputImage(parsed.input_image || "");
      setOutputImage(parsed.output_image || "");
    } catch (error) {
      setMessage("Error during request: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upload an Image for Classification</h1>
      {message && <p style={styles.message}>{message}</p>}

      {(inputImage || outputImage) && (
        <div style={styles.imageContainer}>
          {inputImage && (
            <div style={styles.imageBox}>
              <h3>Input Image:</h3>
              <img
                src={`http://127.0.0.1:5000/static/uploads/${inputImage}`}
                alt="Input"
                style={styles.image}
              />
            </div>
          )}
          {outputImage && (
            <div style={styles.imageBox}>
              <h3>Predicted Image:</h3>
              <img
                src={`http://127.0.0.1:5000/static/output/${outputImage}`}
                alt="Predicted"
                style={styles.image}
              />
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.uploadForm}>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button 
          type="submit" 
          style={buttonStyle} 
          onMouseEnter={() => setButtonStyle(styles.buttonHover)}
          onMouseLeave={() => setButtonStyle(styles.button)}
        >
          Upload and Classify
        </button>
      </form>
    </div>
  );
}

export default Detect;

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: "24px",
    color: "#2c3e50",
    marginBottom: "20px",
  },

  message: {
    color: "red",
    marginBottom: "15px",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },

  imageBox: {
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },

  image: {
    width: "250px",
    height: "auto",
    borderRadius: "5px",
  },

  uploadForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  buttonHover: {
    backgroundColor: "#2980b9",
  },
};
