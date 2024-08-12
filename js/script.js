

 
// Go back a page button
document.getElementById("backButton").addEventListener("click", () =>{
  history.back();
});

// --------------------------------------------------------------
  $(document).ready(function(){
    $("a").mouseover(function(){
      $("a").css("background-color", "yellow");
    });
    $("a").mouseout(function(){
      $("a").css("background-color", "lightgray");
    });
  });