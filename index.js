//let jsonfile = fetch("https://raw.githubusercontent.com/sv022/web/main/files/Epiphone%20Elitist%20Les%20Paul%20Standard%20Ebony/properties.json").then((responce) => responce.json());

function goToListing(listingID){
    listingID = listingID.replaceAll(' ', "%20");
    let promise = fetch(`https://raw.githubusercontent.com/sv022/web/main/files/${listingID}/properties.json`);
    let template = "<div><img src=IMGSRC class=\"listing_page_photo\"></div><div class=\"listing_info\"><h4>NAME</h4><div class=\"listing_fav_button\"><img src=\"img/heart_outline_orange.png\" class=\"listing_fav_heart\">Добавить в избранное</div><h3>75 000 ₽</h3><div class=\"seller_profile\">Продавец<div class=\"message_seller_button\">Сообщение продавцу</div></div></div>";
    promise.then(
        responce => {
            responce.json().then(
                json => {
                    console.log(json);
                    template = template.replace("IMGSRC", json["imgsrc"]);
                    template = template.replace("NAME", "name_lol");
                    console.log(template);
                }
            )
        }
    )
    //let listingdata = fetch(`./files/${listingID}/properties.json"`).then((responce) => responce.json());
    let listing = document.getElementById("listing");
    listing.innerHTML = template;
}

function addToFavourite(){

}

goToListing("Ibanez RG950QMZ-RDT Premium 2013 - 2014 - Red Desert");