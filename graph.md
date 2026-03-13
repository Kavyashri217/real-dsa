# Graphs:

## 1. Define Graphs 

    Graph is defined as G = (V, E)
    V = Set of vertices or nodes.
    E = Set of edges (connection between vertices or nodes). 
  
    Edges represent relationship between vertices.
    Graphs are fundamental because they model **relationships between entities** (networks, dependencies, routing, etc.), so the goal is to understand how they behave and how algorithms interact with them.

## 2. What is the difference between these two?
    
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

## 3. Suppose a graph has:
    - **V vertices**
    - **E undirected edges**
    
    In an **adjacency list**, how many total neighbor entries will exist?
    
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
   
## 4. Which representation always uses **O(V²)** space, even if the graph has very few edges.
    
    Adjacency Matrix 
    
    Think about what an Adjacency Matrix is, for V vertices, we create V × V table.
    
    Example for 4 Vertices:
    
    |  | 1 | 2 | 3 | 4 |
    | --- | --- | --- | --- | --- |
    | **1** | 0 | 1 | 1 | 0 |
    | **2** | 1 | 0 | 0 | 1 |
    | **3** | 1 | 0 | 0 | 0 |
    | **4** | 0 | 1 | 0 | 0 |
    
    Each cell (i, j) tells us whether an edge exists.
    
    So, the matrix always has:
    
    V×V cells.
    
    Even if the graph only has **3 edges**, the matrix still stores **all V² positions**.
    
    That’s why: Space = O(V^2)
   
## 5. Suppose we have:
**V = 1,000,000 nodes**
**E = 1,000,000 edges**
This is a **very sparse graph**.
        
Which representation would be more practical?
    
  A) Adjacency matrix
    
  B) Adjacency list
    
    B) Adjacency list
    
       Reason: Sparse graph, less density, reduces Space Complexity. 
    
    Adjacency matrix: 
    
        It stores V^2 cells.
    
        Think about this:
    
        1,000,000×1,000,000 → 1 trillion cells
    
    Adjacency list: 
    
        V+2E
    
    Which here is about:
    
    1,000,000+2,000,000≈3,000,000
    
    Millions of entries instead of trillions.
    
    Key intuition to remember:
    
    Adjacency matrix depends on **possible edges** →V^2
    
    Adjacency list depends on **actual edges** → E

## 6. Which representation is better if the graph is almost fully connected? 
    
Meaning: E≈V^2
    
A) Adjacency Matrix 
    
B) Adjacency List 
    
What do you think and why? 
    
        A) Adjacency Matrix, since the graph is dense, there is no space wasted, it is more convenient.
    
        When graph is dense 
    
        If E ≈ V^2
    
        then almost **every pair of vertices has an edge**.
    
        So, the matrix:
    
        V×V
    
        is actually **representing real information**, not empty space.
    
        Another advantage of adjacency matrix: 
    
        Consider this operation: 
        Check if an edge exists between **u and v.**
            
        With matrix we simply check matrix[u][v] → that is constant time → takes O(1) time.
    
        With adjacency list: 
        We must go to adj[u], scan its neighbors to see if v exists → that takes O(deg(u)) time.

## 7. In a graph we often talk about the **degree of a vertex**.
    
Do you know what **degree** means?
    
If yes, explain it in your own words.
    
    Degree of a vertex is how many edges it is connected to, in an undirected graph, but in directed graph it is further divided into two types inward degree and outward degree for edges pointing towards the         vertex and edges pointing away from vertex respectively.
