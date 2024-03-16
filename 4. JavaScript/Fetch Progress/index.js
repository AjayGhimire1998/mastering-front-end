// Step 1: start the fetch and obtain a reader
(async () => {
  // Step 1: start the fetch and obtain a reader
  let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100"
  );

  const reader = response.body.getReader();

  // Step 2: get total length
  const contentLength = +response.headers.get("Content-Length");
})();
