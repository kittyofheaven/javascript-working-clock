$(document).ready(function () {
    //Jam digital
  
    setInterval(function jamdigital() {
      var juncture = new Date();
  
      if (
        juncture.getHours() == 1 ||
        juncture.getHours() == 2 ||
        juncture.getHours() == 3 ||
        juncture.getHours() == 4 ||
        juncture.getHours() == 5 ||
        juncture.getHours() == 6 ||
        juncture.getHours() == 7 ||
        juncture.getHours() == 8 ||
        juncture.getHours() == 9 ||
        juncture.getHours() == 0
      ) {
        $("#-hours").html("0" + juncture.getHours() + ":");
      } else {
        $("#-hours").html(juncture.getHours() + ":");
      }
  
      if (
        juncture.getMinutes() == 1 ||
        juncture.getMinutes() == 2 ||
        juncture.getMinutes() == 3 ||
        juncture.getMinutes() == 4 ||
        juncture.getMinutes() == 5 ||
        juncture.getMinutes() == 6 ||
        juncture.getMinutes() == 7 ||
        juncture.getMinutes() == 8 ||
        juncture.getMinutes() == 9 ||
        juncture.getMinutes() == 0
      ) {
        $("#-minutes").html("0" + juncture.getMinutes() + ":");
      } else {
        $("#-minutes").html(juncture.getMinutes() + ":");
      }
  
      if (
        juncture.getSeconds() == 1 ||
        juncture.getSeconds() == 2 ||
        juncture.getSeconds() == 3 ||
        juncture.getSeconds() == 4 ||
        juncture.getSeconds() == 5 ||
        juncture.getSeconds() == 6 ||
        juncture.getSeconds() == 7 ||
        juncture.getSeconds() == 8 ||
        juncture.getSeconds() == 9 ||
        juncture.getSeconds() == 0
      ) {
        $("#-seconds").html("0" + juncture.getSeconds());
      } else {
        $("#-seconds").html(juncture.getSeconds());
      }
    }, 10);
});