function lpad(value, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + value).slice(-padding);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function filterSearch(searchTarget, search){
    // console.log(searchTarget.length);
    try {
        searchTarget = searchTarget.join().toLowerCase();
    } catch {
        searchTarget = searchTarget.toLowerCase();
    }
    let searchRequest = search;
    searchRequest = searchRequest.toLowerCase();
    return searchTarget.includes(searchRequest);
}

function displaySearchListing() {
    let templateRaw = "<div class=\"listing\" onclick=\"setDestination('NAME')\"><div style=\"text-align: center; width: 100%;\"><img src=\"IMGSRC/1.jpg\" class=\"listing_photo\"></div><div><h5>NAME</h5><div class=\"price_section\"><h4>PRICE ₽</h4><img class=\"heart_listing\"></div><h6>LOCATION</h6><p class=\"listing_tags\">TAGS</p></div></div>";
    let listingDisplay = document.getElementById("listingDisplay");
    let isMainPage = document.getElementById("main");
    fetch("https://raw.githubusercontent.com/sv022/web/main/activeListings.json").then((responce) =>
        responce.json().then((json) => {
                let tagSearch = getCookie("searchRequestTag");
                let nameSearch = getCookie("searchRequest");
                document.cookie = `searchRequestTag=None`;
                document.cookie = `searchRequest=None`;
                json["listings"].forEach(element => {
                    let template = templateRaw;
                    fetch(`https://raw.githubusercontent.com/sv022/web/main/files/${element}/properties.json`).then(
                        (data) => data.json().then(
                            (listingInfo) => {
                                if (!isMainPage){
                                    console.log()
                                    if (tagSearch != "None"){
                                        if (!filterSearch(listingInfo["tags"], tagSearch))
                                            template = template.replace("listing", "listing_inactive");
                                    } else {
                                        if (!filterSearch(listingInfo["name"], nameSearch))
                                            template = template.replace("listing", "listing_inactive");
                                    }
                                }
                                template = template.replaceAll("NAME", listingInfo["name"]);
                                template = template.replace("IMGSRC", "files/" + listingInfo["name"]);
                                template = template.replace("PRICE", `${Math.floor(listingInfo["price"] / 1000)} ${lpad(listingInfo["price"] % 1000, 3)}`);
                                template = template.replace("LOCATION", listingInfo["location"]);
                                let tags = "";
                                listingInfo["tags"].forEach(tag => tags += (tag + ";"));
                                template = template.replace("TAGS", tags);
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

