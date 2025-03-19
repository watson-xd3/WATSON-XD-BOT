
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import _0x329f27 from 'node-fetch';
import _0x2279c2 from 'yt-search';
import _0x59bc9f from 'ytdl-core';
import _0x3d45f3 from 'axios';
import { ogmp3 } from '../lib/youtubedl.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const {
  ytmp3,
  ytmp4
} = require("@hiudyy/ytdl");
let handler = async (_0x401856, {
  conn: _0x31e91b,
  args: _0x52e244,
  usedPrefix: _0x1b9e57,
  command: _0x32284d
}) => {
  if (!_0x52e244[0]) {
    return _0x31e91b.reply(_0x401856.chat, "⚠️ Incorrect usage.\nPlease use the command as follows:\n*" + (_0x1b9e57 + _0x32284d) + " yt url*", _0x401856);
  }
  const _0xc88d8a = await search(_0x52e244.join(" "));
  let _0x39f847 = '';
  if (_0x52e244[0].includes('you')) {
    _0x39f847 = _0x52e244[0];
  } else {
    const _0x26c509 = parseInt(_0x52e244[0]) - 1;
    if (_0x26c509 >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const _0x4d7633 = global.videoList.find(_0x532d75 => _0x532d75.from === _0x401856.sender);
        if (_0x4d7633) {
          if (_0x26c509 < _0x4d7633.urls.length) {
            _0x39f847 = _0x4d7633.urls[_0x26c509];
          } else {
            throw "⚠️ You only have " + _0x4d7633.urls.length + " links in the playlist.";
          }
        } else {
          throw "⚠️ No playlist found. Please create a playlist first using the command: *" + _0x1b9e57 + "playlist <text>*";
        }
      } else {
        throw "⚠️ No playlist found. Please create a playlist first using the command: *" + _0x1b9e57 + "playlist <text>*";
      }
    }
  }
  await _0x31e91b.reply(_0x401856.chat, " 𝗩 𝗜 𝗗 𝗘 𝗢 *wait downloading...*", _0x401856);
  const [_0xbeedf1, _0xc52cc8 = "720"] = _0x52e244.join(" ").split(" ");
  const _0x5e0936 = ["240", '360', "480", "720", '1080'];
  const _0x5832b2 = _0x5e0936.includes(_0xc52cc8) ? _0xc52cc8 : "720";
  const _0x5a9027 = [{
    'url': () => ogmp3.download(_0xc88d8a[0].url, _0x5832b2, "video"),
    'extract': _0x66e180 => ({
      'data': _0x66e180.result.download,
      'isDirect': false
    })
  }, {
    'url': () => ytmp4(_0x52e244),
    'extract': _0x24ec11 => ({
      'data': _0x24ec11,
      'isDirect': false
    })
  }, {
    'url': () => _0x329f27("https://api.siputzx.my.id/api/d/ytmp4?url=" + _0x52e244).then(_0x54c821 => _0x54c821.json()),
    'extract': _0x3a0f74 => ({
      'data': _0x3a0f74.dl,
      'isDirect': false
    })
  }, {
    'url': () => _0x329f27('https://api.neoxr.eu/api/youtube?url=' + _0x52e244 + "&type=video&quality=720p&apikey=GataDios").then(_0x5b4fea => _0x5b4fea.json()),
    'extract': _0x1746a3 => ({
      'data': _0x1746a3.data.url,
      'isDirect': false
    })
  }, {
    'url': () => _0x329f27(global.APIs.fgmods.url + '/downloader/ytmp4?url=' + _0x52e244 + "&apikey=" + global.APIs.fgmods.key).then(_0x2ea308 => _0x2ea308.json()),
    'extract': _0x224baf => ({
      'data': _0x224baf.result.dl_url,
      'isDirect': false
    })
  }, {
    'url': () => _0x329f27(apis + "/download/ytmp4?url=" + _0x52e244).then(_0x1d2fca => _0x1d2fca.json()),
    'extract': _0x4ca652 => ({
      'data': _0x4ca652.status ? _0x4ca652.data.download.url : null,
      'isDirect': false
    })
  }, {
    'url': () => _0x329f27("https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=" + _0x52e244).then(_0x261f87 => _0x261f87.json()),
    'extract': _0x2de1f1 => ({
      'data': _0x2de1f1.result.media.mp4,
      'isDirect': false
    })
  }, {
    'url': async () => {
      let _0x4468d2 = await _0x2279c2(_0x39f847);
      let _0x87a262 = _0x4468d2.all.filter(_0x2b8db0 => _0x2b8db0.type === "video");
      let _0x40ba04 = await _0x59bc9f.getInfo('https://youtu.be/' + _0x87a262[0].videoId);
      const _0x1a4015 = {
        'filter': "videoandaudio"
      };
      return _0x59bc9f.chooseFormat(_0x40ba04.formats, _0x1a4015);
    },
    'extract': _0x5946b0 => ({
      'data': _0x5946b0.url,
      'isDirect': false
    })
  }, {
    'url': async () => {
      let _0x47ceff = _0x5832b2 + 'p';
      const _0xec1a99 = await youtubedl(_0x39f847)['catch'](async _0x515401 => await youtubedlv2(_0x39f847));
      return _0xec1a99.video[_0x47ceff].download();
    },
    'extract': _0x16e453 => ({
      'data': _0x16e453,
      'isDirect': false
    })
  }];
  const _0x247327 = async _0x11dbec => {
    let _0x45b737 = null;
    let _0x2f1c95 = false;
    for (const _0x33d1ff of _0x11dbec) {
      try {
        const _0x95ae4d = await _0x33d1ff.url();
        const {
          data: _0x494a55,
          isDirect: _0x25a8ff
        } = _0x33d1ff.extract(_0x95ae4d);
        if (_0x494a55) {
          const _0x317aca = await getFileSize(_0x494a55);
          if (_0x317aca >= 1024) {
            _0x45b737 = _0x494a55;
            _0x2f1c95 = _0x25a8ff;
            break;
          }
        }
      } catch (_0x5d1286) {
        console.log("Error con API: " + _0x5d1286);
        continue;
      }
    }
    const _0x397241 = {
      videoData: _0x45b737,
      isDirect: _0x2f1c95
    };
    return _0x397241;
  };
  const {
    videoData: _0x58ac12,
    isDirect: _0x4a17c8
  } = await _0x247327(_0x5a9027);
  if (_0x58ac12) {
    const _0x1b6cdc = await getFileSize(_0x58ac12);
    const _0x276f74 = {
      fileName: _0xc88d8a[0].title + '.mp4',
      caption: "╭━❰ " + wm + " ❱━⬣\n┃ 🌹 Tittle\n┃ " + _0xc88d8a[0].title + " (" + _0x5832b2 + "p)\n╰━━━━━❰ *🌹 " + wm + "* ❱━━━━⬣",
      mimetype: "video/mp4"
    };
    if (_0x1b6cdc > 471859200) {
      const _0x424146 = {
        'document': _0x4a17c8 ? _0x58ac12 : {
          'url': _0x58ac12
        },
        ..._0x276f74
      };
      await _0x31e91b.sendMessage(_0x401856.chat, _0x424146, {
        'quoted': _0x401856
      });
    } else {
      await _0x31e91b.sendMessage(_0x401856.chat, {
        'video': _0x4a17c8 ? _0x58ac12 : {
          'url': _0x58ac12
        },
        'thumbnail': await _0x329f27((await _0x2279c2(_0x39f847)).videos[0].thumbnail),
        ..._0x276f74
      }, {
        'quoted': _0x401856
      });
    }
  } else {
    await _0x31e91b.reply(_0x401856.chat, "#report  " + (_0x1b9e57 + _0x32284d) + "\n\n" + wm, _0x401856);
    console.log("❗❗ error " + (_0x1b9e57 + _0x32284d) + " ❗❗");
  }
};
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i;
handler.register = false;
export default handler;
async function search(_0x1f303d, _0xe1b01b = {}) {
  const _0x496c31 = {
    'query': _0x1f303d,
    'hl': 'es',
    'gl': 'ES',
    ..._0xe1b01b
  };
  const _0x469684 = await _0x2279c2.search(_0x496c31);
  return _0x469684.videos;
}
async function getFileSize(_0x237d1f) {
  try {
    const _0x12293d = {
      method: "HEAD"
    };
    const _0xa80f15 = await _0x329f27(_0x237d1f, _0x12293d);
    return parseInt(_0xa80f15.headers.get("content-length") || 0);
  } catch {
    return 0;
  }
}
function bytesToSize(_0x2d0e86) {
  return new Promise((_0x30a6b8, _0x414350) => {
    const _0x110b4d = ["Bytes", 'KB', 'MB', 'GB', 'TB'];
    if (_0x2d0e86 === 0) {
      return "n/a";
    }
    const _0x27d501 = parseInt(Math.floor(Math.log(_0x2d0e86) / Math.log(1024)), 10);
    if (_0x27d501 === 0) {
      _0x30a6b8(_0x2d0e86 + " " + _0x110b4d[_0x27d501]);
    }
    _0x30a6b8((_0x2d0e86 / 1024 ** _0x27d501).toFixed(1) + " " + _0x110b4d[_0x27d501]);
  });
}
;
async function ytMp3(_0x478f3a) {
  return new Promise((_0x14fe4e, _0x2658df) => {
    _0x59bc9f.getInfo(_0x478f3a).then(async _0x22da3c => {
      let _0x4b07f4 = [];
      for (let _0x18128a = 0; _0x18128a < _0x22da3c.formats.length; _0x18128a++) {
        let _0x5f0667 = _0x22da3c.formats[_0x18128a];
        if (_0x5f0667.mimeType == "audio/webm; codecs=\"opus\"") {
          let {
            contentLength: _0x37cc20
          } = _0x5f0667;
          let _0x29fcea = await bytesToSize(_0x37cc20);
          const _0x169a3b = {
            audio: _0x5f0667.url,
            'size': _0x29fcea
          };
          _0x4b07f4[_0x18128a] = _0x169a3b;
        }
      }
      ;
      let _0x4e9c1e = _0x4b07f4.filter(_0x15e3df => _0x15e3df.audio != undefined && _0x15e3df.size != undefined);
      let _0x44f517 = await _0x3d45f3.get('https://tinyurl.com/api-create.php?url=' + _0x4e9c1e[0].audio);
      let _0x125693 = _0x44f517.data;
      let _0xe188f5 = _0x22da3c.videoDetails.title;
      let _0x31dbda = _0x22da3c.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      const _0x3b238f = {
        title: _0xe188f5,
        result: _0x125693,
        result2: _0x4e9c1e,
        thumb: _0x31dbda
      };
      _0x14fe4e(_0x3b238f);
    })["catch"](_0x2658df);
  });
}
async function ytMp4(_0x353078) {
  return new Promise(async (_0x1b30f8, _0x30677d) => {
    _0x59bc9f.getInfo(_0x353078).then(async _0x35832e => {
      let _0x584c69 = [];
      for (let _0x21e71d = 0; _0x21e71d < _0x35832e.formats.length; _0x21e71d++) {
        let _0x5bdec1 = _0x35832e.formats[_0x21e71d];
        if (_0x5bdec1.container == "mp4" && _0x5bdec1.hasVideo == true && _0x5bdec1.hasAudio == true) {
          let {
            qualityLabel: _0x1759c2,
            contentLength: _0x377a25
          } = _0x5bdec1;
          let _0x44cfa8 = await bytesToSize(_0x377a25);
          const _0xb13707 = {
            video: _0x5bdec1.url,
            'quality': _0x1759c2,
            size: _0x44cfa8
          };
          _0x584c69[_0x21e71d] = _0xb13707;
        }
      }
      ;
      let _0x1110fc = _0x584c69.filter(_0x5310c7 => _0x5310c7.video != undefined && _0x5310c7.size != undefined && _0x5310c7.quality != undefined);
      let _0x4616d8 = await _0x3d45f3.get("https://tinyurl.com/api-create.php?url=" + _0x1110fc[0].video);
      let _0x2154fb = _0x4616d8.data;
      let _0x15670d = _0x35832e.videoDetails.title;
      let _0x583de7 = _0x35832e.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      const _0x3a8f11 = {
        'title': _0x15670d,
        result: _0x2154fb,
        rersult2: _0x1110fc[0].video,
        thumb: _0x583de7
      };
      _0x1b30f8(_0x3a8f11);
    })['catch'](_0x30677d);
  });
}
;
async function ytPlay(_0x5ef6e1) {
  return new Promise((_0xf8e2b9, _0x177e72) => {
    _0x2279c2(_0x5ef6e1).then(async _0x237ce3 => {
      let _0x38935d = _0x237ce3.videos.slice(0, 5);
      let _0x42570c = [];
      for (let _0x46adb9 = 0; _0x46adb9 < _0x38935d.length; _0x46adb9++) {
        _0x42570c.push(_0x38935d[_0x46adb9].url);
      }
      let _0xcb6a80 = _0x42570c[0];
      let _0x1c33be = await ytMp3(_0xcb6a80);
      _0xf8e2b9(_0x1c33be);
    })["catch"](_0x177e72);
  });
}
;
async function ytPlayVid(_0x2d84f7) {
  return new Promise((_0x1315b0, _0xc029e7) => {
    _0x2279c2(_0x2d84f7).then(async _0x529593 => {
      let _0x5b0f2d = _0x529593.videos.slice(0, 5);
      let _0x24f285 = [];
      for (let _0x37de03 = 0; _0x37de03 < _0x5b0f2d.length; _0x37de03++) {
        _0x24f285.push(_0x5b0f2d[_0x37de03].url);
      }
      let _0x40fa9f = _0x24f285[0];
      let _0x210540 = await ytMp4(_0x40fa9f);
      _0x1315b0(_0x210540);
    })['catch'](_0xc029e7);
  });
}
;
