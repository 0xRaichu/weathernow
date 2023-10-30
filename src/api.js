export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd07b02a6afmsh9ce288894da9719p1ff40djsn67b4baaffacd',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

fetch('/cities', geoApiOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));