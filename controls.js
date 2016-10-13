
function show_coords_on_click(map) {

	OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {                
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },

                initialize: function(options) {
                    this.handlerOptions = OpenLayers.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    OpenLayers.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new OpenLayers.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 

                trigger: function(e) {
                    var lonlat = map.getLonLatFromPixel(e.xy);
                    alert("You clicked near " + lonlat.lat + " N, " +
                                              + lonlat.lon + " E");
                }

            });



	var click = new OpenLayers.Control.Click();
    map.addControl(click);
    click.activate();

}

function region_change(selector) {

    var idx = selector.selectedIndex; 
    var which = selector.options[idx].value; 
    //alert("test: " + which);

    var lonlat = new OpenLayers.LonLat(2435310.8444746, 2525200.5773373);
    map.setCenter(lonlat);
}


