import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getAppointmentById } from "../../Redux/reducers/appointmentsReducer/reducers.js";

const UPDATEFORM = ({ modal, mostrarModal }) => {
  const { id } = useParams();
  const { appointment } = useSelector((state) => state.appointments);
  const [reserva, setReserva] = useState(
    {
        appointmentType: "",
        appointmentOption: "",
        appointmentPayment: "",
        fullName: "",
        offeredBy: "",
        comments: "",
        date: "",
        time: ""
    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setReserva(dispatch(getAppointmentById(id)));
    console.log(reserva)
    console.log(id);
  }, []);

  return (
    <div>
      {modal && (
        <form>
          <div>
            <div>
              <label>Tipo</label>
              <select name="appointmentType" id="">
                <option value="">Escoge uno:</option>
                <option value="">PARTICULAR</option>
                <option value="">COMUNITARIA</option>
              </select>
            </div>
            <div>
              <label>Motivo</label>
              <select name="appointmentOption" id="">
                <option value="">Escoge uno:</option>
                <option value="">DIFUNTO</option>
                <option value="">SALUD</option>
                <option value="">ONOMASTICO</option>
              </select>
            </div>
            <div>
              <label>Pago</label>
              <select name="appointmentPayment" id="">
                <option value="">Escoge uno:</option>
                <option value="">EFECTIVO</option>
                <option value="">YAPE/PLIN</option>
                <option value="">OTROS</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Nombre completo:</label>
              <input type="text" name="fullName" value={reserva.fullName} />
            </div>
            <div>
              <label htmlFor="">Ofrecido por:</label>
              <input type="text" name="offeredBy" id="" />
            </div>
            <div>
              <label htmlFor="">Comentarios:</label>
              <textarea type="text" name="comments" id="" />
            </div>
            <div>
              <label htmlFor="">Fecha:</label>
              <input type="date" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Hora:</label>
              <input type="datetime" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Hora:</label>
              <input type="time" name="" id="" />
            </div>
            <div>
              <input type="datetime-local" name="" id="" />
            </div>
            <div>
              <button
                onClick={() => {
                  mostrarModal(!modal);
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default UPDATEFORM;
