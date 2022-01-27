const cityList = [
  { id: 1, name: 'TP Hồ Chí Minh' },
  { id: 2, name: 'TP Cần Thơ' },
];

const studentList = [
  { id: 1, name: 'Alice', cityId: 1 },
  { id: 2, name: 'Bob', cityId: 2 },
];
const cityMap = cityList.reduce((map, city) => {
  map[city.id] = city;
  return map;
}, {});

console.log(cityMap[studentList[1].cityId].name);

// const map = new Map();
// cityList.forEach((city) => {
//   map.set(city.id, city);
// });

const map = cityList.reduce((newMap, city) => {
  newMap.set(city.id, city);
  return newMap;
}, new Map());
console.log(map.get(1).name);
