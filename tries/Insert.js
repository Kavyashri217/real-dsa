// Method to insert a key into the Trie
function insert(root, key) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.children[index] === null) {

            // If node for current character does 
            // not exist then make a new node
            let newNode = new TrieNode();

            // Keep the reference for the newly
            // created node
            curr.children[index] = newNode;
        }

        // Move the curr pointer to the
        // newly created node
        curr = curr.children[index];
    }

    // Mark the end of the word
    curr.isEndOfWord = true;
}