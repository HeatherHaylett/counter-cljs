// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('heather_counter.core');
goog.require('cljs.core');
goog.require('heather_counter.util');
goog.require('heather_counter.events');
goog.require('heather_counter.subs');
goog.require('reagent.core');
goog.require('reagent.react_native');
goog.require('re_frame.core');
heather_counter.core.change_number = (function heather_counter$core$change_number(){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-number","get-number",517706855)], null));
});
heather_counter.core.change_color = (function heather_counter$core$change_color(){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-color","get-color",-2122105193)], null));
});
heather_counter.core.hello = (function heather_counter$core$hello(){
var number = heather_counter.core.change_number.call(null);
var color = heather_counter.core.change_color.call(null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(250)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),"counter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(40),new cljs.core.Keyword(null,"margin","margin",-995903681),(25),new cljs.core.Keyword(null,"color","color",1011675173),heather_counter.util.color_picker.call(null,cljs.core.deref.call(null,color))], null)], null),cljs.core.deref.call(null,number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ADD 1",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-number","set-number",-1511619438),(cljs.core.deref.call(null,number) + (1))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"SUBTRACT 1",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-number","set-number",-1511619438),(cljs.core.deref.call(null,number) - (1))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"CHANGE COLOR",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-color","set-color",-1342268539),(cljs.core.deref.call(null,color) + (1))], null));
})], null)], null)], null);
});
heather_counter.core._main = (function heather_counter$core$_main(var_args){
var args__12110__auto__ = [];
var len__12100__auto___13363 = arguments.length;
var i__12101__auto___13364 = (0);
while(true){
if((i__12101__auto___13364 < len__12100__auto___13363)){
args__12110__auto__.push((arguments[i__12101__auto___13364]));

var G__13365 = (i__12101__auto___13364 + (1));
i__12101__auto___13364 = G__13365;
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
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));

return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [heather_counter.core.hello], null));
}));

(heather_counter.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(heather_counter.core._main.cljs$lang$applyTo = (function (seq13362){
var self__12086__auto__ = this;
return self__12086__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13362));
}));


//# sourceMappingURL=core.js.map
