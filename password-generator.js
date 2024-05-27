const generator = require("generate-password")

var password = (length, numbers) =>{
    const mdp = generator.generate({length: length, numbers: numbers})
    return mdp
}
console.log(password(10, true))
