import os
import sys
from collections import deque

def bfs_directory(start_path, target):
    queue = deque([start_path])
    results = []

    while queue:
        current = queue.popleft()

        for entry in os.listdir(current):
            full = os.path.join(current, entry)

            if os.path.isdir(full):
                queue.append(full)

            elif entry.endswith(".txt"):
                # linear search in file
                with open(full, "r", encoding="utf8", errors="ignore") as f:
                    for line in f:
                        if "Number of people:" in line:
                            # extract digits manually
                            num = ''.join(ch for ch in line if ch.isdigit())

                            if num == target:
                                year = os.path.basename(os.path.dirname(full))
                                month = entry.replace(".txt", "")
                                results.append((month, year))

    return results


# main execution
if len(sys.argv) < 2:
    print("Usage: python bfs_search.py <value>")
    sys.exit(1)

target = sys.argv[1]
matches = bfs_directory("data", target)

if not matches:
    print("No matches found.")
else:
    for m, y in matches:
        print(f"{m}, {y}")
