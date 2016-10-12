
function basemap() {

	var map = new OpenLayers.Vicmap.Map('map');
	var mapProjection = new OpenLayers.Projection("EPSG:3111"); // vicgrid 94
	var lonlat = new OpenLayers.LonLat(2435540.8444746, 2525620.5773373);
	map.setCenter(lonlat);
	map.zoomTo(6);
	return map;

}