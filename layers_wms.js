
function layers_wms(map) {

	var vic_opendata = {
		wms: {
			url: 'https://services.land.vic.gov.au/catalogue/publicproxy/guest/dv_geoserver/wms',
			layers: [
				{name:'Parks and Reserves', layer:'CROWNLAND_PARKRES', visibility: false},
				{name:'Parishes', layer:'VMADMIN_PARISH_POLYGON', visibility: false},
				{name:'Townships', layer:'VMADMIN_TOWNSHIP_POLYGON', visibility: false},
				{name:'Recreation Carparks', layer:'FORESTS_RECWEB_CARPARK', visibility: false},
				{name:'Recreation Sites', layer:'FORESTS_RECWEB_SITE', visibility: false},
				{name:'Groundwater management area', layer:'WATER_GMA', visibility: false},
				{name:'Urban Development Programme - Industrial Land 2011', layer:'UDP_IND2011', visibility: false},
				{name:'Planning Schemes', layer:'VMPLAN_PLAN_OVERLAY', visibility: false},
				{name:'Environmental Assessment', layer:'CROWNLAND_PLMGEN', visibility: false},
				{name:'Land Use', layer:'CATCHMENTS_LANDUSE_2014', visibility: false},
				{name:'Residential dwellings for Metropolitan Melbourne', layer:'UDP_HDD_STOCK2014', visibility: false},
				{name:'Sea Level Rise 2040', layer:'COASTS_SLR20CM_2040', visibility: false}
				
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