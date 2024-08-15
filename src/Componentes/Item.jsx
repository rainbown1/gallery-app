import React from "react";
import ImageItem from './Imagenes';

function ImageGallery( {imagen} ) {
    return (
        <>
        {imagen.map((image, index) => (
            <ImageItem key={index} id={image.id} />
        ))}
        </>
    );
}

export default ImageGallery;