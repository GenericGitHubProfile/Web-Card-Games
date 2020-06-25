import { LinkedList } from './linkedList.mjs';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

export class CircularLinkedList extends LinkedList  {
    constructor() {
        this.length = 0;
        this.head = null;
    }

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
