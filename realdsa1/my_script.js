const fs = require("fs");
const path = require("path");

// BFS through folders
function bfsDirectory(startPath, target) {
    const queue = [startPath];
    const results = [];

    while (queue.length > 0) {
        const current = queue.shift(); // BFS pop

        const entries = fs.readdirSync(current);

        for (const entry of entries) {
            const fullPath = path.join(current, entry);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // Add directory to BFS queue
                queue.push(fullPath);

            } else if (entry.endsWith(".txt")) {
                // linear search inside each file
                const content = fs.readFileSync(fullPath, "utf8");
                const lines = content.split("\n");

                for (let line of lines) {
                    if (line.includes("Number of people:")) {

                        // extract digits manually
                        const num = line.split(":")[1].replace(/[^0-9]/g, "");

                        if (num === target) {
                            const year = path.basename(path.dirname(fullPath));
                            const month = entry.replace(".txt", "");
                            results.push({ month, year });
                        }
                    }
                }
            }
        }
    }

    return results;
}


// main execution
const target = process.argv[2];
if (!target) {
    console.log("Usage: node bfs_search.js <value>");
    process.exit(1);
}

const dataPath = path.join(__dirname, "data");
const matches = bfsDirectory(dataPath, target);

if (matches.length === 0) {
    console.log("No matches found.");
} else {
    matches.forEach(m => console.log(`${m.month}, ${m.year}`));
}

