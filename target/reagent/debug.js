// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16054__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16055__i = 0, G__16055__a = new Array(arguments.length -  0);
while (G__16055__i < G__16055__a.length) {G__16055__a[G__16055__i] = arguments[G__16055__i + 0]; ++G__16055__i;}
  args = new cljs.core.IndexedSeq(G__16055__a,0,null);
} 
return G__16054__delegate.call(this,args);};
G__16054.cljs$lang$maxFixedArity = 0;
G__16054.cljs$lang$applyTo = (function (arglist__16056){
var args = cljs.core.seq(arglist__16056);
return G__16054__delegate(args);
});
G__16054.cljs$core$IFn$_invoke$arity$variadic = G__16054__delegate;
return G__16054;
})()
);

(o.error = (function() { 
var G__16057__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16058__i = 0, G__16058__a = new Array(arguments.length -  0);
while (G__16058__i < G__16058__a.length) {G__16058__a[G__16058__i] = arguments[G__16058__i + 0]; ++G__16058__i;}
  args = new cljs.core.IndexedSeq(G__16058__a,0,null);
} 
return G__16057__delegate.call(this,args);};
G__16057.cljs$lang$maxFixedArity = 0;
G__16057.cljs$lang$applyTo = (function (arglist__16059){
var args = cljs.core.seq(arglist__16059);
return G__16057__delegate(args);
});
G__16057.cljs$core$IFn$_invoke$arity$variadic = G__16057__delegate;
return G__16057;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
