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

// OPDRACHT UITWERKINGEN ----------------------------

// 1a: Hoeveel exemplaren moeten we nog verkopen?

// loop over iedere entry van de array heen (tv)
// bereken de nog niet verkochte exemplaren voor elke tv (originalStock - sold)
// tel alle nog niet verkochte exemplaren bij elkaar op
// sla die waarde op in een variabele
// log die waarde in de console

const itemsLeftToSell = inventory.reduce((acc, tv) => {
  return acc + tv.originalStock - tv.sold;
}, 0);

console.log(itemsLeftToSell);

// 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

// Maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script CHECK

// Sla dat element op in onze javaScript
const itemsLeftToSellContainer = document.getElementById('items-left-to-sell');

// Maak een nieuw HTML element <p> aan in JS
const itemsLeftToSellElement = document.createElement('p');

// Stop er de hoeveelheid items in (itemsLeftToSell)
itemsLeftToSellElement.textContent = itemsLeftToSell.toString();

// Geef hem een class zodat we het getal rood kunnen kleuren
itemsLeftToSellElement.setAttribute('class', 'items-left-number');

// Voeg ons <p> element toe aan anker (<div id="items-left-to-sell">
itemsLeftToSellContainer.appendChild(itemsLeftToSellElement);

// 2a: log alle tv typen in de console

// loop over de array heen
// voor iedere entry in de array (tv), log het tv type (tv.type)

// inventory.map((tv) => {
//   return console.log(tv.type);
// });

// 2b: log de gegevens van alle typen tv's die al volledig uitverkocht zijn in de console

// loop over de array heen
// een item is uitverkocht wanneer tv.originalStock - tv.sold === 0 of wanneer tv.originalStock === tv.sold
// voor iedere entry in de array (tv) log alleen de tv types die zijn uitverkocht

inventory.map((tv) => {
  if (tv.originalStock === tv.sold) {
    console.log(tv.type);
  }
});

const soldOut = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;

  // mag ook zo:
  // if (tv.originalStock === tv.sold) {
  //   return true;
  // }
});

console.log(soldOut);

// 3: Geef de type-namen van de eerste twee tv's weer op de pagina

// Maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script CHECK

// Sla dat element op in onze javaScript
const listOfTvs = document.getElementById('list-of-tvs');

// Maak een nieuw HTML element <p> aan in JS
const tvOne = document.createElement('p');

// Stop er het typenaam van één van de tv's in
tvOne.textContent = inventory[0].type;

// Voeg ons <p> element toe aan anker ()
listOfTvs.appendChild(tvOne);















// const listOfTvs = document.getElementById('list-of-tvs');
//
// const itemOne = document.createElement('li');
// const itemTwo = document.createElement('li');
//
// listOfTvs.appendChild(itemOne);
// listOfTvs.appendChild(itemTwo);





