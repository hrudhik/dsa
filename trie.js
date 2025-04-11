
// class Node{
// constructor(){
//     this.child={}
//     this.isEnd=false
// }
// }
// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//           if(!node.child[char]){
//               node.child[char]=new Node()
//           }   
//           node=node.child[char]
//         }
//         node.isEnd=true
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.child[char])return false
//             node=node.child[char]
//         }
//         return node.isEnd
//     }
//     autocompletion(prefix){
//         let node=this.root
//         let result=[]
//         for(let char of prefix){
//             if(!node.child[char])return result
//             node=node.child[char]
//         }
//         this.collectwords(node,prefix,result)
//         return result
//     }
//     collectwords(node,word,result){
//         if(node.isEnd){
//             result.push(word)
//         }
//         for(let char in node.child){
//             this.collectwords(node.child[char],word+char,result)
//         }
//     }
// }
// let trie=new Trie()
// trie.insert("apple")
// trie.insert("app")
// trie.insert("apps")
// trie.insert("bat")
// trie.insert("ball")

// console.log(trie.search('appl'))
// console.log(trie.autocompletion("a"))
// console.log(trie.autocompletion("ab"))

