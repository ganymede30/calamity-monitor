export const debounce = (cb, wait, immediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) cb.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) cb.apply(context, args);
  };
};
