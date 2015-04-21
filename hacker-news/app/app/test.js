var observableArray = require("data/observable-array");
var http = require('http');

var model = {
    'topstories': new observableArray.ObservableArray()
}

exports.pageLoaded = function(args) {
    console.log("pageLoaded");

    var page = args.object;

    http.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json").then(function (json) {
        json.forEach(function (id) {
            http.getJSON("https://hacker-news.firebaseio.com/v0/item/" + id + ".json").then(function (json) {
                model.topstories.push(json);
            });
        });
    });

    page.bindingContext = model;
};

exports.loadMoreItems = function(data) {
    console.log("loadMoreItems");
};