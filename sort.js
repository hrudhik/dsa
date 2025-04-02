// //BubbleSort

function BubbleSort(arr){
    let len=arr.length;
    for(let i=0;i<len-1;i++){
        let sorted=true
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                    sorted=false
                }
            }
            if(sorted)break 
    }
    return arr
}
let arr=[1,2,34,5,6,7]
console.log(BubbleSort(arr))

// //selectionSort

// function selectionSort(arr){
//     for(let i =0;i<arr.length-1;i++){
//         let small=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[small]){
//                 small=j
//             }
//         }
//         if(small!==i){
//             temp=arr[i]
//             arr[i]=arr[small]
//             arr[small]=temp
//         }
//     }
//     return arr
// }
// let arr=[6,5,6,4,3,5,67,7,4,2];
// console.log(selectionSort(arr))

// // insertionSort

// function insertionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let key=arr[i]
//         let j=i-1
//         while(j>=0&& arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }
// console.log(insertionSort([41,2,32,4,4,4,5,5,6,34,56,34,54,3789,0]))

// // quickSort

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// let array=[5,3,5,6,7,4,9,1,3,8,4,5]
// console.log(quickSort(array))

// // mergeSort

// function mergeSort(arr){
//     if(arr.length<=1)return arr
//     let midd=Math.floor(arr.length/2)
//     let left=mergeSort(arr.slice(0,midd))
//     let right=mergeSort(arr.slice(midd))
//     return merge(left,right)
    
// }
// function merge(left,right){
//     let sortedarray=[]
//     let i=0,j=0
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             sortedarray.push(left[i])
//             i++
//         }else{
//             sortedarray.push(right[j])
//             j++
//         }
//     }
//     return [...sortedarray,...left.slice(i),...right.slice(j)]
// }

// let a=[5,3,7,9,1,3,6,0,6,4,7]
// console.log(mergeSort(a))




// // stack 
// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(elem){
//         this.items.push(elem)
//     }
//     pop(){
//         if(this.isEmpty())return "The stack is empty"
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
    
//     isEmpty(){
//         return this.items.length===0
//     }
//     display(){
//         console.log(this.items)
//     }
// }

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         return this.items.length ? this.items.shift() : "Queue is empty";
//     }

//     display() {
//         console.log(this.items);
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.display();
// console.log(queue.dequeue());
// queue.display();

// // function reverse(str){
// //     let stack= new Stack()
// //     for(let char of str){
// //         stack.push(char)
// //     }
// //     let result=""
// //     while(!stack.isEmpty()){
// //         result+=stack.pop()
// //     }
// //     return result

// // }
// // console.log(reverse("appu"))

// //string sorting using merge sort


// function metgesort(str){
//     if(str.length<=1)return str
    
//     let midd=Math.floor(str.length/2)
//     let left=metgesort(str.slice(0,midd))
//     let right = metgesort(str.slice(midd))
//     return merge(left,right)
// }
// function merge(left,right){
//     let result=""
//     let i=0,j=0
    
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             result+=left[i]
//             i++
//         }else{
//             result+=right[j]
//             j++
//         }
//     }
//     return result+left.slice(i)+right.slice(j)
// }

// console.log(metgesort("hrudhik"))


// function isBallenced(str){
//     let stack=[];
//     let pairs={"}":"{",")":"(","]":"["}
//     for(let char of str){
//         if(char==="("||char==="{"||char==="["){
//             stack.push(char)
//         }else if(char===')'||char==="}"||char==="]"){
//             if(stack.length===0||stack.pop()!==pairs[char]){
//                 return false
//             }
//         }
//     }
//     return stack.length===0
// }

// console.log(isBallenced("({{[]}})"))

// // valid anagram using hash map
// function validanagram(str1,str2){
//     if(str1.length!==str2.length)return false
//     let count={}
//     for(let char of str1){
//         console.log(count[char],count[char]+1)
//         count[char]=(count[char]||0)+1
//     }
//     for(let char of str2){
//         if(!count[char])return false
//         count[char]--
//     }
//     return true
// }
// console.log(validanagram("appu",'pop'))



// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let char of key) {
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.table.length;
//     }

//     set(key, value) {
//         const index = this._hash(key);
//         if (!this.table[index]) this.table[index] = [];
//         this.table[index].push([key, value]);
//     }

//     get(key) {
//         const index = this._hash(key);
//         if (this.table[index]) {
//             for (let pair of this.table[index]) {
//                 if (pair[0] === key) return pair[1];
//             }
//         }
//         return undefined;
//     }

//     display() {
//         console.log(this.table);
//     }
// }

// const hashTable = new HashTable();
// hashTable.set("name", "Hrudhik");
// hashTable.set("age", 22);
// console.log(hashTable.get("name"));
// hashTable.display();
function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+i]=key
    }
    return arr
}
console.log(selectionsort([5,4,3,5,6,7,3,2]))