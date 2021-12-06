<div align="center">
  <h1>Hunter.FM</h1>
  <p>
    <a href="https://www.npmjs.com/package/hunter.fm"><img src="https://img.shields.io/npm/v/hunter.fm.svg?color=3884FF&label=npm" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/hunter.fm"><img src="https://img.shields.io/npm/dt/hunter.fm.svg?color=3884FF" alt="NPM downloads" /></a>
    <a href="https://www.npmjs.com/package/hunter.fm"><img src="https://img.shields.io/badge/dependencies-0-brightgreen?color=3884FF" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://www.buymeacoffee.com/5antos" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>
  </p>
  <br><br>
</div>

An unofficial wrapper for the official Hunter.FM API, dependency-free.


Installation
------------

**Node.js 14.0.0 or newer is required.**  

```sh-session
npm install hunter.fm
yarn add hunter.fm
pnpm add hunter.fm
```


Example Usage
-------------

```js
const getRadioStations = require('hunter.fm');

getRadioStations()
  .then(stations => {
    console.log(stations);
  })
  .catch(console.error);
```
[Try it yourself](https://npm.runkit.com/hunter.fm)


Handling the return
------------

The function **`getRadioStations`** returns an array of radio stations, each having the following structure:

Property | Type | Description | Example
:---: | :---: | --- | ---
id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's ID | lofi
hash | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's Hash | jic321Sd-de2s3d7s-S12e24s1daw2
name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's name | O Canal Lofi
description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's description | Perfeita para te auxiliar a manter o foco em casa ou no trabalho. Para relaxar enquanto se lê um livro ou espera o sono chegar.
logo | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's logo | https://cdn.hunter.fm/image/station/lo-fi.png
thumbnail | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's thumbnail |
thumbnail#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's low quality thumbnail | https://cdn.hunter.fm/image/thumb/station/lo-fi-second/50x50ht.jpg
thumbnail#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's medium quality thumbnail | https://cdn.hunter.fm/image/thumb/station/lo-fi-second/100x100ht.jpg
thumbnail#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's high quality thumbnail | https://cdn.hunter.fm/image/thumb/station/lo-fi-second/200x200ht.jpg
thumbnail#highestQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's highest quality thumbnail | https://cdn.hunter.fm/image/thumb/station/lo-fi-second/1000x1000ht.jpg
palette | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Radio station's color palette | [ "#FF3B27", "#04BAFB" ]
streams | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's streams |
streams#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's low quality stream | https://live.hunter.fm/lofi_low
streams#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's medium quality stream | https://live.hunter.fm/lofi_normal
streams#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's high quality stream | https://live.hunter.fm/lofi_high
streamsHLS | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's HLS streams |
streamsHLS#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's low quality HLS stream file | https://hls.hunter.fm/lofi/32.m3u8
streamsHLS#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's medium quality HLS stream file | https://hls.hunter.fm/lofi/64.m3u8
streamsHLS#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Radio station's high quality HLS stream file | https://hls.hunter.fm/lofi/192.m3u8
genres | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Radio station's music genres | [ "Hip Hop", "Lofi", "Relax" ]
previousSong | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's previous song |
previousSong#name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's name | Comfort
previousSong#thumbnail | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Song's thumbnail |
previousSong#thumbnail#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's low quality thumbnail | https://cdn.hunter.fm//image/thumb/music/p4irjjm9jzyp7972xtme4mzgnhwp9m/100x100ht.jpg
previousSong#thumbnail#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's medium quality thumbnail | https://cdn.hunter.fm//image/thumb/music/p4irjjm9jzyp7972xtme4mzgnhwp9m/300x300ht.jpg
previousSong#thumbnail#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's high quality thumbnail | https://cdn.hunter.fm//image/thumb/music/p4irjjm9jzyp7972xtme4mzgnhwp9m/1000x1000ht.jpg
previousSong#singers | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Song's singers | [ "Pandrezz" ]
previousSong#feats | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) | Song's feats | null
previousSong#duration | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Song's duration in milliseconds | 128000
currentSong | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's current song |
currentSong#name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's name | Coney Island
currentSong#thumbnail | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Song's thumbnail |
currentSong#thumbnail#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's low quality thumbnail | https://cdn.hunter.fm//image/thumb/music/60o79xd4jzyhad283dcnkjg431epyh/100x100ht.jpg
currentSong#thumbnail#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's medium quality thumbnail | https://cdn.hunter.fm//image/thumb/music/60o79xd4jzyhad283dcnkjg431epyh/300x300ht.jpg
currentSong#thumbnail#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's high quality thumbnail | https://cdn.hunter.fm//image/thumb/music/60o79xd4jzyhad283dcnkjg431epyh/1000x1000ht.jpg
currentSong#singers | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Song's singers | [ "Frook" ]
currentSong#feats | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) | Song's feats | null
currentSong#duration | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Song's duration in milliseconds | 109000
currentSong#startedAt | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Song's start date timestamp (UTC) | 2021-09-14T17:01:49.334Z
currentSong#endsAt | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Song's end date timestamp (UTC) | 2021-09-14T17:04:07.334Z
nextSong | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Radio station's next song |
nextSong#name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's name | Your Favorite Place
nextSong#thumbnail | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Song's thumbnail |
nextSong#thumbnail#lowQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's low quality thumbnail | https://cdn.hunter.fm//image/thumb/music/uq5kif7ajzymmzvxjfrnes4o8agzyv/100x100ht.jpg
nextSong#thumbnail#mediumQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's medium quality thumbnail | https://cdn.hunter.fm//image/thumb/music/uq5kif7ajzymmzvxjfrnes4o8agzyv/300x300ht.jpg
nextSong#thumbnail#highQuality | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Song's high quality thumbnail | https://cdn.hunter.fm//image/thumb/music/uq5kif7ajzymmzvxjfrnes4o8agzyv/1000x1000ht.jpg
nextSong#singers | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Song's singers | [ "Joey Pecoraro" ]
nextSong#feats | [String[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) | Song's feats | null


Contributing
------------

Before [creating an issue](https://github.com/5antos/hunter.fm/issues), please ensure that it hasn't already been reported or suggested.

When [submitting a new pull request](https://github.com/5antos/hunter.fm/pulls), please make sure the code style/format used is the same as the one used in the original code.


License
-------

Refer to the [LICENSE](LICENSE) file.
