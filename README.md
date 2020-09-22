# vue-components-offline-base
Base of a Vue bundle that we can use without CDN or CLI installation.

Component `Chart` already include.

## How to use

### Start a HTTP server

In case of fetch use, start a basic HTTP server

`$ http-server`

### Watch the SASS files

In the `assets` directory.
* The option `--watch` is for watching any changes in SASS files
* The option `compressed` is for having a compressed CSS file.

```
$ cd assets
$ sass --watch sass/style.scss:style.css --style compressed
```

## Chart component

![Example Chart component](https://i.ibb.co/bQ47nr2/Screenshot-2020-09-22-at-20-33-06.png)

### Data object needed

The object used to display the charts is an array that contains objects.
```
[
  {
      id: 1,
      title: 'test',
      rows: [
          {
              id: 1,
              name: 'banana',
              value: 50
          },
          {
              id: 2,
              name: 'orage',
              value: 20
          },
          {
              id: 3,
              name: 'strawberry',
              value: 80
          }
      ]
  },
  {
      id: 2,
      title: 'test',
      rows: [
          {
              id: 1,
              name: 'banana',
              value: 50
          },
          {
              id: 2,
              name: 'orage',
              value: 20
          },
          {
              id: 3,
              name: 'strawberry',
              value: 80
          }
      ]
  }
]
```

Then this array has to be given by the `:groups` attribute

`<ChartBars :groups="randomNumbers" />`
