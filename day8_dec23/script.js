//async function fetchData() {
//  try {
//    const res = await fetch("https://www.goatdigital.co.in/chargers");
//    if (!res.ok) throw new Error("Status " + res.status);
//    const data = await res.json(); 
//    console.log(data);
//  } catch (err) {
//    console.error(err);
//  }
//}
//fetchData();




let cityName;

document.getElementById('submitBtn').addEventListener("click",()=>{
    cityName = document.getElementById("cityInput").value.trim();
    (async ()=>{
    const [lat,lon] = await cord(cityName);
    let langi = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    let langit = await langi.json();
    let temp = langit.current_weather.temperature
    document.getElementById("temp").innerText = temp + " °C" ;
    })();
    console.log(cityName);
})

let temp;
async function cord(cityName) {
    let cords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=76514837b620ec1e61544386f0be82d6`)
    let latlon = await cords.json();
    //.then(response => {
    //    return response.json();
    //})
    //.then(data=>{
   return [latlon[0].lat,latlon[0].lon]
    //})
}

//async function final (){
//    const [lat,lon] = await cord(cityName);
//    console.log(lat,lon)
//}




