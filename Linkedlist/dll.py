class Node: 
    def __init__(self, data, next=None, prev =None): 
        self.data = data 
        self.next = next 
        self.prev = prev

arr = [1, 2, 3, 4, 5]
head = Node(arr[0])
print(head)
print(head.data)
    