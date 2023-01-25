let futbol=["pelota","jugador","pasto","Arco"];
console.log(futbol);
futbol.push("silbato");

futbol.unshift("cancha");

console.log(futbol);
alert("Estoy enmezando a entender", futbol)

function Bird(name) {
    this.name = "name",
    this.age= 1
};
Bird.prototype = {
    wings: 2,
    fly: function(){
        return "I can Fly!";
    }
};

let penguin = new Bird("Happy");
console.log(penguin);

futbol.slice(1,4);