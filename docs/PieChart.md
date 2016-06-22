# `<PieChar/>`

Component Renders a circle is divided into sectors that each represent a proportion of the whole. (set it to Donut chart by passing in donut prop)

### Props

#### `width <String> || <Number>`
The width you want to set the chart too. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down it's width.

#### `height <String> || <Number>`
The height you want to set the chart too. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down it's height.

#### `radius <Number>`
a straight line from the center to the circumference of a circle.

#### `data <Array>`
The data you want to the chart to use. If used within [`<XYAxis/>`](XYAxis.md) you don't set this prop as `<XYAxis/>` will pass down the data.

#### `dataKey <String> || <Number>`
A key on the `data` prop for which to use to draw the `PieChart`. This prop has to be set. if not set it will default to the `yDataKey` on the `<XYAxis/>`.

#### `labelKey <String> || <Number>`
A key on the `data` prop for which to use to label the slices of the `PieChart`. This prop has to be set. if not set it will default to the `xDataKey` on the `<XYAxis/>`.

#### `colors <Array>`
The color that you want the points of the ScatterPlot to have.

#### `textColor <String>`
The color you want the text on the `PieChart` to be.

#### `donut <Number>`
This property is used to turn the PieChart into a donut chart. It takes a number and should be at least 2.5 or larger to make the center of the chart unfill.

### Examples
```js

```
