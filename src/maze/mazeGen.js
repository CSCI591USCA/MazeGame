export function generateMaze(level = 1, opts = {}) {
  const cols = makeOdd(Math.max(7, opts.colsOverride ?? 31));
  const rows = makeOdd(Math.max(7, opts.rowsOverride ?? 23));

  const grid = filled(rows, cols, 0);
  for (let y = 1; y < rows; y += 2)
    for (let x = 1; x < cols; x += 2) grid[y][x] = 1;

  const startCell = { x: 1, y: 1 };
  const stack = [startCell];
  const seen = filled(rows, cols, false);
  seen[startCell.y][startCell.x] = true;

  while (stack.length) {
    const cur = stack[stack.length - 1];
    const nxts = shuffle(step2(cur.x, cur.y).filter(n =>
      inside(n.x, n.y, cols, rows) && !seen[n.y][n.x] && grid[n.y][n.x] === 1
    ));
    if (!nxts.length) { stack.pop(); continue; }
    const n = nxts[0];
    grid[(cur.y + n.y) >> 1][(cur.x + n.x) >> 1] = 1; // knock wall between
    seen[n.y][n.x] = true;
    stack.push(n);
  }

  // Exit near bottom-right
  const exitCell = nearestOpenToBR(grid);

  const braidFactor = clamp(0.5 + 0.1 * (level - 1), 0.5, 0.7);
  braidMaze(grid, braidFactor);

  return { grid, cols, rows, startCell, exitCell };
}

/* ---------------- braiding ---------------- */
function braidMaze(grid, factor = 0.6) {
  const rows = grid.length, cols = grid[0].length;

  // Collect all corridor "cells" at odd coords
  const cells = [];
  for (let y = 1; y < rows; y += 2)
    for (let x = 1; x < cols; x += 2)
      if (grid[y][x] === 1) cells.push({ x, y });

  // Find dead-ends: corridor cells with exactly one open neighbor (through a wall)
  const deadEnds = [];
  for (const c of cells) {
    const openNeighbors = [];
    for (const d of DIRS2) {
      const nx = c.x + 2 * d.x, ny = c.y + 2 * d.y;       // next cell
      const wx = c.x + d.x,       wy = c.y + d.y;         // wall between
      if (!inside(nx, ny, cols, rows)) continue;
      if (grid[wy][wx] === 1 && grid[ny][nx] === 1) openNeighbors.push({ nx, ny, wx, wy });
    }
    if (openNeighbors.length === 1) deadEnds.push(c);
  }

  // Randomize so we don't bias direction
  shuffle(deadEnds);

  const toOpen = Math.floor(deadEnds.length * factor);

  let opened = 0;
  for (const c of deadEnds) {
    if (opened >= toOpen) break;

    // For this dead-end, pick a CLOSED neighbor wall to punch through
    const candidates = [];
    for (const d of DIRS2) {
      const nx = c.x + 2 * d.x, ny = c.y + 2 * d.y;
      const wx = c.x + d.x,       wy = c.y + d.y;
      if (!inside(nx, ny, cols, rows)) continue;
      // If the wall is closed but the far cell is a corridor, opening here creates a loop
      if (grid[wy][wx] === 0 && grid[ny][nx] === 1) candidates.push({ wx, wy });
    }

    if (!candidates.length) continue;

    // Prefer the wall that leads toward "busier" area (more floors around), else random
    let best = null, bestScore = -1;
    for (const cand of candidates) {
      const score = floorNeighborhoodScore(grid, cand.wx, cand.wy);
      if (score > bestScore) { bestScore = score; best = cand; }
    }

    grid[best.wy][best.wx] = 1; // open the wall -> removes dead-end
    opened++;
  }
}

// Score how many floors surround this position (to bias toward creating meaningful loops)
function floorNeighborhoodScore(g, x, y) {
  let s = 0;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const yy = y + dy, xx = x + dx;
      if (g[yy] && g[yy][xx] === 1) s++;
    }
  }
  return s;
}

/* ---------------- helpers ---------------- */
const DIRS2 = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];

function filled(r, c, v) { return Array.from({ length: r }, () => Array(c).fill(v)); }
function makeOdd(n) { return (n % 2 === 0) ? n + 1 : n; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; [a[i],a[j]]=[a[j],a[i]]; } return a; }

function inside(x, y, cols, rows) { return x > 0 && y > 0 && x < cols - 1 && y < rows - 1; }

function step2(x, y) { // move two tiles to next odd cell
  return [{x:x+2,y},{x:x-2,y},{x,y:y+2},{x,y:y-2}];
}

function nearestOpenToBR(grid) {
  const rows = grid.length, cols = grid[0].length;
  const target = { x: cols - 2, y: rows - 2 };
  let best = { x: 1, y: 1 }, bestD = 1e9;
  for (let y = 1; y < rows - 1; y++) {
    for (let x = 1; x < cols - 1; x++) {
      if (grid[y][x] !== 1) continue;
      const d = Math.abs(target.x - x) + Math.abs(target.y - y);
      if (d < bestD) { bestD = d; best = { x, y }; }
    }
  }
  return best;
}
