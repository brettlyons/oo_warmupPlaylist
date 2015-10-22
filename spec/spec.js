var Song = require('../Song')
var Playlist = require('../Playlist')

describe('Song', function () {
  var song;
  beforeEach(function () {
    song = new Song("songtitle", 145);
  })
  it('should be able to return song name', function(){
       expect(song.getName()).toEqual("songtitle");
  });

  it('should be able to return song duration', function(){
    expect(song.getDuration()).toEqual(145);
  });

})

describe('Playlist', function () {
  var playlist;
  beforeEach(function () {
    playlist = new Playlist();
  })

  it('new playlist should be empty',function () {
    expect(playlist.getSong()).toBe(null)
  })

  it('songs can be added to the playlist',function () {
    var song = new Song("songtitle", 145);
    playlist.addSong(song)
    expect(playlist.getSong()).toBe(song)
  })

  it('playlist song can be skipped',function () {
    var song = new Song("songtitle", 145);
    var song2 = new Song("songtitle", 123);
    playlist.addSong(song);
    playlist.addSong(song2);
    playlist.skipSong();
    expect(playlist.getSong()).toBe(song)
  })
  it('playlist allows the removal of songs',function () {
    var song = new Song("songtitle", 145);
    playlist.addSong(song);
    expect(playlist.getSong()).toBe(song)
    playlist.removeSong(song);
    expect(playlist.getSong()).toBe(null)
  })
})


