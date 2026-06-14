class Node: 
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    # Insert data at the end of the list
    def insert(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new_node

    # Insert data at the beginning of the list
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Delete a node with specific data
    def delete(self, data):
        if not self.head:
            return

        # If head needs to be deleted
        if self.head.data == data:
            self.head = self.head.next
            return

        temp = self.head
        while temp.next and temp.next.data != data:
            temp = temp.next

        if temp.next:
            temp.next = temp.next.next

    # Search for a node with specific data
    def search(self, data):
        temp = self.head
        while temp:
            if temp.data == data:
                return True
            temp = temp.next
        return False

    # Display all nodes
    def display(self):
        result = []
        temp = self.head
        while temp:
            result.append(str(temp.data))
            temp = temp.next
        print(" -> ".join(result))

    # Reverse the linked list
    def reverse(self):
        prev = None
        current = self.head
        next_node = None

        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev

    # Check if list is empty
    def is_empty(self):
        return self.head is None

    # Get the length of the linked list
    def get_length(self):
        count = 0
        temp = self.head
        while temp:
            count += 1
            temp = temp.next
        return count

if __name__ == "__main__":
    list_obj = LinkedList()
    
    # Insert elements
    list_obj.insert(2)
    list_obj.insert(3)
    list_obj.insert(4)
    list_obj.insert(5)
    
    print("Original list:")
    list_obj.display()  # 2 -> 3 -> 4 -> 5
    
    print("Length:", list_obj.get_length())  # 4
    
    print("Search 3:", list_obj.search(3))  # True
    print("Search 10:", list_obj.search(10))  # False
    
    list_obj.insert_at_beginning(1)
    print("After inserting 1 at beginning:")
    list_obj.display()  # 1 -> 2 -> 3 -> 4 -> 5
    
    list_obj.delete(3)
    print("After deleting 3:")
    list_obj.display()  # 1 -> 2 -> 4 -> 5
    
    list_obj.reverse()
    print("After reversing:")
    list_obj.display()  # 5 -> 4 -> 2 -> 1
