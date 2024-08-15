import React from "react";
import '../C-S-S/Imagenes.css';

function Gallery({ images }) {
    return (
    <div className="imagen" images={images} >
        <div className="desc"><form>
            <input type="text"
            placeholder="Add a description here"/></form></div>
    </div>);
}

export default Gallery;