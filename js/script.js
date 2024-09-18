// Go back a page button *ONLY FOR TESTING, REMOVE BEFORE LAUNCH!*
document.getElementById("backButton").addEventListener("click", () => {
  history.back();
});

// --------------------------------------------------------------


//Mouse Hover Fucntion for All Links
$(document).ready(function () {
  
  $("a").mouseout(function () {
    $("strong").css("background-color", "transparent");
  });
});


 