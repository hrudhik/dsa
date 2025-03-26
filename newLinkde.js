// const no = require("no");

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
//     insert(value){
//         let newNode=new Node(value);

//         if(!this.head){
//             this.head=newNode;
//             this.tail=newNode;
//             return;
//         }
//         this.tail.next=newNode
//         this.tail=newNode
//     }
//     insertAtBegging(value){
//         let newNode=new Node(value);
//         newNode.next=this.head;
//         this.head=newNode;
//         if(!this.tail)this.tail=newNode
//     }
//     reccursiveSearch(value,index=0,node=this.head){
//         if(!node){
//             return -1
//         }  
//         if(node.value===value)return index
//         return this.reccursiveSearch(value,index+1,no.next)
//     }
    

//     findMiddle(){
//         let slow = this.head
//         let fast=this.head
//         while(fast&&fast.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         console.log("this is the middle element",slow.value)
//     }

//     deletemiddle(){
//         let slow = this.head
//         let fast=this.head
//         let prev=null
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//         prev.next=slow.next
//     }

//     deleteelemportion(position){
//         let current=this.head
//         let count=0
//         let prev=null

//         while(current&&count<position){
//             prev=current
//             current=current.next
//             count++
//         }
//         prev.next = current.next
//     }

//     binarysearch(value){
//         let current=this.head;
//         let arr=[];
//         while(current){
//             arr.push(current.value);
//             current=current.next
//         }
//         let left=0
//         let right=arr.length-1
//         while(left<=right){
//             let midd=Math.floor((left+right)/2)
//             if(arr[midd]===value)return midd
//             else if(arr[midd]<value) left=left+1
//             else right=right-1
//         }
//         return -1
//     }
//     reverse(){
//         let curr= this.head
//         let next=null
//         let prev=null
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.tail=this.head
//         this.head=prev
//     }
//     display(){
//         let current=this.head;
//         while(current){
//             console.log(current.value);
//             current=current.next;
//         }
//     }
// }

// const list= new linkedList();
// list.insert(10);
// list.insert(100)
// list.insert(150)

// list.insertAtBegging(0)
// list.insertAtBegging(2)

// list.findMiddle()


// // console.log("reccursive",list.reccursiveSearch(1))
// list.display()
// // console.log("binary",list.binarysearch(10));
// // list.reverse();
// // console.log("after deleting the portion element")

// // list.deleteelemportion(1)
// // list.display();
// // console.log("after deleting the middle element")
// // list.deletemiddle()
// // list.display()

function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}
console.log(selectionsort([5,4,3,5,6,7,3,2]))

