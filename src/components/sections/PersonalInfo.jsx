/* eslint-disable react/prop-types */
import "../../styles/sections/PersonalInfo.css";

/**
 * PersonalInfo component handles the display and editing of personal information
 * @param {Object} data - Personal information data (fullName, email, phone, address)
 * @param {Function} onUpdate - Callback function to update personal information
 * @param {boolean} isEditing - Flag to toggle between edit and preview modes
 */
function PersonalInfo({ data, onUpdate, isEditing }) {
    // Display preview mode when not editing
    if (!isEditing) {
        return (
            <div className="personal-info-preview">
                <h2>Curriculum Vitae</h2>
                <h3>{data.fullName}</h3>
                <div className="divider"></div>
                <div className="contact-info">
                    {data.email && (
                        <div className="contact-item">
                            <span>{data.email}</span>
                        </div>
                    )}
                    {data.phone && (
                        <div className="contact-item">
                            <span>{data.phone}</span>
                        </div>
                    )}
                    {data.address && (
                        <div className="contact-item">
                            <span>{data.address}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    // Display edit form when in editing mode
    return (
        <section className="personal-info-form">
            <h2>Personal Information</h2>
            {/* Input fields for personal information */}
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={data.fullName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={data.address}
                onChange={handleChange}
            />
        </section>
    );
}

export default PersonalInfo;
