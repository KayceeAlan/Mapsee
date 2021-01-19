mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5Y2VlYWxhbiIsImEiOiJja2s0M2VsdHExZ3RnMnNtZjMzZHpsMHhnIn0.aLG0ja17lkuaiYgJJ1gBrQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
      
    map.addControl(directions, 'top-left');
}
