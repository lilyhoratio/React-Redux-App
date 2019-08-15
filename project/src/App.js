import React from 'react';
import LocationForm from './components/LocationForm'
import { getData } from './actions'
// import LocationBookmarks from './components/LocationBookmarks'
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  console.log("app props", props)
  return (
    <div className="App">
      {/* <LocationBookmarks /> */}
      <LocationForm getData={getData} />
      <h1>{props.state.test}</h1>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, { getData })(App)
