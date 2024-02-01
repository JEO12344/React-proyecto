import React from 'react';
import libro1 from "./components/img/libroHobbit.jpg";
import libro2 from "./components/img/libroPeter.png";
import libro3 from "./components/img/libroVueltaAlMundo.jpg";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="libro">
        <img src={libro1} alt="Libro 1" />
        <p></p>
      </div>
      <div className="libro">
        <img src={libro2} alt="Libro 2" />
        <p></p>
      </div>
    </div>
  );
};

export default ItemListContainer;