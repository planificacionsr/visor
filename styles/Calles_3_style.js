var size = 0;
var placement = 'point';

var style_Calles_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
