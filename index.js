function setDestination(listingID) {
  document.cookie = `listingID=${listingID}`;
  window.open("listing.html", "_blank");
}

function setSearchRequestTag(keyword) {
  document.cookie = `searchRequestTag=${keyword}`;
  window.open("search.html", "_blank");
}

function setSearchRequest() {
  let input = document.getElementById("searchbar");
  let request = input.value;
  console.log(request);
  document.cookie = `searchRequest=${request}`;
  window.open("search.html", "_blank");
}