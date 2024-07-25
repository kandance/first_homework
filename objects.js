const person = {
  fname: 'Michelle',
  lname: 'Schneider',
  city: 'Brooklyn',
  state: 'New York',
};

//Dot notation
// console.log('city: ', person.city);

//Bracket notation
// console.log('city: ', person['city']);

let state = 'state';
// console.log('city: ', person[state]);

const nestedPerson = {
  name: {
    first: 'Michelle',
    last: 'Schneider',
  },
  city: 'Brooklyn',
  state: 'New York',
  favorites: {
    foods: ['pizza', 'tacos', 'sushi', 'ramen'],
    drinks: {
      caffeinated: 'coffee',
      decaffeinated: 'juice',
      milks: {
        cow: 'whole',
        plant: 'almond',
      },
    },
  },
};

//console.log('nested person: ', nestedPerson);
console.log(`nested person's last name: `, nestedPerson.name.last);
console.log(
  `Michelle's favorite plant milk: `,
  nestedPerson.favorites.drinks.milks.plant
);

function getFavoriteFoods(person) {
  return person.favorites.foods.map((food) =>
    console.log(`${person.name.first}'s favorite food is ${food}`)
  );
}

getFavoriteFoods(nestedPerson);

function coolStuff() {
  console.log('cool stuff');
}
