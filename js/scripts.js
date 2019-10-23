var conversion = function(weight) {
  return (weight / 16);
};

var conversion2 = function(liquid) {
  return (liquid * 3.785);
}

$(document).ready(function() {
  $("form#weightForm").submit(function(event) {
    event.preventDefault();
    var weightStr = $("#ounceInput").val();
    var weight = parseFloat(weightStr);
    var result = conversion(weight).toFixed(2);
    $('.ounceInput').text(weight);
    $('#ounceResult').text(result);
    $("#result").show();
  });


  $("form#liquidForm").submit(function(event) {
    event.preventDefault();
    console.log(gallonsInput);
    var liquidStr = $("#gallonsInput").val();
    var liquid = parseFloat(liquidStr);
    var result2 = conversion2(liquid).toFixed(2);
    $('.gallonsInput').text(liquid);
    $('#gallonsResult').text(result2);
    $("#result2").show();
  });
});
