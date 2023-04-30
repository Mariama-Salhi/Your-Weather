const apiKey = "d8160b24a65d1ffab320eeffb5652cde";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})












// JavaScript
const card2 = document.querySelector('.card2');
document.querySelector('button').addEventListener('click', function() {
  card2.classList.add('rotate');
  setTimeout(() => {
    card2.classList.remove('rotate');
  }, 1000);
});

// jQuery
$('.search button').click(function() {
  $('.card2').addClass('rotate');
  setTimeout(() => {
    $('.card2').removeClass('rotate');
  }, 1000);
});
