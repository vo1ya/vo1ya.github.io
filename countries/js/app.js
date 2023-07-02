const baseUrl = 'https://restcountries.com/v3.1/lang/';

let countriesList = document.querySelector('.tile');

document.querySelectorAll('.lang-list__item').forEach(item => {
  if (document.querySelectorAll('.lang-list__item')) {
      const node = document.querySelector('.tile');

      const list = document.querySelectorAll('.lang-list__item')
      list.forEach(item =>{ 
             item.addEventListener('click', (e) =>{
             list.forEach(el=>{ el.classList.remove('active'); });
             item.classList.add('active')
             const langId = item.id;
             console.log(langId)
             getCountries(e.target.id)
         })
     })
    }})

function getCountries(langId) {
    fetch(baseUrl + langId)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    // console.log(data[0].name['common'])

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



getCountries(langId);