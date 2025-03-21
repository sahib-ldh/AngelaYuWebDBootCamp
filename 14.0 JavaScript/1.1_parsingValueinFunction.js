function getMilk(money,costPerPacket) { 
  
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("get " + calPacket(money,costPerPacket) + " packets of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log("The milk packet we got with money : " + calPacket(money,costPerPacket)  );
  return calcChange(money,costPerPacket);

}
function calPacket(StartingMoney,costPerPacket)
{
  var numberOfPacket = Math.floor(StartingMoney/costPerPacket)
  return numberOfPacket;
}

function calcChange(StartingMoney, costPerPacket)
{
  var change = StartingMoney % costPerPacket;
  return change;
}

console.log("hey sahib, here is your " + getMilk(100,33) + " change sahibb");


