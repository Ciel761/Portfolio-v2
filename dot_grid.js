window.addEventListener("load", () => {
    const dotGrid = document.querySelector(".dot-grid");
    if (!dotGrid) return;
    const cols = 40;
    const cellSize = 40;
    const gap = 10;
    const padding = 20;
    const availableHeight = dotGrid.clientHeight - padding * 2;
    const rows = Math.max(1, Math.floor((availableHeight + gap) / (cellSize + gap)));
    for (let i = 0; i < cols * rows; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dotGrid.appendChild(dot);
    }
});
