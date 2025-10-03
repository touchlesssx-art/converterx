// Conversion factors for all units
// All conversions are relative to a base unit for each category

export interface ConversionCategory {
  name: string;
  icon: string;
  units: {
    [key: string]: {
      name: string;
      toBase: number; // Multiply by this to convert to base unit
    };
  };
  baseUnit: string;
}

export const conversionData: { [key: string]: ConversionCategory } = {
  length: {
    name: 'Length / Distance',
    icon: 'Ruler',
    baseUnit: 'meter',
    units: {
      meter: { name: 'Meters', toBase: 1 },
      kilometer: { name: 'Kilometers', toBase: 1000 },
      centimeter: { name: 'Centimeters', toBase: 0.01 },
      millimeter: { name: 'Millimeters', toBase: 0.001 },
      mile: { name: 'Miles', toBase: 1609.344 },
      yard: { name: 'Yards', toBase: 0.9144 },
      foot: { name: 'Feet', toBase: 0.3048 },
      inch: { name: 'Inches', toBase: 0.0254 },
      nauticalMile: { name: 'Nautical Miles', toBase: 1852 },
    },
  },
  area: {
    name: 'Area',
    icon: 'Square',
    baseUnit: 'squareMeter',
    units: {
      squareMeter: { name: 'Square Meters', toBase: 1 },
      squareKilometer: { name: 'Square Kilometers', toBase: 1000000 },
      squareCentimeter: { name: 'Square Centimeters', toBase: 0.0001 },
      squareMile: { name: 'Square Miles', toBase: 2589988.110336 },
      squareYard: { name: 'Square Yards', toBase: 0.83612736 },
      squareFoot: { name: 'Square Feet', toBase: 0.09290304 },
      squareInch: { name: 'Square Inches', toBase: 0.00064516 },
      hectare: { name: 'Hectares', toBase: 10000 },
      acre: { name: 'Acres', toBase: 4046.8564224 },
    },
  },
  volume: {
    name: 'Volume / Capacity',
    icon: 'Cuboid',
    baseUnit: 'liter',
    units: {
      liter: { name: 'Liters', toBase: 1 },
      milliliter: { name: 'Milliliters', toBase: 0.001 },
      cubicMeter: { name: 'Cubic Meters', toBase: 1000 },
      cubicCentimeter: { name: 'Cubic Centimeters', toBase: 0.001 },
      gallon: { name: 'Gallons (US)', toBase: 3.785411784 },
      quart: { name: 'Quarts (US)', toBase: 0.946352946 },
      pint: { name: 'Pints (US)', toBase: 0.473176473 },
      cup: { name: 'Cups (US)', toBase: 0.2365882365 },
      fluidOunce: { name: 'Fluid Ounces (US)', toBase: 0.0295735295625 },
      tablespoon: { name: 'Tablespoons (US)', toBase: 0.01478676478125 },
      teaspoon: { name: 'Teaspoons (US)', toBase: 0.00492892159375 },
    },
  },
  weight: {
    name: 'Weight / Mass',
    icon: 'Weight',
    baseUnit: 'kilogram',
    units: {
      kilogram: { name: 'Kilograms', toBase: 1 },
      gram: { name: 'Grams', toBase: 0.001 },
      milligram: { name: 'Milligrams', toBase: 0.000001 },
      metricTon: { name: 'Metric Tons', toBase: 1000 },
      pound: { name: 'Pounds', toBase: 0.45359237 },
      ounce: { name: 'Ounces', toBase: 0.028349523125 },
      stone: { name: 'Stones', toBase: 6.35029318 },
      ton: { name: 'Tons (US)', toBase: 907.18474 },
    },
  },
  temperature: {
    name: 'Temperature',
    icon: 'Thermometer',
    baseUnit: 'celsius',
    units: {
      celsius: { name: 'Celsius', toBase: 1 },
      fahrenheit: { name: 'Fahrenheit', toBase: 1 },
      kelvin: { name: 'Kelvin', toBase: 1 },
    },
  },
  speed: {
    name: 'Speed',
    icon: 'Gauge',
    baseUnit: 'meterPerSecond',
    units: {
      meterPerSecond: { name: 'Meters/Second', toBase: 1 },
      kilometerPerHour: { name: 'Kilometers/Hour', toBase: 0.277777778 },
      milePerHour: { name: 'Miles/Hour', toBase: 0.44704 },
      knot: { name: 'Knots', toBase: 0.514444444 },
      footPerSecond: { name: 'Feet/Second', toBase: 0.3048 },
    },
  },
  time: {
    name: 'Time',
    icon: 'Clock',
    baseUnit: 'second',
    units: {
      second: { name: 'Seconds', toBase: 1 },
      minute: { name: 'Minutes', toBase: 60 },
      hour: { name: 'Hours', toBase: 3600 },
      day: { name: 'Days', toBase: 86400 },
      week: { name: 'Weeks', toBase: 604800 },
      month: { name: 'Months', toBase: 2629746 },
      year: { name: 'Years', toBase: 31556952 },
    },
  },
  power: {
    name: 'Power',
    icon: 'Zap',
    baseUnit: 'watt',
    units: {
      watt: { name: 'Watts', toBase: 1 },
      kilowatt: { name: 'Kilowatts', toBase: 1000 },
      megawatt: { name: 'Megawatts', toBase: 1000000 },
      horsepower: { name: 'Horsepower', toBase: 745.699872 },
      btusPerHour: { name: 'BTUs/Hour', toBase: 0.29307107 },
    },
  },
  energy: {
    name: 'Energy',
    icon: 'Flame',
    baseUnit: 'joule',
    units: {
      joule: { name: 'Joules', toBase: 1 },
      kilojoule: { name: 'Kilojoules', toBase: 1000 },
      calorie: { name: 'Calories', toBase: 4.184 },
      kilocalorie: { name: 'Kilocalories', toBase: 4184 },
      wattHour: { name: 'Watt Hours', toBase: 3600 },
      kilowattHour: { name: 'Kilowatt Hours', toBase: 3600000 },
      electronvolt: { name: 'Electronvolts', toBase: 1.602176634e-19 },
      btu: { name: 'BTU', toBase: 1055.05585 },
    },
  },
  pressure: {
    name: 'Pressure',
    icon: 'Wind',
    baseUnit: 'pascal',
    units: {
      pascal: { name: 'Pascals', toBase: 1 },
      kilopascal: { name: 'Kilopascals', toBase: 1000 },
      bar: { name: 'Bars', toBase: 100000 },
      psi: { name: 'PSI', toBase: 6894.757293168 },
      atmosphere: { name: 'Atmospheres', toBase: 101325 },
      torr: { name: 'Torr', toBase: 133.322368 },
    },
  },
  digitalStorage: {
    name: 'Digital Storage',
    icon: 'HardDrive',
    baseUnit: 'byte',
    units: {
      bit: { name: 'Bits', toBase: 0.125 },
      byte: { name: 'Bytes', toBase: 1 },
      kilobyte: { name: 'Kilobytes', toBase: 1024 },
      megabyte: { name: 'Megabytes', toBase: 1048576 },
      gigabyte: { name: 'Gigabytes', toBase: 1073741824 },
      terabyte: { name: 'Terabytes', toBase: 1099511627776 },
      petabyte: { name: 'Petabytes', toBase: 1125899906842624 },
    },
  },
  density: {
    name: 'Density',
    icon: 'Layers',
    baseUnit: 'kgPerCubicMeter',
    units: {
      kgPerCubicMeter: { name: 'kg/m³', toBase: 1 },
      gPerCubicCentimeter: { name: 'g/cm³', toBase: 1000 },
      lbPerCubicFoot: { name: 'lb/ft³', toBase: 16.01846337 },
      lbPerCubicInch: { name: 'lb/in³', toBase: 27679.90471 },
    },
  },
  angle: {
    name: 'Angle',
    icon: 'Triangle',
    baseUnit: 'degree',
    units: {
      degree: { name: 'Degrees', toBase: 1 },
      radian: { name: 'Radians', toBase: 57.2957795131 },
      gradian: { name: 'Gradians', toBase: 0.9 },
      revolution: { name: 'Revolutions', toBase: 360 },
    },
  },
  frequency: {
    name: 'Frequency',
    icon: 'Radio',
    baseUnit: 'hertz',
    units: {
      hertz: { name: 'Hertz', toBase: 1 },
      kilohertz: { name: 'Kilohertz', toBase: 1000 },
      megahertz: { name: 'Megahertz', toBase: 1000000 },
      gigahertz: { name: 'Gigahertz', toBase: 1000000000 },
    },
  },
  illuminance: {
    name: 'Illuminance',
    icon: 'Lightbulb',
    baseUnit: 'lux',
    units: {
      lux: { name: 'Lux', toBase: 1 },
      footCandle: { name: 'Foot-candles', toBase: 10.764 },
      phot: { name: 'Phots', toBase: 10000 },
    },
  },
  force: {
    name: 'Force',
    icon: 'Move',
    baseUnit: 'newton',
    units: {
      newton: { name: 'Newtons', toBase: 1 },
      kilonewton: { name: 'Kilonewtons', toBase: 1000 },
      poundForce: { name: 'Pound-force', toBase: 4.4482216152605 },
      dyne: { name: 'Dynes', toBase: 0.00001 },
    },
  },
  fuelEconomy: {
    name: 'Fuel Economy',
    icon: 'Fuel',
    baseUnit: 'litersPer100km',
    units: {
      litersPer100km: { name: 'L/100km', toBase: 1 },
      kmPerLiter: { name: 'km/L', toBase: 1 },
      milesPerGallon: { name: 'MPG (US)', toBase: 1 },
      milesPerGallonUK: { name: 'MPG (UK)', toBase: 1 },
    },
  },
};

