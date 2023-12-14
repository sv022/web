const citySelection = document.querySelector(".city_options");
const currentCity = document.querySelector(".current_location");
const cities = document.querySelectorAll(".cities li");
const citySearch = document.getElementById("citySearch");

currentCity.addEventListener('click', function() {
    citySelection.classList.toggle('active');
})

cities.forEach(function(cityEntry) {
    cityEntry.addEventListener('click', function(){
        let text = cityEntry.textContent;
        currentCity.textContent = text;
        citySearch.value = '';
        let e = new Event('keyup')
        citySearch.dispatchEvent(e);
        citySelection.classList.remove('active');
    })
})

citySearch.addEventListener('keyup', function() {
    let filter, li, textValue;
    filter = citySearch.value.toUpperCase();
    li = citySelection.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++){
        let liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1)
            li[i].style.display = '';
        else
            li[i].style.display = 'none';
    }
})
