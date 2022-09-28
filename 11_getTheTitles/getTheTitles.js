const getTheTitles = function(bs) {
    const titles = bs.map(function(book) {
        return book.title;
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
