class Node: 
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

if __name__ == "__main__":
    arr = [2,3,4,5]

    y = Node(arr[0])

    print(y)

    print(y.data)

    