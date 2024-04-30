import GetImages from "./Images";

export default function Randomize({ click, gameOver }) {
  // const allImages = [
  //   <GetImages
  //     search={"Michael Scott"}
  //     key={"michael"}
  //     click={click}
  //     gameOver={gameOver}
  //   ></GetImages>,
  //   <GetImages
  //     search={"Toby Flenderson"}
  //     key={"toby"}
  //     click={click}
  //     gameOver={gameOver}
  //   ></GetImages>,
  //   <GetImages
  //     search={"Dwight Schrute"}
  //     key={"dwight"}
  //     click={click}
  //     gameOver={gameOver}
  //   ></GetImages>,
  // <GetImages search={"Phyllis Vance"} key={"phyllis"} click={click}></GetImages>,
  // <GetImages search={"Ryan Howard"} key={"ryan"} click={click}></GetImages>,
  // <GetImages search={"Creed Bratton"} key={"creed"} click={click}></GetImages>,
  // <GetImages search={"Stanley Hudson"} key={"stanley"} click={click}></GetImages>,
  // <GetImages search={"Angela Martin"} key={"angela"} click={click}></GetImages>,
  // <GetImages search={"Oscar Martinez"} key={"oscar"} click={click}></GetImages>,
  // ];

  function shuffle(allImages) {
    let currentIndex = allImages.length;

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [allImages[currentIndex], allImages[randomIndex]] = [
        allImages[randomIndex],
        allImages[currentIndex],
      ];
    }
  }

  shuffle(allImages);

  return <>{allImages.map((image) => image)}</>;
}
