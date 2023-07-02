// <li class="tile__item">
            
// https://restcountries.com/v3.1/lang/spanish


// const _apiBase = 'https://restcountries.com/v3.1/lang';

// const getResource = async (url) => {
// const res = await fetch(`${this._apiBase}${url}`);

// if (!res.ok) {
//     throw new Error(`Could not fetch ${url}` +
//     `, received ${res.status}`)
// }
// return await res.json();
// };



// const _transformCountry = (country) => {
//     return {
//       id: country.id,
//       name: country.name,
//       capital: country.captial,
//       flag: country.flag
//     };
//   };


// const getCountries = async () => {
//     const res = await this.getResource(`/${country}/`);
//     return res.results.map(this._transformCountry);
//   };







const baseUrl = 'https://restcountries.com/v3.1/lang/rus';

let countriesList = document.querySelector('.tile');




function getCountries(lang) {
    fetch(baseUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    console.log(data[0].name['common'])

      let countries = data;

      countries.map(function(country) {
        let li = document.createElement('li');
        let name = document.createElement('h2');

        name.innerHTML = `${country.name['common']}`;

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
        const node = document.querySelector('.tile');
        // node.parentNode.removeChild(node);

        item.addEventListener('click', e => {
            e.target.classList.add('active');
            getCountries(e.target.id);
        });
    }
    
});

    
getCountries('spanish');