function displayFeaturedListing() {

}


function displaySearchListing() {
    let listingDisplay = document.getElementById("listingDisplay");
    let template = "<div class=\"listing\"><div style=\"text-align: center; width: 100%;\"><img src=\"files/Ibanez RG950QMZ-RDT Premium 2013 - 2014 - Red Desert/1.jpg\" class=\"listing_photo\"></div><div><h5>Ibanez RG950QMZ-RDT Premium 2013 - 2014 - Red Desert</h5><div class=\"price_section\"><h4>75000 ₽</h4><img class=\"heart_listing\"></div><h6>Москва, Юго-Западная</h6></div></div>";
    
    listingDisplay.innerHTML += template;
};

displaySearchListing();