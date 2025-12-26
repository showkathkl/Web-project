const services = [
  { name:"Home Cleaning", price:1299, img:"cleaning.jpg", desc:"Complete home cleaning" },
  { name:"Home Salon", price:999, img:"salon.jpg", desc:"Salon services at home" },
  { name:"AC Service", price:1499, img:"ac.jpg", desc:"AC servicing and repair" },
  { name:"Electrician", price:399, img:"electrician.jpg", desc:"Electrical repairs and fittings" },
  { name:"Plumber", price:499, img:"plumber.jpg", desc:"Pipe and leakage fixing" },
  { name:"Pest Control", price:2499, img:"pest.jpg", desc:"Complete pest treatment" }
];

let selected = null;
let bookings = [];

const grid = document.getElementById("serviceGrid");

services.forEach((s,i)=>{
  grid.innerHTML += `
    <div class="service-card clickable" onclick="openModal(${i})">
      <img src="${s.img}">
      <div class="card-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <div class="card-footer">
          <span>₹${s.price}</span>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  `;
});

function openModal(i){
  selected = services[i];
  mImg.src = selected.img;
  mName.innerText = selected.name;
  mDesc.innerText = selected.desc;
  mPrice.innerText = selected.price;
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}

function confirmBooking(){
  bookings.push(selected);
  updateBookings();
  closeModal();
  showSection("bookings", document.querySelectorAll(".sidebar a")[2]);
}

function updateBookings(){
  const list = document.getElementById("bookingList");
  list.innerHTML = "";
  bookings.forEach(b=>{
    list.innerHTML += `
      <div class="booking-card">
        <h3>${b.name}</h3>
        <p>Price: ₹${b.price}</p>
        <span>Status: Confirmed</span>
      </div>
    `;
  });
}

function showSection(id, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".sidebar nav a").forEach(a=>a.classList.remove("active"));
  el.classList.add("active");
}
