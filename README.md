<div align="center">
  <h1>Hunter.FM</h1>
  <p>
    <a href="https://www.npmjs.com/package/hunterfm"><img src="https://img.shields.io/npm/v/hunterfm.svg?color=3884FF&label=npm" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/hunterfm"><img src="https://img.shields.io/npm/dt/hunterfm.svg?color=3884FF" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.buymeacoffee.com/5antos" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>
  </p>
  <br><br>
</div>

An unofficial wrapper for the official Hunter.FM API.

Installation
------------

```
npm install hunterfm
```

Example Usage
-------------


```js
const getRadioStations = require('hunterfm');

getRadioStations()
  .then(stations => {
    console.log(stations);
  })
  .catch(console.error);
```


Contributing
------------

Before [creating an issue](https://github.com/5antos/hunterfm/issues), please ensure that it hasn't already been reported or suggested.

When [submitting a new pull request](https://github.com/5antos/hunterfm/pulls), please make sure the code style/format used is the same as the one used in the original code.


License
-------

Refer to the [LICENSE](LICENSE) file.