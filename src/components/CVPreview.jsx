/* eslint-disable react/prop-types */
/**
 * CVPreview component that displays the CV in a formatted view
 * @param {Object} cvData - The current CV data to display
 */
function CVPreview({ cvData }) {
    return (
        <div className="cv-preview">
            {/* Personal Information Section */}
            <div className="personal-info">
                <h1>{cvData.personalInfo.fullName}</h1>
                <p>{cvData.personalInfo.email}</p>
                <p>{cvData.personalInfo.phone}</p>
                <p>{cvData.personalInfo.address}</p>
            </div>

            {/* Education Section */}
            <div className="education">
                <h2>Education</h2>
                {cvData.education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.school}</h3>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="experience">
                <h2>Experience</h2>
                {cvData.experience.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.company}</h3>
                        <p>{exp.position}</p>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>

            {/* Skills Section */}
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    {cvData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CVPreview;
