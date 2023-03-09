goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7842__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7843__i = 0, G__7843__a = new Array(arguments.length -  0);
while (G__7843__i < G__7843__a.length) {G__7843__a[G__7843__i] = arguments[G__7843__i + 0]; ++G__7843__i;}
  args = new cljs.core.IndexedSeq(G__7843__a,0,null);
} 
return G__7842__delegate.call(this,args);};
G__7842.cljs$lang$maxFixedArity = 0;
G__7842.cljs$lang$applyTo = (function (arglist__7844){
var args = cljs.core.seq(arglist__7844);
return G__7842__delegate(args);
});
G__7842.cljs$core$IFn$_invoke$arity$variadic = G__7842__delegate;
return G__7842;
})()
);

(o.error = (function() { 
var G__7845__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7846__i = 0, G__7846__a = new Array(arguments.length -  0);
while (G__7846__i < G__7846__a.length) {G__7846__a[G__7846__i] = arguments[G__7846__i + 0]; ++G__7846__i;}
  args = new cljs.core.IndexedSeq(G__7846__a,0,null);
} 
return G__7845__delegate.call(this,args);};
G__7845.cljs$lang$maxFixedArity = 0;
G__7845.cljs$lang$applyTo = (function (arglist__7847){
var args = cljs.core.seq(arglist__7847);
return G__7845__delegate(args);
});
G__7845.cljs$core$IFn$_invoke$arity$variadic = G__7845__delegate;
return G__7845;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
