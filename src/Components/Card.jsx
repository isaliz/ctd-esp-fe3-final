import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Card = ({ name, username, id }) => {
  const { dentistaState, dentistaDispatch } = useContext(ContextGlobal);

  const esFav = dentistaState.favList.find((fav) => fav.id === id);

  const addFav = (e) => {
    e.stopPropagation();
    if (esFav != null) {
      dentistaDispatch({ type: "DELETE_FAV", payload: id });
    } else {
      dentistaDispatch({ type: "ADD_FAV", payload: { name, username, id } });
    }
  };

  return (
    <div className="card">
      {}
      <img src={"./images/doctor.jpg"} alt="doctor-logo" className="images" />
      <Link to={"/detail/" + id}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <p>Id: {id}</p>

      {}

      {}
      <button
        onClick={addFav}
        className={esFav ? "favButton isFav" : "favButton"}
      >
        {esFav ? "Remover Destacado" : "Agregar Destacado"}
      </button>
    </div>
  );
};

export default Card;
