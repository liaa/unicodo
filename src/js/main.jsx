var React = require('react');
var ReactDOM = require('react-dom');

var HTTPRequest = require('request');

function success( data){
  print('success', data)
}

// JS
// 1. 做网络请求
// 2. 页面操作了
var unicodes = [
   "↑",
   "→",
   "↓",
   "←",
   "¥",
   "$",
   "┌",
   "┐",
]

var list = unicodes.map(function(unicode, index){
  return <li key={index} className="b w-100  pal pvxl pvl-ns mega  tc w-25-ns fl border-box">{unicode}</li>;
})
ReactDOM.render(
  <div>
    <div className="tc tl-ns pll-ns plxxl-l">
    <p className="up"><a className="link ttu f2 blue-pure b" href="https://liaa.github.io/unicodo/">unicodo</a></p>
    <p className="man gray">some useful unicodes</p>
    <p className="man"><a href="https://github.com/liaa/unicodo/issues/new" target="_blank" className="link gray">submit →</a></p>
    </div>
    <ul className="list pln mtl-ns cf">
      {list}
    </ul>
  </div>,
  document.getElementById('app')
);

document.getElementById('app').addEventListener('click',function(){
  hello();
});
