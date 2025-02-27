/* eslint-disable react/prop-types */

import PersonalInfo from "./sections/PersonalInfo";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";

/**
 * CVForm component that handles the form inputs for the CV
 * @param {Object} cvData - The current CV data
 * @param {Function} onUpdateCV - Callback function to update CV data
 */
function CVForm({ cvData, onUpdateCV }) {
    // Handlers for each section that update their respective parts of the CV data
    const handlePersonalInfoUpdate = (updates) => {
        onUpdateCV({
            ...cvData,
            personalInfo: updates,
        });
    };

    const handleEducationUpdate = (updates) => {
        onUpdateCV({
            ...cvData,
            education: updates,
        });
    };

    const handleExperienceUpdate = (updates) => {
        onUpdateCV({
            ...cvData,
            experience: updates,
        });
    };

    const handleSkillsUpdate = (updates) => {
        onUpdateCV({
            ...cvData,
            skills: updates,
        });
    };

    return (
        <div className="cv-form">
            <PersonalInfo
                data={cvData.personalInfo}
                onUpdate={handlePersonalInfoUpdate}
                isEditing={true}
            />
            <Education
                data={cvData.education}
                onUpdate={handleEducationUpdate}
                isEditing={true}
            />
            <Experience
                data={cvData.experience}
                onUpdate={handleExperienceUpdate}
                isEditing={true}
            />
            <Skills
                data={cvData.skills}
                onUpdate={handleSkillsUpdate}
                isEditing={true}
            />
        </div>
    );
}

export default CVForm;
