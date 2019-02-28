function highlightElements(highlightType) {
  const lineRange = document.getElementsByClassName(
    "boxed-group-inner list-group notifications"
  )[0];
  const allLines = Array.from(lineRange.getElementsByClassName("octicon"));
  const noFade = Array.from(lineRange.getElementsByClassName(highlightType));
  allLines.forEach(line => {
    if (noFade.indexOf(line) !== -1) {
      line.parentNode.parentElement.parentElement.style.opacity = 1;
    } else {
      line.parentNode.parentElement.parentElement.style.opacity = 0.2;
    }
  });
}

chrome.runtime.onMessage.addListener(function(request) {
    console.log('request:', request)
    highlightElements(request)
})
