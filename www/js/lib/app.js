requirejs.config({
    baseUrl: 'js/lib',
});

require(["pairing/view"],function(Pairing){
    var a = new Pairing();
    $("#pairing").html(a.render().$el);
});