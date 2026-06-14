class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function main() {
    let arr = [2,5,8,7];
    let y = new Node(arr[0]);
    console.log(y);
    console.log(y.data);
}