// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('heather_counter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.react_native');
heather_counter.core.hello = (function heather_counter$core$hello(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(50)], null)], null),"Hello Krell!"], null)], null);
});
heather_counter.core._main = (function heather_counter$core$_main(var_args){
var args__12110__auto__ = [];
var len__12100__auto___16523 = arguments.length;
var i__12101__auto___16524 = (0);
while(true){
if((i__12101__auto___16524 < len__12100__auto___16523)){
args__12110__auto__.push((arguments[i__12101__auto___16524]));

var G__16525 = (i__12101__auto___16524 + (1));
i__12101__auto___16524 = G__16525;
continue;
} else {
}
break;
}

var argseq__12111__auto__ = ((((0) < args__12110__auto__.length))?(new cljs.core.IndexedSeq(args__12110__auto__.slice((0)),(0),null)):null);
return heather_counter.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__12111__auto__);
});
goog.exportSymbol('heather_counter.core._main', heather_counter.core._main);

(heather_counter.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [heather_counter.core.hello], null));
}));

(heather_counter.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(heather_counter.core._main.cljs$lang$applyTo = (function (seq16522){
var self__12086__auto__ = this;
return self__12086__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16522));
}));


//# sourceMappingURL=core.js.map
