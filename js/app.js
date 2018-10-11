const findLocation = document.getElementById('findLocation');
// we are getting the id of where we want display the info to the user.
const output = document.getElementById("out");
const track = document.getElementById("track");
const trackButton = document.getElementById("trackButton");

/* With the id we got for the button we invoke
this function when the button is clicked. */
findLocation.onclick = (e) => {
    // invoke the geoFindMe function
    geoFindMe()
}

let watch = true;
trackButton.onclick = (e) => {
    checkMovement()
}

/*
    .getCurrentPosition() method feature
*/
function geoFindMe() {
  if (!navigator.geolocation){
    //if the browser of the client does not support this browser API we let them out.
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  // the success function for getting current location of the device.
  let success = (position) => {
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
      output.innerHTML =  `
      <h4>You are currently located at: </h4>
      <p>Latitude: ${latitude}
      </br>
      Longitude: ${longitude}</p>`;
  }
  // if it fails we let the user know
  let error = () => {
    output.innerHTML = "Unable to retrieve your location";
  }
  // this allows a cool small UI/ UX to let the user know we are locating them.
  output.innerHTML = "<p>Locating . . . </p>";
  navigator.geolocation.getCurrentPosition(success, error);
}

function checkMovement() {
    let success = (position) => {
        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;
        track.innerHTML = `Tracking you...`;
        track.innerHTML =  `
        <p>Latitude: ${latitude}
        </br>
        Longitude: ${longitude}</p>`;
    }
    if (watch) {
        var watchId = navigator.geolocation.watchPosition(success);
        console.log(watchId)
        // navigator.geolocation.watchPosition(success);
        watch = false;
    }
    else {
        navigator.geolocation.clearWatch(watchId)
        track.innerHTML = `We have stopped tracking you...`
        watch = true
    }

}
