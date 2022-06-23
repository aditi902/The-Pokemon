const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=1; i<=182; i++){

    
    const myPokemon = document.createElement('div');
    myPokemon.classList.add('myPokemon');
    container.appendChild(myPokemon);

    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`
    myPokemon.appendChild(newImg);     

    const number = document.createElement('span');
    number.innerText = `#${i}`;
    myPokemon.appendChild(number);
    
}