import { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

/**
 * Main App component that manages the CV generator application
 * Handles the state management for the entire CV data structure
 */
function App() {
    // Initialize CV data structure with empty values
    const [cvData, setCvData] = useState({
        personalInfo: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
        },
        education: [],
        experience: [],
        skills: [],
    });

    /**
     * Updates the CV data when changes are made in child components
     * @param {Object} newData - The updated CV data object
     */
    const handleUpdateCV = (newData) => {
        setCvData(newData);
    };

    return (
        <div className="app">
            <h1>CV Generator</h1>
            <div className="cv-container">
                <div className="form-section">
                    <CVForm cvData={cvData} onUpdateCV={handleUpdateCV} />
                </div>
                <div className="preview-section">
                    <CVPreview cvData={cvData} />
                </div>
            </div>
        </div>
    );
}

export default App;
