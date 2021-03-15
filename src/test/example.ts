import { AesPkcs5 } from "../AesPkcs5";

const content: string = "Hello world! This is an example content for the AesPkcs.encode() and decode() functions.";
const key: string = "p69nfZ7H2kSaA2vO";
const iv: string = "f8U1pc8jo7fvNAUV";

const encoded: string = AesPkcs5.encode(content, key, iv);
const decoded: string = AesPkcs5.decode(encoded, key, iv);

console.log(encoded);
console.log(decoded);