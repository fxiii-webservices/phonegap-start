requirejs.config({
    baseUrl: 'js/lib',
});

require(["pairing/view"],function(Pairing){
    a = new Pairing();
    $("#pairing").html(a.render().$el);
    a.on("gotRoom",function(p){alert("room:",p)});
    a.on("timeout",function(p){alert("timeout")});
});