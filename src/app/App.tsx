import React from 'react';
import AppRouter from './Router';
import { useGetProjects } from '../components/libs/hooks/useGetProjects';

function App() {
  useGetProjects()

  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
