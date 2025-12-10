// Method to search a key in the Trie
function search(root, key) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.children[index] === null) 
            return false;

        // Move the curr pointer to the 
        // already existing node for the 
        // current character
        curr = curr.children[index];
    }

    // Return true if the word exists 
    // and is marked as ending
    return curr.isEndOfWord;
}