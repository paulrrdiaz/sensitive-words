## Example

```bash
npm install sensitive-words -D
```

```javascript
const { sensitiveWords } = require('sensitiveWords')
// ESM
import { sensitiveWords } from 'sensitiveWords'

const filtered = sensitiveWords('The new apple macbook pro', ['pro', 'apple'])

console.log(filtered)
// The new *** macbook ***
```
