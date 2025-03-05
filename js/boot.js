$.get("/nav.html", function(data){
    $("header").replaceWith(data);
});

$.get("/footer.html", function(data){
    $("footer").replaceWith(data);
});