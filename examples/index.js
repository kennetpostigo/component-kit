import React from 'react'
import { render } from 'react-dom';
import './../src/styles/bootstrap.css';
import {
  Cards,
  Panels,
  FooterNavigation,
  Tabs,
  XYAxis,
  Legend,
  BarChart,
  AreaChart,
  LineChart,
  PieChart,
  ScatterPlot,
  TreeMap,
  RadarChart,
  RadialBarChart
} from './../dist/component-kit.js';

var data = [
  {x: 'A', y: .08167},
  {x: 'B', y: .01492},
  {x: 'C', y: .02782},
  {x: 'D', y: .04253},
  {x: 'E', y: .12702},
  {x: 'F', y: .02288},
  {x: 'G', y: .02015},
  {x: 'H', y: .06094},
  {x: 'I', y: .06966},
  {x: 'J', y: .00153},
  {x: 'K', y: .00772},
  {x: 'L', y: .04025},
  {x: 'M', y: .02406},
  {x: 'N', y: .06749},
  {x: 'O', y: .07507},
  {x: 'P', y: .01929},
  {x: 'Q', y: .00095},
  {x: 'R', y: .05987},
  {x: 'S', y: .06327},
  {x: 'T', y: .09056},
  {x: 'U', y: .02758},
  {x: 'V', y: .00978},
  {x: 'W', y: .02360},
  {x: 'X', y: .00150},
  {x: 'Y', y: .01974},
  {x: 'Z', y: .00074}
];
var datay = [
  {x: 1, y: 'a'},
  {x: 2, y: 'b'},
  {x: 3, y: 'c'},
  {x: 4, y: 'd'},
  {x: 5, y: 'e'},
  {x: 6, y: 'f'},
  {x: 7, y: 'g'},
  {x: 8, y: 'h'},
  {x: 9, y: 'i'},
  {x: 10, y: 'j'},
  {x: 11, y: 'k'},
  {x: 12, y: 'l'},
  {x: 13, y: 'm'},
  {x: 14, y: 'n'},
  {x: 15, y: 'o'},
  {x: 16, y: 'p'}
];
var data2 = [
  {x: 'A', y: 20},
  {x: 'B', y: 0},
  {x: 'C', y: 30},
  {x: 'D', y: 45},
  {x: 'E', y: 46},
  {x: 'F', y: 37},
  {x: 'G', y: 20},
  {x: 'H', y: 15},
  {x: 'I', y: 30},
  {x: 'J', y: 11},
  {x: 'K', y: 12},
  {x: 'L', y: 22},
  {x: 'M', y: 23},
  {x: 'N', y: 33},
  {x: 'O', y: 30},
  {x: 'P', y: 44},
  {x: 'Q', y: 40},
  {x: 'R', y: 55},
  {x: 'S', y: 50},
  {x: 'T', y: 66},
  {x: 'U', y: 60},
  {x: 'V', y: 75},
  {x: 'W', y: 70},
  {x: 'X', y: 80},
  {x: 'Y', y: 60},
  {x: 'Z', y: 40},
  {x: 'AA', y: 100},
  {x: 'BB', y: 92},
  {x: 'CC', y: 32},
  {x: 'DD', y: 72},
  {x: 'EE', y: 74},
];

var data3 = [
  {x: 5, y: 63584},
  {x: 10, y: 42839},
  {x: 12, y: 35894},
  {x: 18, y: 58934},
  {x: 25, y: 74323},
  {x: 30, y: 24839},
  {x: 50, y: 12839}
];

