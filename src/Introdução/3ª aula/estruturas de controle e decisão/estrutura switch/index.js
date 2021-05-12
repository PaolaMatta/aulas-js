const CEP = "05362-070";

switch (CEP.split("-")[1]) {
  case "060":
    console.log("Zona Oeste");
    break; // returns, throws, break;
  case "010":
    console.log("Centro");
    break;
  case "070":
    console.log("Zona Norte");
    break;
  case "170":
    console.log("Zona Sul");
    break;
  case "157":
    console.log("Zona Leste");
    break;
  default:
    console.log("Não faz parte de SP Capital");
    break;
}