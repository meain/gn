const classNames = {
  issue: {
    open: "octicon octicon-issue-opened",
    closed: "octicon octicon-issue-closed"
  },
  pr: {
    open: "octicon octicon-git-pull-request",
    merged: "octicon octicon-git-merge",
    closed: "octicon octicon-git-pull-request"
  }
};

  const buttonClicks = [
    {
      id: "all",
      classNames: "octicon",
    },
    {
      id: "openIssues",
      classNames: classNames.issue.open
    },
    {
      id: "closedIssues",
      classNames: classNames.issue.closed
    },
    {
      id: "openPRs",
      classNames: classNames.pr.open
    },
    {
      id: "closedPRs",
      classNames: classNames.pr.closed
    },
    {
      id: "mergedPRs",
      classNames: classNames.pr.merged
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
          overrideThingy(button.classNames);
        });
    })
  },
  false
);
