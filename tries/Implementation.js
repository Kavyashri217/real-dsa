// TrieNode class
class TrieNode {
    constructor()
    {
        this.children = new Array(26).fill(null);
        this.isLeaf = false;
    }
}

// Trie class
class Trie {
    constructor() { this.root = new TrieNode(); }

    // Method to insert a key into the Trie
    insert(key)
    {
        let curr = this.root;
        for (let c of key) {
            if (curr.children[c.charCodeAt(0)
                              - "a".charCodeAt(0)]
                === null) {
                curr.children[c.charCodeAt(0)
                              - "a".charCodeAt(0)]
                    = new TrieNode();
            }
            curr = curr.children[c.charCodeAt(0)
                                 - "a".charCodeAt(0)];
        }
        curr.isLeaf = true;
    }

    // Method to search a key in the Trie
    search(key)
    {
        let curr = this.root;
        for (let c of key) {
            if (curr.children[c.charCodeAt(0)
                              - "a".charCodeAt(0)]
                === null)
                return false;
            curr = curr.children[c.charCodeAt(0)
                                 - "a".charCodeAt(0)];
        }
        return curr.isLeaf;
    }

    // Method to check if a prefix exists in the Trie
    isPrefix(prefix)
    {
        let curr = this.root;
        for (let c of prefix) {
            if (curr.children[c.charCodeAt(0)
                              - "a".charCodeAt(0)]
                === null)
                return false;
            curr = curr.children[c.charCodeAt(0)
                                 - "a".charCodeAt(0)];
        }
        return true;
    }
}

const trie = new Trie();
const arr = [ "and", "ant", "do", "dad"];
for (let s of arr) {
    trie.insert(s);
}

// One by one search strings
const searchKeys = [ "do", "gee", "bat" ];

console.log(searchKeys.map(s => trie.search(s) ? "true" : "false").join(" "));

// One by one search for prefixes
const prefixKeys = [ "ge", "ba", "do", "de" ];
console.log(prefixKeys.map(s => trie.isPrefix(s) ? "true" : "false").join(" "));