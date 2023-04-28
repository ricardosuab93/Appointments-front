import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    appointment: []
  },
  reducers: {
    setAppointmentsList: (state, action) => {
      state.appointments = action.payload;
    },
    setOneAppointment: (state, action) => {
      state.appointment = action.payload;
    }
  },
});

export const { setAppointmentsList, setOneAppointment } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;

// export const getAllAppointments = () => (dispatch) => {
//   axios
//     .get("http://localhost:3001/api/appointments")
//     .then((response) => {
//         dispatch(setAppointmentsList(response.data.data));
//     })
//     .catch((error) => console.log(error));
// };

// export const getAppointmentById = (id) => (dispatch) => {
//   axios
//     .get(`http://localhost:3001/api/appointments/${id}`)
//     .then((response) => {
//       console.log(id)
//       dispatch(setOneAppointment(response.data.data));
//     })
//     .catch((error) => console.log(error));
// };

