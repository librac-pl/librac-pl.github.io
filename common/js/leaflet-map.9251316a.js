
$( ".smoke_button_off" ).click(function() {
  $( ".smoke_map" ).css( "display", "none" );
});
$( ".smoke_button_on" ).click(function() {
  $( ".smoke_map" ).css( "display", "inline" );
});




  function onMapClick() {}
var mymap = L.map("mapid").setView([50.3166867, 18.695459], 7);
console.log("manually set the leaflet images path."), L.Icon.Default.imagePath = "../common/js/images", L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: "mapbox.streets"
}).addTo(mymap), L.marker([50.303831, 18.728824]).addTo(mymap).bindPopup("<b>LiBrAC Sp.z o.o.</b><br />Knurowska 8 St. <br> 41-800 Zabrze").openPopup();
var popup = L.popup();
$(".move-map-button-dis").hide(), $(".move-map-button-en").click(function() {
    mymap.dragging.enable(), mymap.touchZoom.enable(), mymap.doubleClickZoom.enable(), mymap.scrollWheelZoom.enable(), mymap.boxZoom.enable(), mymap.keyboard.enable(), $(".move-map-button-en").hide(), $(".move-map-button-dis").show(), $(".map-smoke").css("display", "none")
}), $(".move-map-button-dis").click(function() {
    mymap.dragging.disable(), mymap.touchZoom.disable(), mymap.doubleClickZoom.disable(), mymap.scrollWheelZoom.disable(), mymap.boxZoom.disable(), mymap.keyboard.disable(), $(".move-map-button-en").show(), $(".move-map-button-dis").hide(), $(".map-smoke").css("display", "inherit")
})

