class TrieNode {
    constructor() {
    
        // Initialize the child Node
        // array with 26 nulls
        this.children = Array(26).fill(null);
        
        // Initialize wordEnd to the false
        // indicating that no word ends here yet
        this.isEndOfWord = false;
    }
}