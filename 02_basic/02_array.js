const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_Heros = [...marvel_heros,...dc_heros]

// console.log(all_new_Heros);

const another_Array = [1,2,3,4,[5,6,7],8,[1,2,[9,8,7]]]

const real_Array =another_Array.flat(Infinity)
// console.log(real_Array);

// console.log(Array.isArray("abc"))
// console.log(Array.from("abc"))
// console.log(Array.from({name:"abc"})) // intresting

let score= 100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3));



