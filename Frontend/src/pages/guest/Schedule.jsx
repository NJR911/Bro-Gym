import { useState } from 'react';
import { Link } from 'react-router-dom'
import classesSchedule from './ScheduleClasses.json'; 


export default function Schedule() {
    const [selectedDay, setSelectedDay] = useState('Monday');

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div style={{ height: "115vh", background: "#0a0a0a" }}>
        <h1 className='schedule-h1'>Classes Schedule</h1>

            <div className="classes-schedule-container">
                
                <div className="day-selector">
                    {Object.keys(classesSchedule).map(day => (
                        <button 
                            className={`day-button ${selectedDay === day ? 'selected' : ''}`} // Apply 'selected' class if day is selected
                            key={day} 
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <div className="day-section">
                    <table className="class-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classesSchedule[selectedDay].map((classInfo, index) => {
                                const [classTitle, time, location, instructor] = classInfo.split(' - ');
                                return (
                                    <tr key={index}>
                                        <td>{classTitle}</td>
                                        <td>{time}</td>
                                        <td>{location}</td>
                                        <td>{instructor}</td>
                                        <td><Link to="/membership" className="join-button">Join Now</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}