//20 random names
const family = ["Hilde", "Finn", "Markus", "Martinus"]
for (let i = 0; i < 20; i++) {
    let randomPerson = Math.floor(Math.random() * family.length)
    let name = family[randomPerson]
    console.log(name)
}
