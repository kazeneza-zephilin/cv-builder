/* eslint-disable react/prop-types */
import "../../styles/sections/Experience.css";

/**
 * Experience component handles the display and editing of work experience
 * @param {Array} data - Array of experience entries
 * @param {Function} onUpdate - Callback function to update experience data
 * @param {boolean} isEditing - Flag to toggle between edit and preview modes
 */
function Experience({ data, onUpdate, isEditing }) {
    const handleAdd = () => {
        onUpdate([
            ...data,
            { company: "", position: "", duration: "", description: "" },
        ]);
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        onUpdate(newData);
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        onUpdate(newData);
    };

    if (!isEditing) {
        return (
            <div className="experience-preview">
                <h2>Experience</h2>
                {data.map((exp, index) => (
                    <div key={index} className="experience-entry">
                        <h3>{exp.company}</h3>
                        <p>{exp.position}</p>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <section className="experience-form">
            <h2>Experience</h2>
            {data.map((exp, index) => (
                <div key={index} className="experience-entry">
                    <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                            handleChange(index, "company", e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        value={exp.position}
                        onChange={(e) =>
                            handleChange(index, "position", e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) =>
                            handleChange(index, "duration", e.target.value)
                        }
                    />
                    <textarea
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) =>
                            handleChange(index, "description", e.target.value)
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
            <button onClick={handleAdd}>Add Experience</button>
        </section>
    );
}

export default Experience; 