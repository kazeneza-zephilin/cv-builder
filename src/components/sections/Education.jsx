/* eslint-disable react/prop-types */
import "../../styles/sections/Education.css";

/**
 * Education component handles the display and editing of educational background
 * @param {Array} data - Array of education entries
 * @param {Function} onUpdate - Callback function to update education data
 * @param {boolean} isEditing - Flag to toggle between edit and preview modes
 */
function Education({ data, onUpdate, isEditing }) {
    /**
     * Adds a new empty education entry to the list
     */
    const handleAdd = () => {
        onUpdate([...data, { school: "", degree: "", year: "" }]);
    };

    /**
     * Updates a specific field of an education entry
     * @param {number} index - Index of the education entry to update
     * @param {string} field - Field name to update (school, degree, or year)
     * @param {string} value - New value for the field
     */
    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        onUpdate(newData);
    };

    /**
     * Removes an education entry from the list
     * @param {number} index - Index of the education entry to remove
     */
    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        onUpdate(newData);
    };

    // Display preview mode when not editing
    if (!isEditing) {
        return (
            <div className="education-preview">
                <h2>Education</h2>
                {/* Map through education entries and display them */}
                {data.map((edu, index) => (
                    <div key={index} className="education-entry">
                        <h3>{edu.school}</h3>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </div>
                ))}
            </div>
        );
    }

    // Display edit form when in editing mode
    return (
        <section className="education-form">
            <h2>Education</h2>
            {/* Map through education entries and display input fields */}
            {data.map((edu, index) => (
                <div key={index} className="education-entry">
                    <input
                        type="text"
                        placeholder="School"
                        value={edu.school}
                        onChange={(e) =>
                            handleChange(index, "school", e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                            handleChange(index, "degree", e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) =>
                            handleChange(index, "year", e.target.value)
                        }
                    />
                    <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            {/* Button to add new education entry */}
            <button onClick={handleAdd}>Add Education</button>
        </section>
    );
}

export default Education;
