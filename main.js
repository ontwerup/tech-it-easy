// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// OPDRACHT UITWERKINGEN ---------------------------------


// ** -------------------------------------------------- **
// 1a: Hoeveel exemplaren moeten we nog verkopen?
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over iedere entry van de array heen (tv)
// bereken de nog niet verkochte exemplaren voor elke tv (originalStock - sold)
// tel alle nog niet verkochte exemplaren bij elkaar op
// sla die waarde op in een variabele
// log die waarde in de console

const itemsLeftToSell = inventory.reduce((accumulator, currentTv) => {
  return accumulator + currentTv.originalStock - currentTv.sold;
}, 0);

console.log(itemsLeftToSell);

// ** -------------------------------------------------- **
// 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
// ** -------------------------------------------------- **

// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla dat element op in onze javaScript
const itemsLeftToSellContainer = document.getElementById('items-left-to-sell');
// maak een nieuw HTML element <p> aan in JS
const itemsLeftToSellElement = document.createElement('h3');
// stop er de hoeveelheid items in (itemsLeftToSell)
itemsLeftToSellElement.textContent = itemsLeftToSell.toString();
// geef hem een class zodat we het getal rood kunnen kleuren (en maak deze class ook in de CSS met styling)
itemsLeftToSellElement.setAttribute('class', 'items-left-number');
// voeg ons <p> element toe aan anker (<div id="items-left-to-sell">
itemsLeftToSellContainer.appendChild(itemsLeftToSellElement);


// ** -------------------------------------------------- **
// 2a: Log alle tv typen in de console
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), log het tv type (tv.type)

// inventory.map((tv) => {
//   return console.log(tv.type);
// });

// ** -------------------------------------------------- **
// 2b: Log de gegevens van alle tv's die al volledig uitverkocht zijn in de console
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// check voor iedere entry in de array (tv) of een item uitverkocht is. Zo ja, voeg het type (tv.type) toe aan de output
// een tv is uitverkocht wanneer tv.originalStock - tv.sold === 0 of, andere benadering, wanneer tv.originalStock === tv.sold
// log de output in de console

// Side note: je kunt een string maken met alle types, of een nieuwe array maken  met alle types.
// Beide antwoorden staan hieronder :)

// OPTIE 1: als string
const typesOutOfStockString = inventory.reduce((accumulator, currentTv) => {
  // als een tv is uitverkocht, voeg hem dan toe aan de eind-string
  if (currentTv.originalStock === currentTv.sold) {
    return accumulator + currentTv.type + ' ';
  }
  // als we deze tv willen overslaan moeten we alsnog de eind-string doorgeven aan de volgende loop
  return accumulator;
}, '');

console.log(typesOutOfStockString);

// OPTIE 2: als array
const typesOutOfStockArray = inventory.reduce((accumulator, currentTv) => {
  // als een tv is uitverkocht, voeg hem dan toe aan de eind-array
  if (currentTv.originalStock === currentTv.sold) {
    accumulator.push(currentTv.type);
  }
  // of we er nou een type in hebben gezet of niet, we moeten we alsnog de eind-array doorgeven aan de volgende loop
  return accumulator;
}, []);

console.log(typesOutOfStockArray);

// ** -------------------------------------------------- **
// 2c: Log de gegevens van alle typen tv's die over AmbiLight beschikken in de console
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check of de tv ambilight heeft. Zo ja, voeg dit type (tv.type) toe aan de output
// een tv beschikt over ambiLight wanneer de tv.options.ambiLight property de waarde true heeft
// log de output in de console

// Side note: je kunt een string maken met alle types, of een nieuwe array maken  met alle types.
// Beide antwoorden staan hieronder :)

// OPTIE 1: als string
const typesWithAmiblightString = inventory.reduce((accumulator, currentTv) => {
  // als een tv ambiLight heeft, voeg hem dan toe aan de eind-string
  if (currentTv.options.ambiLight === true) {
    return accumulator + currentTv.type + ' ';
  }
  // als we deze tv willen overslaan moeten we alsnog de eind-string doorgeven aan de volgende loop
  return accumulator;
}, '');

console.log(typesWithAmiblightString);

// OPTIE 2: als array
const typesWithAmiblightArray = inventory.reduce((accumulator, currentTv) => {
  // als een tv ambiLight heeft, voeg hem dan toe aan de eind-array
  if (currentTv.options.ambiLight === true) {
    accumulator.push(currentTv.type);
  }
  // of we er nou een type in hebben gezet of niet, we moeten we alsnog de eind-array doorgeven aan de volgende loop
  return accumulator;
}, []);

