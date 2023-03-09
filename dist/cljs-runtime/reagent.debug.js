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
var G__7866__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7867__i = 0, G__7867__a = new Array(arguments.length -  0);
while (G__7867__i < G__7867__a.length) {G__7867__a[G__7867__i] = arguments[G__7867__i + 0]; ++G__7867__i;}
  args = new cljs.core.IndexedSeq(G__7867__a,0,null);
} 
return G__7866__delegate.call(this,args);};
G__7866.cljs$lang$maxFixedArity = 0;
G__7866.cljs$lang$applyTo = (function (arglist__7868){
var args = cljs.core.seq(arglist__7868);
return G__7866__delegate(args);
});
G__7866.cljs$core$IFn$_invoke$arity$variadic = G__7866__delegate;
return G__7866;
})()
);

(o.error = (function() { 
var G__7869__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7870__i = 0, G__7870__a = new Array(arguments.length -  0);
while (G__7870__i < G__7870__a.length) {G__7870__a[G__7870__i] = arguments[G__7870__i + 0]; ++G__7870__i;}
  args = new cljs.core.IndexedSeq(G__7870__a,0,null);
} 
return G__7869__delegate.call(this,args);};
G__7869.cljs$lang$maxFixedArity = 0;
G__7869.cljs$lang$applyTo = (function (arglist__7871){
var args = cljs.core.seq(arglist__7871);
return G__7869__delegate(args);
});
G__7869.cljs$core$IFn$_invoke$arity$variadic = G__7869__delegate;
return G__7869;
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
