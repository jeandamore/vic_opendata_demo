
function layers_wms(map) {

	var vic_opendata = {
		wms: {
			url: 'https://services.land.vic.gov.au/catalogue/publicproxy/guest/dv_geoserver/wms',
			layers: [
				{name:'Parks and Reserves', layer:'CROWNLAND_PARKRES', visibility: true},
				{name:'Parishes', layer:'VMADMIN_PARISH_POLYGON', visibility: true},
				{name:'Townships', layer:'VMADMIN_TOWNSHIP_POLYGON', visibility: true},
				{name:'Recreation Carparks', layer:'FORESTS_RECWEB_CARPARK', visibility: true},
				{name:'Recreation Sites', layer:'FORESTS_RECWEB_SITE', visibility: true},
				{name:'Groundwater management area', layer:'WATER_GMA', visibility: true},
				{name:'Urban Development Programme - Industrial Land 2011', layer:'UDP_IND2011', visibility: true},
				{name:'Planning Schemes', layer:'VMPLAN_PLAN_OVERLAY', visibility: false},
				{name:'Environmental Assessment', layer:'CROWNLAND_PLMGEN', visibility: true}
			]
		}
	};

	for(var i=0; i<vic_opendata.wms.layers.length; i++) {

		var layer = new OpenLayers.Layer.WMS(
			vic_opendata.wms.layers[i].name,
    	vic_opendata.wms.url,
     	{
     		layers: vic_opendata.wms.layers[i].layer,
     		transparent: true
     	}
   	);
   	layer.setVisibility(vic_opendata.wms.layers[i].visibility);

   	map.addLayer(layer);

	}

}