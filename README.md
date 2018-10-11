# Browser Web API Project

<img src="https://github.com/jayceazua/browser-web-api/blob/master/geolocation.jpg"/>

### Features
[`Geolocation.getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- Determines the device's current location and gives back a [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object with the data.

[`Geolocation.watchPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
- Returns a long value representing the newly established callback function to be invoked whenever the device location changes.

[`Geolocation.clearWatch()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch)
- Removes the particular handler previously installed using `watchPosition()`.

### Practical Usage
1. Show the user's position on a map
2. Up-to-date local information
3. Location-tagged status updates in social networking applications
