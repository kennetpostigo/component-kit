# `<Responsive />`

Component Wraps Charting Components and makes them Responsive and Mobile-Friendly.

### Props

#### `width <String> || <Number>`
The initial width of the content you want to display.

#### `height <String> || <Number>`
The initial height of the content you want to display.

### Examples
```js
<Responsive width={800} height={500}>
  <XYAxis data={data}
          xDataKey='x'
          yDataKey='y'
          grid={true}
          gridLines={'solid'}>
    <AreaChart dataKey='a'/>
    <LineChart dataKey='l' pointColor="#ffc952" pointBorderColor='#34314c'/>
  </XYAxis>
</Responsive>
```
