var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZONIFICACIN_1 = new ol.format.GeoJSON();
var features_ZONIFICACIN_1 = format_ZONIFICACIN_1.readFeatures(json_ZONIFICACIN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONIFICACIN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONIFICACIN_1.addFeatures(features_ZONIFICACIN_1);
var lyr_ZONIFICACIN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONIFICACIN_1, 
                style: style_ZONIFICACIN_1,
                popuplayertitle: 'ZONIFICACIÓN',
                interactive: true,
    title: 'ZONIFICACIÓN<br />\
    <img src="styles/legend/ZONIFICACIN_1_0.png" /> Urbana<br />\
    <img src="styles/legend/ZONIFICACIN_1_1.png" /> Periurbana<br />\
    <img src="styles/legend/ZONIFICACIN_1_2.png" /> Rural Intensivo<br />\
    <img src="styles/legend/ZONIFICACIN_1_3.png" /> Rural extensivo<br />' });
var format_Parcelario_2 = new ol.format.GeoJSON();
var features_Parcelario_2 = format_Parcelario_2.readFeatures(json_Parcelario_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelario_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelario_2.addFeatures(features_Parcelario_2);
var lyr_Parcelario_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelario_2, 
                style: style_Parcelario_2,
                popuplayertitle: 'Parcelario',
                interactive: true,
                title: '<img src="styles/legend/Parcelario_2.png" /> Parcelario'
            });
var format_Calles_3 = new ol.format.GeoJSON();
var features_Calles_3 = format_Calles_3.readFeatures(json_Calles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_3.addFeatures(features_Calles_3);
var lyr_Calles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calles_3, 
                style: style_Calles_3,
                popuplayertitle: 'Calles',
                interactive: true,
                title: '<img src="styles/legend/Calles_3.png" /> Calles'
            });
