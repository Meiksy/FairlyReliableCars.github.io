// This is our list of cars
var cars = [
  {
    name: "Mitsubishi Lancer EVO VIII",
    img: "Images/evo8_1.jpg",
    page: "mitsubishi_evo8.html",
    keywords: ["mitsubishi", "lancer", "evo", "evo8"]
  },
  {
    name: "Subaru WRX STI",
    img: "Images/wrx_1.jpg",
    page: "subaru_wrx.html",
    keywords: ["subaru", "wrx", "sti", "impreza"]
  },
  {
    name: "Mazda RX-7",
    img: "Images/rx_1.jpg",
    page: "mazda_rx7.html",
    keywords: ["mazda", "rx7", "rx-7", "rotary"]
  }
];

// Get elements from the page
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
var resultsContainer = document.querySelector(".car-listings");

// Function to show cars on the page
function showCars(list) {
  var html = "";

  if (list.length === 0) {
    html = "<p>No cars found.</p>";
  } else {
    for (var i = 0; i < list.length; i++) {
      html +=
        '<div class="car-card">' +
        '<img src="' + list[i].img + '" alt="' + list[i].name + '">' +
        '<h3>' + list[i].name + '</h3>' +
        '<a href="' + list[i].page + '" class="btn">View Details</a>' +
        '</div>';
    }
  }

  resultsContainer.innerHTML = html;
}

// Function to search for cars
function searchCars() {
  var query = searchInput.value.toLowerCase();
  var found = [];

  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];

    if (car.name.toLowerCase().indexOf(query) !== -1) {
      found.push(car);
    } else {
      // Check each keyword
      for (var j = 0; j < car.keywords.length; j++) {
        if (car.keywords[j].indexOf(query) !== -1) {
          found.push(car);
          break; // stop checking keywords if one matched
        }
      }
    }
  }

  showCars(found);
}

// When page loads, show all cars
showCars(cars);

// When the user clicks "Search"
searchBtn.addEventListener("click", searchCars);

// Also search when user presses Enter
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchCars();
  }
});
