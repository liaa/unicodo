var React = require('react');
var ReactDOM = require('react-dom');

var unicodes = [
   "↑",
   "→",
   "↓",
   "←",
   "┌",
   "┐",
]

var list = unicodes.map(function(unicode, index){
  return <li key={index} className="b w-100  pal pvxl pvl-ns mega  tc w-25-ns fl border-box">{unicode}</li>;
})
ReactDOM.render(
  <div>
    <p className="tc tl-ns pll-ns plxxl-l gray up"><a className="link ttu f3 blue-pure b" href="https://liaa.github.io/unicodo/">unicodo</a> some useful unicodes.</p>
    <ul className="list pln mtl-ns cf">
      {list}
    </ul>
  </div>,
  document.getElementById('app')
);
