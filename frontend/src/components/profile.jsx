import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5001/checkAuth", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUser(data.user); // Store full user data
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    const response = await fetch("http://localhost:5001/logout", {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      navigate("/Login");
    }
  };

  return (
    <div style={styles.pageContainer}>
      {user ? (
        <>
          {/* Profile button (first letter of the user's name) */}
          
            {/* {user.fullName.charAt(0).toUpperCase()} */}

          {/* Profile Details Pop-up */}
            <div style={styles.profileDetailsContainer}>
              <h3 style={styles.profileName}>{user.fullName}</h3>
              <p style={styles.profileEmail}>{user.email}</p>
              <div style={styles.profileButtonsContainer}>
                <button onClick={handleLogout} style={styles.logoutButton}>
                  Logout
                </button>
                <button
                  onClick={() => setOpen(false)}
                  style={styles.closeButton}
                >
                  Close
                </button>
              </div>
            </div>
        
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

// Styles for the Profile Page
const styles = {
  pageContainer: {
    position: "relative",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f4f7fc",
    minHeight: "100vh",
  },
  profileButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
  profileButtonHover: {
    backgroundColor: "#0056b3",
  },
  profileDetailsContainer: {
    position: "absolute",
    top: "60px",
    right: "0",
    width: "250px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  },
  profileName: {
    margin: "0",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    margin: "10px 0",
    fontSize: "14px",
    color: "gray",
  },
  profileButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  logoutButton: {
    padding: "8px 15px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  closeButton: {
    padding: "8px 15px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default ProfilePage;
