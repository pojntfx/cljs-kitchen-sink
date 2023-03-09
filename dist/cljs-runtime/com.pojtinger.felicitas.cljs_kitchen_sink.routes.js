goog.provide('com.pojtinger.felicitas.cljs_kitchen_sink.routes');
com.pojtinger.felicitas.cljs_kitchen_sink.routes.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),com.pojtinger.felicitas.cljs_kitchen_sink.pages.home,new cljs.core.Keyword(null,"source","source",-433931539),(function (){var output__9534__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var old_console__9535__auto___9542 = console;
(console = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log","log",-1595516004),(function() { 
var G__9543__delegate = function (args__9536__auto__){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(output__9534__auto__,cljs.core.str,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__9536__auto__),"\n");
};
var G__9543 = function (var_args){
var args__9536__auto__ = null;
if (arguments.length > 0) {
var G__9544__i = 0, G__9544__a = new Array(arguments.length -  0);
while (G__9544__i < G__9544__a.length) {G__9544__a[G__9544__i] = arguments[G__9544__i + 0]; ++G__9544__i;}
  args__9536__auto__ = new cljs.core.IndexedSeq(G__9544__a,0,null);
} 
return G__9543__delegate.call(this,args__9536__auto__);};
G__9543.cljs$lang$maxFixedArity = 0;
G__9543.cljs$lang$applyTo = (function (arglist__9545){
var args__9536__auto__ = cljs.core.seq(arglist__9545);
return G__9543__delegate(args__9536__auto__);
});
G__9543.cljs$core$IFn$_invoke$arity$variadic = G__9543__delegate;
return G__9543;
})()
], null)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(defn home []\n  [:section#intro\n   [:p [:strong \"Welcome to the ClojureScript Kitchen Sink!\"]]\n   [:p \"Check out the source code (\u00A9 2023 AGPL-3.0 Felicitas Pojtinger): \" [:a {:href const/source-code :target \"_blank\"} \"GitHub\"]]])"], 0));

(console = old_console__9535__auto___9542);

return cljs.core.deref(output__9534__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/variables",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.Keyword(null,"view","view",1247994814),com.pojtinger.felicitas.cljs_kitchen_sink.pages.variables,new cljs.core.Keyword(null,"source","source",-433931539),(function (){var output__9534__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var old_console__9535__auto___9546 = console;
(console = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log","log",-1595516004),(function() { 
var G__9547__delegate = function (args__9536__auto__){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(output__9534__auto__,cljs.core.str,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__9536__auto__),"\n");
};
var G__9547 = function (var_args){
var args__9536__auto__ = null;
if (arguments.length > 0) {
var G__9548__i = 0, G__9548__a = new Array(arguments.length -  0);
while (G__9548__i < G__9548__a.length) {G__9548__a[G__9548__i] = arguments[G__9548__i + 0]; ++G__9548__i;}
  args__9536__auto__ = new cljs.core.IndexedSeq(G__9548__a,0,null);
} 
return G__9547__delegate.call(this,args__9536__auto__);};
G__9547.cljs$lang$maxFixedArity = 0;
G__9547.cljs$lang$applyTo = (function (arglist__9549){
var args__9536__auto__ = cljs.core.seq(arglist__9549);
return G__9547__delegate(args__9536__auto__);
});
G__9547.cljs$core$IFn$_invoke$arity$variadic = G__9547__delegate;
return G__9547;
})()
], null)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(defn variables []\n  (let [global-value (r/atom global-initial-value)\n        local-initial-value \"Local initial value\"\n        local-value (r/atom local-initial-value)]\n    (fn []\n      [:<>\n       [:section#globals\n        [:h2 \"Global variables\"]\n        (text-input-output-component \"Global\" global-value \"global-value-input\")]\n       [:section#locals\n        [:h2 \"Local variables\"]\n        (text-input-output-component \"Local\" local-value \"local-value-input\")]])))"], 0));

(console = old_console__9535__auto___9546);

return cljs.core.deref(output__9534__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/decisions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"decisions","decisions",239322436),new cljs.core.Keyword(null,"view","view",1247994814),com.pojtinger.felicitas.cljs_kitchen_sink.pages.decisions,new cljs.core.Keyword(null,"source","source",-433931539),(function (){var output__9534__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var old_console__9535__auto___9550 = console;
(console = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log","log",-1595516004),(function() { 
var G__9551__delegate = function (args__9536__auto__){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(output__9534__auto__,cljs.core.str,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__9536__auto__),"\n");
};
var G__9551 = function (var_args){
var args__9536__auto__ = null;
if (arguments.length > 0) {
var G__9552__i = 0, G__9552__a = new Array(arguments.length -  0);
while (G__9552__i < G__9552__a.length) {G__9552__a[G__9552__i] = arguments[G__9552__i + 0]; ++G__9552__i;}
  args__9536__auto__ = new cljs.core.IndexedSeq(G__9552__a,0,null);
} 
return G__9551__delegate.call(this,args__9536__auto__);};
G__9551.cljs$lang$maxFixedArity = 0;
G__9551.cljs$lang$applyTo = (function (arglist__9553){
var args__9536__auto__ = cljs.core.seq(arglist__9553);
return G__9551__delegate(args__9536__auto__);
});
G__9551.cljs$core$IFn$_invoke$arity$variadic = G__9551__delegate;
return G__9551;
})()
], null)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(defn decisions []\n  (let [enabled (r/atom false)\n        name (r/atom \"Animal\")]\n    (fn []\n      [:<>\n       [:section#booleans\n        [:h2 \"Booleans\"]\n        [:button\n         {:on-click #(swap! enabled not)}\n         (if @enabled \"Disable\" \"Enable\")]]\n       [:section#expressions\n        [:h2 \"Expressions\"]\n        [:button\n         {:on-click #(swap! name (fn [prev] (if (= prev \"Human\") \"Animal\" \"Human\")))}\n         (if (= @name \"Human\") \"Disable\" \"Enable\")]]])))"], 0));

(console = old_console__9535__auto___9550);

return cljs.core.deref(output__9534__auto__);
})()], null)], null)], null);

//# sourceMappingURL=com.pojtinger.felicitas.cljs_kitchen_sink.routes.js.map
