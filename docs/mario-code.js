let whois = document.getElementById("whois");
let str = whois.innerHTML;
str = str.replace(/w/g, "<div class='w'></div>")
str = str.replace(/r/g, "<div class='r'></div>")
str = str.replace(/o/g, "<div class='o'></div>")
str = str.replace(/b/g, "<div class='b'></div>")
str = str.replace(/y/g, "<div class='y'></div>")
str = str.replace(/j/g, "<br>")

whois.innerHTML = str;
