var assert = require('assert')
var t = require('../src/trees.js')

assert(typeof t == 'object')

var root = new t.Node() // undefined node
assert(root.value == undefined)

var word = 'hello'

t.makeTree(root, word)
assert(root.children.length == 1)

t.makeTree(root, 'hi')
assert(root.children.length == 1) // no dupes for first letter
//assert(root.children[0].children.length == 2)

var foundWords = t.getAllWords(root)
console.log('Found: ', foundWords)
assert(foundWords.length == 2) // with 2 words

var foundCats = t.findWord(root, 'cats')
var foundHi = t.findWord(root, 'hi')
var foundHa = t.findWord(root, 'ha')
assert(foundCats == false) // no cats, nothing to see here
assert(foundHi == true)
assert(foundHa == false)

