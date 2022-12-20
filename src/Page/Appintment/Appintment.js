import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppintmentBanner.js.js';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment.js';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;