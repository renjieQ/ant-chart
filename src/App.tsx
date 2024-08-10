import React from 'react';
import './App.css';
import TreeChart from './TreeChart';
import TreeChartDouble from './TreeChartDouble';
import Relationship from './Relationship';

function App() {
  return (
    <div className='App'>
      <TreeChart />
      <TreeChartDouble />
      <Relationship />
    </div>
  );
}

export default App;
