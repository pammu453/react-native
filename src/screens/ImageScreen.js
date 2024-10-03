import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <>
        <ImageDetail title="Forest" image={require("../../assets/forest.jpg")} score={8} />
        <ImageDetail title="Beach" image={require("../../assets/beach.jpg")} score={7} />
        <ImageDetail title="Moutain" image={require("../../assets/mountain.jpg")} score={5} />
    </>
}

export default ImageScreen;