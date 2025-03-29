// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySeachTree{
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
//         if(newNode.value<root.value){
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
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value)
//         }
//     }
//     //BFStraversal approach
//     lineOrder(){
//         let quee=[]
//         quee.push(this.root)
//         while(quee.length){                                                                                                                                                                                                                                  
//             let curr=quee.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 quee.push(curr.left)
//             }
//             if(curr.right){
//                 quee.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     remove(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//            root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }
// let bst=new BinarySeachTree()
// // console.log(bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)


// // console.log(bst.search(bst.root,20))
// // console.log(bst.search(bst.root,15))
// // console.log(bst.search(bst.root,10))
// // console.log(bst.search(bst.root,5))
// // console.log(bst.min(bst.root))
// // console.log(bst.max(bst.root))
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// bst.lineOrder()
// console.log('///////////////////////////')
// bst.remove(3);
// bst.lineOrder()
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    
    heapifyDown(index){
        let smallest=index
        let left=this.getLeftChildIndex(index)
        let right=this.getRightChildIndex(index)
        
        if(left<this.heap.length && this.heap[left]<this.heap[index]){
          smallest=left  
        }
        if(right<this.heap.length && this.heap[index]>this.heap[right]){
            smallest=right
        }
        if(smallest!==index){
            [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }
    display(){
        console.log(this.heap)
    }
    sort(){
        let copy=new MinHeap()
        copy.heap=[...this.heap]
        let sortedArray=[]
        
        while(copy.heap.length>0){
            sortedArray.push(copy.extractMin())
        }
        return sortedArray
    }
}

// Usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(2);
// console.log(minHeap.extractMin()); // 2
minHeap.display()
console.log("sortedArry",minHeap.sort())


class Graph{
    constructor(){
        this.graph={}
    }
    addNode(node){
        if(!this.graph[node]){
            this.graph[node]=[]
        }
    }
    addEdge(node1,node2){
        if(!this.graph[node1])this.addNode(node1)
        if(!this.graph[node2])this.addNode(node2)
        this.graph[node1].push(node2)
        this.graph[node2].push(node1)
    }
    bfs(start){
        if(!this.graph[start])return 
        let quee=[start]
        let result=[]
        let visited=new Set()
        visited.add(start)
        
        while(quee.length){
            let current=quee.shift()
            result.push(current)
            this.graph[current].forEach((item)=>{
                if(!visited.has(item)){
                    quee.push(item)
                    visited.add(item)
                }
            })
            
        }
        return result
    }
    
    dfs(start){
        if(!this.graph[start])return
        let stack=[start]
        let result=[]
        let visited=new Set()
        visited.add(start)
        while(stack.length){
            let current=stack.pop()
            result.push(current)
            this.graph[current].forEach((item)=>{
                if(!visited.has(item)){
                    stack.push(item)
                    visited.add(item)
                }
            })
        }
        return result
    }
}
    const graph = new Graph();
    
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');
    
    console.log(graph)
    console.log(graph.bfs('A'))
        console.log(graph.dfs('A'))



        class Node{
            constructor(){
            this.child={}
            this.isEnd=false
            }
        }
        class Trie{
            constructor(){
                this.root=new Node()
            }
            insert(word){
                let node=this.root
                for(let char of word){
                    if(!node.child[char]){
                        node.child[char]=new Node
                    }
                    node=node.child[char]
                }
                node.isEnd=true
            }
            search(word){
                let node=this.root
                for(let char of word){
                    if(!node.child[char])return false
                    node=node.child[char]
                }
                return node.isEnd
            }
            startwith(prifix){
                let node=this.root
                for(let char of word){
                    if(!node.child[char])return false
                    node=node.child[char]
                }
                return true
            }
            autocomplete(prefix){
                let node = this.root
                let result=[]
                for(let char of prefix){
                    if(!node.child[char])return result
                    node=node.child[char]
                }
                this.dfs(node,prefix,result)
                return result
            }
            dfs(node,word,result){
                if(node.isEnd){
                    result.push(word)
                }
                for(let char in node.child){
                    this.dfs(node.child[char],word+char,result)
                }
            }
        }
        
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apps");
        trie.insert("apex");
        trie.insert("bat");
        trie.insert("ball");
        
        console.log(trie.autocomplete("ap")); // ["apple", "app", "apps", "apex"]
        console.log(trie.autocomplete("b"));  // ["bat", "ball"]
        console.log(trie.autocomplete("c"));  // []
        console.log(trie.search('pple'))
        
        function quicksort(arr){
    if(arr.length<=1)return arr
    let piviot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<piviot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),piviot,...quicksort(right)]
}