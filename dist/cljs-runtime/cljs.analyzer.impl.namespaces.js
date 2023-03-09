goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__11716 = libspec;
var seq__11717 = cljs.core.seq(vec__11716);
var first__11718 = cljs.core.first(seq__11717);
var seq__11717__$1 = cljs.core.next(seq__11717);
var lib = first__11718;
var spec = seq__11717__$1;
var libspec__$1 = vec__11716;
var vec__11719 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11719,(0),null);
var vec__11722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11719,(1),null);
var seq__11723 = cljs.core.seq(vec__11722);
var first__11724 = cljs.core.first(seq__11723);
var seq__11723__$1 = cljs.core.next(seq__11723);
var _ = first__11724;
var first__11724__$1 = cljs.core.first(seq__11723__$1);
var seq__11723__$2 = cljs.core.next(seq__11723__$1);
var alias = first__11724__$1;
var post_spec = seq__11723__$2;
var post = vec__11722;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__11725 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11725,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__11725;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__11726 = cljs.core.seq(new_as_aliases);
var chunk__11727 = null;
var count__11728 = (0);
var i__11729 = (0);
while(true){
if((i__11729 < count__11728)){
var vec__11740 = chunk__11727.cljs$core$IIndexed$_nth$arity$2(null,i__11729);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11740,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11740,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11774 = seq__11726;
var G__11775 = chunk__11727;
var G__11776 = count__11728;
var G__11777 = (i__11729 + (1));
seq__11726 = G__11774;
chunk__11727 = G__11775;
count__11728 = G__11776;
i__11729 = G__11777;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11726);
if(temp__5804__auto__){
var seq__11726__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11726__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11726__$1);
var G__11778 = cljs.core.chunk_rest(seq__11726__$1);
var G__11779 = c__5568__auto__;
var G__11780 = cljs.core.count(c__5568__auto__);
var G__11781 = (0);
seq__11726 = G__11778;
chunk__11727 = G__11779;
count__11728 = G__11780;
i__11729 = G__11781;
continue;
} else {
var vec__11749 = cljs.core.first(seq__11726__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11749,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11749,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11782 = cljs.core.next(seq__11726__$1);
var G__11783 = null;
var G__11784 = (0);
var G__11785 = (0);
seq__11726 = G__11782;
chunk__11727 = G__11783;
count__11728 = G__11784;
i__11729 = G__11785;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__11757 = arguments.length;
switch (G__11757) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__11758 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__11758__$1 = cljs.core.__destructure_map(map__11758);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11758__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11758__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__11759 = ret__$1;
var G__11759__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11759,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__11759);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11759__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__11759__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11760,p__11761){
var map__11762 = p__11760;
var map__11762__$1 = cljs.core.__destructure_map(map__11762);
var ret__$1 = map__11762__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__11763 = p__11761;
var seq__11764 = cljs.core.seq(vec__11763);
var first__11765 = cljs.core.first(seq__11764);
var seq__11764__$1 = cljs.core.next(seq__11764);
var spec_key = first__11765;
var libspecs = seq__11764__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__11769 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__11769__$1 = cljs.core.__destructure_map(map__11769);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11769__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11769__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__11771 = ret__$1;
var G__11771__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11771,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__11771);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11771__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__11771__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
