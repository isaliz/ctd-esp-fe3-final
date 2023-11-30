import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";


const Dentist = () => {
  const { dentistaState, dentistaDispatch } = useContext(ContextGlobal);
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) =>
      dentistaDispatch({ type: "SET_DETAIL", payload: res.data })
    );
  }, []);

  const dentista = dentistaState?.dentista;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Dentista id # {dentista.id} </h1>
      {}
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Sitio Web</th>
          </tr>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={goBack} className="back-button">
        Atras
      </button>

      {}
    </>
  );
};

export default Dentist;