var format_CabecerasDistritalesyParajes_4 = new ol.format.GeoJSON();
var features_CabecerasDistritalesyParajes_4 = format_CabecerasDistritalesyParajes_4.readFeatures(json_CabecerasDistritalesyParajes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabecerasDistritalesyParajes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabecerasDistritalesyParajes_4.addFeatures(features_CabecerasDistritalesyParajes_4);
var lyr_CabecerasDistritalesyParajes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabecerasDistritalesyParajes_4, 
                style: style_CabecerasDistritalesyParajes_4,
                popuplayertitle: 'Cabeceras Distritales y Parajes',
                interactive: false,
                title: '<img src="styles/legend/CabecerasDistritalesyParajes_4.png" /> Cabeceras Distritales y Parajes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ZONIFICACIN_1.setVisible(true);lyr_Parcelario_2.setVisible(false);lyr_Calles_3.setVisible(true);lyr_CabecerasDistritalesyParajes_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ZONIFICACIN_1,lyr_Parcelario_2,lyr_Calles_3,lyr_CabecerasDistritalesyParajes_4];
lyr_ZONIFICACIN_1.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Categorias': 'Categorias', '__ZONA': '__ZONA', '__ORD': '__ORD', '__CODIGO': '__CODIGO', '__TIPO': '__TIPO', '__DENSIDAD': '__DENSIDAD', '__PARCELA': '__PARCELA', '__COMPLEME': '__COMPLEME', '__CRUCE VA': '__CRUCE VA', '__CLASIFIC': '__CLASIFIC', });
lyr_Parcelario_2.set('fieldAliases', {'NOMENCLATU': 'NOMENCLATU', 'ZONA': 'ZONA', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'BARRIO': 'BARRIO', 'LOTE': 'LOTE', 'MANZANA': 'MANZANA', 'ULTIMA_ACT': 'ULTIMA_ACT', 'MATRICULA': 'MATRICULA', 'FOLIO': 'FOLIO', 'TOMO': 'TOMO', 'FOLIO_REAL': 'FOLIO_REAL', 'ASIENTO': 'ASIENTO', 'AUTORIDAD': 'AUTORIDAD', 'AREA_M2': 'AREA_M2', 'DEPTO': 'DEPTO', 'DTTO': 'DTTO', 'SECC': 'SECC', 'MZN': 'MZN', 'PARC': 'PARC', 'SUBP': 'SUBP', 'VERI': 'VERI', });
lyr_Calles_3.set('fieldAliases', {'Name': 'Name', 'DEPTO': 'DEPTO', 'Tipo': 'Tipo', 'Distrito': 'Distrito', 'auxiliary_': 'auxiliary_', });
lyr_CabecerasDistritalesyParajes_4.set('fieldAliases', {'Name': 'Name', 'Tipo': 'Tipo', 'Distrito': 'Distrito', });
lyr_ZONIFICACIN_1.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Categorias': 'TextEdit', '__ZONA': 'TextEdit', '__ORD': 'TextEdit', '__CODIGO': 'TextEdit', '__TIPO': 'TextEdit', '__DENSIDAD': 'TextEdit', '__PARCELA': 'TextEdit', '__COMPLEME': 'TextEdit', '__CRUCE VA': 'TextEdit', '__CLASIFIC': 'TextEdit', });
lyr_Parcelario_2.set('fieldImages', {'NOMENCLATU': 'TextEdit', 'ZONA': 'TextEdit', 'CALLE': 'TextEdit', 'ALTURA': 'TextEdit', 'BARRIO': 'TextEdit', 'LOTE': 'TextEdit', 'MANZANA': 'TextEdit', 'ULTIMA_ACT': 'TextEdit', 'MATRICULA': 'TextEdit', 'FOLIO': 'TextEdit', 'TOMO': 'TextEdit', 'FOLIO_REAL': 'TextEdit', 'ASIENTO': 'TextEdit', 'AUTORIDAD': 'TextEdit', 'AREA_M2': 'TextEdit', 'DEPTO': 'TextEdit', 'DTTO': 'TextEdit', 'SECC': 'TextEdit', 'MZN': 'TextEdit', 'PARC': 'TextEdit', 'SUBP': 'TextEdit', 'VERI': 'TextEdit', });
lyr_Calles_3.set('fieldImages', {'Name': 'TextEdit', 'DEPTO': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', 'auxiliary_': 'TextEdit', });
lyr_CabecerasDistritalesyParajes_4.set('fieldImages', {'Name': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_ZONIFICACIN_1.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'header label - always visible', 'Categorias': 'hidden field', '__ZONA': 'inline label - visible with data', '__ORD': 'hidden field', '__CODIGO': 'hidden field', '__TIPO': 'hidden field', '__DENSIDAD': 'hidden field', '__PARCELA': 'hidden field', '__COMPLEME': 'hidden field', '__CRUCE VA': 'hidden field', '__CLASIFIC': 'inline label - visible with data', });
lyr_Parcelario_2.set('fieldLabels', {'NOMENCLATU': 'inline label - visible with data', 'ZONA': 'inline label - visible with data', 'CALLE': 'inline label - visible with data', 'ALTURA': 'inline label - visible with data', 'BARRIO': 'hidden field', 'LOTE': 'hidden field', 'MANZANA': 'hidden field', 'ULTIMA_ACT': 'hidden field', 'MATRICULA': 'hidden field', 'FOLIO': 'hidden field', 'TOMO': 'hidden field', 'FOLIO_REAL': 'hidden field', 'ASIENTO': 'hidden field', 'AUTORIDAD': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'DEPTO': 'hidden field', 'DTTO': 'hidden field', 'SECC': 'hidden field', 'MZN': 'hidden field', 'PARC': 'inline label - visible with data', 'SUBP': 'hidden field', 'VERI': 'hidden field', });
lyr_Calles_3.set('fieldLabels', {'Name': 'header label - always visible', 'DEPTO': 'hidden field', 'Tipo': 'hidden field', 'Distrito': 'hidden field', 'auxiliary_': 'hidden field', });
lyr_CabecerasDistritalesyParajes_4.set('fieldLabels', {'Name': 'header label - always visible', 'Tipo': 'hidden field', 'Distrito': 'hidden field', });
lyr_CabecerasDistritalesyParajes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});