// let searchInput = document.querySelector('input');
// let placesBoxes = document.getElementsByClassName('places__box');

// for (const box of placesBoxes) {
//   box.addEventListener('click', () => {
//     const currentCity = box.id;
//     console.log(currentCity);
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=c0734420e480e99c74ca1919537e7afe`)
//     .then(response => response.json())
//     .then(data => {
//       console.log('This is API response',data);
//       // alert('byleco');
//       // let country = data.city.country
//       // let name = data.city.name
//       // let population = data.city.population
//       // let pressure = data.list[0].main.pressure
//       // location.href = '/weather.html';
//       // console.log('ASD',data);
//       // let test = document.getElementsByClassName('jakasKlasa');
//       // test.innerHTML = `Kraj: ${country}`
//       // test.insertAdjacentHTML("afterbegin", `<h2>Nazwa miasta: ${name}</h2>`)
//       // test.insertAdjacentHTML("afterbegin", `<h2>Populacja: ${population} mieszkańców</h2>`)
//       // test.insertAdjacentHTML("afterbegin", `<h2>hPa: ${pressure}</h2>`)
//       asd(data)
//       return data
//     })
//     .catch(error => console.error(error))
//   });
// }

// const asd = (WeatherResponse) => {
//   let country = data.city.country
//   let name = data.city.name
//   let population = data.city.population
//   let pressure = data.list[0].main.pressure
//   location.href = '/weather.html';
//   console.log('ASD',data);
//   let test = document.getElementsByClassName('jakasKlasa');
//   test.innerHTML = `Kraj: ${country}`
//   test.insertAdjacentHTML("afterbegin", `<h2>Nazwa miasta: ${name}</h2>`)
//   test.insertAdjacentHTML("afterbegin", `<h2>Populacja: ${population} mieszkańców</h2>`)
//   test.insertAdjacentHTML("afterbegin", `<h2>hPa: ${pressure}</h2>`)
// }

// // const searchCity = () => {
// //     if (searchInput.value !== '') {
// //     console.log(searchInput.value)
// //     } else {
// //       alert('Wpisz nazwę miasta!')
// //     }
// //   }

// // const enterKeyCheck = (e) => {
// //     if(e.key === 'Enter') {
// //       searchCity()
// //     }
// //   }

// // searchInput.addEventListener('keyup', enterKeyCheck)

// // https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c0734420e480e99c74ca1919537e7afe

// // api.openweathermap.org/data/2.5/forecast?q=$CITY_NAME&appid=c0734420e480e99c74ca1919537e7afe