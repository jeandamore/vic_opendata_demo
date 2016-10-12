
function layers_geojson(map) {

	var geojsonProjection = new OpenLayers.Projection("EPSG:4326"); // transform from WGS 1984

	var vic_opendata = {
		geojson: {
			url: 'https://jeandamore.github.io/vic_opendata_demo/geojson',
			layers: [
				{name:'(DHHS) Sports & Recreational Facilities', layer:'SportandRec.geojson'}
			]
		}
	};

	for(var i=0; i<vic_opendata.geojson.layers.length; i++) {

		var layer = new OpenLayers.Layer.Vector(
				vic_opendata.geojson.layers[i].name, 
				{
			  	projection: geojsonProjection,
			  	strategies: [new OpenLayers.Strategy.Fixed()],
			  	protocol: new OpenLayers.Protocol.HTTP({
			  	  url: vic_opendata.geojson.url+'/'+vic_opendata.geojson.layers[i].layer,
			  	  format: new OpenLayers.Format.GeoJSON()
			  	})
				});
 	  map.addLayer(layer);
	}

}