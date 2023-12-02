function plusSlides(inc) {
    inc = parseInt(inc);
    let photo = document.querySelector(".listing_page_photo");
    let src = photo.getAttribute("src");
    let maxIndex = parseInt(document.querySelector(".listing_photo_gallery p").innerHTML);
    let listingName = src.substring(0, src.lastIndexOf("/") + 1).replace(".jpg", "");
    let photoIndex = src.substring(src.lastIndexOf("/") + 1, src.length).replace(".jpg", "");
    console.log(photoIndex);
    if (1 <= parseInt(photoIndex) + inc && parseInt(photoIndex) + inc <= maxIndex) {
        photo.setAttribute("src", listingName + (parseInt(photoIndex) + inc) + ".jpg");
    }
}