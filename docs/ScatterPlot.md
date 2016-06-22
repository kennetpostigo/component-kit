# `<ScatterPlot/>`

Component Renders a plot based on one or many datasets.

### Props

#### `width <String> || <Number>`
The width you want to set the chart too. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down it's width.

#### `height <String> || <Number>`
The height you want to set the chart too. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down it's height.

#### `data <Array>`
The data you want to the chart to use. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down the data.

#### `dataKey <String> || <Number>`
A key on the `data` prop for which to use to draw the `ScatterPlot`. This prop has to be set. if not set it will default to the `yDataKey` on the `<XYAxis/>`.

#### `scatterKey <String> || <Number>`
ScatterPlot's can be used to display lots of data on one plane. Sometimes its to see how groups of data are different from each other, and other times to see how one group of data fluctuates. scatterKey is optional but should be used for differentiating between 2 groups of data. i.e. the percentage of people who prefer dessert over dinner and scatterKey would be 'desert' and 'dinner' each of which would have their own color to differentiate.

#### `pointRadius <Number>`
The radius that you want the Points on the ScatterPlot to have.

#### `colors <Array>`
The color that you want the points of the ScatterPlot to have.

### Examples
```js

```
