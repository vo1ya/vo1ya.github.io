const baseUrl = 'https://restcountries.com/v3.1/lang/';
const countriesList = document.querySelector('.countries-list');

document.querySelectorAll('.lang-list__item').forEach(item => {
    if (document.querySelectorAll('.lang-list__item')) {
        const node = document.querySelector('.tile');
        const list = document.querySelectorAll('.lang-list__item')
        list.forEach(item => {
            item.addEventListener('click', (e) => {
                list.forEach(el => {
                    el.classList.remove('active');
                });
                item.classList.add('active');
                const lang = item.id;
                console.log(lang);
                getCountries(e.target.id);
            })
        })
    }
})

function getCountries(lang) {
    fetch(baseUrl + lang).then((response) => {
        return response.json();
    }).then((data) => {
        let countries = data;
        countriesList.innerHTML = '';
        countries.map(function(country) {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let capital = document.createElement('h3');
            name.innerHTML = `${country.name['common']}`;
            capital.innerHTML = `${country.capital}`;
            console.log(country)
            li.classList.add('tile__item');
            li.style.background = `url(${country.flags['png']}) top center / cover`;
            li.appendChild(name);
            li.appendChild(capital);
            countriesList.appendChild(li);
        });
    }).catch(function(error) {
        console.log(error);
    });
}
