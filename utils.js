// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortByTitle = arr => {
  return arr.sort(function(a, b) {
    var titleA = a.title.toUpperCase(); // ignore upper and lowercase
    var titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

module.exports.sortByTitle = sortByTitle;
