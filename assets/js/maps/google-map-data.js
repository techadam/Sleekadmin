 $(function() {
    //============================Google maps=============================
    if($("#google_ptm_map").length > 0){
        var gPTMCords = new google.maps.LatLng(50.43, 30.60);
        var gPTMOptions = {zoom: 8,center: gPTMCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
        var gPTM = new google.maps.Map(document.getElementById("google_ptm_map"), gPTMOptions);
        
        var cords = new google.maps.LatLng(50.37, 30.65);
        var marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 1"});  
        cords = new google.maps.LatLng(50.5, 30.55);
        marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 2"});
        cords = new google.maps.LatLng(50.8, 30.55);
        marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 3"});    
    }


    if($("#google_world_map").length > 0){
        
        var gWorldCords = new google.maps.LatLng(50, 0); 
        var gWorldOptions = {zoom: 1,center: gWorldCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
        var gWorld = new google.maps.Map(document.getElementById("google_world_map"), gWorldOptions);
        
        var gEUCords = new google.maps.LatLng(50, 10); 
        var gEUOptions = {zoom: 3,center: gEUCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
        var gEU = new google.maps.Map(document.getElementById("google_eu_map"), gEUOptions);
        
        function google_map_search() {
                
            var gSearch = new google.maps.Map(document.getElementById('google_search_map'), {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            
            var defaultBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(-33.8902, 151.1759),
                new google.maps.LatLng(-33.8474, 151.2631));
                
            gSearch.fitBounds(defaultBounds);

            var input = /** @type {HTMLInputElement} */(document.getElementById('target'));

            var searchBox = new google.maps.places.SearchBox(input);
            var markers = [];

            google.maps.event.addListener(searchBox, 'places_changed', function() {
                var places = searchBox.getPlaces();

                for (var i = 0, marker; marker = markers[i]; i++) {
                marker.setMap(null);
                }

                markers = [];
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                var image = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                var marker = new google.maps.Marker({
                    map: gSearch,
                    icon: image,
                    title: place.name,
                    position: place.geometry.location
                });

                markers.push(marker);

                bounds.extend(place.geometry.location);
                }

                gSearch.fitBounds(bounds);
            });

            google.maps.event.addListener(gSearch, 'bounds_changed', function() {
                var bounds = gSearch.getBounds();
                searchBox.setBounds(bounds);
            });
        }

        google.maps.event.addDomListener(window, 'load', google_map_search);    
            
    }

    //============================Google maps=============================
});