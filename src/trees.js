var treeParty = {}

treeParty.Node = function (val) {
  return { value: val,
           children: []
  }
}

treeParty.makeTree = function treeMaker(parent, word) {
  if(word.length > 0) {
    var existsArray = parent.children.filter(function(item) { return item.value == word[0] })
    var n
    if(existsArray.length == 0){
      n = new this.Node(word[0])
      parent.children.push(n)
    } else {
      n = existsArray[0]
    }
    this.makeTree(n, word.slice(1))
  }
}

treeParty.getAllWords = function(root) {
  var words = []
  function iterator(curr, wordThusly) {
    var newWordThusly = curr.value ? wordThusly + curr.value : wordThusly
    if(curr.children.length == 0) {
      words.push(newWordThusly)
      return
    } else {
      curr.children.forEach(function(item) {
        iterator(item, newWordThusly)
      })
    }
  }
  iterator(root, '')
  return words
}

treeParty.findWord = function(root, word) {
  var exists
  function iterator(node, remainingWord) {
//    console.log('remaining word is', remainingWord)
    var existsArr = node.children.filter(function(n) { return n.value == remainingWord[0] } )
//    console.log(existsArr)
    if(existsArr.length > 0) {
      var nextRemainingWord = remainingWord.slice(1)
      if(nextRemainingWord.length > 0) {
        node.children.forEach(function(n) { iterator(n, nextRemainingWord) })
      } else {
        exists = true
      }
    } else {
      exists = false
    }
  }
  iterator(root, word)
  return exists
}

module.exports = treeParty
