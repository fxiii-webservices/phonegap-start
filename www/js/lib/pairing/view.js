define(["text!pairing/template.html"], function (T) {
    return Backbone.View.extend({
        tagName: "div",
        className: "pairing",
        
        events: {
            "click h1":"ask"
        },
        initialize: function(){
            _.bindAll(this,"ask","pair","render");
            this._t = Handlebars.compile(T);
            this.model = new Backbone.Model();
            this.model.set({
                code:"click to pair"});
            this.model.on("change",this.render);
        },
        ask: function(){
            var x = prompt("setCode");
            if (x !== null){
              this.model.set("code",x);
              this.pair();
            }
        },
        pair: function(){
            var view = this;
            var FSM = new Forlr.FSM(_Forlr.protocols.request);
            FSM.start(Forlr,this.model.get("code"));
            FSM.on("got",function(self,ev,p){
                view.model.set("room",p);
                view.trigger("gotRoom",p);
            });
            FSM.on("timeout",this.trigger("timeout"));
        },
        render: function() {
            this.$el.html(this._t(this.model.toJSON()));
            return this;
        }
    
    });
});