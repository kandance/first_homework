let numbers = { a: 1, b: 2, c: 3 };

let friends = {
  best: 'Joan',
  secondBest: 'Mari',
  thirdBest: 'Elaine',
  //Function in an object? this is called a method
  listingFriends() {
    for (let friend in friends) {
      console.log(`friend at ${friend}: `, friends[friend]);
    }
  },
};

// console.log(friends.listingFriends());

// for (let giggle in numbers) {
//   console.log(`number at ${giggle}: `, numbers[giggle]);
// }

let people = [
  { name: 'Michelle', city: 'Brooklyn' },
  { name: 'Liz', city: 'Chicago' },
  { name: 'Natalie', city: 'Los Angeles' },
  { name: 'Katie', city: 'San Francisco' },
  { name: 'Suzy', city: 'Panama' },
  { name: 'Lacy', city: 'Jacksonville' },
];

for (let person in people) {
  console.log(`${people[person].name} lives in ${people[person].city}`);
}

people.map((person, i) => {
  console.log(
    `This person is at index ${i} and ${person.name} lives in ${person.city}`
  );
});

let item = [
  {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0002',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0003',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
];

console.log(item);

function objectPractice() {
  console.log('practicing using git');
}
