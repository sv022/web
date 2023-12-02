function setDestination(listingID){
  document.cookie = `listingID=${listingID}`;
  window.open("listing.html", "_blank");
}

function setSearchRequestTag(keyword){
  document.cookie = `searchRequest=${keyword}`;
  window.open("search.html", "_blank");
}
