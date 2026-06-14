class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
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
            temp.next = newNode;
        }
    }

    // Insert data at the beginning of the list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node with specific data
    delete(data) {
        if (!this.head) return;

        // If head needs to be deleted
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        while (temp.next && temp.next.data !== data) {
            temp = temp.next;
        }

        if (temp.next) {
            temp.next = temp.next.next;
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

    // Display all nodes
    display() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get the length of the linked list
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
    const list = new LinkedList();
    
    // Insert elements
    list.insert(2);
    list.insert(5);
    list.insert(8);
    list.insert(7);
    
    console.log("Original list:");
    list.display(); // 2 -> 5 -> 8 -> 7
    
    console.log("Length:", list.getLength()); // 4
    
    console.log("Search 5:", list.search(5)); // true
    console.log("Search 10:", list.search(10)); // false
    
    list.insertAtBeginning(1);
    console.log("After inserting 1 at beginning:");
    list.display(); // 1 -> 2 -> 5 -> 8 -> 7
    
    list.delete(5);
    console.log("After deleting 5:");
    list.display(); // 1 -> 2 -> 8 -> 7
    
    list.reverse();
    console.log("After reversing:");
    list.display(); // 7 -> 8 -> 2 -> 1
}

main();
