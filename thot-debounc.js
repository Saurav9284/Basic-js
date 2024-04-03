function debounce(func, delay) {
  let timeoutId;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let throttled = false;
  return function() {
    if (!throttled) {
      func.apply(this, arguments);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, limit);
    }
  };
}
