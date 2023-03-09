goog.provide('com.pojtinger.felicitas.cljs_kitchen_sink.core');
if((typeof com !== 'undefined') && (typeof com.pojtinger !== 'undefined') && (typeof com.pojtinger.felicitas !== 'undefined') && (typeof com.pojtinger.felicitas.cljs_kitchen_sink !== 'undefined') && (typeof com.pojtinger.felicitas.cljs_kitchen_sink.core !== 'undefined') && (typeof com.pojtinger.felicitas.cljs_kitchen_sink.core.root !== 'undefined')){
} else {
com.pojtinger.felicitas.cljs_kitchen_sink.core.root = reagent.dom.client.create_root(document.getElementById("root"));
}
com.pojtinger.felicitas.cljs_kitchen_sink.core.main = (function com$pojtinger$felicitas$cljs_kitchen_sink$core$main(){
var match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(com.pojtinger.felicitas.cljs_kitchen_sink.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (p1__15574_SHARP_){
return cljs.core.reset_BANG_(match,p1__15574_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(com.pojtinger.felicitas.cljs_kitchen_sink.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.pojtinger.felicitas.cljs_kitchen_sink.components.wrapper,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)),(function (p1__15575_SHARP_){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(p1__15575_SHARP_);
}),(cljs.core.truth_(cljs.core.deref(match))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814)], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.pojtinger.felicitas.cljs_kitchen_sink.pages.not_found], null)),(cljs.core.truth_(cljs.core.deref(match))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"source","source",-433931539)], null)):"")], null);
})], null));
});
goog.exportSymbol('com.pojtinger.felicitas.cljs_kitchen_sink.core.main', com.pojtinger.felicitas.cljs_kitchen_sink.core.main);

//# sourceMappingURL=com.pojtinger.felicitas.cljs_kitchen_sink.core.js.map
