# Define the TrieNode class
class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.isEndOfWord = False

# Method to insert a key into the Trie
def insert(root, key):

    # Initialize the curr pointer with the root node
    curr = root

    # Iterate across the length of the string
    for c in key:

        # Check if the node exists for the
        # current character in the Trie
        index = ord(c) - ord('a')
        if curr.children[index] is None:

            # If node for current character does
            # not exist then make a new node
            new_node = TrieNode()

            # Keep the reference for the newly
            # created node
            curr.children[index] = new_node

        # Move the curr pointer to the
        # newly created node
        curr = curr.children[index]

    # Mark the end of the word
    curr.isEndOfWord = True