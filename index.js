'use strict';

const { get } = require('https');
const tileize = require('./util/tileizeString');

module.exports = function getRadioStations() {
  return new Promise((resolve, reject) => {
    get('https://api.hunter.fm/stations', res => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        resolve(
          JSON
            .parse(data)
            .map(({ url, hash, name, description, logo, thumb, color, stream, streamHLS, genre, live }) => {
              return {
                id: url,
                hash,
                name,
                description,
                logo,
                thumbnail: {
                  lowQuality: thumb.LDPI,
                  mediumQuality: thumb.MDPI,
                  highQuality: thumb.HDPI,
                  highestQuality: thumb.XXXHDPI
                },
                palette: color.filter(c => !!c),
                streams: {
                  lowQuality: stream.find(({ quality }) => quality === 0).url,
                  mediumQuality: stream.find(({ quality }) => quality === 1).url,
                  highQuality: stream.find(({ quality }) => quality === 2).url
                },
                streamsHLS: {
                  lowQuality: streamHLS.find(({ quality }) => quality === 0).url,
                  mediumQuality: streamHLS.find(({ quality }) => quality === 0).url,
                  highQuality: streamHLS.find(({ quality }) => quality === 0).url
                },
                genres: genre.map(g => tileize(g.name)),
                previousSong: {
                  name: live.history[0].name,
                  thumbnail: {
                    lowQuality: `https://cdn.hunter.fm//image/thumb/music/${live.history[0].hashThumb}/100x100ht.jpg`,
                    mediumQuality: `https://cdn.hunter.fm//image/thumb/music/${live.history[0].hashThumb}/300x300ht.jpg`,
                    highQuality: `https://cdn.hunter.fm//image/thumb/music/${live.history[0].hashThumb}/1000x1000ht.jpg`
                  },
                  singers: live.history[0].singers.map(s => tileize(s)),
                  feats: live.history[0].feats?.map(s => tileize(s)) || null,
                  duration: live.history[0].info.duration * 1000
                },
                currentSong: {
                  name: live.now.name,
                  thumbnail: {
                    lowQuality: `https://cdn.hunter.fm//image/thumb/music/${live.now.hashThumb}/100x100ht.jpg`,
                    mediumQuality: `https://cdn.hunter.fm//image/thumb/music/${live.now.hashThumb}/300x300ht.jpg`,
                    highQuality: `https://cdn.hunter.fm//image/thumb/music/${live.now.hashThumb}/1000x1000ht.jpg`
                  },
                  singers: live.now.singers.map(s => tileize(s)),
                  feats: live.now.feats?.map(s => tileize(s)) || null,
                  duration: live.now.info.duration * 1000,
                  startedAt: new Date(live.now.time.start),
                  endsAt: new Date(live.now.time.end)
                },
                nextSong: {
                  name: live.next.name,
                  thumbnail: {
                    lowQuality: `https://cdn.hunter.fm//image/thumb/music/${live.next.hashThumb}/100x100ht.jpg`,
                    mediumQuality: `https://cdn.hunter.fm//image/thumb/music/${live.next.hashThumb}/300x300ht.jpg`,
                    highQuality: `https://cdn.hunter.fm//image/thumb/music/${live.next.hashThumb}/1000x1000ht.jpg`
                  },
                  singers: live.next.singers.map(s => tileize(s)),
                  feats: live.next.feats?.map(s => tileize(s)) || null
                }
              };
            })
        );
      });
    }).on('error', (err) => {
      reject('Unable to fetch data from the API: ' + err.message);
    });
  })
}
