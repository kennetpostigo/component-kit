<p align="center">
  <img align="center" src="component-kit.png" height="250"/>
</p>
> UI-Kit for Rapidly Creating Dashboards

[![version](https://img.shields.io/npm/v/component-kit.svg?style=flat-square)](http://npm.im/component-kit)
[![downloads](https://img.shields.io/npm/dm/component-kit.svg?style=flat-square)](http://npm-stat.com/charts.html?package=component-kit&from=2016-06-13)
[![MIT License](https://img.shields.io/npm/l/component-kit.svg?style=flat-square)](http://opensource.org/licenses/MIT)

I made component-kit a project that mixes both UI and Charting Components. This
makes it easier to get a dashboard up and running in a few minutes cake. This Library
allows you to create charts individually as well as compose them together.

## How it Works
Component-Kit under the hood is powered by React, D3, and React-Faux-DOM. If
you're interested in knowing why I chose these three to power this library keep
reading, otherwise scroll down to the examples. As I began building this Library
I realized that both React and D3 want to be in charge of rendering and updating
the charting components. I knew I wanted to leverage React's efficient rendering
capabilities, but I also wanted to be able to use D3's rich manipulation and selection
functionality. After researching for a little while I discovered React-Faux-DOM,
a library that provides a light-weight object-like DOM that is bare enough to
support all of D3 API and then can be converted to react elements. This gave me
a few benefits. I get to use D3 like anyone normally would without react. Second,
since react is in charge or rendering and updating the view I don't have to think
about how the charts will react to updates in data, essentially can disregard for
the most part D3's General Update Pattern as React will update them accordingly.

## The State of Component-Kit and Whats Next
I've just recently began working on component-kit, so there are a few charting
component that are finished (XYAxis, LineChart, AreaChart, BarChart, PieChart,
RadarChart, ScatterPlot). As of now you can compose the finished charts together
to visualize the same data-set in different ways on the same axes, as well as
compose different data sets on the same axes. What I need to finish is the RadialBarChart,
and TreeMap. Also, I will be adding animation to the charts with `react-motion`.
Most of the Layout components that are included in the library are also finished.
I am also open to taking requests for charts that developers want. Big thanks to @alaingalvan for creating the logo and brand.

## Install
```bash
npm install --save component-kit
```

## examples
Make sure to import the styles for the UI/Layout Portion of `component-kit`. The charting
part of `component-kit` doesn't require the css, but the layout components require it to render properly.
It is essentially just Bootstraps grid system. So if you have bootstrap already on your project
you don't need the css from `component-kit`.
```html
<link rel="stylesheet" href="/node_modules/component-kit/src/styles/main.css">
```
```js
  import {
    XYAxis,
    LineChart,
    AreaChart,
    BarChart,
    PieChart
  } from 'component-kit';

  var data = [
    {x: 5,  y: 63584, l: 62573, a: 62573},
    {x: 10, y: 42839, l: 31729, a: 51729},
    {x: 12, y: 35894, l: 24783, a: 41729},
    {x: 18, y: 58934, l: 47823, a: 31729},
    {x: 25, y: 74323, l: 64312, a: 21729},
    {x: 30, y: 24839, l: 23728, a: 11729},
    {x: 50, y: 12839, l: 12849, a: 31929}
  ];

  // composed Chart
  <XYAxis width={350}
          height={300}
          data={someData}
          xDataKey='x'
          yDataKey='y'
          grid={true}
          gridLines={'solid'}>
    <AreaChart dataKey='a'/>
    <LineChart dataKey='l' pointColor="#ffc952" pointBorderColor='#34314c'/>
  </XYAxis>

  var data2 = [
    {x: 5, y: 63584},
    {x: 10, y: 42839},
    {x: 12, y: 35894},
    {x: 18, y: 58934},
    {x: 25, y: 74323},
    {x: 30, y: 24839},
    {x: 50, y: 12839}
  ];

  //Filled PieChart
  <PieChart width={350}
            height={300}
            radius={150}
            data={data2}
            colors={color}
  />
  //Unfilled center PieChart "Donut Chart"
  <PieChart width={350}
            height={300}
            radius={150}
            donut={2.5} //enter a number of at least 2^ to see the center unfill
            data={data2}
            colors={color}
  />
  var data3 = [
    {x: 'Kennet', y: 18},
    {x: 'Jon', y: 12},
    {x: 'David', y: 16},
    {x: 'Simon', y: 8},
    {x: 'Kendri', y: 20},
    {x: 'SomeGuy', y: 2},
  ];

  <XYAxis width={350}
          height={300}
          data={data3}
          grid={true}
          xLabel={'x'}
          yLabel={'y'}
          gridLines={'solid'}>
    <BarChart/>
  </XYAxis>
```
## License
MIT
