// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const {BrowserWindow} = require('electron').remote
const path = require('path')

const package = document.getElementById('packageLoader')

package.addEventListener('change', (event) => {
  const modalPath = package.files[0].path;
  // let win = new BrowserWindow({ width: 800, height: 600 })

  // win.on('close', () => { win = null })
  // win.loadURL(modalPath)
  // win.show()
  let parent = document.getElementById('frame');
  let frame = document.createElement('iframe');
  frame.setAttribute('src', modalPath)
  frame.setAttribute('width', 800);
  frame.setAttribute('height', 600);
  parent.appendChild(frame);

});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});