// import './ReminderForm.css';

// export default function ReminderForm() {
    
//     return (
//         <div className="reminder-form">
//             <h2>Set a Reminder</h2>
//             <form>
//                 <div className="form-group">
//                     <label>Reminder Details</label>
//                     <input type="text" required />
//                 </div>

//                 <div className="form-group">
//                     <label>Reminder Date</label>
//                     <input type="date" required />
//                 </div>

//                 <div className="form-group checkbox-group">
//                     <label>Notify me via:</label>
//                     <label><input type="checkbox" /> Email</label>
//                     <label><input type="checkbox" /> WhatsApp</label>
//                 </div>

//                 <div className="form-group">
//                     <label>Email Address</label>
//                     <input type="email"  required />
//                 </div>

//                 <div className="form-group">
//                     <label>WhatsApp Number</label>
//                     <input type="tel" required />
//                 </div>

//                 <button type="submit">Save Reminder</button>
//             </form>
//         </div>
//     );
// }

import { useState } from 'react';
import './ReminderForm.css';

export default function ReminderForm() {
    const [formData, setFormData] = useState({
        details: '',
        date: '',
        notifyEmail: false,
        notifyWhatsApp: false,
        email: '',
        whatsapp: ''
    });

    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.notifyEmail && !formData.notifyWhatsApp) {
            setShowModal(true);
            return; 
        }

        setShowModal(false); // Hide modal if submission is valid
        console.log(formData); 
        
    };
    const closeModal = () => {
        setShowModal(false); // Close the modal when the user clicks "Close"
    };

    return (
        <div className="reminder-form">
            <h2>Set a Reminder</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Reminder Details</label>
                    <input
                        type="text"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Reminder Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>Notify me via:</label>
                    <label>
                        <input
                            type="checkbox"
                            name="notifyEmail"
                            checked={formData.notifyEmail}
                            onChange={handleChange}
                        /> Email
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="notifyWhatsApp"
                            checked={formData.notifyWhatsApp}
                            onChange={handleChange}
                        /> WhatsApp
                    </label>
                </div>

                {formData.notifyEmail && (
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Enter a valid email id"
                            
                        />
                    </div>
                )}

{formData.notifyWhatsApp && (
    <div className="form-group">
        <label>WhatsApp Number</label>
        <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            pattern="^\+?[1-9]\d{1,14}$" 
            title="Enter a valid phone number" 
        />
    </div>
)}

 {/* Modal for Validation Error */}
 {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* <h3>⚠️ Error</h3> */}
                        <p>Please select at least one notification method (Email or WhatsApp).</p>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}


                <button type="submit">Save Reminder</button>
            </form>
        </div>
    );
}
