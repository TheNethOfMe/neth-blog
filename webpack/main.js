const webBtn = document.getElementById("web-btn");
const podBtn = document.getElementById("pod-btn");
const blogBtn = document.getElementById("blog-btn");

function skinSite(classSlug) {
  const container = document.getElementById("container");
  const containerClass = `container-bg-${classSlug}`;
  container.classList = "";
  container.classList.add(containerClass);

  const info = document.getElementById("info");
  const infoClass = `info-${classSlug}`;
  info.classList = "";
  info.classList.add(infoClass);
}

webBtn.addEventListener("click", () => {
  skinSite("web");
});

podBtn.addEventListener("click", () => {
  skinSite("pod");
});

blogBtn.addEventListener("click", () => {
  skinSite("blog");
});
