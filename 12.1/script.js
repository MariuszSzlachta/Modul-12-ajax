var button = document.querySelector('.get-joke');
var output = document.querySelector('.joke');

var url = 'http://api.icndb.com/jokes/random';

button.addEventListener('click', function(){
  getJoke();
});

function getJoke(){
  // nowa instancja obiektu:
  var xhr = new XMLHttpRequest();
  // open - nawiązanie polaczenia -> (metoda, adres)
  xhr.open('GET', url);
  // listener na nasłuch odpowiedzi:
  xhr.addEventListener('load', function(){
    //parsowanie odpowiedzi xhr.response to odpowiedz ona jako parametr  
    var response = JSON.parse(xhr.response)
    output.innerHTML = response.value.joke;
  });
  // wysłanie
  xhr.send();
}
// dla chętnych:
window.addEventListener('load', function(){
  getJoke();
})