var data3Check = [
  {xShit: 5,  yShit: 63584, cShit: 62573, lShit: 62573, aShit: 62573},
  {xShit: 10, yShit: 42839, cShit: 31729, lShit: 31729, aShit: 51729},
  {xShit: 12, yShit: 35894, cShit: 24783, lShit: 24783, aShit: 41729},
  {xShit: 18, yShit: 58934, cShit: 47823, lShit: 47823, aShit: 31729},
  {xShit: 25, yShit: 74323, cShit: 64312, lShit: 64312, aShit: 21729},
  {xShit: 30, yShit: 24839, cShit: 23728, lShit: 23728, aShit: 11729},
  {xShit: 50, yShit: 12839, cShit: 12849, lShit: 12849, aShit: 31929}
];
var data4Check = [
  {xShit: 5,  yShit: 63584, cShit: 62573, lShit: 62573, tshit: 'k1', uShit: 't1'},
  {xShit: 10, yShit: 42839, cShit: 31729, lShit: 51729, tshit: 'k2', uShit: 't2'},
  {xShit: 12, yShit: 35894, cShit: 24783, lShit: 41729, tshit: 'k3', uShit: 't3'},
  {xShit: 18, yShit: 58934, cShit: 47823, lShit: 31729, tshit: 'k4', uShit: 't4'},
  {xShit: 25, yShit: 74323, cShit: 64312, lShit: 21729, tshit: 'k5', uShit: 't5'},
  {xShit: 30, yShit: 24839, cShit: 23728, lShit: 11729, tshit: 'k6', uShit: 't6'},
  {xShit: 50, yShit: 12839, cShit: 12849, lShit: 31929, tshit: 'k7', uShit: 't7'}
];
var color = [
  "#e1eef6","#ff5f2e","#fcbe32","#004e66","#ff7473","#ffc952","#47b8e0",
  "#34314c","#47b8e0","#47b8e0",
];

var data4 = [
  {x: 2001, y: 0, t: 'k1'},
  {x: 2002, y: 30, t: 'k2'},
  {x: 2003, y: 45, t: 'k3'},
  {x: 2004, y: 46, t: 'k1'},
  {x: 2005, y: 37, t: 'k1'},
  {x: 2006, y: 20, t: 'k2'},
  {x: 2007, y: 15, t: 'k2'},
  {x: 2008, y: 30, t: 'k3'}
];

var dataRB = [
  {religion: 'Christian', population: 2173100000},
  {religion: 'Muslim', population: 1598360000},
  {religion: 'Unaffiliated', population: 1126280000},
  {religion: 'Hindu', population: 1032860000},
  {religion: 'Buddhist', population: 487320000},
  {religion: 'Folk Religions', population: 404890000},
  {religion: 'Other Religions', population: 57770000},
  {religion: 'Jewish', population: 173100000},
];

var data5 = {
    "id": "Raphael Varane",
    "data": [
        {
            "skill": "Defending",
            "count": 16
        },
        {
            "skill": "Creativity",
            "count": 10
        },
        {
            "skill": "Attacking",
            "count": 10
        },
        {
            "skill": "Technical",
            "count": 11
        },
        {
            "skill": "Aerial",
            "count": 15
        },
        {
            "skill": "Mental",
            "count": 14
        }
    ]
};

var treeMapData = {
"name": "flare",
"children": [
 {
  "name": "analytics",
  "children": [
   {
    "name": "cluster",
    "children": [
     {"name": "AgglomerativeCluster", "size": 3938},
     {"name": "CommunityStructure", "size": 3812},
     {"name": "HierarchicalCluster", "size": 6714},
     {"name": "MergeEdge", "size": 743}
    ]
   },
   {
    "name": "graph",
    "children": [
     {"name": "BetweennessCentrality", "size": 3534},
     {"name": "LinkDistance", "size": 5731},
     {"name": "MaxFlowMinCut", "size": 7840},
     {"name": "ShortestPaths", "size": 5914},
     {"name": "SpanningTree", "size": 3416}
    ]
   },
   {
    "name": "optimization",
    "children": [
     {"name": "AspectRatioBanker", "size": 7074}
    ]
   }
  ]
 },
 {
  "name": "animate",
  "children": [
   {"name": "Easing", "size": 17010},
   {"name": "FunctionSequence", "size": 5842},
   {
    "name": "interpolate",
    "children": [
     {"name": "ArrayInterpolator", "size": 1983},
     {"name": "ColorInterpolator", "size": 2047},
     {"name": "DateInterpolator", "size": 1375},
     {"name": "Interpolator", "size": 8746},
     {"name": "MatrixInterpolator", "size": 2202},
     {"name": "NumberInterpolator", "size": 1382},
     {"name": "ObjectInterpolator", "size": 1629},
     {"name": "PointInterpolator", "size": 1675},
     {"name": "RectangleInterpolator", "size": 2042}
    ]
   },
   {"name": "ISchedulable", "size": 1041},
   {"name": "Parallel", "size": 5176},
   {"name": "Pause", "size": 449},
   {"name": "Scheduler", "size": 5593},
   {"name": "Sequence", "size": 5534},
   {"name": "Transition", "size": 9201},
   {"name": "Transitioner", "size": 19975},
   {"name": "TransitionEvent", "size": 1116},
   {"name": "Tween", "size": 6006}
  ]
 },
 {
  "name": "data",
  "children": [
   {
    "name": "converters",
    "children": [
     {"name": "Converters", "size": 721},
     {"name": "DelimitedTextConverter", "size": 4294},
     {"name": "GraphMLConverter", "size": 9800},
     {"name": "IDataConverter", "size": 1314},
     {"name": "JSONConverter", "size": 2220}
    ]
   },
   {"name": "DataField", "size": 1759},
   {"name": "DataSchema", "size": 2165},
   {"name": "DataSet", "size": 586},
   {"name": "DataSource", "size": 3331},
   {"name": "DataTable", "size": 772},
   {"name": "DataUtil", "size": 3322}
  ]
 },
 {
  "name": "display",
  "children": [
   {"name": "DirtySprite", "size": 8833},
   {"name": "LineSprite", "size": 1732},
   {"name": "RectSprite", "size": 3623},
   {"name": "TextSprite", "size": 10066}
  ]
 },
 {
  "name": "flex",
  "children": [
   {"name": "FlareVis", "size": 4116}
  ]
 },
 {
  "name": "physics",
  "children": [
   {"name": "DragForce", "size": 1082},
   {"name": "GravityForce", "size": 1336},
   {"name": "IForce", "size": 319},
   {"name": "NBodyForce", "size": 10498},
   {"name": "Particle", "size": 2822},
   {"name": "Simulation", "size": 9983},
   {"name": "Spring", "size": 2213},
   {"name": "SpringForce", "size": 1681}
  ]
 }
]
};

