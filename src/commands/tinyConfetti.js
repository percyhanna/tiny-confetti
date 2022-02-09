function triggerTinyConfetti(event) {
  import(
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.3/dist/confetti.browser.js"
  ).then(() => {
    // Command for creating confetti.
    window.confetti({
      particleCount: 30,
      spread: 40,
      origin: {
        x: event.pageX / window.innerWidth,
        y: event.pageY / window.innerHeight,
      },
      startVelocity: 5,
      zIndex: 10000,
      useWorker: false,
      ticks: 20,
      scalar: 0.25,
    });
  });
}

$(document).on("click.tinyConfetti", 'input[type="checkbox"]', (event) => {
  if (event.target.checked) {
    triggerTinyConfetti(event);
  }
});

$(document).on(
  "click.tinyConfetti",
  ".task:not(.approval) .status-icon:not(.disabled), .task:not(.approval) .task-status-icon:not(.disabled)",
  (event) => {
    if (event.currentTarget.querySelector("i.aha-icon-pending")) {
      triggerTinyConfetti(event);
    }
  }
);
