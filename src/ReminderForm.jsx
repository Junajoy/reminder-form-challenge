import './ReminderForm.css';

export default function ReminderForm() {

    return (
        <div className="reminder-form">
            <h2>Set a Reminder</h2>
            <form>
                <div className="form-group">
                    <label>Reminder Details</label>
                    <input type="text" required />
                </div>

                <div className="form-group">
                    <label>Reminder Date</label>
                    <input type="date" required />
                </div>

                <div className="form-group checkbox-group">
                    <label>Notify me via:</label>
                    <label><input type="checkbox" /> Email</label>
                    <label><input type="checkbox" /> WhatsApp</label>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email"  required />
                </div>

                <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input type="tel" required />
                </div>

                <button type="submit">Save Reminder</button>
            </form>
        </div>
    );
}
