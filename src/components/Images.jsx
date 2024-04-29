import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export default function GetImages() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getImage = () => {
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}=random`,
        {
          mode: "cors",
        },
      )
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (response) {
          setImage(response.data.images.original.url);
        });
    };
    getImage();
  }, []);

  return (
    <>
      <img src={image} alt="" />
    </>
  );
}
