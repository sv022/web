//let jsonfile = fetch("https://raw.githubusercontent.com/sv022/web/main/files/Epiphone%20Elitist%20Les%20Paul%20Standard%20Ebony/properties.json").then((responce) => responce.json());

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
  
function setListingData(){
  //listingID = listingID.replaceAll(' ', "%20");
  let listingID = getCookie("listingID");
  let promise = fetch(`https://raw.githubusercontent.com/sv022/web/main/files/${listingID}/properties.json`);
  let template = "<div class=\"listing_page\"><div class=\"listing_photo_gallery\"><a class=\"prev\" onclick=\"plusSlides(-1)\"><img src=\"img/arrow_left_photo.png\"></a><img src=\"files/NAME/1.jpg\" class=\"listing_page_photo\"><p>MAXINDEX</p><a class=\"next\" onclick=\"plusSlides(1)\"><img src=\"img/arrow_right_photo.png\"></a></div><div class=\"listing_info\"><h4>NAME</h4><div class=\"listing_fav_button\"><img src=\"img/heart_outline_orange.png\" class=\"listing_fav_heart\">Добавить в избранное</div><h3>PRICE ₽</h3><div class=\"seller_profile\">Продавец<div class=\"message_seller_button\">Написать продавцу</div></div></div></div><div class=\"listing_description\"><h2>Описание</h2><p>DESCRIPTION</p></div>";
  promise.then(
      responce => {
          responce.json().then(
              json => {
                  template = template.replace("IMGSRC", "\"files/" + json["name"] + "/1.jpg\"");
                  template = template.replaceAll("NAME", json["name"]);
                  template = template.replace("PRICE", `${json["price"] / 1000} ${lpad(json["price"] % 1000, 3)}`);
                  template = template.replace("DESCRIPTION", json["decription"]);
                  template = template.replace("MAXINDEX", json["photos"]);
                  let listing = document.getElementById("listing");
                  listing.innerHTML = template;
              }
          )
      }
  )
  //let listingdata = fetch(`./files/${listingID}/properties.json"`).then((responce) => responce.json());
}
  
  setListingData();