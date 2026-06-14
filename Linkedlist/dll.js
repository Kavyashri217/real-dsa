class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert data at the end of the list
    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            newNode.prev = temp;
            temp.next = newNode;
        }
    }

    // Insert data at the beginning of the list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    // Insert data at a specific position
    insertAtPosition(data, position) {
        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        const newNode = new Node(data);
        let temp = this.head;
        let count = 0;

        while (temp && count < position - 1) {
            temp = temp.next;
            count++;
        }

        if (!temp) return; // Position out of bounds

        newNode.next = temp.next;
        newNode.prev = temp;
        if (temp.next) {
            temp.next.prev = newNode;
        }
        temp.next = newNode;
    }

    // Delete a node with specific data
    delete(data) {
        if (!this.head) return;

        let temp = this.head;

        // If head needs to be deleted
        if (temp.data === data) {
            this.head = temp.next;
            if (this.head) {
                this.head.prev = null;
            }
            return;
        }

        while (temp && temp.data !== data) {
            temp = temp.next;
        }

        if (!temp) return; // Data not found

        if (temp.next) {
            temp.next.prev = temp.prev;
        }
        if (temp.prev) {
            temp.prev.next = temp.next;
        }
    }

    // Search for a node with specific data
    search(data) {
        let temp = this.head;
        while (temp) {
            if (temp.data === data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    // Display nodes forward
    display() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" <-> "));
    }

    // Display nodes backward
    displayBackward() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }

        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.join(" <-> "));
    }

    // Reverse the doubly linked list
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get the length of the doubly linked list
    getLength() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }
}

// Main function to demonstrate usage
function main() {
    const list = new DoublyLinkedList();
    
    // Insert elements
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    
    console.log("Original list (forward):");
    list.display(); // 1 <-> 2 <-> 3 <-> 4 <-> 5
    
    console.log("Original list (backward):");
    list.displayBackward(); // 5 <-> 4 <-> 3 <-> 2 <-> 1
    
    console.log("Length:", list.getLength()); // 5
    
    console.log("Search 3:", list.search(3)); // true
    console.log("Search 10:", list.search(10)); // false
    
    list.insertAtBeginning(0);
    console.log("After inserting 0 at beginning:");
    list.display(); // 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5
    
    list.insertAtPosition(2.5, 3);
    console.log("After inserting 2.5 at position 3:");
    list.display(); // 0 <-> 1 <-> 2 <-> 2.5 <-> 3 <-> 4 <-> 5
    
    list.delete(3);
    console.log("After deleting 3:");
    list.display(); // 0 <-> 1 <-> 2 <-> 2.5 <-> 4 <-> 5
    
    list.reverse();
    console.log("After reversing:");
    list.display(); // 5 <-> 4 <-> 2.5 <-> 2 <-> 1 <-> 0
}

main();
