// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__14355){
var vec__14356 = p__14355;
var seq__14357 = cljs.core.seq.call(null,vec__14356);
var first__14358 = cljs.core.first.call(null,seq__14357);
var seq__14357__$1 = cljs.core.next.call(null,seq__14357);
var k = first__14358;
var ks = seq__14357__$1;
var keys = vec__14356;
if(ks){
var temp__5733__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__12110__auto__ = [];
var len__12100__auto___14361 = arguments.length;
var i__12101__auto___14362 = (0);
while(true){
if((i__12101__auto___14362 < len__12100__auto___14361)){
args__12110__auto__.push((arguments[i__12101__auto___14362]));

var G__14363 = (i__12101__auto___14362 + (1));
i__12101__auto___14362 = G__14363;
continue;
} else {
}
break;
}

var argseq__12111__auto__ = ((((1) < args__12110__auto__.length))?(new cljs.core.IndexedSeq(args__12110__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12111__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq14359){
var G__14360 = cljs.core.first.call(null,seq14359);
var seq14359__$1 = cljs.core.next.call(null,seq14359);
var self__12085__auto__ = this;
return self__12085__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14360,seq14359__$1);
}));


//# sourceMappingURL=utils.js.map
