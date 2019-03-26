"use strict";

window.onload = function () {

    var markers = [], vectorLayer = [], jsonData = [], zoom, center, map, icon, bounds, index = 0, vectorIndex = 0;

    bounds = new OpenLayers.Bounds();

    function addMarker(status, lng, lat, info, id) {
        console.log(status);
        if ( status === 'production' ) {
            icon = new OpenLayers.Icon("./img/marker2.png", new OpenLayers.Size(32, 50));
        } else {
            icon = new OpenLayers.Icon("./img/marker.png", new OpenLayers.Size(50, 50));
        }
        var lonLatMarker = new OpenLayers.LonLat(lng, lat).transform(new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject());

        bounds.extend(lonLatMarker);

        markers[id] = new OpenLayers.Layer.Markers( "Markers" );

        var popup = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {
            "autoSize": true,
            "minSize": new OpenLayers.Size(300, 50),
            "maxSize": new OpenLayers.Size(500, 300),
            "keepInMap": true
        });

        var feature = new OpenLayers.Feature(markers[id], lonLatMarker);
            feature.closeBox = true;
            feature.popupClass = popup;
            feature.data.popupContentHTML = info;
            feature.data.overflow = "hidden";

        var marker = new OpenLayers.Marker(lonLatMarker, icon);
        marker.feature = feature;

        markers[id].addMarker(marker);

        var markerClick = function(e) {
            console.log(this);

            this.popup = this.createPopup(this.closeBox);
            console.log(this.popup);
            map.addPopup(this.popup);
            this.popup.show();
            OpenLayers.Event.stop(e);

        };

        map.addLayer(markers[id]);

        marker.events.register("click", feature, markerClick);
    }

    function addVector(status, lng, lat, id, timeLeftToEnd, delayed) {
        console.log(status);
        vectorLayer[id] = new OpenLayers.Layer.Vector("Simple Geometry", {
            styleMap: new OpenLayers.StyleMap({'default':{
                    fillColor: status === 'Готовится' ? '#ffff00' : delayed === true ? '#00E71B' : '#fff',
                    strokeWidth: 0,
                    fillStroke: 0,
                    pointRadius: 26,
                    label : timeLeftToEnd,
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontColor :  timeLeftToEnd < 0 ? "#be0000" : "#222",
                    zIndex: 1
                }}),
        });

        var point = new OpenLayers.Geometry.Point(lng, lat).transform(new OpenLayers.Projection("EPSG:4326"), map
            .getProjectionObject());
        var pointFeature = new OpenLayers.Feature.Vector(point);

        map.addLayer(vectorLayer[id]);
        vectorLayer[id].addFeatures([pointFeature]);

    }

    function initMap() {

        var options = {
            projection: new OpenLayers.Projection("EPSG:900913"),
            displayProjection: new OpenLayers.Projection("EPSG:4326"),
            units: "m",
            numZoomLevels: 19,
            maxResolution: 156543.0339,
            maxExtent: new OpenLayers.Bounds(-0.13011, -0.13011, 51.51039, 51.51039)
        };

        map = new OpenLayers.Map("map", options);
        map.addLayer(new OpenLayers.Layer.OSM());

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE === 4
                if (xmlhttp.status === 200) {
                    jsonData = JSON.parse(this.response);
                    console.log(jsonData);
                    // first add vector graphic this will fix z index problem;
                    jsonData.forEach(function (item) {
                        addVector(item.status, item.location.lng,item.location.lat, vectorIndex, item.delivery_time_to_end, item.delayed);
                        vectorIndex++;
                    });

                    jsonData.forEach(function (item) {
                        addMarker(item.status, item.location.lng,item.location.lat, item.info, index, item.delivery_time_to_end, item.delayed);
                        index++;
                    });

                    addMarker('production', 24.04327, 49.80172, 'Виробництво')
                }
                else if (xmlhttp.status === 400) {
                    console.log('There was an error 400');
                }
                else {
                    console.log('something else other than 200 was returned');
                }
            }
        };

        xmlhttp.open("GET", "map-locations.json", true);
        xmlhttp.send();

        var position  = new OpenLayers.LonLat(24.04327,49.80172).transform( new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
        center = bounds.getCenterLonLat();
        zoom = 12;
        map.setCenter(position, zoom);
    }

    function markerFilter(filterAttr) {
        if ( markers ) {
            for( var m = 0; m < markers.length; m++) {
                console.log(markers[m]);
                markers[m].clearMarkers();
                vectorLayer[m].styleMap.styles.default.defaultStyle.pointRadius = 0;
                vectorLayer[m].styleMap.styles.default.defaultStyle.label = '';
                vectorLayer[m].redraw();
            }
            index = 0;
            vectorIndex = 0;
            markers = [];
        }
        switch (filterAttr) {
            case "All":
                jsonData.forEach(function (item) {
                    addVector(filterAttr, item.location.lng,item.location.lat , vectorIndex, item.delivery_time_to_end, item.delayed);
                    vectorIndex++;
                });
                jsonData.forEach(function (item) {
                    addMarker(filterAttr, item.location.lng,item.location.lat , item.info, index, item.delivery_time_to_end, item.delayed);
                    index++;
                });

                break;
            case "ReadyAndInProgress":
                jsonData.forEach(function (item) {
                    if (item.status === 'Готово' || item.status === 'Готовится') {
                        addVector(filterAttr, item.location.lng,item.location.lat , vectorIndex, item.delivery_time_to_end, item.delayed);
                        vectorIndex++;
                    }
                });
                jsonData.forEach(function (item) {
                    if (item.status === 'Готово' || item.status === 'Готовится') {
                        addMarker(filterAttr, item.location.lng, item.location.lat, item.info, index, item.delivery_time_to_end, item.delayed);
                        index++;
                    }
                });
                break;
            case "delayed":
                jsonData.forEach(function (item) {
                    if (item.delayed === true && item.status === 'Готовится') {
                        addVector(filterAttr, item.location.lng,item.location.lat , vectorIndex, item.delivery_time_to_end, item.delayed);
                        vectorIndex++;
                    }
                });
                jsonData.forEach(function (item) {
                    if (item.delayed === true && item.status === 'Готовится') {
                        addMarker(filterAttr, item.location.lng, item.location.lat, item.info, index, item.delivery_time_to_end, item.delayed);
                        index++;
                    }
                });
                break;
            default:
                jsonData.forEach(function (item) {
                    if ( item.status === filterAttr) {
                        addVector(filterAttr, item.location.lng,item.location.lat , vectorIndex, item.delivery_time_to_end, item.delayed);
                        vectorIndex++;
                    }
                });
                jsonData.forEach(function (item) {
                    if ( item.status === filterAttr) {
                        addMarker(filterAttr, item.location.lng, item.location.lat, item.info, index, item.delivery_time_to_end, item.delayed);
                        index++;
                    }
                });
        }
    }

    initMap();

    var $filterBtn = document.querySelectorAll('.btnFilter');
    for ( var i = 0; i < $filterBtn.length; i++  ) {
        $filterBtn[i].addEventListener('click', function () {
            for (var y = 0; y < $filterBtn.length; y++) {
                $filterBtn[y].classList.remove('activeFilter');
            }
            this.classList.add('activeFilter');
            markerFilter(this.getAttribute('data-filter'));
        })
    }

};
