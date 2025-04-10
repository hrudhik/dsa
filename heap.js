// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BST{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
            
//         }
//     }
//     isBst(node=this.root,min=-Infinity,max=Infinity){
//         if(!node)return true
//         if(node.value<=min&&node.value>=max)return false
//         return this.isBst(node.left,min,node.value)&&this.isBst(node.right,node.value,max)
//     }
    
    
//     // isBst(node=this.root,min=Infinity,max=Infinity){
//     //     if(!node)return true
//     //     if(node.value<=min || node.value>=max)return false
//     //     return this.isBst(node.left,min,node.value)&&this.isBst(node.right,node.value,node.value)
//     // }
//     kthlargest(k){
//         let node=this.root
//         let arr=[]
//          function Inorder(node){
//                 if(node){
//                     Inorder(node.left)
//                     arr.push(node.value)
//                     Inorder(node.right)
//                 }
//             }
//             Inorder(node)
//             if(k>arr.length)return "cannot find this position element can you try any other position " 
//             return arr[arr.length-k]
//     }

// }
// let l=new BST()
// l.insert(3)
// l.insert(1)
// l.insert(5)
// l.insert(23)
// l.insert(28)
// l.insert(51)
// l.insert(15)
// l.insert(65)
// l.inOrder(l.root)
// console.log(l.kthlargest(3))
// console.log(l.isBst())

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     getparnt(i){return Math.floor((i-1)/2)}
//     getleft(i){return 2*i+1}
//     getright(i){return 2*i+2}
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index=this.heap.length-1
//         while(index>0){
//             let parant=this.getparnt(index)
//             if(this.heap[index]<this.heap[parant]){
//                 [this.heap[index],this.heap[parant]]=[this.heap[parant],this.heap[index]]
//                 index=parant
//             }else{
//                 break
//             }
//         }
        
//     }
//     extractmin(){
//         if(this.heap.length===0)return
//         if(this.heap.length===1)return this.heap.pop()
//         let min=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         let smallest=index
//         let left=this.getleft(index)
//         let right=this.getright(index)
//         if(left<this.heap.length&& this.heap[smallest]>this.heap[left])smallest=left
//         if(right<this.heap.length&& this.heap[smallest]>this.heap[right])smallest=right
//         if(smallest!==index){
//             [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
//         }
//     }
//     display(){
//         console.log(this.heap)
//     }
//     sort(){
//         let copy=new minHeap()
//         copy.heap=[...this.heap]
//         let sorted=[]
//         while(copy.heap.length>0){
//             sorted.push(copy.extractmin())
//     }
//     return sorted
// }
// }

// let heap= new minHeap()
// heap.insert(10)
// heap.insert(9)
// heap.insert(11)
// heap.insert(12)
// heap.insert(3)
// heap.insert(5)
// heap.insert(7)
// heap.display()
// console.log(heap.extractmin())
// heap.display()
// console.log(heap.sort())
// class Node{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char])return false
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
//     autocomplete(prefix){
//         let node=this.root
//         let result=[]
//         for(let char of prefix){
//             if(!node.children[char])return result
//             node=node.children[char]
//         }
//         this.help(node,prefix,result)
//         return result
//     }
//     help(node,word,result){
//         if(node.isEnd){
//             result.push(word)
//         }
//         for(let char in node.children){
//             this.help(node.children[char],word+char,result)
//         }
//     }
// }
//   const trie = new Trie();
//         trie.insert("apple");
//         trie.insert("app");
//         trie.insert("apps");
//         trie.insert("apex");
//         trie.insert("bat");
//         trie.insert("ball");
        
//         console.log(trie.autocomplete("ap")); // ["apple", "app", "apps", "apex"]
//         console.log(trie.autocomplete("b"));  // ["bat", "ball"]
//         console.log(trie.autocomplete("c"));  // []
//         console.log(trie.search('pple'))
        
        

// class Graph{
//     constructor(){
//         this.graph={}
//     }
//     addNode(node){
//         if(!this.graph[node]){
//             this.graph[node]=[]
//         }
//     }
//     addEdge(node1,node2){
//         if(!this.graph[node1])this.addNode(node1)
//         if(!this.graph[node2])this.addNode(node2)
        
//         this.graph[node1].push(node2)
//         this.graph[node2].push(node1)
//     }
//     bfs(start){
//         if(!graph[start])return
//         let quee=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
//         while(quee.length>0){
//             let curr=quee.shift()
//             result.push(curr)
//             this.graph[curr].forEach((items)=>{
//                 if(!visited.has(item)){
//                     quee.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return result
//     }
// }
//   const graph = new Graph();
    
//     graph.addNode('A');
//     graph.addNode('B');
//     graph.addNode('C');
//     graph.addNode('D');
//     graph.addNode('E');
    
