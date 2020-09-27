var wms_layers = [];

var format_distritos_0 = new ol.format.GeoJSON();
var features_distritos_0 = format_distritos_0.readFeatures(json_distritos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_0.addFeatures(features_distritos_0);
var lyr_distritos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritos_0, 
                style: style_distritos_0,
                interactive: true,
    title: 'distritos<br />\
    <img src="styles/legend/distritos_0_0.png" /> Andabamba<br />\
    <img src="styles/legend/distritos_0_1.png" /> Anguia<br />\
    <img src="styles/legend/distritos_0_2.png" /> Asuncion<br />\
    <img src="styles/legend/distritos_0_3.png" /> Bambamarca<br />\
    <img src="styles/legend/distritos_0_4.png" /> Bellavista<br />\
    <img src="styles/legend/distritos_0_5.png" /> Bolivar<br />\
    <img src="styles/legend/distritos_0_6.png" /> Cachachi<br />\
    <img src="styles/legend/distritos_0_7.png" /> Cajabamba<br />\
    <img src="styles/legend/distritos_0_8.png" /> Cajamarca<br />\
    <img src="styles/legend/distritos_0_9.png" /> Callayuc<br />\
    <img src="styles/legend/distritos_0_10.png" /> Calquis<br />\
    <img src="styles/legend/distritos_0_11.png" /> Catache<br />\
    <img src="styles/legend/distritos_0_12.png" /> Catilluc<br />\
    <img src="styles/legend/distritos_0_13.png" /> Celendín<br />\
    <img src="styles/legend/distritos_0_14.png" /> Chadín<br />\
    <img src="styles/legend/distritos_0_15.png" /> Chalamarca<br />\
    <img src="styles/legend/distritos_0_16.png" /> Chancay<br />\
    <img src="styles/legend/distritos_0_17.png" /> Chancaybaños<br />\
    <img src="styles/legend/distritos_0_18.png" /> Chetilla<br />\
    <img src="styles/legend/distritos_0_19.png" /> Chiguirip<br />\
    <img src="styles/legend/distritos_0_20.png" /> Chilete<br />\
    <img src="styles/legend/distritos_0_21.png" /> Chimbán<br />\
    <img src="styles/legend/distritos_0_22.png" /> Chirinos<br />\
    <img src="styles/legend/distritos_0_23.png" /> Chontalí<br />\
    <img src="styles/legend/distritos_0_24.png" /> Choropampa<br />\
    <img src="styles/legend/distritos_0_25.png" /> Choros<br />\
    <img src="styles/legend/distritos_0_26.png" /> Chota<br />\
    <img src="styles/legend/distritos_0_27.png" /> Chugur<br />\
    <img src="styles/legend/distritos_0_28.png" /> Chumuch<br />\
    <img src="styles/legend/distritos_0_29.png" /> Cochabamba<br />\
    <img src="styles/legend/distritos_0_30.png" /> Colasay<br />\
    <img src="styles/legend/distritos_0_31.png" /> Conchán<br />\
    <img src="styles/legend/distritos_0_32.png" /> Condebamba<br />\
    <img src="styles/legend/distritos_0_33.png" /> Contumazá<br />\
    <img src="styles/legend/distritos_0_34.png" /> Cortegana<br />\
    <img src="styles/legend/distritos_0_35.png" /> Cospán<br />\
    <img src="styles/legend/distritos_0_36.png" /> Cujillo<br />\
    <img src="styles/legend/distritos_0_37.png" /> Cupisnique<br />\
    <img src="styles/legend/distritos_0_38.png" /> Cutervo<br />\
    <img src="styles/legend/distritos_0_39.png" /> Eduardo Villanueva<br />\
    <img src="styles/legend/distritos_0_40.png" /> El Prado<br />\
    <img src="styles/legend/distritos_0_41.png" /> Encañada<br />\
    <img src="styles/legend/distritos_0_42.png" /> Gregorio Pita<br />\
    <img src="styles/legend/distritos_0_43.png" /> Guzmango<br />\
    <img src="styles/legend/distritos_0_44.png" /> Huabal<br />\
    <img src="styles/legend/distritos_0_45.png" /> Hualgayoc<br />\
    <img src="styles/legend/distritos_0_46.png" /> Huambos<br />\
    <img src="styles/legend/distritos_0_47.png" /> Huarango<br />\
    <img src="styles/legend/distritos_0_48.png" /> Huasmín<br />\
    <img src="styles/legend/distritos_0_49.png" /> Ichocán<br />\
    <img src="styles/legend/distritos_0_50.png" /> Jaén<br />\
    <img src="styles/legend/distritos_0_51.png" /> Jesús<br />\
    <img src="styles/legend/distritos_0_52.png" /> Jorge Chávez<br />\
    <img src="styles/legend/distritos_0_53.png" /> José Galvez<br />\
    <img src="styles/legend/distritos_0_54.png" /> José Manuel Quiroz<br />\
    <img src="styles/legend/distritos_0_55.png" /> José Sabogal<br />\
    <img src="styles/legend/distritos_0_56.png" /> La Coipa<br />\
    <img src="styles/legend/distritos_0_57.png" /> La Esperanza<br />\
    <img src="styles/legend/distritos_0_58.png" /> La Florida<br />\
    <img src="styles/legend/distritos_0_59.png" /> La Libertad De Pallán<br />\
    <img src="styles/legend/distritos_0_60.png" /> La Ramada<br />\
    <img src="styles/legend/distritos_0_61.png" /> Lajas<br />\
    <img src="styles/legend/distritos_0_62.png" /> Las Pirias<br />\
    <img src="styles/legend/distritos_0_63.png" /> Llacanora<br />\
    <img src="styles/legend/distritos_0_64.png" /> Llama<br />\
    <img src="styles/legend/distritos_0_65.png" /> Llapa<br />\
    <img src="styles/legend/distritos_0_66.png" /> Los Baños del Inca<br />\
    <img src="styles/legend/distritos_0_67.png" /> Magdalena<br />\
    <img src="styles/legend/distritos_0_68.png" /> Matara<br />\
    <img src="styles/legend/distritos_0_69.png" /> Miguel Iglesias<br />\
    <img src="styles/legend/distritos_0_70.png" /> Miracosta<br />\
    <img src="styles/legend/distritos_0_71.png" /> Namballe<br />\
    <img src="styles/legend/distritos_0_72.png" /> Namora<br />\
    <img src="styles/legend/distritos_0_73.png" /> Nanchoc<br />\
    <img src="styles/legend/distritos_0_74.png" /> Niepos<br />\
    <img src="styles/legend/distritos_0_75.png" /> Ninabamba<br />\
    <img src="styles/legend/distritos_0_76.png" /> Oxamarca<br />\
    <img src="styles/legend/distritos_0_77.png" /> Paccha<br />\
    <img src="styles/legend/distritos_0_78.png" /> Pedro Galvez<br />\
    <img src="styles/legend/distritos_0_79.png" /> Pimpingos<br />\
    <img src="styles/legend/distritos_0_80.png" /> Pion<br />\
    <img src="styles/legend/distritos_0_81.png" /> Pomahuaca<br />\
    <img src="styles/legend/distritos_0_82.png" /> Pucara<br />\
    <img src="styles/legend/distritos_0_83.png" /> Pulan<br />\
    <img src="styles/legend/distritos_0_84.png" /> Querocotillo<br />\
    <img src="styles/legend/distritos_0_85.png" /> Querocoto<br />\
    <img src="styles/legend/distritos_0_86.png" /> Sallique<br />\
    <img src="styles/legend/distritos_0_87.png" /> San Andrés De Cutervo<br />\
    <img src="styles/legend/distritos_0_88.png" /> San Benito<br />\
    <img src="styles/legend/distritos_0_89.png" /> San Bernardino<br />\
    <img src="styles/legend/distritos_0_90.png" /> San Felipe<br />\
    <img src="styles/legend/distritos_0_91.png" /> San Gregorio<br />\
    <img src="styles/legend/distritos_0_92.png" /> San Ignacio<br />\
    <img src="styles/legend/distritos_0_93.png" /> San Jose De Lourdes<br />\
    <img src="styles/legend/distritos_0_94.png" /> San José Del Alto<br />\
    <img src="styles/legend/distritos_0_95.png" /> San Juan<br />\
    <img src="styles/legend/distritos_0_96.png" /> San Juan De Cutervo<br />\
    <img src="styles/legend/distritos_0_97.png" /> San Juan De Licupis<br />\
    <img src="styles/legend/distritos_0_98.png" /> San Luis<br />\
    <img src="styles/legend/distritos_0_99.png" /> San Luis De Lucma<br />\
    <img src="styles/legend/distritos_0_100.png" /> San Miguel<br />\
    <img src="styles/legend/distritos_0_101.png" /> San Pablo<br />\
    <img src="styles/legend/distritos_0_102.png" /> San Silvestre de Cochán<br />\
    <img src="styles/legend/distritos_0_103.png" /> Santa Cruz<br />\
    <img src="styles/legend/distritos_0_104.png" /> Santa Cruz de Toledo<br />\
    <img src="styles/legend/distritos_0_105.png" /> Santa Rosa<br />\
    <img src="styles/legend/distritos_0_106.png" /> Santo Domingo De La Capilla<br />\
    <img src="styles/legend/distritos_0_107.png" /> Santo Tomás<br />\
    <img src="styles/legend/distritos_0_108.png" /> Saucepampa<br />\
    <img src="styles/legend/distritos_0_109.png" /> Sexi<br />\
    <img src="styles/legend/distritos_0_110.png" /> Sitacocha<br />\
    <img src="styles/legend/distritos_0_111.png" /> Socota<br />\
    <img src="styles/legend/distritos_0_112.png" /> Sorochuco<br />\
    <img src="styles/legend/distritos_0_113.png" /> Sucre<br />\
    <img src="styles/legend/distritos_0_114.png" /> Tabaconas<br />\
    <img src="styles/legend/distritos_0_115.png" /> Tacabamba<br />\
    <img src="styles/legend/distritos_0_116.png" /> Tantarica<br />\
    <img src="styles/legend/distritos_0_117.png" /> Tocmoche<br />\
    <img src="styles/legend/distritos_0_118.png" /> Tongod<br />\
    <img src="styles/legend/distritos_0_119.png" /> Toribio Casanova<br />\
    <img src="styles/legend/distritos_0_120.png" /> Tumbadén<br />\
    <img src="styles/legend/distritos_0_121.png" /> Union Agua Blanca<br />\
    <img src="styles/legend/distritos_0_122.png" /> Utco<br />\
    <img src="styles/legend/distritos_0_123.png" /> Uticyacu<br />\
    <img src="styles/legend/distritos_0_124.png" /> Yauyucán<br />\
    <img src="styles/legend/distritos_0_125.png" /> Yonán<br />\
    <img src="styles/legend/distritos_0_126.png" /> <br />'
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                interactive: true,
    title: 'Provincias<br />\
    <img src="styles/legend/Provincias_1_0.png" /> Cajabamba<br />\
    <img src="styles/legend/Provincias_1_1.png" /> Cajamarca<br />\
    <img src="styles/legend/Provincias_1_2.png" /> Celendín<br />\
    <img src="styles/legend/Provincias_1_3.png" /> Chota<br />\
    <img src="styles/legend/Provincias_1_4.png" /> Contumazá<br />\
    <img src="styles/legend/Provincias_1_5.png" /> Cutervo<br />\
    <img src="styles/legend/Provincias_1_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/Provincias_1_7.png" /> Jaén<br />\
    <img src="styles/legend/Provincias_1_8.png" /> San Ignacio<br />\
    <img src="styles/legend/Provincias_1_9.png" /> San Marcos<br />\
    <img src="styles/legend/Provincias_1_10.png" /> San Miguel<br />\
    <img src="styles/legend/Provincias_1_11.png" /> San Pablo<br />\
    <img src="styles/legend/Provincias_1_12.png" /> Santa Cruz<br />'
        });

lyr_distritos_0.setVisible(true);lyr_Provincias_1.setVisible(true);
var layersList = [lyr_distritos_0,lyr_Provincias_1];
lyr_distritos_0.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Provincias_1.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'Imagen': 'Imagen', });
lyr_distritos_0.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPART': 'TextEdit', 'PROV_ID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'TextEdit', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_Provincias_1.set('fieldImages', {'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', 'Imagen': 'ExternalResource', });
lyr_distritos_0.set('fieldLabels', {'IDDPTO': 'no label', 'DEPART': 'no label', 'PROV_ID': 'no label', 'PROVINCIA': 'inline label', 'DIST_ID': 'no label', 'DISTRITO': 'inline label', });
lyr_Provincias_1.set('fieldLabels', {'PROVINCIA': 'header label', 'Imagen': 'no label', });
lyr_Provincias_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});