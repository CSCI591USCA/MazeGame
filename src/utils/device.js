// Detect input mode: desktops use keyboard; phones/tablets use swipe.

export function detectInputMode(game) {
  const isDesktop = !!game.device?.os?.desktop;
  return {
    isTouch: !isDesktop // only phones/tablets count as touch mode
  };
}
