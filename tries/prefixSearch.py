def is_prefix(root, key):
    current = root
    for c in key:
        index = ord(c) - ord('a')

        # If character doesn't exist, return false
        if current.children[index] is None:
            return False
        current = current.children[index]

    return True