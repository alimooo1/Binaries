import { Binary } from "./Binary";

const binary = new Binary("علی معلمی هستم");
const base64 = binary.textToBase64();
const buffer = binary.newTextToBinary();

console.log(base64);
console.log(buffer);
