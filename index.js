const cats = require('cat-names');
const villains = require('supervillains');
const superb = require('superb');
const petDefense = require('./defense');
const fs = require('fs');

const headline = petDefense(cats.random(), villains.random(), superb.random());
fs.writeFile('madlib.txt', headline + '\n', { flag: 'a'}, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(headline);
    }
});