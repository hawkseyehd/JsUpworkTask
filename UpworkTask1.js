function findVovels(value) {
    var data = value.match(/[aeiou]/gi);
    if (data === null)
        return null;
    else
        return data.length;
}

function findLongestWord(sample) {
    sentance = sample.replace(/[#_,<.>!'"`]/g, '');
    const words = sentance.split(' ');
    const sortedWords = words.sort((a, b) => b.length - a.length);

    const longestWord = sortedWords.reduce((longest, current) => {
        if (longest.length === current.length)
            return findVovels(longest) > findVovels(current) ? longest : current;
        else if (longest.length > current.length)
            return longest;
        else if (longest.length < current.length)
            return current;
    })
    return longestWord;
}

sample = "Enter any sentance here!"
console.log(findLongestWord(sample))