// Sample car data (you can replace this with your actual car data)
const cars = [
    { model: "Toyota RAV4", brand: "Toyota", monthlyPayment: 44000, year: 2021, image: "./assets/images/car-1.jpg" },
    { model: "BMW 3 Series", brand: "BMW", monthlyPayment: 33000, year: 2019, image: "./assets/images/car-2.jpg" },
    { model: "Volkswagen T-Cross", brand: "Volkswagen", monthlyPayment: 27000, year: 2020, image: "./assets/images/car-3.jpg" },
    { model: "Cadillac Escalade", brand: "Cadillac", monthlyPayment: 57000, year: 2020, image: "./assets/images/car-4.jpg" },
    { model: "BMW 4 Series GTI", brand: "BMW", monthlyPayment: 65000, year: 2021, image: "./assets/images/car-5.jpg" },
    { model: "BMW 4 Series", brand: "BMW", monthlyPayment: 30000, year: 2019, image: "./assets/images/car-6.jpg" }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const carModel = document.getElementById('input-1').value.toLowerCase();
      const maxMonthlyPayment = parseFloat(document.getElementById('input-2').value) || Infinity;
  
      const filteredCars = cars.filter(car => 
        (car.model.toLowerCase().includes(carModel) || car.brand.toLowerCase().includes(carModel)) &&
        car.monthlyPayment <= maxMonthlyPayment
      );
  
      displayResults(filteredCars);
    });
  
    function displayResults(filteredCars) {
      searchResults.innerHTML = '';
  
      if (filteredCars.length === 0) {
        searchResults.innerHTML = '<p>No cars found matching your criteria.</p>';
        return;
      }
  
      filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
          <img src="${car.image}" alt="${car.model}" class="car-image">
          <h3>${car.model} (${car.year})</h3>
          <p>Brand: ${car.brand}</p>
          <p>Monthly Payment: ₹${car.monthlyPayment}</p>
          <button class="btn rent-btn">Rent now</button>
        `;
        searchResults.appendChild(carCard);
      });
    }
  });