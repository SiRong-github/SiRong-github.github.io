function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tabcontents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

function openDefaultTab() {
  document.getElementById("defaultTab").click();
  document.addEventListener("DOMContentLoaded", openDefaultTab);
}

function openActiveTab() {
  document.querySelectorAll(".tablink").forEach((tab) => {
    tab.addEventListener("click", function (event) {
      const tabName = this.getAttribute("href").substring(1);
      openTab(event, tabName);
    });
  });
}

export { openDefaultTab, openActiveTab };
