var wms_layers = [];

var format_Sectores_0 = new ol.format.GeoJSON();
var features_Sectores_0 = format_Sectores_0.readFeatures(json_Sectores_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_0.addFeatures(features_Sectores_0);
var lyr_Sectores_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_0, 
                style: style_Sectores_0,
                interactive: true,
                title: '<img src="styles/legend/Sectores_0.png" /> Sectores'
            });
var format_Manzanas_1 = new ol.format.GeoJSON();
var features_Manzanas_1 = format_Manzanas_1.readFeatures(json_Manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_1.addFeatures(features_Manzanas_1);
var lyr_Manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_1, 
                style: style_Manzanas_1,
                interactive: true,
    title: 'Manzanas<br />\
    <img src="styles/legend/Manzanas_1_0.png" /> <br />\
    <img src="styles/legend/Manzanas_1_1.png" /> SECTOR 1<br />\
    <img src="styles/legend/Manzanas_1_2.png" /> SECTOR 18<br />\
    <img src="styles/legend/Manzanas_1_3.png" /> SECTOR 2<br />\
    <img src="styles/legend/Manzanas_1_4.png" /> SECTOR 3<br />\
    <img src="styles/legend/Manzanas_1_5.png" /> SECTOR 4<br />\
    <img src="styles/legend/Manzanas_1_6.png" /> SECTOR 7<br />\
    <img src="styles/legend/Manzanas_1_7.png" /> SECTOR 8<br />'
        });

lyr_Sectores_0.setVisible(true);lyr_Manzanas_1.setVisible(true);
var layersList = [lyr_Sectores_0,lyr_Manzanas_1];
lyr_Sectores_0.set('fieldAliases', {'Cod_Sector': 'Cod_Sector', 'Area': 'Area', 'Perimetro': 'Perimetro', 'Numero': 'Numero', 'Imagen': 'Imagen', });
lyr_Manzanas_1.set('fieldAliases', {'Cod_Manz': 'Cod_Manz', 'Cod_Sector': 'Cod_Sector', });
lyr_Sectores_0.set('fieldImages', {'Cod_Sector': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', 'Numero': 'Range', 'Imagen': 'ExternalResource', });
lyr_Manzanas_1.set('fieldImages', {'Cod_Manz': 'Hidden', 'Cod_Sector': 'Hidden', });
lyr_Sectores_0.set('fieldLabels', {'Cod_Sector': 'header label', 'Area': 'inline label', 'Perimetro': 'header label', 'Numero': 'no label', 'Imagen': 'no label', });
lyr_Manzanas_1.set('fieldLabels', {});
lyr_Manzanas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});