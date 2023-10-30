import React from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { useState } from 'react';
import { GEO_API_URL, geoApiOptions } from '../../api'; // Here, we import both the api URL and "geoApiOptions" function

// the "onSearchChange" is a function that is passed from the parent component as a props
const Search = ({onSearchChange}) => {
  
  const [search, setSearch] = useState(null);

  // The "loadOptions" is a arrow function and it takes the value that we write in searchbox and search for similar items
  const loadOptions = (inputValue) => {

    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions) // The "minPopulation" help us to fetch only those cities that have minimum population of 1000000 and namePrefix help us to fetch only those cities that name starts with the value of "inputValue"

    .then(response => response.json()) // Once we get the response the then we map the response to the json
    .then(response => {
      return {

        // The options property is an array of these city objects, which can be used in components like AsyncPaginate to display the available options for the user to select from.

        // The result of this .then() block is an object with an options property, where each option represents a city. 
        options: response.data.map((city) => {

          // response.data is an array of city data returned by the API and .map() is a JavaScript array method used to iterate through each element of the data array. In this case, it iterates through each city object in the array. Inside the .map() function, a new object is created for each city. This new object has two properties: value and label.

          return {
            value: `${city.latitude} ${city.longitude}`, // value is constructed by concatenating the city's latitude and longitude values with a space in between.

            label: `${city.name}, ${city.countryCode}`, // label is created by combining the city's name and country code with a comma and a space in between.

          }
        })
      }
    })
    .catch(err => console.error(err));
  }

  // The "handleOnChange" is a arrow function
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData); //Called the "onSearchChange" function
  }
  return (

    // AsyncPaginate handles searches for cities
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} // this particular attribute help us to load Similar cities based on searched query(Like if you type "in" then it automatically shows "india", "indiano", etc...)
    />
  )
}

export default Search
