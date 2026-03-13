### Graphs:

1. Define Graphs 

  Graph is defined as G = (V, E)
  V = Set of vertices or nodes.
  E = Set of edges (connection between vertices or nodes). 
  
  Edges represent relationship between vertices.
  Graphs are fundamental because they model **relationships between entities** (networks, dependencies, routing, etc.), so the goal is to understand how they behave and how algorithms interact with them.

2. What is the difference between these two?
    
    **Undirected edge:** A — B
    
    **Directed edge:** A → B
    
    Undirected edge does not have a specific direction, A-B can mean A to B or B to A, but in directed graph, it points towards a specific direction, A->B is A to B and not B to A, similarly, B->A is B to A and not A to B.
    
    **Undirected**
    
    - Edge has **no direction**
    - Connection is **mutual**
    - If there is an edge between A and B, you can travel **both ways**
    
    Example:
    
    A — B
    
    means
    
    A → B **and** B → A are both allowed.
    
    **Directed**
    
    - Edge has a **direction**
    - Relationship is **one-way**
    
    Example:
    
    A → B
    
    means you can go **A → B**, but **not B → A** unless another edge exists.

3. Suppose a graph has:
    - **V vertices**
    - **E undirected edges**
    
    In an **adjacency list**, how many total neighbor entries will exist?
    
    ![Screenshot 2026-03-11 195156.png](attachment:269ed81f-bb62-4f69-beb6-8a54df89a36b:Screenshot_2026-03-11_195156.png)
    
    2 * E
    
    For an **undirected graph**, each edge `{u, v}` appears:
    
    - once in `u`’s neighbor list
    - once in `v`’s neighbor list
    
    So, the **total adjacency list entries = 2E**.
    
    This leads to an important property engineers rely on:
    
    **Space complexity of adjacency list**
    
    - vertices storage → **V**
    - neighbor entries → **2E**
    
    So overall storage is proportional to:
    
    O(V+E)
    
    (The constant `2` is ignored in complexity.)
    
    **Why it matters conceptually?**
    
    Many graph algorithms iterate like this:
    
    ```
    for neighbor in adj[node]
    ```
    
    If you sum this work **over all nodes**, the total neighbor visits are exactly **2E**.
    
    This is why many graph algorithms run in:
    
    O(V+E)
    
    instead of something worse.
