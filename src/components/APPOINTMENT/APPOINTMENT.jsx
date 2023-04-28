import React, {useState} from "react";
import { Link } from "react-router-dom";
import DETAIL from "../DETAIL/DETAIL";

const APPOINTMENT = (props) => {
  const [showModalDetail, setShowModalDetail] = useState(false)

  return (
    <div
      key={props.id}
      className='class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'
    >
      <Link to={`${props.id}`}>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Celebrado: {props.fullName}
        </h3>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tipo: {props.appointmentType}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Motivo: {props.appointmentOption}
        </h5>
        <span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Hora: {props.time}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Fecha: {props.date}
          </p>
        </span>
        <div className='flex justify-between'>
          <button onClick={() => {setShowModalDetail(!showModalDetail)}}  className="bg-white hover:bg-green-500 text-gray-1000 font-semibold p-2 m-1 border border-gray-400 rounded shadow">
            Detalles
          </button>
        </div>
      </Link>
    </div>
  );
};

export default APPOINTMENT;
