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
    //debugger;
    console.log('current node is', node)
    console.log('remaining word is', remainingWord)
    if(node.children.length == 0) {
      console.log('reached this if!')
      return true
    }
    var existsArr = node.children.filter(function(n) { return n.value == remainingWord[0] } )
    //console.log(existsArr)
    if(existsArr.length > 0) {
      var nextRemainingWord = remainingWord.slice(1)
      if(nextRemainingWord.length > 0) {
        return node.children.forEach(function(n) { return iterator(n, nextRemainingWord) })
      } else {
        console.log("THIS IS HERE WTF")
        return true
      }
    } else {
      return false
    }
  }
  return iterator(root, word)
}
var root = new treeParty.Node()
treeParty.makeTree(root, 'hi')
treeParty.makeTree(root, 'hello')

module.exports = treeParty
