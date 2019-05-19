import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const sayBoom = () => {
  alert('boom!')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sayBoom} />
  </div>,
  document.getElementById('root')
);