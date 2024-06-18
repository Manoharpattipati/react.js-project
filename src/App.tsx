import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/dataactions.ts'; // Corrected import path
import MyComponent from './components/mycomponent.tsx';
import Home from './components/home.tsx';
import About from './components/about.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootState } from './types/state';
// Importing styles
import './App.css';
import { inc, dec } from './actions/action.ts'; // Corrected import path

interface DataType {
  id: number;
  name: string;
}

interface AppProps {
  data: DataType[];
  fetchData: () => void;
  inc: () => void;
  dec: () => void;
  counter: number; // Added this line
}

function App({ data, fetchData, inc, dec, counter }: AppProps) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Router>
      <div>
        <img src='./assets/react.svg' alt='React Logo' />
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} /> {/* Catch-all route */}
        <Route
          path='/data'
          element={
            <React.Fragment>
              <MyComponent />
              {data.map(item => (
                <React.Fragment key={item.id}>{item.name}</React.Fragment>
              ))}
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state: RootState) => ({
  data: state.dataReducer.data,
});

const mapDispatchToProps = {
  fetchData,
  inc,
  dec,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
