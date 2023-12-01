function lpad(value, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + value).slice(-padding);
}

function displaySearchListing() {
    let templateRaw = "<div class=\"listing\" onclick=\"setDestination('NAME')\"><div style=\"text-align: center; width: 100%;\"><img src=\"IMGSRC/1.jpg\" class=\"listing_photo\"></div><div><h5>NAME</h5><div class=\"price_section\"><h4>PRICE ₽</h4><img class=\"heart_listing\"></div><h6>LOCATION</h6></div></div>";
    let listingDisplay = document.getElementById("listingDisplay");
    fetch("https://raw.githubusercontent.com/sv022/web/main/activeListings.json").then((responce) =>
        responce.json().then((json) => {
                json["listings"].forEach(element => {
                    let template = templateRaw;
                    fetch(`https://raw.githubusercontent.com/sv022/web/main/files/${element}/properties.json`).then(
                        (data) => data.json().then(
                            (listingInfo) => {
                                template = template.replaceAll("NAME", listingInfo["name"]);
                                template = template.replace("IMGSRC", "files/" + listingInfo["name"]);
                                template = template.replace("PRICE", `${listingInfo["price"] / 1000} ${lpad(listingInfo["price"] % 1000, 3)}`);
                                template = template.replace("LOCATION", listingInfo["location"]);
                                listingDisplay.innerHTML += template;
                                }
                            )
                        )
                });
            }
        )
    );
    //listingDisplay.innerHTML += template;
};

displaySearchListing();