console.log(typesWithAmiblightArray);

// ** -------------------------------------------------- **
// 2d: Sorteer de tv's van laagste naar hoogste prijs en log dit in de console
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check de hoogte van de prijs (tv.price)
// plaats de tv achter de vorige tv als de waarde lager is
// log de output in de console

// korte versie
inventory.sort((a, b) => a.price - b.price);

// lange versie
// inventory.sort((a, b) => {
//   if (a.price - b.price > 0) {
//     return 1;
//   }
//
//   if  (a.price - b.price < 0) {
//     return -1;
//   }
//
//   return 0;
// });

console.log(inventory);



// ** -------------------------------------------------- **
// 3: Geef de type-namen van de eerste twee tv's weer op de pagina
// ** -------------------------------------------------- **

// Maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// <ul id="list-of-tvs"></ul> gemaakt

// Sla dat element op in onze javaScript
const listOfTvs = document.getElementById('tv-type-list');


// EERSTE TV
// Maak een nieuw HTML element <li> aan in JS
const tvOne = document.createElement('li');
// Stop er het typenaam van de eerste tv in
tvOne.textContent = inventory[0].type;
// Voeg ons <li> element toe aan anker (<ul>)
listOfTvs.appendChild(tvOne);

// TWEEDE TV
// Maak een nieuw HTML element <li> aan in JS
const tvTwo = document.createElement('li');
// Stop er het typenaam van de eerste tv in
tvTwo.textContent = inventory[2].type;
// Voeg ons <li> element toe aan anker (<ul>)
listOfTvs.appendChild(tvTwo);



// ** -------------------------------------------------- **
// 4a: Zorg ervoor dat er een string wordt gegenereerd voor de tv namen.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één tv object aangeleverd krijgen, pak daar dan de naam (tv.name), merk (tv.brand) en type (tv.type) uit
// plak [merk] [type] - [naam] aan elkaar en geef deze string terug
// log de output in de console
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!

function makeName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
  // dit mag ook:
  // return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

console.log(makeName(inventory[0]));


// ** -------------------------------------------------- **
// 4b: Zorg ervoor dat er een string wordt gegenereerd voor alle opties die op deze tv zitten
// ** -------------------------------------------------- **

// PSEUDO-CODE
// we gaan ervan uit dat we één opties object (van één tv) aangeleverd krijgen
// we hebben een eind-string nodig om alle opties in op te slaan
// voor iedere optie, check of de waarde van die property true is
// als dit zo is, willen we de NAAM van die optie onthouden en toevoegen aan de eind-string, gescheiden door een komma
// als de zin meer dan één optie bevat, moet er 'en' achter de naam staan ipv een komma
// log de eind string in de console
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!


// Side note: onderstaand voorbeeld gebruikt reduce en daarna wat knip- en plakwerk. Je kan ook eerst de opties filteren
// om zo alleen de opties met waarde 'true' over te houden en daaroverheen reducen.s

function createOptionsString(options) {
  // pak alle keys en stop ze in een array waar we overheen kunnen loopen
  const optionNames = Object.keys(options);

  // reduce het option object tot één string, die begint met "Beschikt over: "
  let optionString = optionNames.reduce((accumulator, optionName) => {
    // als er een key met de huidige optie-naam op ons options object zit, voeg de naam dan toe aan de eindstring
    if (options[optionName] === true) {
      return accumulator + ' ' + optionName + ',';
      // string literal mag ook:
      // return `${acc} ${key},`;
    }
    return accumulator;
  }, 'Beschikt over:');

  // hoeveel opties er ook zijn, er staat nu altijd een komma achteraan de zin.
  // knip deze laatste komma van de string af
  optionString = optionString.substring(0, optionString.length - 1);

  // als er meer dan één optie in onze string staat, zal er nog minimaal één komma
  // in de zin staan. In dat geval zal lastIndexOf een positief index-nummer teruggeven
  const lastCommaIndex = optionString.lastIndexOf(',');

  // als lastCommaIndex 0 of -1 is, geldt dat als falsy, dus alles groter dan dat is truthy
  if (lastCommaIndex > 0) {
    // dan plakken we drie dingen aan elkaar:
    // 1. het stukje van de zin vóór de laatste komma
    // 2. het woord ' en'
    // 3. het stukje van de zin ná de laatste komma
    optionString = optionString.slice(0, lastCommaIndex) + ' en' + optionString.slice(lastCommaIndex + 1);
    // string literal mag ook:
    // optionString = `${optionString.slice(0, lastCommaIndex)} en${optionString.slice(lastCommaIndex + 1)}`;
    // .replace() zou niet werken, want dat wordt toegepast op alle komma's
  }

  // als er GEEN opties zijn toegevoegd na 'Beschikt over:' is de lengte van de string 13
  if (optionString.length === 13) {
    optionString = 'Geen opties';
  }

  return optionString;
}

