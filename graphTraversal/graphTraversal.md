# Graph Traversal

## 1. When exploring a graph from a starting node, there are two exploration styles:
    
    A) Explore all immediate neighbors first, then move on to the neighbors of neighbors.
    
    B) Follow one path as deep as possible, when you can’t go further, backtrack.
    
    Which of these corresponds to **BFS** and which corresponds to **DFS**?
    
    A corresponds to BFS, and B corresponds to DFS. 
    
    BFS: You explore nodes **level by level** (all neighbors first).
    
    DFS: You go as deep as possible and then backtrack. 
    
    Mental model: 
    
    Think of a graph like a maze. 
    
    BFS: Expands like a ripple in water. Distance from start increases layer by layer.
    
    DFS: Like walking a corridor until it ends, then coming back and trying another path.

## 2. Each traversal naturally fits a certain data structure.
    
    Which data structure do you think is used for:
    
    **BFS → ?**
    
    **DFS → ?**
    
    And try to explain **why that structure fits the behavior**.
    
    When we implement traversal, we need some data structure to decide which node to visit next. 
    
    **BFS**: We visit nodes level by level 
    
    Example order: 
    
    Start
    ↓
    All neighbors
    ↓
    Neighbors of neighbors
    ↓
    Next layer
    
    So, the node discovered first should be processed first. 
    
    That means we need a structure that follows **First In First Out**
    
    **DFS:** DFS goes deep into a path first. 
    
    Before exploring other neighbors of `Start`, we keep going deeper.
    
    So, the **most recently discovered node** should be processed **first**.
    
    That means we need a structure that follows:
    
    **Last In First Out**
    
    - **BFS → Queue (FIFO)**
    - **DFS → Stack (LIFO)**
    
    **BFS (Queue)**
    
    Queue processes elements in **First In → First Out** order.
    
    This naturally creates a layer-by-layer exploration. 
    
    **DFS (Stack)**
    
    Stack processes elements in **Last In → First Out** order.
    
    We go **deeper before exploring siblings**.
    
    This produces the **deep path exploration** behavior.

## 3. When traversing graphs, we almost always maintain something like:
    
    visited[node]
    
    Why do you think this is necessary?
    
    (The algorithm will not know which node to visit next if we don't maintain visited[node]?? → not quite right- The algorithm **will still know which node to visit next** because the **queue/stack already stores that**.)
    
    The real problem
    
    Without `visited`:
    
    - nodes get **re-added repeatedly**
    - the traversal may **never terminate** in cyclic graphs
    - time complexity **explodes**
    
    Because graphs often contain **cycles**.
    
    You could loop **forever**.
    
    So `visited` ensures:
    
    - every vertex is processed **once**
    
    ### Quick reinforcement trick
    
    A useful invariant for traversal:
    
    > **A node is enqueued/pushed only once.**
    >

    That keeps BFS/DFS at:
    
    O(V+E)

## 4. For the following graph 

    
          1
         / \
        2   3
       / \
      4   5 
    
    Starting from 1, what do you think the DFS traversal order would be if we always visit the smallest numbered neighbor first?
    
    If you include backtracking steps: 1 -> 2 -> 4 -> 2 -> 5 -> 2 -> 1 -> 3
    
    But DFS does backtrack internally, but in a DFS traversal order we usually list each node the first time it is visited. 
    
    Because we are using a visited structure, nodes are not revisited.
    
    1 -> [2,3]
    2 -> [1,4,5]
    3 -> [1]
    4 -> [2]
    5 -> [2]
    
    Start at 1 → visit 1 → go to smallest neighbor → 2, visit 2 → smallest neighbor → 1, but 1 is already visited, so skip → next 4 → visit 4 → 4 only connects to 2 → already visited → backtrack → back to 2 → next neighbor → 5 → visit 5 → backtrack to 2 → then back to 1 → next neighbor of 1 → 3 → visit 3. 
    
    So, the visit order becomes 
    
    1 → 2 → 4 → 5 → 3

## 5. Which traversal **guarantees the shortest path in an unweighted graph**?
    
    A) BFS
    
    B) DFS
    
    My answer: A) BFS because there is no backtracking.
    
    BFS is correct, but reason is not quite right.
    
    BFS explores the graph layer by layer from the starting node.
    Example levels from node **1**:
    Level 0: 1
    Level 1: 2, 3
    Level 2: 4, 5
    
    So BFS visits nodes in order of **distance (number of edges) from the source**.
    
    That means:
    
    - first time we reach a node
    - we reached it using the **minimum number of edges**
    
    That is why BFS gives the **shortest path in an unweighted graph**.
    
    DFS may go deep into a long path first. 
    Even if there was a **much shorter path. 
    DFS might discover the long one first.**