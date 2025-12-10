class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.isEndOfWord = False