class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
let arr = [1, 2, 3, 4, 5];
let head = new Node(arr[0]);
console.log(head);
console.log(head.data);