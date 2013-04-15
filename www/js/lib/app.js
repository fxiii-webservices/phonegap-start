requirejs.config({
    baseUrl: 'js/lib',
});

require(["pairing/view"],function(Pairing){
    a = new Pairing();
    a.on("gotRoom",function(p){alert("room:",p)});
    a.on("timeout",function(p){alert("timeout")});
    Forl.on("start",function(){
        $("#pairing").html(a.render().$el);
    });
});