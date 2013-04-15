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
            this.model.set("code",Math.random().toString().slice(2,11));
            this.model.on("change:code",this.render);
        },
        ask: function(){
          var x = prompt("setCode");
          if (x !== null){
              this.model.set("code",x);
              this.pair();
          }
        },
        pair: function(){
            var FMS = new Forlr.FSM(_Forlr.protocols.request);
            FMS.start(_Forlr,this.model.get("code"));
            FMS.on("got",function(self,ev,p){
                alert(p);
            })
            FSM.on("timeout",_l);
        },
        render: function() {
            this.$el.html(this._t(this.model.toJSON()));
            return this;
        }
    
    });
});