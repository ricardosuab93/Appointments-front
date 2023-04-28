import axios from "axios";
import { setAppointmentsList, setOneAppointment } from "./index.js";

export const getAllAppointments = () => (dispatch) => {
  axios
    .get("http://localhost:3001/api/appointments")
    .then((response) => {
      dispatch(setAppointmentsList(response.data.data));
    })
    .catch((error) => console.log(error));
};

export const getAppointmentById = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/api/appointments/${id}`)
    .then((response) => {
      dispatch(setOneAppointment(response.data.data));
    })
    .catch((error) => console.log("ERROR "+error));
};
