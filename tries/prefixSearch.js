function isPrefix(root, key)
{
    let current = root;
    for (let c of key) {
        let index = c.charCodeAt(0) - "a".charCodeAt(0);

        // If character doesn't exist, return false
        if (current.children[index] === null) {
            return false;
        }
        current = current.children[index];
    }

    return true;
}