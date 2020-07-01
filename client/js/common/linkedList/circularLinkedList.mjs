import { LinkedList } from './linkedList.mjs';

/*
* Node for a circularly linked list
* contains a single piece of data, regardless of type
* contains a pointer to the next Node in the list
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

/*
* Circularly Linked List (CLL)
*/
export class CircularLinkedList extends LinkedList  {
    /*
    * No Nodes are added upon creation
    */
    constructor() {
        this.length = 0;
        this.head = null;
    }

    /*
    * Creates a Node and adds it to the start of the CLL
    */
    prependNode(data) {
        let newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
            newNode.next = newNode;
        } else {
            let curNode = this.head;
            while(curNode.next !== this.head) {
                curNode = curNode.next;
            }

            curNode.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /*
    * Creates a Node and adds it to the end of the CLL
    */
    appendNode(data) {
        let newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let curNode = this.head;
            while(curNode.next != this.head) {
                curNode = curNode.next;
            }

            curNode.next = newNode;

            newNode.next = this.head;
        }

        this.length++;
    }

    /*
    * Deletes a Node matching the given data
    */
    deleteNode(data) {
        if(this.length === 0) {
            return;
        }
        else if (this.length === 1) {
            if(this.head.data !== data) {
                return;
            }
            this.head = null;
        } else {
            let curNode = this.head;

            while(curNode.next != this.head && curNode.next.data != data) {
                if(curNode.next.data = data) {
                    if(curNode.next === this.head) {
                        this.head = curNode.next.next;
                    }
                    curNode.next = curNode.next.next;
                    break;
                }

                curNode = curNode.next;
            }
        }

        this.length--;
    }

    /*
    * Finds a Node of the given data
    */
    findNode(data) {
        let curNode = this.head;

        while(curNode.data !== data) {
            if(curNode.next === this.head) {
                return false;
            } else {
                curNode = curNode.next;
            }
        }
        return curNode;
    }
};
