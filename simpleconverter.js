var simpleConverter = {};

simpleConverter.celsiusToFahrenheit = function () {
    let c = S(document.getElementById('celsiusText').value).toFloat();
    let f = c * 1.8000 + 32;
    document.getElementById('cResult').value = math.format(f, {precision: 7});
};

simpleConverter.fahrenheitToCelsius = function () {
    let f = S(document.getElementById('fahrenheitText').value).toFloat();
    let c = (f - 32) / 1.8000;
    document.getElementById('fResult').value = math.format(c, {precision: 7});
};

simpleConverter.inchToCM = function () {
    let inch = S(document.getElementById('inchText').value).toFloat();
    let cm = inch * 2.54;
    document.getElementById('cmResult').value = math.format(cm, {precision: 7});
};

simpleConverter.cmToInch= function () {
    let cm = S(document.getElementById('cmText').value).toFloat();
    let inch = cm * 0.39370079;
    document.getElementById('inchResult').value = math.format(inch, {precision: 7});
};

simpleConverter.milesToKM = function () {
    let miles = S(document.getElementById('milesText').value).toFloat();
    let km = miles / 0.62137;
    document.getElementById('kmResult').value = math.format(km, {precision: 7});
};

simpleConverter.kmToMiles = function () {
    let km = S(document.getElementById('kmText').value).toFloat();
    let miles = km * 0.62137;
    document.getElementById('milesResult').value = math.format(miles, {precision: 7});
};

