'use strict';

const { get } = require('axios');
const { tileize } = require('./Utils')

class Radio {
  async getStations() {
    try {
      const { data: radioStations } = await get('https://api.hunter.fm/stations');
  
      return radioStations
        .map(({ url, name, logo, thumb, color, stream, genre, live }) => {
          return {
            id: url,
            name,
            logo,
            thumbnail: {
              lowQuality: thumb.LDPI,
              mediumQuality: thumb.MDPI,
              highQuality: thumb.HDPI,
              highestQuality: thumb.XXXHDPI
            },
            palette: color.filter(c => !!c),
            streams: {
              lowQuality: stream[2].url,
              mediumQuality: stream[1].url,
              highQuality: stream[0].url
            },
            genres: genre.map(g => tileize(g.name)),
            currentSong: {
              name: live.now.name,
              singers: live.now.singers.map(s => tileize(s)),
              feats: live.now.feats?.map(s => tileize(s)) || null,
              duration: live.now.info.duration * 1000,
              startedAt: new Date(live.now.time.start),
              endsAt: new Date(live.now.time.end)
            },
            nextSong: {
              name: live.next.name,
              singers: live.now.singers.map(s => tileize(s)),
              feats: live.now.feats?.map(s => tileize(s)) || null
            }
          };
        })
    } catch(e) {
      throw new Error('Unable to fetch data from the API: ' + e.message);
    }
  }
}

module.exports = Radio;