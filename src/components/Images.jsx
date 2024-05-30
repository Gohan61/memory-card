import { useEffect, useState } from "react";

const giphyAPI = import.meta.env.VITE_REACT_APP_API_KEY;

export default function GetImages(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getImage = () => {
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${props.search}&weirdness=4`,
        {
          mode: "cors",
        },
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          setImage(response.data.images.original.url);
        });
    };
    getImage();
  }, []);

  return (
    <>
      <img
        src={image}
        alt=""
        id={props.search}
        onClick={() => props.click(props.search)}
      />
    </>
  );
}
