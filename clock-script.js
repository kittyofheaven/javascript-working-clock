$(document).ready(function () {
    //Jam digital
  
    setInterval(function jamdigital() {
      var waktu = new Date();
  
      if (
        waktu.getHours() == 1 ||
        waktu.getHours() == 2 ||
        waktu.getHours() == 3 ||
        waktu.getHours() == 4 ||
        waktu.getHours() == 5 ||
        waktu.getHours() == 6 ||
        waktu.getHours() == 7 ||
        waktu.getHours() == 8 ||
        waktu.getHours() == 9 ||
        waktu.getHours() == 0
      ) {
        $("#jam").html("0" + waktu.getHours() + ":");
      } else {
        $("#jam").html(waktu.getHours() + ":");
      }
  
      if (
        waktu.getMinutes() == 1 ||
        waktu.getMinutes() == 2 ||
        waktu.getMinutes() == 3 ||
        waktu.getMinutes() == 4 ||
        waktu.getMinutes() == 5 ||
        waktu.getMinutes() == 6 ||
        waktu.getMinutes() == 7 ||
        waktu.getMinutes() == 8 ||
        waktu.getMinutes() == 9 ||
        waktu.getMinutes() == 0
      ) {
        $("#menit").html("0" + waktu.getMinutes() + ":");
      } else {
        $("#menit").html(waktu.getMinutes() + ":");
      }
  
      if (
        waktu.getSeconds() == 1 ||
        waktu.getSeconds() == 2 ||
        waktu.getSeconds() == 3 ||
        waktu.getSeconds() == 4 ||
        waktu.getSeconds() == 5 ||
        waktu.getSeconds() == 6 ||
        waktu.getSeconds() == 7 ||
        waktu.getSeconds() == 8 ||
        waktu.getSeconds() == 9 ||
        waktu.getSeconds() == 0
      ) {
        $("#detik").html("0" + waktu.getSeconds());
      } else {
        $("#detik").html(waktu.getSeconds());
      }
    }, 10);
});