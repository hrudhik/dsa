//binartsearchtree

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BST{
//     constructor(){
//         this.root=null;
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(this.isEmpty()){
//             return this.root=newNode
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
//     findsecondLargest(root,parant){
//         if(!root.right){
//             if(!root.left){
//                 return parant.value
//             }
//             return this.findlargest(root.left)
//         }
//         return this.findsecondLargest(root.right,root)
//     }
//     findlargest(node){
//         while(node){
//             node=node.right
//         }
//         return node
//     }

//     inOrder(root,arr){
//         if(root){
//         this.inOrder(root.left,arr)
//         arr.push(root.value)
//         this.inOrder(root.right,arr)
//         }
//     }

//     findNthlargest(n){
//         let arr=[]
//         this.inOrder(this.root,arr)
//         return arr[arr.length-n]
//     }
// }


// let bst = new BST();
// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(60);
// bst.insert(80);
// bst.insert(75);
// bst.insert(85);

// console.log(bst.findsecondLargest(bst.root,null));
// console.log(bst.findNthlargest(4))

////graph

    class Graph{
        constructor(){
            this.Graph={}
        }
        addVertex(vertex){
            if(!this.Graph[vertex]) {
                this.Graph[vertex]=[]
            
            }
        }
        addEdge(vertex1,vertex2){
            if(!this.Graph[vertex1]) this.addVertex(vertex1)
            if(!this.Graph[vertex2]) this.addVertex(vertex2)
            this.Graph[vertex1].push(vertex2)
            this.Graph[vertex2].push(vertex1)
    
        }
        removeVertex(vertex){
            if(this.Graph[vertex]){
                delete this.Graph[vertex]
            }
            for(let key in this.Graph){
                this.Graph[key]=this.Graph[key].filter((v)=>v!==vertex)
            }
        }
        BFS(start){
            if(!this.Graph[start]) return 
            let queue=[start]
            let result=[]
            let visited=new Set()
            visited.add(start)
            
            while(queue.length){
                let current=queue.shift()
                result.push(current)
            this.Graph[current].forEach((item)=>{
                if(!visited.has(item)){
                    queue.push(item)
                    visited.add(item)
                }
            })
            }
            return result
        }
        DFS(start){
            if(!this.Graph[start]) return []
            let stack=[start]
            let result=[]
            let visited=new Set()
            visited.add(start)
            
            while(stack.length){
                let current=stack.pop()
                result.push(current)
                this.Graph[current].forEach((item)=>{
                    if(!visited.has(item)){
                        stack.push(item)
                        visited.add(item)
                    }
                })
            }
            return result
        }
        ShortesPath(start,end){
            if(!this.Graph[start] || !this.Graph[end]){
                return null
            }
            let queue=[start]
            let visited=new Set()
            visited.add(start)
            
            while(queue.length){
                let path=queue.shift()
                let node=path[path.length-1]
                
                if(node==end) return path
                
                for(let item of this.Graph[node]){ 
                    if(!visited.has(item)){
                        visited.add(item)
                        queue.push([...path,item])
                    }
                }
                
            }
            return null
        }
        
    }
    
    const graph = new Graph();
    
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');
    
    console.log("Graph before removing a vertex:");
    console.log(graph);
    
    console.log("Breadth-First Search (BFS) from A:", graph.BFS('A'))
    console.log("Breadth-First Search (BFS) from A:", graph.DFS('A'))
    console.log("ShortesPath",graph.ShortesPath('A',"C"))