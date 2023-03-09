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
var vec__11735 = libspec;
var seq__11736 = cljs.core.seq(vec__11735);
var first__11737 = cljs.core.first(seq__11736);
var seq__11736__$1 = cljs.core.next(seq__11736);
var lib = first__11737;
var spec = seq__11736__$1;
var libspec__$1 = vec__11735;
var vec__11738 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(0),null);
var vec__11741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(1),null);
var seq__11742 = cljs.core.seq(vec__11741);
var first__11743 = cljs.core.first(seq__11742);
var seq__11742__$1 = cljs.core.next(seq__11742);
var _ = first__11743;
var first__11743__$1 = cljs.core.first(seq__11742__$1);
var seq__11742__$2 = cljs.core.next(seq__11742__$1);
var alias = first__11743__$1;
var post_spec = seq__11742__$2;
var post = vec__11741;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__11744 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11744,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__11744;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__11745 = cljs.core.seq(new_as_aliases);
var chunk__11746 = null;
var count__11747 = (0);
var i__11748 = (0);
while(true){
if((i__11748 < count__11747)){
var vec__11755 = chunk__11746.cljs$core$IIndexed$_nth$arity$2(null,i__11748);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11755,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11755,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11784 = seq__11745;
var G__11785 = chunk__11746;
var G__11786 = count__11747;
var G__11787 = (i__11748 + (1));
seq__11745 = G__11784;
chunk__11746 = G__11785;
count__11747 = G__11786;
i__11748 = G__11787;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11745);
if(temp__5804__auto__){
var seq__11745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11745__$1);
var G__11792 = cljs.core.chunk_rest(seq__11745__$1);
var G__11793 = c__5568__auto__;
var G__11794 = cljs.core.count(c__5568__auto__);
var G__11795 = (0);
seq__11745 = G__11792;
chunk__11746 = G__11793;
count__11747 = G__11794;
i__11748 = G__11795;
continue;
} else {
var vec__11758 = cljs.core.first(seq__11745__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11796 = cljs.core.next(seq__11745__$1);
var G__11797 = null;
var G__11798 = (0);
var G__11799 = (0);
seq__11745 = G__11796;
chunk__11746 = G__11797;
count__11747 = G__11798;
i__11748 = G__11799;
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
var G__11769 = arguments.length;
switch (G__11769) {
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
var map__11770 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__11770__$1 = cljs.core.__destructure_map(map__11770);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11770__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11770__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__11771 = ret__$1;
var G__11771__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11771,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__11771);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11771__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__11771__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11776,p__11777){
var map__11778 = p__11776;
var map__11778__$1 = cljs.core.__destructure_map(map__11778);
var ret__$1 = map__11778__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11778__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__11779 = p__11777;
var seq__11780 = cljs.core.seq(vec__11779);
var first__11781 = cljs.core.first(seq__11780);
var seq__11780__$1 = cljs.core.next(seq__11780);
var spec_key = first__11781;
var libspecs = seq__11780__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__11782 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__11782__$1 = cljs.core.__destructure_map(map__11782);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11782__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11782__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__11783 = ret__$1;
var G__11783__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11783,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__11783);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11783__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__11783__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
