var model = {
    'topstories' : [
        {
            'title': 'Nokia Agrees to Buy Alcatel-Lucent for $16.6B',
            'by': 'alphadevx',
            'score': 39
        },
        {
            'title': 'Boolean parameters to API functions considered harmful (2011)',
            'by': 'luu',
            'score': 69
        },
        {
            'title': '32-bit X86 Position Independent Code – It\'s That Bad',
            'by': 'cremno',
            'score': 63
        },
        {
            'title': 'Finding bugs in SQLite, the easy way',
            'by': 'robin_reala',
            'score': 275
        },
        {
            'title': 'New Mexico outlaws civil asset forfeiture',
            'by': 'hackercurious',
            'score': 78
        }
    ]
};

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = model;
}