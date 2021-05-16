import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux'
import { getCountries } from './actions/index'

const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {props.isLoading ? (<img style={{width:100, height:100}} src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340" alt="Loading"/>) : props.countries.map(country => {
        return (
          <div key={country.name}>
            <hr />
            <h3>Ülke adı: {country.name}</h3>
            <h4>Ülkenin başkenti: {country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { getCountries })(App);