// Special conversion function for temperature (non-linear)
export function convertTemperature(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  if (fromUnit === toUnit) return value;

  // Convert to Celsius first
  let celsius: number;
  if (fromUnit === 'celsius') {
    celsius = value;
  } else if (fromUnit === 'fahrenheit') {
    celsius = (value - 32) * (5 / 9);
  } else if (fromUnit === 'kelvin') {
    celsius = value - 273.15;
  } else {
    return 0;
  }

  // Convert from Celsius to target unit
  if (toUnit === 'celsius') {
    return celsius;
  } else if (toUnit === 'fahrenheit') {
    return celsius * (9 / 5) + 32;
  } else if (toUnit === 'kelvin') {
    return celsius + 273.15;
  }

  return 0;
}

// Special conversion function for fuel economy (inverse relationship)
export function convertFuelEconomy(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  if (fromUnit === toUnit) return value;
  if (value === 0) return 0;

  // Convert to L/100km first
  let litersPer100km: number;
  if (fromUnit === 'litersPer100km') {
    litersPer100km = value;
  } else if (fromUnit === 'kmPerLiter') {
    litersPer100km = 100 / value;
  } else if (fromUnit === 'milesPerGallon') {
    litersPer100km = 235.214583 / value;
  } else if (fromUnit === 'milesPerGallonUK') {
    litersPer100km = 282.481 / value;
  } else {
    return 0;
  }

  // Convert from L/100km to target unit
  if (toUnit === 'litersPer100km') {
    return litersPer100km;
  } else if (toUnit === 'kmPerLiter') {
    return 100 / litersPer100km;
  } else if (toUnit === 'milesPerGallon') {
    return 235.214583 / litersPer100km;
  } else if (toUnit === 'milesPerGallonUK') {
    return 282.481 / litersPer100km;
  }

  return 0;
}

// Generic conversion function for linear conversions
export function convert(
  value: number,
  fromUnit: string,
  toUnit: string,
  category: string
): number {
  // Handle special cases
  if (category === 'temperature') {
    return convertTemperature(value, fromUnit, toUnit);
  }
  if (category === 'fuelEconomy') {
    return convertFuelEconomy(value, fromUnit, toUnit);
  }

  const categoryData = conversionData[category];
  if (!categoryData) return 0;

  const fromFactor = categoryData.units[fromUnit]?.toBase;
  const toFactor = categoryData.units[toUnit]?.toBase;

  if (!fromFactor || !toFactor) return 0;

  // Convert to base unit, then to target unit
  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}
