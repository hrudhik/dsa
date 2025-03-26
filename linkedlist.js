class Node{
    constructor(value){
     this.value=value;
     this.next= null
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    // insert an element in the linkedList
    insert(value){
        let newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail= newNode
            return;
        }
        this.tail.next =newNode;
        this.tail=newNode;
    }
    // insert element in the start of the list
    insertToBeginning(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode
        if(!this.tail)this.tail=newNode
    }
//   insert element in the end portion  
    insertAtEnd(value){
        let newNode= new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode;
        this.tail=newNode;
    }
    
    // insertAtPosition(value,position){
    //     let newNode= new Node(value);
    //     if(position===0){
    //         return this.insertToBeginning(value)
    //     }
        
    //     let current = this.head;
    //     let prev=null
    //     let count=0
    //     while(current!==null&& count<position){
    //         prev=current
    //         current=current.next
    //         count++
    //     }
    //     if(prev===null){
    //         return console.log('position is out of bound')
    //     }
    //     newNode.next = current
    //     prev.next=newNode
    // }

    // indsert using position or index
    insertToportion(value,position){
        let newNode= new Node(value)
        
        if(position===0){
            return this.insertToBeginning(value)
        }
        
        let current=this.head;
        let previos=null;
        let count=0
        
        while(current!==null&& count<position){
            previos=current
            current=current.next
            count++
        }
        newNode.next=current
        previos.next=newNode
    }

    // delete Elements using index
    deleteIndex(index){
        if(!this.head){
            console.log("the list is empty")
            return;
        }
        if(index===0){
            this.head=this.head.next
            if(!this.head)this.tail=null
            return
        }
        
        let count=0;
        let current=this.head;
        let prev=null
        
        while(current!==null&&count<index){
            prev=current
            current=current.next
            count++
        }
        if(!current){
            console.log("index out of range")
            return;
        }
        prev.next=current.next
        
        if(!prev.next){
        this.tail=prev
        }
        
    }
    // reverse the linkedList
    reverse(){
        let next=null 
        let current=this.head
        let prev= null
        
        while(current){
            next=current.next
            current.next=prev
            prev=current
            current=next
        }
        
        this.tail=this.head
        this.head=prev
    }
    //finding the middle element
    findMiddle(){
        let first=this.head
        let second=this.head
        while(second!=null&&second.next!=null){
            first=first.next
            second=second.next.next
        }
        console.log("middle elem",first.value) 
    }
    // search
    search(value){
        let current=this.head;
        let index=0
        while(current){
            if(current.value===value){
                return index
            }
            current=current.next;
            index++
        }
        return -1
    }
    
    
    // to print the linkedList
    display(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}
let list=new Linkedlist()

list.insert(50);
list.insertToBeginning(60);
list.insertAtEnd(10)
list.insert(40);
list.insertToportion(1,2)

console.log("this is search result",list.search(1))
list.display()
// list.reverse()

// console.log('\n')
// list.deleteIndex(3)
// list.display()
// list.findMiddle()

