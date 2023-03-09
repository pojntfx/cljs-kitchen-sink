goog.provide('com.pojtinger.felicitas.cljs_kitchen_sink.pages');
com.pojtinger.felicitas.cljs_kitchen_sink.pages.home = (function com$pojtinger$felicitas$cljs_kitchen_sink$pages$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#intro","section#intro",-1920455188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Welcome to the ClojureScript Kitchen Sink!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Check out the source code (\u00A9 2023 AGPL-3.0 Felicitas Pojtinger): ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),com.pojtinger.felicitas.cljs_kitchen_sink.const$.source_code,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"GitHub"], null)], null)], null);
});
com.pojtinger.felicitas.cljs_kitchen_sink.pages.not_found = (function com$pojtinger$felicitas$cljs_kitchen_sink$pages$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"404 not found"], null);
});
com.pojtinger.felicitas.cljs_kitchen_sink.pages.global_initial_value = "Global initial value";
com.pojtinger.felicitas.cljs_kitchen_sink.pages.variables = (function com$pojtinger$felicitas$cljs_kitchen_sink$pages$variables(){
var global_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(com.pojtinger.felicitas.cljs_kitchen_sink.pages.global_initial_value);
var local_initial_value = "Local initial value";
var local_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(local_initial_value);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#globals","section#globals",-1241630199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Global variables"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"global-value-input"], null),["Global"," value input: "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter value",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(global_value),new cljs.core.Keyword(null,"id","id",-1388402092),"global-value-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9527__9528__auto__){
return cljs.core.reset_BANG_(global_value,p1__9527__9528__auto__.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Global"," value output: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(global_value))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#locals","section#locals",-1529296919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Local variables"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"local-value-input"], null),["Local"," value input: "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter value",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(local_value),new cljs.core.Keyword(null,"id","id",-1388402092),"local-value-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9527__9528__auto__){
return cljs.core.reset_BANG_(local_value,p1__9527__9528__auto__.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Local"," value output: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_value))].join('')], null)], null)], null)], null);
});
});
com.pojtinger.felicitas.cljs_kitchen_sink.pages.decisions = (function com$pojtinger$felicitas$cljs_kitchen_sink$pages$decisions(){
var enabled = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Animal");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#booleans","section#booleans",-931503185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Booleans"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(enabled,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(enabled))?"Disable":"Enable")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#expressions","section#expressions",-1832160819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Expressions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name,(function (prev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev,"Human")){
return "Animal";
} else {
return "Human";
}
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(name),"Human"))?"Disable":"Enable")], null)], null)], null);
});
});

//# sourceMappingURL=com.pojtinger.felicitas.cljs_kitchen_sink.pages.js.map
