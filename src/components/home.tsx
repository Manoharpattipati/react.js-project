import React from 'react';
import { connect } from 'react-redux';

interface HomeProps {
  counter: number;
}

const Home: React.FC<HomeProps> = ({ counter }) => {
  return (
    <div>
      <h2>Counter Value: {counter}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Home);
