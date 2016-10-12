
	var vic_opendata = {
		wms: {
			url: 'https://services.land.vic.gov.au/catalogue/publicproxy/guest/dv_geoserver/wms',
			layers: [
				{name:'Parks and Reserves', layer:'CROWNLAND_PARKRES'},
				{name:'Parishes', layer:'VMADMIN_PARISH_POLYGON'},
				{name:'Townships', layer:'VMADMIN_TOWNSHIP_POLYGON'},
				{name:'Recreation Carparks', layer:'FORESTS_RECWEB_CARPARK'},
				{name:'Recreation Sites', layer:'FORESTS_RECWEB_SITE'},
				{name:'Groundwater management area', layer:'WATER_GMA'}
			]
		}
	};

	var map = new OpenLayers.Vicmap.Map('map');

	for(var i=0; i<vic_opendata.wms.layers.length; i++) {

		var layer = new OpenLayers.Layer.WMS(
			vic_opendata.wms.layers[i].name,
    	vic_opendata.wms.url,
     	{
     		layers: vic_opendata.wms.layers[i].layer,
     		transparent: true
     	}
   	);
   	layer.setVisibility(true);

   	map.addLayer(layer);

	}

	// Bendigo
	var lonlat = new OpenLayers.LonLat(2435540.8444746, 2525620.5773373);
	map.setCenter(lonlat);
	map.zoomTo(5);
	//show_coords_on_click(map);