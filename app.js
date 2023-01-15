AOS.init();
const container = document.querySelector('.container');

fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(data => {
    data.forEach((digimon) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-aos', 'zoom-out-down');
      let name = document.createElement('h2');
      let img = document.createElement('img');
      name.innerHTML = `<span>${digimon.name}</span>`;
      img.src = digimon.img;
      img.alt = 'digimon';
      card.appendChild(name);
      card.appendChild(img);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.log(error);
  });