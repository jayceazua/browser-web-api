const findLocation = document.getElementById('findLocation')
const appID = 'iZ9pE45kdJ2H3zEt4b1Q'
const appCode = `XlKLjYFIoG_rHJMygBYPMA`

findLocation.onclick = (e) => {
    geoFindMe()
}
function geoFindMe() {
 const output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
      output.innerHTML =  `<p>Latitude is ${latitude} <br> Longitude is ${longitude}</p>`;
  }
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating . . . </p>";
  navigator.geolocation.getCurrentPosition(success, error);
  /*
  .getCurrentPosition() method is used to get the current position of the device.
  */
}
