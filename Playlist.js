function Playlist (song, nextPlaylist) {
  if(!song) { song = null;}
  if(!nextPlaylist) { nextPlaylist = null; }
  this.current = song;
  this.next = nextPlaylist;
}

Playlist.prototype.addSong = function (newSong) {
  if(!this.current) { this.current = newSong; }
  else {
    var tmp;
    while(this.next) {
      tmp = this;
      this = this.next;
    }
    this.next = new Playlist(newSong, null);
  }
}

Playlist.prototype.skipSong = function () {
  var tmp = this;
  this.next = this;
  console.log(tmp, tmp.next);
  return tmp.next;
}

Playlist.prototype.getSong = function () {
  return this.current;
}

Playlist.prototype.removeSong = function (songToBeRemoved) {
  while(this.skipSong()) {

  }
}

module.exports = Playlist;
