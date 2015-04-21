var observableArray = require("data/observable-array");
var http = require('http');

viewModel = {
    'storyIds': [],
    'topstories': new observableArray.ObservableArray(),
    'perPage': 5,
    'index': 0,
    '_topstories': []
};

viewModel.getStoryIds = function() {
    var _this = this;
    http.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json").then(function (json) {
        _this.storyIds = json;
        _this.loadNextStories();
    });
}

viewModel.loadNextStories = function() {
    var _this = this;
    http.getJSON("https://hacker-news.firebaseio.com/v0/item/" + this.storyIds.shift() + ".json").then(function (json) {
        _this._topstories.push(json);
        _this.index++;
        if (_this.index < _this.perPage) {
            _this.loadNextStories();
        } else {
            _this.index = 0;
            _this.topstories.push(_this._topstories);
            _this._topstories = [];
        }
    });
}

module.exports = viewModel;