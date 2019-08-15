import React from 'react';
import LocationForm from './components/LocationForm'
import Location from './components/Location'
import { getData } from './actions'
// import LocationBookmarks from './components/LocationBookmarks'
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  console.log("app props", props)
  return (
    <div className="App">
      {/* <LocationBookmarks /> */}
      <LocationForm getData={props.getData} />
      {/* { props.isLoading ? <Loader />} : <Location /> */}
      <Location isLoading={props.isLoading} weatherData={props.weatherData} test={props.test} />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    weatherData: state.weatherData,
    test: state.test
  }
}
export default connect(mapStateToProps, { getData })(App)
