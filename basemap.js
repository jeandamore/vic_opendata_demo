
function basemap() {

	var map = new OpenLayers.Vicmap.Map('map');
	var mapProjection = new OpenLayers.Projection("EPSG:3111"); // vicgrid 94

	layerSwitcher = new OpenLayers.Control.LayerSwitcher();
                layerSwitcher.ascending = false;
                layerSwitcher.useLegendGraphics = true;
                map.addControl(layerSwitcher);
                
	return map;

}