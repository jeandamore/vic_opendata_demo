var map = basemap();
layers_wms(map);
layers_geojson(map);

var default_region = 'arden-macaulay';
var lonlat = new OpenLayers.LonLat(regions[default_region].lon, regions[default_region].lat);
map.setCenter(lonlat);
map.zoomTo(regions[default_region].zoom);

//show_coords_on_click(map);