# corespring-pie-es6-demo

An es6 based html component. It is a custom element that renders a react component inside itself.

## Install

```shell
npm install
```

## Demo 

```shell
webpack
python -m SimpleHTTPServer
go to: http://localhost:8000
```

# Pie sample

This is what a pie will need: 

## package.json
```json
{
  "dependencies": {
    "corespring-pie-es6-demo": "git@github.com:PieLabs/corespring-pie-es6-demo.git"
  }
}
```

## root.js
```javascript
import {CorespringPieEs6Demo} from 'corespring-pie-es6-demo';
document.registerElement('corespring-pie-es6-demo', CorespringPieEs6Demo);
```



