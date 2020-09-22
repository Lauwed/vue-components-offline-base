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
