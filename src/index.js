
let header = document.querySelector('header')
let img = document.querySelector('.carousel-item > img');
let btnAutoB = document.querySelector('#autoBack');
let btnBack =  document.querySelector('#back');
let btnStop = document.querySelector('#stop');
let btnFowar = document.querySelector('#forwar');
let btnAforwar = document.querySelector('#autoForwar'); 
let inter;
let amountPokemons = 898;
let index = 0;

//buscador
let input = document.querySelector('.form-control')
let btnBuscar =  document.querySelector('#btn-search');


//lista
let div = document.querySelector('#lista')

// fetch de los botones
async function dFetch(API) {
    try {
        let response = await fetch(API);
        let pokemons = await response.json();
        //manipulación del DOM
        img.src = pokemons.sprites.front_default;
        document.querySelectorAll('header > h2').forEach(h2 => h2.remove())
        let h2 = document.createElement('h2');
        h2.innerText = pokemons.name
        header.append(h2);
        //vaciando lista
        div.innerText = "";
        //crendo una lista
        let ul = document.createElement('ul')
        let type = document.createElement('li');
        let skills = document.createElement('li');
        let hp = document.createElement('li');
        let attack = document.createElement('li');
        let specialAttack = document.createElement('li');
        let defense = document.createElement('li');
        let specialDefense = document.createElement('li');
        let speed = document.createElement('li');
        //style
        ul.className = "ul-list";
        type.className = "list-group-item list-group-item-dark";
        skills.className = "list-group-item list-group-item-warning";
        hp.className = "list-group-item list-group-item-success";
        attack.className = "list-group-item list-group-item-danger";
        specialAttack.className = "list-group-item list-group-item-danger";
        defense.className = "list-group-item list-group-item-info";
        specialDefense.className = "list-group-item list-group-item-info";
        speed.className = "list-group-item list-group-item-primary";
        //insertando
        ul.append(type, skills, hp, attack, specialAttack, defense, specialDefense, speed)
        div.append(ul)
        //
        type.innerText = `TYPE:  --->  "${pokemons.types.map(obj => type.innerText = `  ${obj.type.name}`)}"`;
        skills.innerText = `SKILLS: ---> "${pokemons.abilities.map(obj => skills.innerText = `  ${obj.ability.name}`)}"`;
        hp.innerText = `HP: ---> "${pokemons.stats[0].base_stat}"`;
        attack.innerText = `ATTACK: ---> "${pokemons.stats[1].base_stat}"`;
        specialAttack.innerText = `SPECIAL ATTACK: ---> "${pokemons.stats[3].base_stat}"`;
        defense.innerText = `DEFENSE: ---> "${pokemons.stats[2].base_stat}"`;
        specialDefense .innerText = `SPECIAL DEFENSE: ---> "${pokemons.stats[4].base_stat}"`;
        speed.innerText = `SPEED: ---> "${pokemons.stats[5].base_stat}"`;

        
    } catch (error) {
        console.log(img.src = 'https://i.stack.imgur.com/WOlr3.png')
        console.log(error)
    }
}


//input fetch
async function inputFetch(API) {
    try {
        let response = await fetch(API);
        let pokemons = await response.json();
        index = pokemons.id;
        
        //manipulación del DOM
        img.src = pokemons.sprites.front_default;
        document.querySelectorAll('header > h2').forEach(h2 => h2.remove())
        let h2 = document.createElement('h2');
        h2.innerText = pokemons.name
        header.append(h2);
        //vaciando lista
        div.innerText = "";
        //crendo una lista
        let ul = document.createElement('ul')
        let type = document.createElement('li');
        let skills = document.createElement('li');
        let hp = document.createElement('li');
        let attack = document.createElement('li');
        let specialAttack = document.createElement('li');
        let defense = document.createElement('li');
        let specialDefense = document.createElement('li');
        let speed = document.createElement('li');
        //style
        ul.className = "ul-list";
        type.className = "list-group-item list-group-item-dark";
        skills.className = "list-group-item list-group-item-warning";
        hp.className = "list-group-item list-group-item-success";
        attack.className = "list-group-item list-group-item-danger";
        specialAttack.className = "list-group-item list-group-item-danger";
        defense.className = "list-group-item list-group-item-info";
        specialDefense.className = "list-group-item list-group-item-info";
        speed.className = "list-group-item list-group-item-primary";
        //insertando
        ul.append(type, skills, hp, attack, specialAttack, defense, specialDefense, speed)
        div.append(ul)
        //
        type.innerText = `TYPE:  --->  "${pokemons.types.map(obj => type.innerText = `  ${obj.type.name}`)}"`;
        skills.innerText = `SKILLS: ---> "${pokemons.abilities.map(obj => skills.innerText = `  ${obj.ability.name}`)}"`;
        hp.innerText = `HP: ---> "${pokemons.stats[0].base_stat}"`;
        attack.innerText = `ATTACK: ---> "${pokemons.stats[1].base_stat}"`;
        specialAttack.innerText = `SPECIAL ATTACK: ---> "${pokemons.stats[3].base_stat}"`;
        defense.innerText = `DEFENSE: ---> "${pokemons.stats[2].base_stat}"`;
        specialDefense .innerText = `SPECIAL DEFENSE: ---> "${pokemons.stats[4].base_stat}"`;
        speed.innerText = `SPEED: ---> "${pokemons.stats[5].base_stat}"`;

        
    } catch (error) {
        console.log(img.src = 'https://i.stack.imgur.com/WOlr3.png')
        console.log(error)
    }
}

btnBuscar.onclick = (even)=> {
    even.preventDefault()
    let API = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
    inputFetch(API)
}




    




//// boton next
btnFowar.onclick = ()=> setTimeout(()=> forwar(), 10);
//// boton back
btnBack.onclick = ()=> back();
//// recorrido delantero
btnAforwar.onclick = (event)=> {
    //event.preventDefaul()
    inter = setInterval(() => {
        forwar()
    }, 1500);
}
////// recorrido trasero
btnAutoB.onclick = ()=> {
    inter = setInterval(() => {
        back()
    }, 1500);
}
//// boton stop
btnStop.onclick = ()=> {
    clearInterval(inter)
}

let API ;

function forwar() {
    index ++
    if(index > amountPokemons) {
        index = 1
    }
    API = `https://pokeapi.co/api/v2/pokemon/${index}`;
    dFetch(API);
    
}

function back() {
    index --;
    if(index === -1 || index === 0 ) {
        index = amountPokemons 
    }
    API = `https://pokeapi.co/api/v2/pokemon/${index}`;
    dFetch(API) 
    
    
}