//     graph.addEdge('A', 'B');
//     graph.addEdge('B', 'C');
//     graph.addEdge('C', 'D');
//     graph.addEdge('D', 'E');
    
//     console.log(graph)
//     console.log(graph.bfs('A'))
//         // console.log(graph.dfs('A'))





// class heap{
//     constructor(){
//         this.heap=[]
//     }
//     getparant(i){}return Math.floor((i-1)/2)
//     getleft(i){return 2*i+1}
//     getright(i){return 2*i+2}
//     insert(value){
//         this.heap.push(value)
//         this.heaifyUp()
//     }
//     heaifyUp(){
//         let index=this.heap.length-1
//         while(index>0){
//             let parant=this.getparant(index)
//             if(this.heap[parant]>this.heap[index]){
//                 [this.heap[parant],this.heap[index]]=[this.heap[index],this.heap[parant]]
//             }
//             index=parant
//         }
//     }
//     display(){
//         console.log(this.heap)
//     }
// }

// class Graph{
//     constructor(){
//         this.graph={}
//     }
//     addNode(node){
//         if(!this.graph[node]){
//              this.graph[node]=[]
//         }
//     }
//     addEdge(node1,node2){
//         if(!this.graph[node1])this.addNode(node1)
//         if(!this.graph[node2])this.addNode(node2)
//         this.graph[node1].push(node2)
//         this.graph[node2].push(node1)
//     }
//     bfs(start){
//         if(!this.graph[start])return []
//         let quee=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
//         while(quee.length>0){
//             let curr=quee.shift()
//             result.push(curr)
//              this.graph[curr].forEach((item)=>{
//             // this.graph[curr].forEach((item)=>{
//                 if(!visited.has(item)){
//                     quee.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return result
//     }
// }

// let graph=new Graph()
// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("C")
// graph.addNode("D")
// graph.addNode("E")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","D")
// graph.addEdge("D","E")

// console.log(graph)
// console.log(graph.bfs('A'))




// class Graph{
//     constructor(){
//         this.graph={}
//     }
//     addNode(node){
//         if(!this.graph[node]){
//             this.graph[node]=[]
//         }
//     }
//     addEdge(node1,node2){
//         if(!this.graph[node1])this.addNode(node1)
//         if(!this.graph[node2])this.addNode(node2)
//         this.graph[node1].push(node2)
//         this.graph[node2].push(node1)
//     }
//     bfs(start){
//         if(!this.graph[start])return []
//         let quee=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
//         while(quee.length){
//             let curr=quee.shift()
//             result.push(curr)
//             this.graph[curr].forEach(item=>{
//                 if(!visited.has(item)){
//                     quee.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return result
//     }
//     dfs(start){
//         if(!this.graph[start])return []
//         let stack=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
//         while(stack.length){
//             let curr=stack.pop()
//             result.push(curr)
//             this.graph[curr].forEach(item=>{
//                 if(!visited.has(item)){
//                     stack.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return result
//     }
//     clonegraph(){
//         let newGraph=new Graph()
        
//         for(let node in this.graph){
//             newGraph.addNode(node)
//         }
//         for(let node in this.graph){
//             for(let neigbor of this.graph[node]){
//                 if(!newGraph.graph[node].includes(neigbor)){
//                     newGraph.addEdge(node,neigbor)
//                 }
//             }
//         }
//         return newGraph
//     }
    
// }
// let graph=new Graph()
// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("C")
// graph.addNode("D")
// graph.addNode("E")
// graph.addNode("A")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","D")
// graph.addEdge("D","E")

// console.log(graph)

// console.log("clone graph:",graph.clonegraph())





class Heap{
    constructor(){
        this.heap=[]
    }
    getparant(i){ return Math.floor((i-1)/2)}
    getleft(i){ return 2*i+1}
    getright(i){ return 2*i+2}
    
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parant=this.getparant(index)
            if(this.heap[parant]>this.heap[index]){
                [this.heap[parant],this.heap[index]]=[this.heap[index],this.heap[parant]]
                index=parant
            }else{
                break
            }
        }
    }
    display(){
        console.log(this.heap)
    }
    extractmin(){
        let min = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown(0)
        return min
    }
    heapifydown(index){
        let smallest=index
        let left=this.getleft(index)
        let right=this.getright(index)
        if(left>0 && this.heap[smallest]>this.heap[left])smallest=left
        if(right>0 && this.heap[smallest]>this.heap[right])smallest=right
        if(smallest!==index){
            [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
        }
    }
  }
  
  let min=new Heap()
  min.insert(1)
  min.insert(5)
  min.insert(10)
  min.insert(7)
  min.insert(8)
  min.insert(2)
  min.display()