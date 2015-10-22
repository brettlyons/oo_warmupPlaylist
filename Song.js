function Song (title, duration) {
  this.title = title;
  this.duration = duration;
  var that = this;
  return {
    getName: function () {
      return that.title;
    },
    getDuration: function () {
      return that.duration;
    }
  }
}

module.exports = Song;
