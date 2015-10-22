var Song = require('../song.js')
var Playlist = require('../playlist.js')

describe('Song', function () {
  beforeEach(function () {
    var song = new Song("songtitle", 145);
  })
it('should be able to return song name', function(){
       expect(song.getName()).toEqual("songtitle");
    });

it('should be able to return song duration', function(){
       expect(song.getDuration()).toEqual(145);
    });

})

describe('Playlist', function () {
  beforeEach(function () {
    var playlist = new Playlist();
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
    expect(playlist.getSong()).toBe(song2)
  })
  it('playlist allows the removal of songs')
    var song = new Song("songtitle", 145);
    playlist.addSong(song);
    expect(playlist.getSong()).toBe(song)
    playlist.removeSong(song);
    expect(playlist.getSong()).toBe(null)
})


/*

Create a Song constructor that sets a name and duration.
Create a Playlist constructor that starts out as empty.
Make the interface allow songs to be added to a Playlist.
Make the interface show the current song. It should default to the first song in the list.
Make the interface allow you to skip songs.
Make the interface allow you to remove songs from the playlist.


var Cart = require('../shoppingCart.js');
var cart;

describe('Cart', function(){

  beforeEach(function(){
    // create a new Cart object each time
    cart = new Cart();
  });
  describe('#add', function(){
    it('should add the item to cart', function(){
       expect(cart.add({item: 'toothbrush', price: 5})).toEqual({ item: { toothbrush: 5 } });
    });
*/