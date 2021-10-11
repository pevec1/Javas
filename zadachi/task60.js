let adress = document.location.href;

if (
  adress.substring(0, 7) == "http://" ||
  adress.substring(0, 8) == "https://"
) {
  alert("true");
} else {
  alert("false");
}
