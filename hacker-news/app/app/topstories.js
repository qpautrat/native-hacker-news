var model = require("./topstories-viewmodel");

exports.pageLoaded = function(args) {
    var page = args.object;
    model.loadStories();
    page.bindingContext = model;
}