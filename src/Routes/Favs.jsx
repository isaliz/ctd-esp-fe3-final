import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Favs = () => {
  const { dentistaState } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {}
        {}
        <div className="card-grid">
          {dentistaState.favList.length > 0 ? (
            dentistaState.favList.map((dentista) => (
              <Card
                key={dentista.id}
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              />
            ))
          ) : (
            <p>Sin favoritos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favs;
