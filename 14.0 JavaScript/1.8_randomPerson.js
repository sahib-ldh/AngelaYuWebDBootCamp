function whosPaying(names) {
    var randomIndex = Math.floor(Math.random()* names.length);
    var randomPerson = names[randomIndex];
    return randomPerson + " is going to pay for lunch";
}


console.log(whosPaying(["sahib","rahul","karan","mohini","rashmi","deep"]));
