function highlightElements(highlightType) {
  const lineRanges = Array.from(document.getElementsByClassName(
    "boxed-group-inner list-group notifications"
  ));
  lineRanges.forEach(lineRange => {
    const allLines = Array.from(lineRange.getElementsByClassName("type-icon"));
    let noFade = allLines;
    if (highlightType !== null)
      noFade = Array.from(
        lineRange.querySelectorAll('[aria-label="' + highlightType + '"]')
      );

    allLines.forEach(line => {
      if (noFade.indexOf(line) !== -1) {
        line.parentElement.parentElement.style.opacity = 1;
      } else {
        line.parentElement.parentElement.style.opacity = 0.2;
      }
    });
  });
}

chrome.runtime.onMessage.addListener(function(request) {
  highlightElements(request);
});
