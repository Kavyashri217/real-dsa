class Node: 
    def __init__(self, data, next=None, prev=None): 
        self.data = data 
        self.next = next 
        self.prev = prev

class DoublyLinkedList:
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
            new_node.prev = temp
            temp.next = new_node

    # Insert data at the beginning of the list
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head:
            new_node.next = self.head
            self.head.prev = new_node
        self.head = new_node

    # Insert data at a specific position
    def insert_at_position(self, data, position):
        if position == 0:
            self.insert_at_beginning(data)
            return

        new_node = Node(data)
        temp = self.head
        count = 0

        while temp and count < position - 1:
            temp = temp.next
            count += 1

        if not temp:
            return  # Position out of bounds

        new_node.next = temp.next
        new_node.prev = temp
        if temp.next:
            temp.next.prev = new_node
        temp.next = new_node

    # Delete a node with specific data
    def delete(self, data):
        if not self.head:
            return

        temp = self.head

        # If head needs to be deleted
        if temp.data == data:
            self.head = temp.next
            if self.head:
                self.head.prev = None
            return

        while temp and temp.data != data:
            temp = temp.next

        if not temp:
            return  # Data not found

        if temp.next:
            temp.next.prev = temp.prev
        if temp.prev:
            temp.prev.next = temp.next

    # Search for a node with specific data
    def search(self, data):
        temp = self.head
        while temp:
            if temp.data == data:
                return True
            temp = temp.next
        return False

    # Display nodes forward
    def display(self):
        result = []
        temp = self.head
        while temp:
            result.append(str(temp.data))
            temp = temp.next
        print(" <-> ".join(result))

    # Display nodes backward
    def display_backward(self):
        if not self.head:
            print("Empty list")
            return

        temp = self.head
        while temp.next:
            temp = temp.next

        result = []
        while temp:
            result.append(str(temp.data))
            temp = temp.prev
        print(" <-> ".join(result))

    # Reverse the doubly linked list
    def reverse(self):
        current = self.head
        temp = None

        while current:
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev

        if temp:
            self.head = temp.prev

    # Check if list is empty
    def is_empty(self):
        return self.head is None

    # Get the length of the doubly linked list
    def get_length(self):
        count = 0
        temp = self.head
        while temp:
            count += 1
            temp = temp.next
        return count

if __name__ == "__main__":
    list_obj = DoublyLinkedList()
    
    # Insert elements
    list_obj.insert(1)
    list_obj.insert(2)
    list_obj.insert(3)
    list_obj.insert(4)
    list_obj.insert(5)
    
    print("Original list (forward):")
    list_obj.display()  
    
    print("Original list (backward):")
    list_obj.display_backward() 
    
    print("Length:", list_obj.get_length()) 
    
    print("Search 3:", list_obj.search(3)) 
    print("Search 10:", list_obj.search(10))  
    
    list_obj.insert_at_beginning(0)
    print("After inserting 0 at beginning:")
    list_obj.display()  
    
    list_obj.insert_at_position(2.5, 3)
    print("After inserting 2.5 at position 3:")
    list_obj.display()  
    
    list_obj.delete(3)
    print("After deleting 3:")
    list_obj.display()  
    
    list_obj.reverse()
    print("After reversing:")
    list_obj.display()  
