class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert(value){
        let newNode=new Node(value)
        
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode
        this.tail=newNode
    }
    insertInBigning(value){
        let newNode=new Node(value)
        newNode.next=this.head
        this.head=newNode
    }
    insertSpecificPortion(value,position){
        let newNode=new Node(value)
        if(position===0){
            return this.insertInBigning(value)
        }
        let curr=this.head
        let count=0
        let prev=null
        while(curr!=null&&count<position){
            prev=curr
            curr=curr.next
            count++
        }
        newNode.next=curr
        prev.next=newNode
    }
    display(){
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
    findMidd(){
        let slow =this.head
        let fast= this.head
        while(fast&& fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        console.log("this is the middle elem:",slow.value)
    }
    deletemiddle(){
        
        let slow = this.head
        let fast=this.head
        let prev=null
        while(fast&& fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        
    }
    search(value){
        let curr=this.head
        let index=0
        while(curr){
            if(curr.value===value){
                return index
            }
            curr=curr.next
            index++
        }
        return -1
    }
    binarysearch(value){
        let curr=this.head
        let arr=[]
        while(curr){
            arr.push(curr.value)
            curr=curr.next
        }
        let left=0
        let right=arr.length-1
        while(left<right){
            let midd=Math.floor((left+right)/2)
            if(arr[midd]===value)return midd
            else if(arr[midd]<value)left =left+1
            else right= right-1
        }
        return -1
    }
    reccursivesearch(value,index=0,node=this.head){
        if(!node)return -1
        if(node.value===value)return index
        return this.reccursivesearch(value,index+1,node.next)
    }
    deleElemspecific(position){
        let curr=this.head
        let prev=null
        let count=0
        while(curr && count<position){
            prev=curr
            curr=curr.next
            count++
        }
        prev.next=curr.next
    }
    reverse(){
        let curr=this.head
        let next=null
        let prev=null
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.tail=this.head
        this.head=prev
        
    }
    
}
let list = new LinkedList()
list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.insertInBigning(1)
list.insertSpecificPortion(2,1)
console.log(list.search(10),"the search result")
console.log(list.binarysearch(10),'this is binarysearch')
console.log(list.reccursivesearch(10),"this is reccursivesearch")
list.deleElemspecific(1)
list.display()
list.reverse()
list.display()

// list.findMidd()
// list.deletemiddle()
// list.display()
// function sum(n,num=0){
   
//     if(n===0){
//         return num
//     }
//     num+=n
//     return sum(n-1,num)
// }

// console.log(sum(5))

// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

// function fibinocci(n){
//     if(n===0){
//         return 0
//     }
//     if(n===1)return 1
    
//     return fibinocci(n-1)+fibinocci(n-2)
// }
// console.log(fibinocci(6))

// function reverse(n){
//     if(n.length===0){
//         return []
//     }
//     return [...reverse(n.slice(1)),n[0]]
// }

// console.log(reverse([1,2,3]))

// function reverse(n){
//     if(n.length<=1)return n
//     return reverse(n.slice(1))+n[0]
// }
// console.log(reverse('eman'))


// let sparseArray=[]
// sparseArray[0]=2
// sparseArray[5]=1
// console.log(sparseArray)

// function larginArray(arr,lrg=0,second=0,third=0,index=0){
//     if(index===arr.length)return third
//     if(arr[index]>lrg){
//         lrg=arr[index]
//     }else if(arr[index]<lrg && arr[index]>second){
//         second=arr[index]
//     }else if(arr[index]<second && arr[index]>third){
//         third=arr[index]
//     }
//     return larginArray(arr,lrg,second,third,index+1)
// }
// let arr=[1,2,3,4,5,6,5,4,5,6,5]

// console.log(larginArray(arr))

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     arrayintoLinked(arr){
//         this.head= new Node(arr[0])
//         let curr=this.head
//         for(let i=1;i<arr.length;i++){
//             curr.next=new Node(arr[i])
//             curr=curr.next
//         }
//         this.tail=curr
//     }
//     display(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.value)
//             curr=curr.next
//         }
//     }
// }
// let list=new linkedList()

// list.arrayintoLinked([1,2,3,4,5,6,7])
// list.display()

// function reverse(str){
//     if(str.length===0)return ''
//     return reverse(str.slice(1))+str[0]
// }

// console.log(reverse('lo'))
// function fibinocci(n){
//     if(n===0)return 0
//     if(n===1)return 1
//     return fibinocci(n-1)+fibinocci(n-2)
// }
// console.log(factorial(5))

// function factorial(n){
//     if(n===0)return 1
//     return n*factorial(n-1)
// }

