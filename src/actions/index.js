import axios from "axios";

export const getCountries = () => dispatch => {
    dispatch({type: "GET_COUNTRIES_START"})
    axios
    .get("https://restcountries.eu/rest/v2/all") // bu adrese istek gonderdik
    .then(response => dispatch({ type: "GET_COUNTRIES_SUCCESS", payload: response.data })) //olumlu donerse
    .catch(error => dispatch({ type: "GET_COUNTRIES_ERROR", payload: error })); //olumsuz donerse
}