const Node = require('./node');
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if(this.length!==0){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else{
            this._head = this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        
        let count = 0;
        let currentNode = this._head;
            while(count !== index){
                currentNode = currentNode.next;
                count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let node = this._head;
        let count = 0;

        if(this.length > 0) {
            while(count < index ){
                node = node.next;
                count++;
            }

            let insertNode = new Node(data);

            node.prev.next = insertNode;
            insertNode.prev = node.prev;
            node.prev = insertNode;
            insertNode.next = node;
            return insertNode;
        }
        else {
            node = new Node(data);
            this._head = this._tail = node;
            return this.node;
        }
    }

    isEmpty() {
        if(this.length > 0)
            return false;
        else return true;
    }

    clear() {
        if(this.length){
            this._head.data = this._tail.data = this._head.next = this._tail.prev = null;
            this.length = 0;
          }
          return this;
    }

    deleteAt(index) {
        let node = this._head;
        let count = 0;
        if(this.length > 1) {
            while(count < index ){
                node = node.next;
                count++;
            }
            node.next.prev = node.prev;
            node.prev.next = node.next;
            node = null;
        }
        else
            node = null;
         return this;
    }

    reverse() {
        if(this.length>1){
        let node = this._tail.prev;
        this._tail.next = this._tail.prev = null;
        this._head = this._tail;

        let count = 1;
        while(count < this.length){
          this._tail.next = node;
          node = node.prev;
          this._tail.next.prev = this._tail;
          this._tail = this._tail.next;
          count++;
        }
        this._tail.next = null;
    }
        return this;
    }

    indexOf(data) {
        let count = 0;
        let node = this._head
  
        while(count < this.length && node.data != data){
          node = node.next;
          count++;
        }
        if(count === this.length){
          return -1;
        }
        else{
          return count;
        }
      }
}

module.exports = LinkedList;
