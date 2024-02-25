class Node{
    constructor(data, prev = null,next = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    
}
class DoublyLinkedList{




    insertFirst(){
        const newNode = new Node(data, null, this.head);
        if(this.head){
            this.head.prev= newNode;
        }
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    insertLast(){
        const newNode = new Node(data, this.tail, null);

        if(!this.tail){
            this.tail.next = newNode;
        } 
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        }
        }
        removeFirst(){
            if(!this.head) return;
            if(this.head.next){
                this.head.next.prev = null;
            } else {
                this.tail = null;
            }
            this.head = this.head.next;
        }
        removeLast(){
            if(!this.tail) return;
            if(this.tail.prev) {
                this.tail.prev.next = null;
            } else {
                this.head = null;
            }
            this.tail = this.tail.prev;
        }
        insertAt(data,index){
            if(index === 0){
                this.insertFirst(data);
                return;
            }

            let current = this.head;
            let count = 0;
            while(current && count < index){
                current = current.next;
                count++;
            }
            if(count === index){
                const newNode = new Node(data,current.prev, current);
                if(current.prev){
                    current.prev.next = newNode;
                }
                current.prev = newNode;
                if(index === 0){
                    this.head = newNode;
                }
            } else {
                throw new Error("Index out of range")
            }
        }
    }