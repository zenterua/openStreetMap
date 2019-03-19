"use strict";

window.onload = function () {
    var jsonData = [
        {
            "delayed":true,
            "status":"Готовится",
            "delivery_time_to_end":1,
            "number":"57092",
            "location":{
                "lat":49.790193,
                "lng":24.0690494
            },
            "info":"Оксана<br> Львів, Кавалерідзе І. вул., дім 23<br> підїзд.2<br> кв.15"
        },
        {
            "delayed":false,
            "status":"Готово",
            "delivery_time_to_end":36,
            "number":"83377",
            "location":{
                "lat":49.830591,
                "lng":24.0407359
            },
            "info":"Марта<br> Львів, Карпатська вул., дім 15<br> підїзд.1"
        },
        {
            "delayed":false,
            "status":"Готовится",
            "delivery_time_to_end":20,
            "number":"25438",
            "location":{
                "lat":49.8162092,
                "lng":24.0020583
            },
            "info":"Роман<br> Львів, Княгині Ольги вул., дім 100 Л<br> підїзд.1<br> пов.9<br> кв.64"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":20,
            "number":"7086",
            "location":{
                "lat":49.815202,
                "lng":24.073985
            },
            "info":"Юрій Колісніченко<br> Львів, Вашингтона Джорджа. вул., дім 15<br> підїзд.2<br> пов.6<br> кв.59"
        },
        {
            "delayed":false,
            "status":"Готово",
            "delivery_time_to_end":11,
            "number":"7540",
            "location":{
                "lat":49.8068109,
                "lng":24.0016018
            },
            "info":"Андрій<br> Львів, Наукова вул., дім 28<br> підїзд.1<br> пов.5<br> кв.118"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":-36,
            "number":"37118",
            "location":{
                "lat":49.8060982,
                "lng":24.0075501
            },
            "info":"Юрий<br> Львів, Рубчака І. вул., дім 21 А<br> підїзд.4<br> пов.8<br> кв.103"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":17,
            "number":"92630",
            "location":{
                "lat":49.8389703,
                "lng":24.0084821
            },
            "info":"Богдан<br> Львів, Городоцька вул., дім 72<br> кв.9"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":-5,
            "number":"27918",
            "location":{
                "lat":49.8124262,
                "lng":23.9941618
            },
            "info":"Оля<br> Львів, Володимира Великого вул., дім 44<br> підїзд.1<br> пов.3<br> кв.12"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":4,
            "number":"83651",
            "location":{
                "lat":49.8151651,
                "lng":24.0020505
            },
            "info":"Іван<br> Львів, Княгині Ольги вул., дім 37 А<br> пов.4<br> кв.11"
        },
        {
            "delayed":false,
            "status":"Готовится",
            "delivery_time_to_end":27,
            "number":"59571",
            "location":{
                "lat":49.8289284,
                "lng":24.0061019
            },
            "info":"Назар<br> Львів, Чупринки Т.,ген. вул., дім 136<br> підїзд.2<br> пов.1<br> кв.17"
        },
        {
            "delayed":false,
            "status":"Готовится",
            "delivery_time_to_end":23,
            "number":"86421",
            "location":{
                "lat":49.8140506,
                "lng":23.9889686
            },
            "info":"Ірина<br> Львів, Перфецького Л. вул., дім 11 А<br> кв.90"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":9,
            "number":"7151",
            "location":{
                "lat":49.8097962,
                "lng":24.002381
            },
            "info":"Христина<br> Львів, Володимира Великого вул., дім 51<br> підїзд.3<br> пов.7<br> кв.86"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":-39,
            "number":"75324",
            "location":{
                "lat":49.8140506,
                "lng":23.9889686
            },
            "info":"Олександр<br> Львів, Перфецького Л. вул., дім 2 А<br> підїзд.1<br> пов.7<br> кв.27"
        },
        {
            "delayed":false,
            "status":"Готовится",
            "delivery_time_to_end":24,
            "number":"34980",
            "location":{
                "lat":49.8113333,
                "lng":23.9852388
            },
            "info":"Ярослав<br> Львів, Володимира Великого вул., дім 125"
        },
        {
            "delayed":true,
            "status":"В пути",
            "delivery_time_to_end":6,
            "number":"78313",
            "location":{
                "lat":49.7863685,
                "lng":24.0673159
            },
            "info":"Антон<br> Львів, Трильовського К. вул., дім 5<br> підїзд.1<br> пов.5<br> кв.19"
        },
        {
            "delayed":false,
            "status":"Готово",
            "delivery_time_to_end":34,
            "number":"84624",
            "location":{
                "lat":49.831602,
                "lng":24.0363301
            },
            "info":"Діана<br> Львів, Петрушевича Є. пл., дім 1"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":37,
            "number":"10217",
            "location":{
                "lat":49.7915543,
                "lng":24.0713749
            },
            "info":"Ярослава<br> Львів, Полуботка, дім 23<br> пов.3<br> кв.83"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":-50,
            "number":"76816",
            "location":{
                "lat":49.8095037,
                "lng":24.0791114
            },
            "info":"Тарас<br> Львів, Пасічна вул., дім 169 Г<br> підїзд.2<br> пов.7<br> кв.62"
        },
        {
            "delayed":false,
            "status":"В пути",
            "delivery_time_to_end":-36,
            "number":"47911",
            "location":{
                "lat":49.7994877,
                "lng":23.9914364
            },
            "info":"Андрій<br> Львів, Пулюя І. вул., дім 40<br> пов.9<br> кв.68"
        },
        {
            "delayed":false,
            "status":"Ждет отправки",
            "delivery_time_to_end":-36,
            "number":"47911",
            "location":{
                "lat":49.7994877,
                "lng":23.9914364
            },
            "info":"Андрій<br> Львів, Пулюя І. вул., дім 40<br> пов.9<br> кв.68"
        }

    ];

    var zoom, center, currentPopup, map, lyrMarkers, icon, popupClass, bounds, markers = [], index = 0;

    bounds = new OpenLayers.Bounds();

    function addMarker(lng, lat, info, id) {

        var lonLatMarker = new OpenLayers.LonLat(lng, lat).transform(new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject());

        bounds.extend(lonLatMarker);

        icon = new OpenLayers.Icon("./img/marker.png", new OpenLayers.Size(60, 69));
        markers[id] = new OpenLayers.Layer.Markers( "Markers" );
        map.addLayer(markers[id]);

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

        // console.log(feature);

        feature.popup = feature.createPopup(feature.closeBox);
        // console.log(feature);
        // map.addPopup(feature.popup);
        // feature.popup.show();

        var marker = new OpenLayers.Marker(lonLatMarker, icon);
        marker.feature = feature;

        // console.log(popup);
        // map.addPopup(popup);

        markers[id].addMarker(marker);

        var markerClick = function(e) {

            // if (currentPopup != null && currentPopup.visible()) {
            //
            //     currentPopup.hide();
            //
            // }
            //
            // if (this.popup == null) {
            //
            //     this.popup = this.createPopup(this.closeBox);
            //
            //     map.addPopup(this.popup);
            //
            //     this.popup.show();
            //
            // } else {
            //
            //     this.popup.toggle();
            //
            // }



            // currentPopup = this.popup;

            console.log(this);

            this.popup = this.createPopup(this.closeBox);
            console.log(this.popup);
            map.addPopup(this.popup);
            this.popup.show();
            OpenLayers.Event.stop(e);

        };

        // allow testing of specific renderers via "?renderer=Canvas", etc
        var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
        renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
        var vectorLayer = new OpenLayers.Layer.Vector("Simple Geometry", {
            styleMap: new OpenLayers.StyleMap({'default':{
                    strokeColor: "#00FF00",
                    strokeOpacity: 1,
                    strokeWidth: 3,
                    fillColor: "#FF5500",
                    fillOpacity: 0.5,
                    pointRadius: 6,
                    pointerEvents: "visiblePainted",
                    // label with \n linebreaks
                    label : "name: ${name}\n\nage: ${age}",

                    fontColor: "${favColor}",
                    fontSize: "12px",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                    // labelAlign: "${align}",
                    // labelXOffset: "${xOffset}",
                    // labelYOffset: "${yOffset}",
                    labelOutlineColor: "white",
                    labelOutlineWidth: 3
                }}),
            renderers: renderer
        });

        // create a point feature
        var point = new OpenLayers.Geometry.Point(lat, lng);
        var pointFeature = new OpenLayers.Feature.Vector(point);
        pointFeature.attributes = {
            name: "toto",
            age: 20,
            favColor: 'red',
            align: "cm"
        };
        map.addLayer(vectorLayer);
        vectorLayer.addFeatures([pointFeature]);

        marker.events.register("mousedown", feature, markerClick);
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

        var lyrOsm = new OpenLayers.Layer.OSM();

        map.addLayer(lyrOsm);


        // ajax, on load show all marker
        jsonData.forEach(function (item) {
            addMarker(item.location.lng,item.location.lat , item.info, index);
            index++;
        });

        center = bounds.getCenterLonLat();

        map.setCenter(center, map.getZoomForExtent(bounds) - 1);

        zoom = map.getZoom();

    }

    function markerFilter(filterAttr) {
        console.log(markers);
        if ( markers ) {
            for( var m = 0; m < markers.length; m++) {
                markers[m].clearMarkers();
            }
            index = 0;
            markers = [];
        }
        jsonData.forEach(function (item) {
            if ( item.status === filterAttr) {
                console.log('match');
                addMarker(item.location.lng,item.location.lat , item.info, index);
                index++;
            }

        });
    }


    initMap();

    var $filterBtn = document.querySelectorAll('.btnFilter');
    for ( var i = 0; i < $filterBtn.length; i++  ) {
        $filterBtn[i].addEventListener('click', function () {
            markerFilter(this.getAttribute('data-filter'));
        })
    }




    // var mapnik = new OpenLayers.Layer.OSM();
    // var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    // var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    // var position = new OpenLayers.LonLat(24.0312,49.8420).transform( fromProjection, toProjection);
    // var zoom = 15;
    //
    // var options = {
    //     controls: [
    //         new OpenLayers.Control.Navigation(),
    //         new OpenLayers.Control.PanZoomBar(),
    //         new OpenLayers.Control.Attribution()
    //     ]
    // };
    //
    // var iconSize = new OpenLayers.Size(21, 25);
    //
    // var icon = new OpenLayers.Icon("../img/marker.png", iconSize);
    //
    // var map = new OpenLayers.Map("map", options);
    // map.addLayer(mapnik);
    // map.setCenter(position, zoom );
    //
    // var markers = new OpenLayers.Layer.Markers( "Markers" );
    // map.addLayer(markers);
    //
    // var lonLatMarker = new OpenLayers.LonLat(24.0312, 49.8420).transform(fromProjection,  toProjection);
    // var feature = new OpenLayers.Feature(markers, lonLatMarker);
    // feature.closeBox = true;
    // feature.popupClass = OpenLayers.Class('aaaaaaaaaaaaaaaaa', {minSize: new OpenLayers.Size(300, 180) } );
    // feature.data.popupContentHTML = 'Hello World';
    // feature.data.overflow = "hidden";
    //
    // // var icon = new OpenLayers.Icon("../img/marker.png");
    // var marker = new OpenLayers.Marker(lonLatMarker);
    // marker.feature = feature;
    //
    // var popupId = "popup_"+Math.random(100);
    // var popup = new OpenLayers.Popup.FramedCloud(popupId, lonLatMarker,
    //     new OpenLayers.Size(200,20),
    //     "Hello World ... "+popupId,
    //     null,
    //     true,
    //     null);
    // map.addPopup(popup);
    //
    // var markerClick = function(evt) {
    //     console.log(currentPopup);
    //     console.log(this.createPopup);
    //     this.popup.toggle();
    //     // popup.show();
    //     // this.popup.show();
    //     if (this.popup == null) {
    //         this.popup = this.createPopup(this.lonlat);
    //         map.addPopup(this.popup);
    //         this.popup.show();
    //     } else {
    //         this.popup.toggle();
    //     }
    //     OpenLayers.Event.stop(evt);
    // };
    // marker.events.register("mousedown", feature, markerClick);
    //
    // markers.addMarker(marker);
};
