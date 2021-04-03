//get the api keys from the websites I want to use
//api key= AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs
//above is for geolocation api https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

// function to start the map location from google maps api
let venueMap;
function init() {
    var mapOptions = {                        // set up the map options
        center: new google.maps.LatLng("0.0", "0.0"),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    //Map() draws a map
    venueMap = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');                           //Create <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs&callback=init';

    var mapDiv = document.getElementById("mapDiv");
    mapDiv.appendChild(script); //add element to page
};


window.onload = loadScript; //Onload call


//Random Quote Generator
$(document).ready(function () {
    var quotes = [{
        "quote": "We have fallen heirs to the most glorious heritage a people ever received, and each one must do his part if we wish to show that the nation is worthy of its good fortune. -Theodore Roosevelt",
        "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
    }, {
        "quote": "The farther one gets into the wilderness, the greater is the attraction of its lonely freedom. -Theodore Roosevelt",
        "background": "https://cdn.govexec.com/media/img/upload/2017/07/05/18499283513_1845c5b206_o_thzUCMI/860x394.jpg"
    }, {
        "quote": "This country will not be a permanently good place for any of us to live in unless we make it a reasonably good place for all of us to live in. -Theodore Roosevelt",
        "background": "https://wikitravel.org/upload/shared//6/66/United_States_National_Parks_Banner.jpg"
    }, {
        "quote": "Life is a great adventure … accept it in such a spirit. -Theodore Roosevelt",
        "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
    }, {
        "quote": "If future generations are to remember us with gratitude rather than contempt, we must leave them something more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through it. -Lyndon B. Johnson",
        "background": "https://www.nps.gov/romo/learn/nature/images/Geology_Banner_688x200_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"
    }, {
        "quote": "In wilderness is the preservation of the world. -Henry David Thoreau",
        "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
    }, {
        "quote": "National parks are the best idea we ever had. Absolutely American, absolutely democratic, they reflect us at our best rather than our worst. -Wallace Stegner",
        "background": "https://wikitravel.org/upload/shared//6/66/United_States_National_Parks_Banner.jpg"
    }, {
        "quote": "The parks are the Nation's pleasure grounds and the Nation's restoring places.... The national parks...are an American idea; it is one thing we have that has not been imported. -J. Horace McFarland",
        "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
    }];

    function getQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var selectedQuote = quotes[randomIndex];

        $('#random-quote').text(selectedQuote.quote);
        var selectedBG = selectedQuote.background;
        console.log(selectedBG);
        $("#random-quote").css("background-image", "url('" + selectedBG + "')");
    }

    $('#random-quote').click(getQuote);
    getQuote();
});


//PLACEHOLDER Drop Down List

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("campgroundlist").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function () {
    $('input[rel="txtTooltip"]').tooltip();
});