const baseUrl = 'https://restcountries.com/v3.1/lang/';
const countriesList = document.querySelector('.countries-list');

function getCountries(lang) {
    fetch(baseUrl + lang)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let countries = data;
      countriesList.innerHTML = '';
      countries.map(function(country) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        name.innerHTML = `${country.name['common']} [${country.capital}]`;
        console.log(country)
        li.classList.add('tile');
        li.style.background = `url(${country.flags['png']}) top center / cover`;
        li.appendChild(name);        
        countriesList.appendChild(li);
    });
    })
    .catch(function(error) {
      console.log(error);
    });

    
}

document.querySelectorAll('.lang-list').forEach(item => {
    if (document.querySelectorAll('.lang-list')) {
        item.addEventListener('click', e => {
            document.querySelectorAll('.lang-list li').forEach(el => { el.classList.remove('active'); });
            e.target.classList.add('active');
            getCountries(e.target.id);
        });
    }    
});