function ComponentOne (props) {
  return (
    <h1>Im Component 1</h1>
  );
}

function ComponentTwo (props) {
  return (
    <h1>Im Component 2</h1>
  );
}

function ComponentThree (props) {
  return (
    <h1>Im Component 3</h1>
  );
}

function App (props) {
  return (
    <div>
      <p>Examples</p>
      <XYAxis xyConfig={{
                width: 350,
                height: 300,
                grid: true,
                gridLines: 'solid',
                data: data3,
                xDataKey: "x",
                yDataKey: "y",
                xLabel: 'x-axis',
                yLabel: 'y-axis',
                xTicks: 5,
                yTicks: 5
              }}>
        <LineChart/>
      </XYAxis>
      <XYAxis width={350}
              height={300}
              data={data3Check}
              xDataKey='xShit'
              yDataKey="yShit"
              grid={false}
              xLabel={'x-axis'}
              yLabel={'y-axis'}
              gridLines={'dashed'}>
        <AreaChart dataKey='cShit' color='#D1B6E1' colorOpacity={1}/>
      </XYAxis>
      <XYAxis width={350}
              height={300}
              data={data3Check}
              xDataKey='xShit'
              yDataKey='yShit'
              grid={true}
              gridLines={'solid'}>
        <AreaChart dataKey='aShit'/>
        <LineChart dataKey='lShit' pointColor="#ffc952" pointBorderColor='#34314c'/>
      </XYAxis>
      <XYAxis width={350}
              height={300}
              data={data4Check}
              xDataKey='xShit'
              yDataKey='yShit'
              grid={true}
              xLabel={'x'}
              yLabel={'y'}
              gridLines={'solid'}
              defaultOrdinal='x'>
        <ScatterPlot dataKey='cShit' colors={['blue']}/>
        <ScatterPlot dataKey='lShit' pointRadius={6} colors={['red']}/>
      </XYAxis>
      <XYAxis width={350}
              height={300}
              data={data}
              grid={true}
              xLabel={'x'}
              yLabel={'y'}
              gridLines={'solid'}>
        <BarChart/>
      </XYAxis>
      <XYAxis width={350}
              height={300}
              data={datay}
              grid={true}
              xLabel={'x'}
              yLabel={'y'}
              gridLines={'solid'}>
        <BarChart/>
      </XYAxis>
      <PieChart width={350}
                height={300}
                radius={150}
                data={data3}
                colors={color}
      />
      <PieChart width={350}
                height={300}
                radius={150}
                donut={2.5}
                data={data3}
                colors={color}
      />
      <RadarChart width={350}
                  height={300}
                  data={data5} />

      <RadialBarChart width={350}
                      height={300}
                      data={dataRB}
                      colors={color}/>

      <TreeMap width={350}
               height={300}
               root={treeMapData}
      />
    </div>
  );
}
render(<App />, document.getElementById('app'));
