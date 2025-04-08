// // function selectionsort(arr){
// //     for(let i=0;i<arr.length-1;i++){
// //         let smal=i
// //         for(let j=i+1;j<arr.length;j++){
// //             if(arr[j]<arr[smal]){
// //                 smal=j
// //             }
// //         }
// //         if(smal!==i){
// //             let temp=arr[i]
// //             arr[i]=arr[smal]
// //             arr[smal]=temp
// //         }
// //     }
// //     return arr
// // }
// // console.log(selectionsort([2,3,54,6,7,9,0]))


// // trie

// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let node=this.root;

//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true;
//     }
//     search(word){
//         let node=this.root;
//         for(let char of word){
//             if(!node.children[char])return false
//             node=node.children[char]
//         }
//         return node.isEndOfWord
//     }
//     srartwith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char])return false
//             node=node.children[char]
//             return true
//         }
//     }
// }

// let trie= new Trie()
// trie.insert("apple")
// trie.insert("bananna")

// console.log(trie.search("apple"))
// console.log(trie.search("app"))

// console.log(trie.srartwith("apple"))
// console.log(trie.srartwith("pple"))








class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

const binary = new BinarySearchTree();
binary.insert(10);
binary.insert(5);
binary.insert(15);
binary.insert(3);
binary.insert(7);

console.log("In-Order Traversal:", binary.inOrderTraversal());
console.log("Search 7:", binary.search(7));
console.log("Search 20:", binary.search(20));



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the BST
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Check if the BST contains a value
    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    // Delete a node from the BST
    delete(value, root = this.root) {
        if (!root) return null;
        if (value < root.value) {
            root.left = this.delete(value, root.left);
        } else if (value > root.value) {
            root.right = this.delete(value, root.right);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            let minLargerNode = root.right;
            while (minLargerNode.left) {
                minLargerNode = minLargerNode.left;
            }
            root.value = minLargerNode.value;
            root.right = this.delete(minLargerNode.value, root.right);
        }
        return root;
    }

    // In-Order Traversal (Left, Root, Right)
    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-Order Traversal (Root, Left, Right)
    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-Order Traversal (Left, Right, Root)
    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // Find the closest value to a given number in BST
    findClosestValue(target) {
        let current = this.root;
        let closest = current.value;
        while (current) {
            if (Math.abs(target - closest) > Math.abs(target - current.value)) {
                closest = current.value;
            }
            current = target < current.value ? current.left : current.right;
        }
        return closest;
    }

    // Validate if a given tree is a BST
    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) return false;
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }
    kthlargest(k) {
        let node = this.root
        let arr = []
        function Inorder(node) {
            if (node) {
                Inorder(node.left)
                arr.push(node.value)
                Inorder(node.right)
            }
        }
        Inorder(node)
        if (k > arr.length) return "cannot find this position element can you try any other position "
        return arr[arr.length - k]
    }


}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

console.log("In-Order Traversal:", bst.inOrderTraversal());
console.log("Pre-Order Traversal:", bst.preOrderTraversal());
console.log("Post-Order Traversal:", bst.postOrderTraversal());
console.log("Contains 7:", bst.contains(7));
console.log("Contains 20:", bst.contains(20));
bst.delete(10);
console.log("In-Order After Deletion:", bst.inOrderTraversal());

console.log("Closest Value to 12:", bst.findClosestValue(12));

console.log("Is Valid BST:", bst.isBST());



class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    display() {
        return this.heap;
    }
}


const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
console.log("Min Heap:", heap.display());
console.log("Removed Min:", heap.remove());
console.log("Min Heap after remove:", heap.display());






function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;


    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) { 
        heapify(arr, n, i);
    }


    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}


let arr = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr);
console.log("Sorted Array:", heapSort(arr));



class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
    findLongest() {
        let prefix = ""
        let node = this.root
        while (true) {
            let key = (Object.keys(node.children))
            if (key.length === 1 && !node.isEnd) {
                prefix += key[0]
                node = node.children[key[0]]
            } else {
                break
            }
        }
        return prefix
    }
}


const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
console.log(Trie.findLongest())





class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
        }
    }
}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.display();



class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }


    bfs(start) {
        let queue = [start], result = [], visited = {};
        visited[start] = true;

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }


    dfs(start, visited = {}, result = []) {
        if (!visited[start]) {
            visited[start] = true;
            result.push(start);
            this.adjacencyList[start].forEach(neighbor => {
                if (!visited[neighbor]) {
                    this.dfs(neighbor, visited, result);
                }
            });
        }
        return result;
    }
}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("BFS:", graph.bfs("A"));
console.log("DFS:", graph.dfs("A"));



function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));


