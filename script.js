// Our List of Bars
var bars = [
    "Siggys",
    "Blind Tiger",
    "Zum Schneider",
    "One Month",
    "Home Sweet Home",
    "Union Pool",
    "The Wren",
];

var randomNumber = Math.floor(Math.random() * bars.length);
var barname = bars[randomNumber];

/* MAP 

        This map comes from GOOGLE MAPS. It's totally hacked together and the results are only accurate SOME of the time (Actually, I'm guessing they will be less accurate if you are not in NYC, as it queries with local Geolocation, SO... change the bar names to something local and give it a try yourself!). 

        Whether it's totally accurate or not... it does illustrate a VERY BASIC API call! And that's awesome.

        See what an API call is? You reach out to Google and submit them some data. "Hey I'm looking for a map of a bar called "Blind Tiger", and then it returns that map to you. BOOM. Simple API call. 

    */
var map =
    "<iframe width='425' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?ie=UTF8&amp;q=" +
    barname +
    "&amp;fb=1&amp;gl=us&amp;hq=" +
    barname +
    "&amp;spn=0.006295,0.006295&amp;output=embed'></iframe>";

document.getElementById("action").innerHTML = barname + map;