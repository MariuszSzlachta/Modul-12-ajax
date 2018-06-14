var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

var template = document.getElementById('template').innerHTML;

Mustache.parse(template);
var renderedTemplates = '';


document.getElementById('search').addEventListener('click', function(){
  renderedTemplates = '';
  searchCountries();
});

document.getElementById('country-name').addEventListener('change', function(){
  renderedTemplates = '';
  searchCountries();
});

document.getElementById('country-name').addEventListener('keyup', function(){
  renderedTemplates = '';
  searchCountries();
});


function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if (!countryName.length) countryName = 'Poland';

  fetch(url + countryName)
    .then(function (resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
  resp.forEach(function (item) {
    console.log(resp);
    item.currencies = item.currencies.join (', ');
    item.timezones = item.timezones.join(', ');
    item.borders = item.borders.join(', ');
    renderedTemplates += Mustache.render(template, item);
  });
  countriesList.innerHTML = renderedTemplates;
}