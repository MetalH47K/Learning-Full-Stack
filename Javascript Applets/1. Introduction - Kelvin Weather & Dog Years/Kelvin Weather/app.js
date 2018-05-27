const kelvin = 300; //Constant Variable
let celsius = kelvin - 273; //Celsius is 273F les than kelvin
let fahrenheit = celsius * (9/5) + 32; //Conversion
let newton = celsius * (33/100);
newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit); //Rounding
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${celsius} in Celsius and ${newton} in Newtons`);