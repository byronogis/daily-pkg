### usage

#### npm

```bash
npm install uuid
```

```js
import { v4 as uuid } from 'uuid'
// or
const { v4: uuid } = require('uuid')

uuid()
```

#### npx

```bash
npx uuid --help

npx uuid v4
```

#### cdn

```html
<script type="module">
  import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
</script>
```
