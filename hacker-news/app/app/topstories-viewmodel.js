var observableArray = require("data/observable-array");

viewModel = {
    'storyIds': [],
    'topstories': new observableArray.ObservableArray(),
    'perPage': 20
};

viewModel.getStoryIds = function() {
    for (i = 0; i < 500; i++) {
        this.storyIds.push(i + 1);
    }
}

viewModel.loadStory = function(id) {
    return {
        'title': 'Story (' + id + ')',
        'by': 'foo',
        'score': 0
    };
}

viewModel.loadNextStories = function() {
    for (i = 0; i < this.perPage; i++) {
        this.topstories.push(this.loadStory(this.storyIds[this.topstories.length]));
    }
}

module.exports = viewModel;