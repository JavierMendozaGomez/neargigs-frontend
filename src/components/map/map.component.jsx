import React, {useEffect} from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import './map.styles.scss';     
const Map = ({points}) => {
    const key = process.env.REACT_APP_BASE_API_KEY_TOMTOM;
    useEffect(() => {
        const map = tt.map({
          key,
          container: 'map',
          style: 'tomtom://vector/1/basic-main',
          center: [-0.128666, 51.505814],
          zoom: 10,
        });

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        var geoJson = {
            type: 'FeatureCollection',
            features: points.map(function(point) {
                return {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: point.coordinates
                    },
                    properties: point.properties
                };
            })
        };

        var markersOnTheMap = {};
        var eventListenersAdded = false;

        function refreshMarkers() {
            Object.keys(markersOnTheMap).forEach(function(id) {
                markersOnTheMap[id].remove();
                delete markersOnTheMap[id];
            });

            map.querySourceFeatures('point-source').forEach(function(feature) {
                if (feature.properties && !feature.properties.cluster){
                    var id = parseInt(feature.properties.id);
                    if (!markersOnTheMap[id]) {
                        var newMarker = new tt.Marker().setLngLat(feature.geometry.coordinates);
                        newMarker.addTo(map);
                        newMarker.setPopup(new tt.Popup({offset: 30}).setText(feature.properties.name));
                        markersOnTheMap[id] = newMarker;
                    }
                }
            });
        }

        map.on('load', function() {
            map.addSource('point-source', {
                type: 'geojson',
                data: geoJson,
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50
            });

            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'point-source',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#EC619F',
                        4,
                        '#008D8D',
                        7,
                        '#004B7F'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        15,
                        4,
                        20,
                        7,
                        25
                    ],
                    'circle-stroke-width': 1,
                    'circle-stroke-color': 'white',
                    'circle-stroke-opacity': 1
                }
            });

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'point-source',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-size': 16
                },
                paint: {
                    'text-color': 'white'
                }
            });

            map.on('data', function (e) {
                if (e.sourceId !== 'point-source' || !map.getSource('point-source').loaded()) return;
                refreshMarkers();

                if (!eventListenersAdded) {
                    map.on('move', refreshMarkers);
                    map.on('moveend', refreshMarkers);
                    eventListenersAdded = true;
                }
            });

            map.on('click', 'clusters', function (e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
                var clusterId = features[0].properties.cluster_id;
                map.getSource('point-source').getClusterExpansionZoom(clusterId, function (err, zoom) {
                    if (err) {
                        return;
                    }

                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom + 0.5
                    });
                });
            });

            map.on('mouseenter', 'clusters', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'clusters', function () {
                map.getCanvas().style.cursor = '';
            });
        })
    }, []);
    return (
        <div id='map' className='map'></div>
    );
}

export default Map;