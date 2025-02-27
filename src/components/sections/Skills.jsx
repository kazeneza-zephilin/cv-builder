/* eslint-disable react/prop-types */
import "../../styles/sections/Skills.css";

/**
 * Skills component handles the display and editing of skills
 * @param {Array} data - Array of skills
 * @param {Function} onUpdate - Callback function to update skills data
 * @param {boolean} isEditing - Flag to toggle between edit and preview modes
 */
function Skills({ data, onUpdate, isEditing }) {
    const handleAdd = () => {
        onUpdate([...data, ""]);
    };

    const handleChange = (index, value) => {
        const newData = [...data];
        newData[index] = value;
        onUpdate(newData);
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        onUpdate(newData);
    };

    if (!isEditing) {
        return (
            <div className="skills-preview">
                <h2>Skills</h2>
                <ul>
                    {data.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <section className="skills-form">
            <h2>Skills</h2>
            {data.map((skill, index) => (
                <div key={index} className="skill-entry">
                    <input
                        type="text"
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                    <button 
                        className="delete-btn" 
                        onClick={() => handleDelete(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={handleAdd}>Add Skill</button>
        </section>
    );
}

export default Skills; 