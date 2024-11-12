const neckpieces = [
  {
    id: "WNP01",
    imgSrc: "./images/NeckPieces/NPwood01.jpg",
    alt: "Wooden Neckpiece 01",
  },
  {
    id: "WNP02",
    imgSrc: "./images/NeckPieces/NPwood02.jpg",
    alt: "Wooden Neckpiece 02",
  },
  {
    id: "WNP03",
    imgSrc: "./images/NeckPieces/NPwood03.jpg",
    alt: "Wooden Neckpiece 03",
  },
  {
    id: "WNP04",
    imgSrc: "./images/NeckPieces/NPwood04.jpg",
    alt: "Wooden Neckpiece 04",
  },
  {
    id: "WNP05",
    imgSrc: "./images/NeckPieces/NPwood05.jpg",
    alt: "Wooden Neckpiece 05",
  },
  {
    id: "WNP06",
    imgSrc: "./images/NeckPieces/NPwood06.jpg",
    alt: "Wooden Neckpiece 06",
  },
];

const neckpieceContainer = document.getElementById("neckpieceContainer");

neckpieces.forEach((neckpiece) => {
  const neckpieceCard = `
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card mt-4 shadow-sm">
        <img src="${neckpiece.imgSrc}" style="height: 400px" class="card-img-top" alt="${neckpiece.alt}" />
        <div class="card-body">
          <h5 class="card-title">Neckpiece #${neckpiece.id}</h5>
          <p class="card-text">
            Crafted from polished wood, it exudes warmth and sophistication, making it the perfect statement piece for both casual and formal outfits.
          </p>
          <a href="#" class="btn btn-warning">Add to Cart</a>
        </div>
      </div>
    </div>
  `;
  neckpieceContainer.innerHTML += neckpieceCard;
});
