var React = require('react');
var ReactDOM = require('react-dom');

var unicodes = [
  "↑ Up arrow",
  "→ Right arrow",
  "↓ Down arrow",
  "← Left arrow",
  //"┌ ",
  //"┐ ",
  " Apple",
  "⌘ Command",
  "⌥ Option",
  "⇪ Caps Lock",
  "⇧ Shift",
  "⌃ Control",
  "␣ Space",
  "⏎  Return",
  "↩ Return",
  "⎋ Escape",
]

var list = unicodes.map(function(unicode, index){
  var code = unicode.slice(0,1);
  var name = unicode.slice(1);
  return (
    <li className="Unicode b w-100  pal pvxl  w-25-ns fl border-box" key={index}>
      <div className="dt w-100 tc">
        <div className="dtr mega ">
          <div className="dtc">
            <p className="man lh-solid">
              {code}
            </p>
          </div>
        </div>
        <div className="dtr">
          <div className="thin dtc ptm black-40">
            <p className="man">
              {name}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
})
ReactDOM.render(
  <div className="">
    <div className="tc tl-ns pll-ns plxxl-l">
    <p className="up"><a className="link ttu f3 blue-pure b" href="https://liaa.github.io/unicodo/">unicodo</a></p>
    <p className="man gray">some useful unicodes</p>
    <p className="man"><a href="https://github.com/liaa/unicodo" target="_blank" className="link gray">submit →</a></p>
    </div>
    <ul className="list pln mtl-ns cf">
      {list}
    </ul>
  </div>,
  document.getElementById('app')
);
