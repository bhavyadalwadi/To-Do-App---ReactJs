# Graph Report - To-Do-App---ReactJs  (2026-05-19)

## Corpus Check
- 6 files · ~904 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 36 nodes · 34 edges · 7 communities (4 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `dependencies` - 6 edges
2. `scripts` - 5 edges
3. `App` - 4 edges
4. `List` - 3 edges
5. `List` - 3 edges
6. `register()` - 2 edges
7. `registerValidSW()` - 2 edges
8. `name` - 1 edges
9. `version` - 1 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (7 total, 3 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.4
Nodes (3): isLocalhost, register(), registerValidSW()

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (6): dependencies, react, react-dom, react-icons, react-scripts, react-transition-group

### Community 3 - "Community 3"
Cohesion: 0.4
Nodes (5): scripts, build, eject, start, test

### Community 4 - "Community 4"
Cohesion: 0.5
Nodes (3): name, private, version

## Knowledge Gaps
- **14 isolated node(s):** `name`, `version`, `private`, `react`, `react-dom` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 2` to `Community 4`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 3` to `Community 4`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._