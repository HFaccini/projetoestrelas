const imagens = document.querySelectorAll('img');
const nome = document.querySelectorAll('.nomeDoPersonagem');

const numeroMaximoDePersonagens=671;

generateRandomNumber = () => {
    return Math.floor(Math.random()*numeroMaximoDePersonagens);
}

getCharacter =  (imagem, characterName) => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then ((response)=> response.json()).then((data)=>{
        imagem.src = data.image;
        imagem.alt = 'Imagem do Personagem' + data.name;

        characterName.innerHTML= data.name;
        characterName= 'Nome do Personagem' + data.name;
    })
}

fourCharacter = () => {
    for (var i = 0; i < 5; i++) {
        this.getCharacter(imagens.item(i), nome.item(i));
    }
}

window.onload = fourCharacter;