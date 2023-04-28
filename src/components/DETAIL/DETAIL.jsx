import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAppointmentById } from "../../Redux/reducers/appointmentsReducer/reducers.js";
import UPDATEFORM from "../FORM/UPDATEFORM.jsx";
import FORM from "../FORM/FORM.jsx";
// import { getAppointmentById } from '../../Redux/reducers/appointmentsReducer/index.js'

const DETAIL = ({ detail, showDetail }) => {
  const { id } = useParams();
  const { appointment } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAppointmentById(id));
    console.log(getAppointmentById(id));
  }, [id, dispatch]);
  return (
    <div className="flex justify-center justify-items-center">
      <div className='class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Celebrado: {appointment.fullName}
        </h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Ofrecido por: {appointment.offeredBy}
        </h3>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tipo: {appointment.appointmentType}
        </h5>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          Motivo: {appointment.appointmentOption}
        </h5>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tipo de pago: {appointment.appointmentPayment}
        </h5>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          Comentarios: {appointment.comments}
        </h5>
        <p className='className="font-normal text-gray-700 dark:text-gray-400'>
          Día: {appointment.date}
        </p>
        <p className='className="font-normal text-gray-700 dark:text-gray-400'>
          Hora: {appointment.time}
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="bg-white hover:bg-green-500 text-gray-1000 font-semibold p-2 m-1 border border-gray-400 rounded shadow"
          >
            Editar
          </button>
          <button className="bg-white hover:bg-red-500 text-gray-1000 font-semibold p-2 m-2 border border-gray-400 rounded shadow">
            Anular
          </button>
        </div>
      </div>
      <UPDATEFORM
        modal={showModal}
        mostrarModal={setShowModal}
      />
    </div>
  );
};

export default DETAIL;
