$(document).ready(function() {
  $("form#exam").submit(function(event) {
    var questionOne = $("input:radio[name=questionOne]:checked").val();
    var questionTwo = $("input:radio[name=questionTwo]:checked").val();
    var questionThree = $("input:radio[name=questionThree]:checked").val();
    var questionFour = $("input:radio[name=questionFour]:checked").val();
    var questionFive = $("input:radio[name=questionFive]:checked").val();
    var questionSix = $("input:radio[name=questionSix]:checked").val();
    var result = parseInt(questionOne) + parseInt(questionTwo) + parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive) + parseInt(questionSix);
    $("#result").text("YOUR SCORE IS: " + result + "%");

    $("button").click(function() {
      $("#result-showing").toggle();
    })
    $("form#exam").show();
    $("#result").show();
    event.preventDefault();
  });
});
