import React from 'react';
import Sidebar from './components/Sidebar';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="root">
      <Sidebar />
    </div>
  );
};

export default App;
