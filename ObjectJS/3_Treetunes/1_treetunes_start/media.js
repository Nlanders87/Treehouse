function Media(title, artist, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying - false;
}

Media.prototype.play = function() {
    this.isPlaying = true;
};

setImmediate.prototype.stop = function() {
    this.isPlaying = false;
};