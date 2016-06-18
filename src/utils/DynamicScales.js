var data2 = [
  {x: 1999, y: 20},
  {x: 2001, y: 0},
  {x: 2002, y: 30},
  {x: 2003, y: 45},
  {x: 2004, y: 46},
  {x: 2005, y: 37},
  {x: 2006, y: 20},
  {x: 2007, y: 15},
  {x: 2008, y: 30},
  {x: 2009, y: 11},
  {x: 2010, y: 12},
  {x: 2011, y: 22},
  {x: 2012, y: 23},
  {x: 2013, y: 33},
  {x: 2014, y: 30},
  {x: 2015, y: 44},
  {x: 2016, y: 40},
  {x: 2017, y: 55},
  {x: 2018, y: 50},
  {x: 2019, y: 66},
  {x: 2020, y: 60},
  {x: 2021, y: 75},
  {x: 2022, y: 70},
  {x: 2023, y: 80},
  {x: 2024, y: 60},
  {x: 2025, y: 40},
  {x: 2026, y: 100},
  {x: 2027, y: 92},
  {x: 2028, y: 32},
  {x: 2029, y: 72},
  {x: 2030, y: 74},
];

export function determineScales (data, xDataKey, yDataKey, defaultOrdinal) {
  var ix = [],iy = [],
      sx = [],sy = [],
      x,y;

  data.map((datum, key) => {
    if ((datum[xDataKey] === undefined || datum[xDataKey] === null )|| (datum[yDataKey] === null || datum[yDataKey] == undefined)) {
      console.error(`Some of your data contains 'null' or 'undefined' values at index ${key}`);
    }
    if (typeof datum[xDataKey] === 'string') {
      sx.push(datum[xDataKey]);
    } else {
      ix.push(datum[xDataKey]);
    }
    if (typeof datum[yDataKey] === 'string') {
      sy.push(datum[yDataKey]);
    } else {
      iy.push(datum[yDataKey]);
    }
  });

  if (ix > sx) {
    x = 'linear';
  } else {
    x = 'ordinal';
  }

  if (iy > sy) {
    y = 'linear';
  } else {
    y = 'ordinal';
  }

  if (defaultOrdinal === 'x') {
    return {x: 'ordinal', y};
  } else if (defaultOrdinal === 'y'){
    return {x, y: 'ordinal'};
  } else if (defaultOrdinal === 'xy') {
    return {x: 'ordinal', y: 'ordinal'};
  } else {
    return {x, y};
  }
}
