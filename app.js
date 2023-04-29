const conversions = {
    centimeter: {
        meter: 0.01,
        kilometer: 0.00001,
        centimeter: 1
    },
    meter: {
        centimeter: 100,
        kilometer: 0.001,
        meter: 1
    },
    kilometer: {
        centimeter: 100000,
        meter: 1000,
        kilometer: 1
    },
    //temprature
    celcius: {
        farenheit: 33.8,
        celcius: 1,
        kelvin: 274.15
    },
    farenheit: {
        celcius: (-17.2222),
        kelvin: 255.98,
        farenheit: 1
    },
    kelvin: {
        farenheit: (-457.87),
        kelvin: 1,
        celcius: (-272.15)
    },
    //speed
    ms: {
        ms: 1,
        kmhr: 3.6,
        fs: 3.28084
    },
    kmhr: {
        fs: 0.91134,
        ms: 0.277778,
        kmhr: 1
    },
    fs: {
        fs: 1,
        ms: 0.3048,
        kmhr: 1.09728
    },
    //weight
    kg: {
        g: 1000,
        kg: 1,
        p: 2.20462
    },
    g: {
        p: 0.00220462,
        g: 1,
        kg: 0.001
    },
    p: {
        p: 1,
        kg: 0.453592,
        g: 453.592
    }
}

function convert() {
    var input = parseFloat(document.getElementById("input-convert-from").value);
    var from = document.getElementById("convert-from").value;
    var to = document.getElementById("convert-to").value;

    const result = input * conversions[from][to];
    document.getElementById("converted-value").value = result;

}

document.getElementById("convert").addEventListener('click', convert);