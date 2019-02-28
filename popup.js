const labels = {
  issue: {
    open: "Open issue",
    closed: "Closed issue"
  },
  pr: {
    open: "Open pull request",
    merged: "Merged pull request",
    closed: "Closed pull request"
  }
};

  const buttonClicks = [
    {
      id: "all",
      label: null,
    },
    {
      id: "openIssues",
      label: labels.issue.open
    },
    {
      id: "closedIssues",
      label: labels.issue.closed
    },
    {
      id: "openPRs",
      label: labels.pr.open
    },
    {
      id: "closedPRs",
      label: labels.pr.closed
    },
    {
      id: "mergedPRs",
      label: labels.pr.merged
    }
  ];

function overrideThingy(cl){
  chrome.tabs.query({currentWindow: true, active: true},
    function(tabs){
     chrome.tabs.sendMessage(tabs[0].id, cl)
    }
  )
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    buttonClicks.forEach(button => {
      document
        .getElementById(button.id)
        .addEventListener("click", function() {
          overrideThingy(button.label);
        });
    })
  },
  false
);
