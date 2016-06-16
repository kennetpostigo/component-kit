import React from 'react'
import { Cards } from './../dist/component-kit.js';
import { Panels } from './../dist/component-kit.js';
import { FooterNavigation } from './../dist/component-kit.js';
import { BarChart } from './../dist/component-kit.js';
import { AreaChart } from './../dist/component-kit.js';
import { LineChart } from './../dist/component-kit.js';
import { PieChart } from './../dist/component-kit.js';
import { ScatterPlot } from './../dist/component-kit.js';
import { TreeMap } from './../dist/component-kit.js';
import { render } from 'react-dom';
import './../src/styles/bootstrap.css';

var data = [
  {name: 'A', value: .08167},
  {name: 'B', value: .01492},
  {name: 'C', value: .02782},
  {name: 'D', value: .04253},
  {name: 'E', value: .12702},
  {name: 'F', value: .02288},
  {name: 'G', value: .02015},
  {name: 'H', value: .06094},
  {name: 'I', value: .06966},
  {name: 'J', value: .00153},
  {name: 'K', value: .00772},
  {name: 'L', value: .04025},
  {name: 'M', value: .02406},
  {name: 'N', value: .06749},
  {name: 'O', value: .07507},
  {name: 'P', value: .01929},
  {name: 'Q', value: .00095},
  {name: 'R', value: .05987},
  {name: 'S', value: .06327},
  {name: 'T', value: .09056},
  {name: 'U', value: .02758},
  {name: 'V', value: .00978},
  {name: 'W', value: .02360},
  {name: 'X', value: .00150},
  {name: 'Y', value: .01974},
  {name: 'Z', value: .00074}
];

var data2 = [
  {x: 2001, y: 0},
  {x: 2002, y: 30},
  {x: 2003, y: 45},
  {x: 2004, y: 46},
  {x: 2005, y: 37},
  {x: 2006, y: 20},
  {x: 2007, y: 15},
  {x: 2008, y: 30}
]

var data3 = [
  {x: 5, y: 63584},
  {x: 10, y: 42839},
  {x: 12, y: 35894},
  {x: 18, y: 58934},
  {x: 25, y: 74323},
  {x: 30, y: 24839},
  {x: 50, y: 12839}
]

var data4 = [
  {x: 2001, y: 0, t: 'k1'},
  {x: 2002, y: 30, t: 'k2'},
  {x: 2003, y: 45, t: 'k3'},
  {x: 2004, y: 46, t: 'k1'},
  {x: 2005, y: 37, t: 'k1'},
  {x: 2006, y: 20, t: 'k2'},
  {x: 2007, y: 15, t: 'k2'},
  {x: 2008, y: 30, t: 'k3'}
]

var color = [
  "#98abc5",
  "#8a89a6",
  "#7b6888",
  "#6b486b",
  "#a05d56",
  "#d0743c",
  "#ff8c00"
 ]

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

function App (props) {
  return (
    <div>
      <p>Examples</p>
      <BarChart width={350}
                height={300}
                data={data}
      />
      <br />
      <AreaChart width={350}
                 height={300}
                 data={data2}
      />
      <br />
      <LineChart width={350}
                 height={300}
                 data={data2}
      />
      <br />
      <PieChart width={350}
                height={300}
                radius={150}
                data={data3}
                colors={color}
      />
      <PieChart width={350}
                height={300}
                radius={150}
                donut={2}
                data={data3}
                colors={color}
      />
      <br />
      <ScatterPlot width={350}
                   height={300}
                   data={data4}
       />
      <br />
      <TreeMap width={350}
               height={300}
               root={treeMapData}
      />
      <br />
      <br />
      <br />
      <Cards imgURI="http://placehold.it/300x200"
             width={300}
             height={350}
             imgHeight={200}
             imgWidth={300}>
        <h3>Kangaroo Valley Safari</h3>
        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
      </Cards>
      <br />
      <br />
      <Cards imgURI="http://placehold.it/300x200"
             width={300}
             height={350}
             imgHeight={200}
             imgWidth={300}
             header="Kangaroo Valey Safari"
             detail="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
             links={[
               {
                 href: 'http://google.com',
                 title: 'google'
               },
               {
                 href: 'http://facebook.com',
                 title: 'facebook'
               }
             ]}>
      </Cards>
      <br />
      <br />
      <Panels title="Panel Construction">
        <ul>
          <li>Barbados</li>
          <li>Bolivia</li>
          <li>Brazil</li>
        </ul>
      </Panels>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterNavigation
        views={[
          {
            link: 'http://google.com',
            icon: 'ion-social-google',
            title: 'google'
          },
          {
            link: 'http://facebook.com',
            icon: 'ion-social-facebook',
            title: 'facebook'
          },
          {
            link: 'http://twitter.com',
            icon: 'ion-social-twitter',
            title: 'twitter'
          }
        ]}
      />
      <br />
    </div>
  );
}

render(<App />, document.getElementById('app'));
