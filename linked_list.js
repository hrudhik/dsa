// linkedList

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail= null;
    }
    
    insertAtEnd(value){ 
        let newNode=new Node(value);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deleteAtEnd(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        if(!this.head.next){
            this.head=null;
            this.tail=null;
            return;
        }
        let current=this.head.next
        while(current.next.next){
            current=current.next
        }      
        current.next=null;
        this.tail=current;
        
    }

    insert(value){
        let newNode= new Node(value);

        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode
        this.tail=newNode
    }

    search(value) {
        let current=this.head
        let index=0
        while(current){
            if(current.value===value){
                return index
            }
            current=current.next
            index++
        }
    
        return -1
    }
    
    binarySearch(value){
        let arr=[]
        let current= this.head

        while(current){
            arr.push(current.value)
            current=current.next
        }
        let left=0
        let right=arr.length-1
        while(left<=right){
            let mid= Math.floor((right+left)/2)
            if(arr[mid]===value)return mid
            else if(arr[mid]<value) left=mid+1
            else right=mid-1
        }
        return -1
    }

    recsussiveSearch(value,index=0,node=this.head){
        if(!node) return -1;
        if(node.value===value) return index;
        return this.recsussiveSearch(value,index+1,node.next);
    }


    insertatBeggining(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        if(!this.tail)this.tail=newNode
    }
    deleteAtBeggining(){
        if(!this.head){
            console.log("list is empty")
            return
        }
        this.head=this.head.next;
        if(!this.head)this.tail=null
    }

    insertatSpecificposition(value,position){
        let newNode= new Node(value);
         
        if(position===0){
            this.insertatBeggining(value);
            return;
        }

        let current=this.head;
        let prev=null;
        let count=0;

        while(current!== null && count<position){
            prev=current
            current=current.next;
            count++
        }

        if(prev===null){
            console.log("position out of bounds");
            return;
        }
        newNode.next= current;
        prev.next=newNode;
    }

    display(){
        let current= this.head;         
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

let list = new linkedList()
list.insert(30)
list.insertAtEnd(9)//tail
list.insertatBeggining(20)//head
list.insertatSpecificposition(15,1)
list.insert(10)

list.display()
// console.log(list.recsussiveSearch(3))
// console.log(list.binarySearch(30))
// console.log(list.search(9))
// list.deleteAtBeggining()
// console.log('\n')
// list.display()
// console.log('\n')

// list.deleteAtEnd()
// list.display()

