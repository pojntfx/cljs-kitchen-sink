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
var vec__11751 = libspec;
var seq__11752 = cljs.core.seq(vec__11751);
var first__11753 = cljs.core.first(seq__11752);
var seq__11752__$1 = cljs.core.next(seq__11752);
var lib = first__11753;
var spec = seq__11752__$1;
var libspec__$1 = vec__11751;
var vec__11754 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754,(0),null);
var vec__11757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754,(1),null);
var seq__11758 = cljs.core.seq(vec__11757);
var first__11759 = cljs.core.first(seq__11758);
var seq__11758__$1 = cljs.core.next(seq__11758);
var _ = first__11759;
var first__11759__$1 = cljs.core.first(seq__11758__$1);
var seq__11758__$2 = cljs.core.next(seq__11758__$1);
var alias = first__11759__$1;
var post_spec = seq__11758__$2;
var post = vec__11757;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__11760 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11760,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__11760;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__11761 = cljs.core.seq(new_as_aliases);
var chunk__11762 = null;
var count__11763 = (0);
var i__11764 = (0);
while(true){
if((i__11764 < count__11763)){
var vec__11771 = chunk__11762.cljs$core$IIndexed$_nth$arity$2(null,i__11764);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11771,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11771,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11792 = seq__11761;
var G__11793 = chunk__11762;
var G__11794 = count__11763;
var G__11795 = (i__11764 + (1));
seq__11761 = G__11792;
chunk__11762 = G__11793;
count__11763 = G__11794;
i__11764 = G__11795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11761);
if(temp__5804__auto__){
var seq__11761__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11761__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11761__$1);
var G__11796 = cljs.core.chunk_rest(seq__11761__$1);
var G__11797 = c__5568__auto__;
var G__11798 = cljs.core.count(c__5568__auto__);
var G__11799 = (0);
seq__11761 = G__11796;
chunk__11762 = G__11797;
count__11763 = G__11798;
i__11764 = G__11799;
continue;
} else {
var vec__11774 = cljs.core.first(seq__11761__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11800 = cljs.core.next(seq__11761__$1);
var G__11801 = null;
var G__11802 = (0);
var G__11803 = (0);
seq__11761 = G__11800;
chunk__11762 = G__11801;
count__11763 = G__11802;
i__11764 = G__11803;
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
var G__11778 = arguments.length;
switch (G__11778) {
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
var map__11779 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__11779__$1 = cljs.core.__destructure_map(map__11779);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11779__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11779__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__11780 = ret__$1;
var G__11780__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11780,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__11780);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11780__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__11780__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11781,p__11782){
var map__11783 = p__11781;
var map__11783__$1 = cljs.core.__destructure_map(map__11783);
var ret__$1 = map__11783__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11783__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__11784 = p__11782;
var seq__11785 = cljs.core.seq(vec__11784);
var first__11786 = cljs.core.first(seq__11785);
var seq__11785__$1 = cljs.core.next(seq__11785);
var spec_key = first__11786;
var libspecs = seq__11785__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__11787 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__11787__$1 = cljs.core.__destructure_map(map__11787);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11787__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11787__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__11788 = ret__$1;
var G__11788__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11788,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__11788);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11788__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__11788__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
