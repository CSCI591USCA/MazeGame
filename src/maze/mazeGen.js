import { START_COLS, START_ROWS } from '../config.js';

// generateMaze can accept overrides for cols/rows so we can match the viewport.
export function generateMaze(level = 1, opts = {}) {
  let baseCols = opts.colsOverride ?? START_COLS;
  let baseRows = opts.rowsOverride ?? START_ROWS;

  // Grow slightly per level, keep odd numbers
  const cols = makeOdd(baseCols + (level - 1) * 2);
  const rows = makeOdd(baseRows + (level - 1) * 2);

  // 0 = wall, 1 = passage
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Start at random odd cell
  const startX = randOdd(cols);
  const startY = randOdd(rows);

  carveRecursiveBacktracker(grid, startX, startY);

  // Entrance/exit near opposite corners (keep simple & reliable)
  const startCell = { x: 1, y: 1 };
  const exitCell  = { x: cols - 2, y: rows - 2 };
  grid[startCell.y][startCell.x] = 1;
  grid[exitCell.y][exitCell.x]   = 1;

  return { grid, cols, rows, startCell, exitCell };
}

function carveRecursiveBacktracker(grid, sx, sy) {
  const rows = grid.length, cols = grid[0].length;
  const stack = [];
  const visited = (x, y) => (grid[y][x] & 2) !== 0;
  const markVisited = (x, y) => grid[y][x] |= 2;

  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) grid[y][x] = 0;

  let cx = sx, cy = sy;
  grid[cy][cx] = 1; markVisited(cx, cy);
  stack.push({ x: cx, y: cy });

  const dirs = [[0,-2],[2,0],[0,2],[-2,0]];

  while (stack.length) {
    const current = stack[stack.length - 1];
    cx = current.x; cy = current.y;

    const neighbors = shuffle(dirs.slice()).filter(([dx, dy]) => {
      const nx = cx + dx, ny = cy + dy;
      return nx > 0 && nx < cols-1 && ny > 0 && ny < rows-1 && !visited(nx, ny);
    });

    if (neighbors.length === 0) { stack.pop(); continue; }

    const [dx, dy] = neighbors[0];
    const nx = cx + dx, ny = cy + dy;
    grid[cy + dy/2][cx + dx/2] = 1; 
    grid[ny][nx] = 1;
    markVisited(nx, ny);
    stack.push({ x: nx, y: ny });
  }

  
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) grid[y][x] = grid[y][x] ? 1 : 0;
}

function makeOdd(n) { return n % 2 === 0 ? n + 1 : n; }
function randOdd(limit) {
  let v = Math.floor(Math.random() * Math.floor(limit/2)) * 2 + 1;
  if (v >= limit) v = limit - 2;
  return v;
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
