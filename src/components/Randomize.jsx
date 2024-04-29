import GetImages from "./Images";

export default function Randomize() {
  const allImages = [
    <GetImages search={"Michael Scott"} key={"michael"}></GetImages>,
    <GetImages search={"Toby Flenderson"} key={"toby"}></GetImages>,
    <GetImages search={"Dwight Schrute"} key={"dwight"}></GetImages>,
    <GetImages search={"Phyllis Vance"} key={"phyllis"}></GetImages>,
    <GetImages search={"Ryan Howard"} key={"ryan"}></GetImages>,
    <GetImages search={"Creed Bratton"} key={"creed"}></GetImages>,
    <GetImages search={"Stanley Hudson"} key={"stanley"}></GetImages>,
    <GetImages search={"Angela Martin"} key={"angela"}></GetImages>,
    <GetImages search={"Oscar Martinez"} key={"oscar"}></GetImages>,
  ];

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
