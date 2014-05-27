slate.configAll({
  'defaultToCurrentScreen': true,
  'checkDefaultsOnLoad': true
});

var layout = {
  maximize: S.op('move', {
    'x' : 'screenOriginX',
    'y' : 'screenOriginY',
    'width' : 'screenSizeX',
    'height' : 'screenSizeY'
  }),

  pushRight: S.op('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushLeft: S.op('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushTop: slate.operation("push", {
    "direction" : "top",
    "style" : "bar-resize:screenSizeY/2"
  }),

  pushBottom: slate.operation("push", {
    "direction" : "bottom",
    "style" : "bar-resize:screenSizeY/2"
  })
};

var operations = {
  throw0: S.op('throw', {
    'screen': '0',
    'width': 'screenSizeX',
    'height': 'screenSizeY'
  }),

  throw1: S.op('throw', {
    'screen' : '1',
    'width' : 'screenSizeX',
    'height' : 'screenSizeY'
  })
};

slate.bindAll({
  // Directionals
  'up:ctrl,alt,cmd,shift': layout.maximize,
  'up:ctrl,cmd,alt': layout.pushTop,
  'down:ctrl,cmd,alt': layout.pushBottom,
  'right:ctrl,cmd,alt': layout.pushRight,
  'left:ctrl,cmd,alt': layout.pushLeft,
  '[:ctrl,cmd,alt': operations.throw0,
  ']:ctrl,cmd,alt': operations.throw1
});
