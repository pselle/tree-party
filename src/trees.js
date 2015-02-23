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
  function iterator(node, remainingWord) {
    var existsArr = node.children.filter(function(n) { return n.value == remainingWord[0] } )
    if(existsArr.length > 0) {
      var nextRemainingWord = remainingWord.slice(1)
      if(nextRemainingWord.length > 0) {
        for(var i=0; i < node.children.length; i++) {
          return iterator(node.children[i], nextRemainingWord)
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }
  return iterator(root, word)
}

module.exports = treeParty
