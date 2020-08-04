import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
});

const fetchAllCountries = () =>
  new Promise((resolve, reject) => {
    return axiosInstance
      .get('/all')
      .then((response) => {
        const countries = response.data;
        resolve(countries);
      })
      .catch((error) => reject(error));
  });

const fetchSingleCountryByCode = (code) =>
  new Promise((resolve, reject) => {
    return axiosInstance
      .get(`/alpha/${code}`)
      .then((response) => {
        const countries = response.data;
        resolve(countries);
      })
      .catch((error) => reject(error));
  });

const fetchSingleCountryByRegion = (region) =>
  new Promise((resolve, reject) => {
    return axiosInstance
      .get(`/region/${region}`)
      .then((response) => {
        const countries = response.data;
        resolve(countries);
      })
      .catch((error) => reject(error));
  });

export {
  fetchAllCountries,
  fetchSingleCountryByCode,
  fetchSingleCountryByRegion,
};