console.log(createOptionsString(inventory[4].options));


// ** -------------------------------------------------- **
// 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes in zowel inches als cm
// ** -------------------------------------------------- **

// PSEUDO-CODE
// we gaan ervan uit dat we een array van beschikbare scherm-groottes aangeleverd krijgen
// we hebben een eind-string nodig om alle sizes in op te slaan
// voor iedere size:
// geef de size weer + 'inches'
// reken de inches om in cm en zet het tussen haakjes met 'cm' erachter
// als er nog een size achter komt te staan, scheid ze dan met een |
// log de eind string in de console
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!

function createScreenSizesString(sizes) {
  // we reduceren de sizes array tot één string en laten reduce ook de index verwachten (optionele parameter)
  const screenSizeString = sizes.reduce((accumulator, currentSize, index) => {
    // maak de string zonder |
    let output = `${currentSize} inch (${Math.round(currentSize * 2.54)} cm)`;

    // als we nog niet bij de laatste waarde zijn, voeg dan de | toe
    if (index !== sizes.length - 1) {
      output = `${output} | `;
    }

    // voeg onze eindstring + huidige output samen
    return accumulator + output;
  }, '');

  return screenSizeString;
}

console.log(createScreenSizesString(inventory[4].availableSizes));

// ** -------------------------------------------------- **
// 4b: Zorg ervoor de informatie op de juiste manier op de pagina wordt weergegeven.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// 1. maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="tv-one"></div> gemaakt)
// 2. sla de referentie naar dit element op
// 3. maak een HTML element (<h2>) aan voor de naam van de tv
//      genereer de tv naam met de functie uit 4a
//      stop deze naam als tekst in het element
//      voeg het element aan het <div> element toe
// 4. maak een HTML element (<h2>) aan voor de prijs van de tv
//      maak een string van een euro-teken, de prijs en ,- na de prijs
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe
// 5. maak een HTML element (<p>) aan voor de schermgroottes van de tv
//      genereer de schermgroottes-string met de functie uit 4c
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe
// 6. maak een HTML element (<p>) aan voor de opties van de tv
//      genereer de optie-string met de functie uit 4b
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe

const tvOneContainer = document.getElementById('tv-one');

const tvOneName = document.createElement('h2');
tvOneName.textContent = makeName(inventory[2]);
tvOneContainer.appendChild(tvOneName);

const tvOnePrice = document.createElement('h3');
tvOnePrice.textContent = `€${inventory[2].price},-`;
tvOneContainer.appendChild(tvOnePrice);

const tvSizes = document.createElement('p');
tvSizes.textContent = createScreenSizesString(inventory[2].availableSizes);
tvOneContainer.appendChild(tvSizes);

const tvOptions = document.createElement('p');
tvOptions.textContent = createOptionsString(inventory[2].options);
tvOneContainer.appendChild(tvOptions);

// ** -------------------------------------------------- **
// 5: Gebruik de functies die je in de vorige opdracht hebt gemaakt om ALLE
// tv's weer te geven op de pagina in het juiste format, zonder dit acht keer
// voor iedere tv uit te schrijven. De prijs moet er ook nog bij.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<ul id="tv-list"></ul> gemaakt)
// 1. sla de referentie naar dit element op
// loop over de inventory array
// voor elke tv:
// 2. maak een nieuw HTML element <li> aan in JS
// 3. maak een HTML element (<h2>) aan voor de naam van de tv (zoals bij de stappen in 4d)
// 4. maak een HTML element (<h3>) aan voor de prijs van de tv (zoals bij de stappen in 4d)
// 5. maak een HTML element (<p>) aan voor de schermgroottes van de tv (zoals bij de stappen in 4d)
// 6. maak een HTML element (<p>) aan voor de opties van de tv (zoals bij de stappen in 4d)


// sla referentie naar de container op
const tvList = document.getElementById('tv-list');

