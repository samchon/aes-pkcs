# AES-PKCS
## Outline
The npm module `aes-pkcs` provides an utility class `AesPkcs5` using below options:

  - AES-128/256
  - CBC mode
  - PKCS#5 Padding
  - Base64 Encoding




## Installation
```bash
npm install --save aes-pkcs
```




## Usage
### Example Code
```typescript
import { AesPkcs5 } from "aes-pkcs";

const content: string = "Hello world! This is an example content for the AesPkcs.encode() and decode() functions.";
const key: string = "p69nfZ7H2kSaA2vO";
const iv: string = "f8U1pc8jo7fvNAUV";

const encoded: string = AesPkcs5.encode(content, key, iv);
const decoded: string = AesPkcs5.decode(content, key, iv);

console.log(encoded);
console.log(decoded);
```

### Console Output
```bash
B/ZQ1VHSGBpo2KwDiiLZCKO/
Hello world! This is an example content for the AesPkcs.encode() and decode() functions. 
```