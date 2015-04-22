var observableArray = require("data/observable-array");
var http = require('http');

viewModel = {
    'storyIds': [],
    'topstories': new observableArray.ObservableArray()
};

viewModel.getStoryIds = function() {
    var _this = this;
    http.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json").then(function (json) {
        _this.storyIds = json;
        _this.loadNextStories(10);
    });
}

viewModel.loadNextStories = function(nb) {
    if (!nb) {
        nb = 1;
    }

    var _this = this;
    http.getJSON("https://hacker-news.firebaseio.com/v0/item/" + this.storyIds.shift() + ".json").then(function (json) {
        if (json) {
            _this.topstories.push(json);
            nb--;
            if (nb != 0) {
                _this.loadNextStories(nb);
            }
        }
    });
}

module.exports = viewModel;