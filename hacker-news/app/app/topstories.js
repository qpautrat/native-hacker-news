var model = require("./topstories-viewmodel");

exports.pageLoaded = function(args) {
    console.log("pageLoaded");
    var page = args.object;

    model.getStoryIds();

    page.bindingContext = model;
};

exports.loadMoreItems = function(data) {
    console.log("loadMoreItems");
    model.loadNextStories();
};