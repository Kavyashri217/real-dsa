# Method to search a key in the Trie
def search(root, key):

    # Initialize the curr pointer with the root node
    curr = root

    # Iterate across the length of the string
    for c in key:

        # Check if the node exists for the 
        # current character in the Trie
        index = ord(c) - ord('a')
        if curr.children[index] is None:
            return False

        # Move the curr pointer to the 
        # already existing node for the 
        # current character
        curr = curr.children[index]

    # Return true if the word exists 
    # and is marked as ending
    return curr.isEndOfWord