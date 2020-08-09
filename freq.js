
function splitByWords (text) {
    // split string by spaces (including spaces, tabs, and newlines)
    var wordsArray = text.split(/\s+/);
    return wordsArray;
}

function createWordMap (wordsArray) {
    // create map for word counts
    var wordsMap = {};
    wordsArray.forEach(function (key) {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });
    return wordsMap;
}

function sortByCount (wordsMap) {
    // sort by count in descending order
    var finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function(key) {
      return {
        name: key,
        total: wordsMap[key]
      };
    });
    finalWordsArray.sort(function(a, b) {
      return b.total - a.total;
    });
    return finalWordsArray;
}

function count_words (data, num) {
    var wordsArray = splitByWords(data);
    var wordsMap = createWordMap(wordsArray);
    var finalWordsArray = sortByCount(wordsMap);
    var res_data = []
    for(let i=0;i<num;i++){
        res_data.push(finalWordsArray[i])
    }
    return res_data
}

module.exports = count_words