inventory.map((tv) => {
  const tvContainer = document.createElement('li');
  tvContainer.setAttribute('class', 'tv-list-item');

  const tvName = document.createElement('h2');
  tvName.textContent = makeName(tv);
  tvContainer.appendChild(tvName);

  const tvPrice = document.createElement('h3');
  tvPrice.textContent = `€${tv.price},-`;
  tvContainer.appendChild(tvPrice);

  const tvSizes = document.createElement('p');
  tvSizes.textContent = createScreenSizesString(tv.availableSizes);
  tvContainer.appendChild(tvSizes);

  const tvOptions = document.createElement('p');
  tvOptions.textContent = createOptionsString(tv.options);
  tvContainer.appendChild(tvOptions);

  // Voeg de tv toe aan de lijst met tv's
  return tvList.appendChild(tvContainer);
});



// ** -------------------------------------------------- **
// 6a: wat is de totale opbrengst, als we alle exemplaren van ieder type zouden verkopen?
// Bereken dit en geef het weer op de pagina.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één lijst met tv objecten aangeleverd krijgen, hebben we daar de totale voorraad en de prijs uit nodig
// voor iedere tv:
// bereken de opbrengst (voorraad x prijs)
// tel deze opbrengst bij de totale opbrengst op
// geef de totale prijs als getal terug
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="goal-profit"></div> gemaakt)
// sla de referentie naar dit element op
// stop de totale opbrengst als tekst in dit element
// voeg dit element toe aan de container

function getGoalProfit(tvList) {
  return tvList.reduce((accumulator, currentTv) => {
    return accumulator + currentTv.originalStock * currentTv.price;
  }, 0);
}

const goalProfitContainer = document.getElementById('goal-profit');
const goalProfit = document.createElement('h3');
goalProfit.textContent = `€${getGoalProfit(inventory)},-`;
goalProfitContainer.appendChild(goalProfit);

// ** -------------------------------------------------- **
// 6b: hoeveel hebben we tot nu toe verdient? Bereken dit en geef het weer op de pagina
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één lijst met tv objecten aangeleverd krijgen, hebben we daar de verkochte items en de prijs uit nodig
// voor iedere tv:
// bereken de opbrengst (verkochte items x prijs)
// tel deze opbrengst bij de totale opbrengst op
// geef de totale prijs als getal terug
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="current-profit"></div> gemaakt)
// sla de referentie naar dit element op
// stop de totale opbrengst als tekst in dit element
// voeg dit element toe aan de container

function getCurrentProfit(tvList) {
  return tvList.reduce((accumulator, currentTv) => {
    return accumulator + currentTv.sold * currentTv.price;
  }, 0);
}

const currentProfitContainer = document.getElementById('current-profit');
const currentProfit = document.createElement('h3');
currentProfit.textContent = `€${getCurrentProfit(inventory)},-`;
currentProfitContainer.appendChild(currentProfit);




// ** -------------------------------------------------- **
// 7: Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`.
// ** -------------------------------------------------- **

const sortButton = document.getElementById('sort-button');
const soldOutButton = document.getElementById('sold-out-button');
const ambilightButton = document.getElementById('ambilight-button');

sortButton.addEventListener('click', sortOnPrice);
soldOutButton.addEventListener('click', getAmbiLightTvs);
ambilightButton.addEventListener('click', getOutOfStockItems);

function sortOnPrice() {
  inventory.sort((a, b) => a.price - b.price);
  console.log(inventory);
}

function getAmbiLightTvs() {
  const typesWithAmiblightArray = inventory.reduce((accumulator, currentTv) => {
    // als een tv ambiLight heeft, voeg hem dan toe aan de eind-array
    if (currentTv.options.ambiLight === true) {
      accumulator.push(currentTv.type);
    }
    // of we er nou een type in hebben gezet of niet, we moeten we alsnog de eind-array doorgeven aan de volgende loop
    return accumulator;
  }, []);

  console.log(typesWithAmiblightArray);
}

function getOutOfStockItems() {
  const typesOutOfStockArray = inventory.reduce((accumulator, currentTv) => {
    // als een tv is uitverkocht, voeg hem dan toe aan de eind-array
    if (currentTv.originalStock === currentTv.sold) {
      accumulator.push(currentTv.type);
    }
    // of we er nou een type in hebben gezet of niet, we moeten we alsnog de eind-array doorgeven aan de volgende loop
    return accumulator;
  }, []);

  console.log(typesOutOfStockArray);
}