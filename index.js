function userLogin(){
  window.open("error.html", "_self");
}

function userRegister(){
  window.open("error.html", "_self");
}

function setDestination(listingID) {
  document.cookie = `listingID=${listingID}`;
  if (document.getElementById("main"))
    window.open("listing.html", "_blank");
  else
    window.open("listing.html", "_self");
}

function setSearchRequestTag(keyword) {
  document.cookie = `searchRequestTag=${keyword}`;
  if (document.getElementById("main"))
    window.open("search.html", "_blank");
  else
    window.open("search.html", "_self");
}

function setSearchRequest() {
  let input = document.getElementById("searchbar");
  let request = input.value;
  console.log(request);
  document.cookie = `searchRequest=${request}`;
  if (document.getElementById("main"))
    window.open("search.html", "_blank");
  else
    window.open("search.html", "_self");
}