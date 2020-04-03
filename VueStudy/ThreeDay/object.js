let person = {
    age: 18,
    color: 'blue',
    love: 'huang',
    sport: 'lol'
}
console.log(person);
console.log(person.age);
console.log(person['age']);
console.log(Object.keys(person));

delete person.age
console.log(person);

console.log('age' in person);
for (var i in person) {
    console.log('键名：', i);
    console.log('键值：', person[i]);
}