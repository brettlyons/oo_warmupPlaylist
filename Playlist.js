function Playlist () {
  this.list = [];
  this.playHead = 0;
}

Playlist.prototype.addSong = function (newSong) {
  this.list.push(newSong);
}

Playlist.prototype.skipSong = function () {
  this.playHead += 1;
}

Playlist.prototype.getSong = function () {
 return this.list[this.playHead];
}

Playlist.prototype.removeSong = function (songToBeRemoved) {
  this.list = this.list.splice(this.list.indexOf(songToBeRemoved), 1);

}

module.exports = Playlist;
