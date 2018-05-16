import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeEditor from './codeEditor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CodeEditor />, document.getElementById('root'));
registerServiceWorker();
