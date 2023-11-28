function setDestination(listingID){
  document.cookie = `listingID=${listingID}`;
  location.replace("listing.html");
}
