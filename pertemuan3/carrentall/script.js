const cars = [
  { name: "Toyota Avanza", type: "MPV", seats: 7, trans: "Manual", price: 350000, badge: "MPV", img: "avanza.png" },
  { name: "Honda Brio", type: "City Car", seats: 5, trans: "Automatic", price: 300000, badge: "City Car", img: "Brio1.jpeg" },
  { name: "Toyota Fortuner", type: "SUV", seats: 7, trans: "Automatic", price: 700000, badge: "SUV", img: "toyota_fortuner.jpg" },
  { name: "Mitsubishi Pajero", type: "SUV", seats: 7, trans: "Automatic", price: 750000, badge: "SUV", img: "pajero.jpg" },
  { name: "Daihatsu Xenia", type: "MPV", seats: 7, trans: "Manual", price: 320000, badge: "MPV", img: "daihatsu-xenia.jpg" },
  { name: "Lamborghini Urus", type: "Sport", seats: 5, trans: "Automatic", price: 3500000, badge: "Luxury", img:"lamborghini_urus.webp" },
  { name: "BYD Atto 3", type: "SUV", seats: 5, trans: "Electric", price: 450000, badge: "EV", img: "BYD.webp" },
  { name: "Toyota Vios", type: "Sedan", seats: 5, trans: "Automatic", price: 400000, badge: "Sedan", img: "vios.webp" },
];

let selectedCar = null;

function fmt(n) { return 'Rp ' + n.toLocaleString('id-ID') + '/hari'; }

function renderCars(list) {
  const g = document.getElementById('carGrid');
  g.innerHTML = list.map((c,i) => `
    <div class="car-card">
      <div class="car-img-wrap">
        <img src="${c.img}">
        <div class="car-badge">${c.badge}</div>
      </div>
      <div class="car-body">
        <div class="car-name">${c.name}</div>
        <div class="car-specs">
          <span class="spec-tag">${c.type}</span>
          <span class="spec-tag">${c.seats} Kursi</span>
          <span class="spec-tag">${c.trans}</span>
        </div>
        <div class="car-footer">
          <div class="car-price">${fmt(c.price)}</div>
          <button class="rent-btn" onclick='openModal(${i})'>Sewa</button>
        </div>
      </div>
    </div>
  `).join('');
}

renderCars(cars);