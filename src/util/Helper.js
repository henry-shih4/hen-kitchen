export default function intersectHelper() {
  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

      const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;

      if (entry.isIntersecting && !isAbove) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        if (entry.boundingClientRect.y > 0) {
          entry.target.classList.remove("animate-fadeIn");
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
}
