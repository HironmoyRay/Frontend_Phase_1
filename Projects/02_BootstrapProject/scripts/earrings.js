const earrings = [
  { id: "ER01", imgSrc: "./images/EarRings/er01.jpg", alt: "Earrings 01" },
  { id: "ER02", imgSrc: "./images/EarRings/er02.jpg", alt: "Earrings 02" },
  { id: "ER03", imgSrc: "./images/EarRings/er03.jpg", alt: "Earrings 03" },
  { id: "ER04", imgSrc: "./images/EarRings/er04.jpg", alt: "Earrings 04" },
  { id: "ER05", imgSrc: "./images/EarRings/er05.jpg", alt: "Earrings 05" },
  { id: "ER06", imgSrc: "./images/EarRings/er06.jpg", alt: "Earrings 06" },
];

const earringContainer = document.getElementById("earringContainer");

earrings.forEach((earring) => {
  const earringCard = `
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card mt-4 shadow-sm">
          <img src="${earring.imgSrc}" style="height: 400px" class="card-img-top" alt="${earring.alt}" />
          <div class="card-body">
            <h5 class="card-title">Earrings #${earring.id}</h5>
            <p class="card-text">
              Lightweight and often intricately carved or shaped, they offer a unique blend of elegance and rustic appeal, perfect for women seeking sustainable style.
            </p>
            <a href="#" class="btn btn-warning">Add to Cart</a>
          </div>
        </div>
      </div>
    `;
  earringContainer.innerHTML += earringCard;
});
