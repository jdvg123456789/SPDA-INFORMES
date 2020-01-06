var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion = new ol.format.GeoJSON();
var features_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion = format_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.readFeatures(geojson_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion = new ol.source.Vector();
jsonSource_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.addFeatures(features_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion);var lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion = new ol.layer.Vector({
                source:jsonSource_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion, 
                style: style_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion,
                title: "CCNN_Tituladas_sin_Georeferencia_y_Rectificacion"
            });var format_CCNN_Inscritas_Georeferenciadas = new ol.format.GeoJSON();
var features_CCNN_Inscritas_Georeferenciadas = format_CCNN_Inscritas_Georeferenciadas.readFeatures(geojson_CCNN_Inscritas_Georeferenciadas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCNN_Inscritas_Georeferenciadas = new ol.source.Vector();
jsonSource_CCNN_Inscritas_Georeferenciadas.addFeatures(features_CCNN_Inscritas_Georeferenciadas);var lyr_CCNN_Inscritas_Georeferenciadas = new ol.layer.Vector({
                source:jsonSource_CCNN_Inscritas_Georeferenciadas, 
                style: style_CCNN_Inscritas_Georeferenciadas,
                title: "CCNN_Inscritas_Georeferenciadas"
            });

lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.setVisible(true);lyr_CCNN_Inscritas_Georeferenciadas.setVisible(true);
var layersList = [baseLayer,lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion,lyr_CCNN_Inscritas_Georeferenciadas];
lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.set('fieldAliases', {'TOMO': 'TOMO', 'FOLIO': 'FOLIO', 'FICHA': 'FICHA', 'PAR_ELECT': 'PAR_ELECT', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'SECTOR': 'SECTOR', 'FECHA_T': 'FECHA_T', 'NOMCOM': 'NOMCOM', 'SUPSIG': 'SUPSIG', 'PROCESO': 'PROCESO', });
lyr_CCNN_Inscritas_Georeferenciadas.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROCES': 'PROCES', 'NOMCOM': 'NOMCOM', 'NUMTIT': 'NUMTIT', 'DEPART': 'DEPART', 'PROVIN': 'PROVIN', 'DISTRI': 'DISTRI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.set('fieldImages', {'TOMO': 'TextEdit', 'FOLIO': 'TextEdit', 'FICHA': 'TextEdit', 'PAR_ELECT': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'SECTOR': 'TextEdit', 'FECHA_T': 'TextEdit', 'NOMCOM': 'TextEdit', 'SUPSIG': 'TextEdit', 'PROCESO': 'TextEdit', });
lyr_CCNN_Inscritas_Georeferenciadas.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROCES': 'TextEdit', 'NOMCOM': 'TextEdit', 'NUMTIT': 'TextEdit', 'DEPART': 'TextEdit', 'PROVIN': 'TextEdit', 'DISTRI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CCNN_Tituladas_sin_Georeferencia_y_Rectificacion.set('fieldLabels', {'TOMO': 'no label', 'FOLIO': 'no label', 'FICHA': 'no label', 'PAR_ELECT': 'no label', 'REGION': 'header label', 'PROVINCIA': 'header label', 'DISTRITO': 'header label', 'SECTOR': 'no label', 'FECHA_T': 'no label', 'NOMCOM': 'header label', 'SUPSIG': 'header label', 'PROCESO': 'no label', });
lyr_CCNN_Inscritas_Georeferenciadas.set('fieldLabels', {'OBJECTID': 'inline label', 'PROCES': 'inline label', 'NOMCOM': 'header label', 'NUMTIT': 'header label', 'DEPART': 'header label', 'PROVIN': 'header label', 'DISTRI': 'header label', 'Shape_Leng': 'header label', 'Shape_Area': 'header label', });
lyr_CCNN_Inscritas_Georeferenciadas.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});