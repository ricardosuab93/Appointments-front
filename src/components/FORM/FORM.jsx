import React from "react";

const FORM = () => {
  return (
    <form>
      <div>
        <div>
          <label>Tipo</label>
          <select name="" id="">
            <option value="">Escoge uno:</option>
            <option value="">PARTICULAR</option>
            <option value="">COMUNITARIA</option>
          </select>
        </div>
        <div>
          <label>Motivo</label>
          <select name="" id="">
            <option value="">Escoge uno:</option>
            <option value="">DIFUNTO</option>
            <option value="">SALUD</option>
            <option value="">ONOMASTICO</option>
          </select>
        </div>
        <div>
          <label>Pago</label>
          <select name="" id="">
            <option value="">Escoge uno:</option>
            <option value="">EFECTIVO</option>
            <option value="">YAPE/PLIN</option>
            <option value="">OTROS</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Nombre completo:</label>
          <input type="text" name="" id=" " />
        </div>
        <div>
          <label htmlFor="">Ofrecido por:</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Comentarios:</label>
          <textarea type="text" name="" id="" />
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
      </div>
    </form>
  );
};

export default FORM;
