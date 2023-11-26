import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllAppointments } from '../../Redux/reducers/appointmentsReducer/reducers.js'
import APPOINTMENT from '../APPOINTMENT/APPOINTMENT.jsx';


const DASHBOARD = () => {
  const { appointments } = useSelector((state) => state.appointments)

  const dispatch = useDispatch()  

  console.log(appointments)

  useEffect(() =>{
    dispatch(getAllAppointments());
    // dispatch(setAppointmentsList());
  }, [dispatch])
  return (
    <div className='h-56 grid grid-cols-3 gap-4 content-start'>
      {
        appointments.map((appointment) => (
          <APPOINTMENT 
            key = {appointment._id}
            id = {appointment._id}
            fullName = {appointment.fullName}
            appointmentType = {appointment.appointmentType}
            appointmentOption = {appointment.appointmentOption}
            time = {appointment.time}
            date = {appointment.date}            
          />
        ))
      }      
    </div>
  )
}

export default DASHBOARD
