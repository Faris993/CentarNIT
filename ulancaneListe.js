class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
    }

    class LinkedinList {
        constructor(){
            this.head = null;
        }
        insertFirst(data) {
            const node = new Node(data, this.head);
            this.head = node;
            }

            print(){
                let current = this.head;

                while(current !== null){
                    console.log(current.data);
                    current = current.next
                }
            }

            size() {
                let counter=0;
                let node = this.head;

                while(node){
                    counter++;
                    node = node.next;
                }

                return counter;
            }
            getFirst(){
                return this.head
            }
            getLast(){
                if(!this.head){
                    return null;
                }

                let node = this.head;
                while(node){
                    if(!node.next) {
                        return node;
                    }
                    node = node.next;
                }
            }
            clear(){
                this.head = null;
            }
            removeFirst() {
                if(!this.head){
                    return;
                }
                this.head = this.head.next;
            }
            removeLast(){
                if(!this.head) {
                    return;
                }
                if(!this.head.next) {
                    this.head = null;
                    return;
                }
                let previous = this.head;
                let node = this.head.next;
                while(node.next){
                    previous = node;
                    node = node.next;
                }
                previous.next = null;
            }
            insertLast(data){
                const last = this.getLast();

                if(last){
                    last.next = new Node(data);
                } else {
                    this.head = new Node(data);
                }
            }
            getAt(index){
                let counter = 0;
                let node = this.head;

                while(node){
                    if(counter === index){
                        return node;
                    }
                    counter++;
                    node.node.next;
                }
                return null;
            }
                removeAt(index){
                    if(!this.head){
                        return;
                    }
                    if(index === 0){
                        this.head = this.head.next;
                        return;
                    }
                    const previous = this.getAt(index - 1);
                    if(!previous || !previous.next){
                        return;
                    }
                    previous.next= previous.next.next
                }
                insertAt(data, index) {
                    if (index === 0) {
                        this.insertFirst(data);
                        return;
                    }
                
                    let newNode = new Node(data);
                    let previousNode = this.getAt(index - 1);
                
                    if (previousNode) {
                        newNode.next = previousNode.next;
                        previousNode.next = newNode;
                    } else {
                        this.insertLast(data);
                    }
                }

                midpoint(){
                    let slow = node.getFirst();
                    let fast = node.getFirst();

                    while(fast.next && fast.next.next){
                        slow = slow.next;
                        fast = fast.next.next;
                    }
                    return slow;
                }
                
                circulacList(list){
                    let slow = list.getFirst();
                    let fast = list.getFirst();

                    while(fast.next && fast.next.next){
                        slow = slow.next;
                        fast = fast.next.next;

                        if(slow === fast){
                            return true;
                        }
                    }
                    return false;
            }

            reverseLinkedList(head) {
                let prev = null;
                let current = head;
              
                while (current !== null) {
                  const next = current.next; // Pohranjujemo referencu na sljedeći element
                  current.next = prev; // Postavljamo trenutni element da pokazuje na prethodni element
                  prev = current; // Pomičemo prethodni na trenutni element
                  current = next; // Pomičemo trenutni element na sljedeći element
                }
              
                return prev; // Vraćamo novu glavu, koja je bila zadnji element originalne liste
              }

              // Pronalaženje srednjeg elementa i uklanjanje
  deleteMiddleElement() {
    if (this.head) {
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    if (prev){
        prev.next = slow.next;
    } else {
        this.head = null;
    }
    
  }

  // Pronalaženje i uklanjanje n-tog elementa
  deleteNthElement(k) {
if (!this.head || k <= 0 ){
    return;
}
let current = this.head;
let prev = null;
let count = 1;

while(current){
    if(count % k === 0){
        if(prev){
            prev.next = current.next;
        } else {
            this.head = current.next;
        }
    } else {
        prev = current;
    }
    current = current.next;
    count++;
}
        }        
    }

    
   let nodeX = new Node(20,nodeY)
   let nodeY = new Node(10)

   //     if (this.head === null || n <= 0) {
//       return;
//     }

//     if (n === 1) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     let prev = null;
//     let count = 1;

//     while (current !== null && count < n) {
//       prev = current;
//       current = current.next;
//       count++;
//     }

//     if (current !== null) {
//       prev.next = current.next;
//     }
//   }