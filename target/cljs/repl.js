// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20314){
var map__20315 = p__20314;
var map__20315__$1 = (((((!((map__20315 == null))))?(((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var m = map__20315__$1;
var n = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__10778__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20317_20349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20318_20350 = null;
var count__20319_20351 = (0);
var i__20320_20352 = (0);
while(true){
if((i__20320_20352 < count__20319_20351)){
var f_20353 = cljs.core._nth.call(null,chunk__20318_20350,i__20320_20352);
cljs.core.println.call(null,"  ",f_20353);


var G__20354 = seq__20317_20349;
var G__20355 = chunk__20318_20350;
var G__20356 = count__20319_20351;
var G__20357 = (i__20320_20352 + (1));
seq__20317_20349 = G__20354;
chunk__20318_20350 = G__20355;
count__20319_20351 = G__20356;
i__20320_20352 = G__20357;
continue;
} else {
var temp__5735__auto___20358 = cljs.core.seq.call(null,seq__20317_20349);
if(temp__5735__auto___20358){
var seq__20317_20359__$1 = temp__5735__auto___20358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20317_20359__$1)){
var c__11748__auto___20360 = cljs.core.chunk_first.call(null,seq__20317_20359__$1);
var G__20361 = cljs.core.chunk_rest.call(null,seq__20317_20359__$1);
var G__20362 = c__11748__auto___20360;
var G__20363 = cljs.core.count.call(null,c__11748__auto___20360);
var G__20364 = (0);
seq__20317_20349 = G__20361;
chunk__20318_20350 = G__20362;
count__20319_20351 = G__20363;
i__20320_20352 = G__20364;
continue;
} else {
var f_20365 = cljs.core.first.call(null,seq__20317_20359__$1);
cljs.core.println.call(null,"  ",f_20365);


var G__20366 = cljs.core.next.call(null,seq__20317_20359__$1);
var G__20367 = null;
var G__20368 = (0);
var G__20369 = (0);
seq__20317_20349 = G__20366;
chunk__20318_20350 = G__20367;
count__20319_20351 = G__20368;
i__20320_20352 = G__20369;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20370 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10778__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20370);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20370)))?cljs.core.second.call(null,arglists_20370):arglists_20370));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20321_20371 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20322_20372 = null;
var count__20323_20373 = (0);
var i__20324_20374 = (0);
while(true){
if((i__20324_20374 < count__20323_20373)){
var vec__20335_20375 = cljs.core._nth.call(null,chunk__20322_20372,i__20324_20374);
var name_20376 = cljs.core.nth.call(null,vec__20335_20375,(0),null);
var map__20338_20377 = cljs.core.nth.call(null,vec__20335_20375,(1),null);
var map__20338_20378__$1 = (((((!((map__20338_20377 == null))))?(((((map__20338_20377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20338_20377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20338_20377):map__20338_20377);
var doc_20379 = cljs.core.get.call(null,map__20338_20378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20380 = cljs.core.get.call(null,map__20338_20378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20376);

cljs.core.println.call(null," ",arglists_20380);

if(cljs.core.truth_(doc_20379)){
cljs.core.println.call(null," ",doc_20379);
} else {
}


var G__20381 = seq__20321_20371;
var G__20382 = chunk__20322_20372;
var G__20383 = count__20323_20373;
var G__20384 = (i__20324_20374 + (1));
seq__20321_20371 = G__20381;
chunk__20322_20372 = G__20382;
count__20323_20373 = G__20383;
i__20324_20374 = G__20384;
continue;
} else {
var temp__5735__auto___20385 = cljs.core.seq.call(null,seq__20321_20371);
if(temp__5735__auto___20385){
var seq__20321_20386__$1 = temp__5735__auto___20385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20321_20386__$1)){
var c__11748__auto___20387 = cljs.core.chunk_first.call(null,seq__20321_20386__$1);
var G__20388 = cljs.core.chunk_rest.call(null,seq__20321_20386__$1);
var G__20389 = c__11748__auto___20387;
var G__20390 = cljs.core.count.call(null,c__11748__auto___20387);
var G__20391 = (0);
seq__20321_20371 = G__20388;
chunk__20322_20372 = G__20389;
count__20323_20373 = G__20390;
i__20324_20374 = G__20391;
continue;
} else {
var vec__20340_20392 = cljs.core.first.call(null,seq__20321_20386__$1);
var name_20393 = cljs.core.nth.call(null,vec__20340_20392,(0),null);
var map__20343_20394 = cljs.core.nth.call(null,vec__20340_20392,(1),null);
var map__20343_20395__$1 = (((((!((map__20343_20394 == null))))?(((((map__20343_20394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20343_20394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20343_20394):map__20343_20394);
var doc_20396 = cljs.core.get.call(null,map__20343_20395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20397 = cljs.core.get.call(null,map__20343_20395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20393);

cljs.core.println.call(null," ",arglists_20397);

if(cljs.core.truth_(doc_20396)){
cljs.core.println.call(null," ",doc_20396);
} else {
}


var G__20398 = cljs.core.next.call(null,seq__20321_20386__$1);
var G__20399 = null;
var G__20400 = (0);
var G__20401 = (0);
seq__20321_20371 = G__20398;
chunk__20322_20372 = G__20399;
count__20323_20373 = G__20400;
i__20324_20374 = G__20401;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__20345 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20346 = null;
var count__20347 = (0);
var i__20348 = (0);
while(true){
if((i__20348 < count__20347)){
var role = cljs.core._nth.call(null,chunk__20346,i__20348);
var temp__5735__auto___20402__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___20402__$1)){
var spec_20403 = temp__5735__auto___20402__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20403));
} else {
}


var G__20404 = seq__20345;
var G__20405 = chunk__20346;
var G__20406 = count__20347;
var G__20407 = (i__20348 + (1));
seq__20345 = G__20404;
chunk__20346 = G__20405;
count__20347 = G__20406;
i__20348 = G__20407;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__20345);
if(temp__5735__auto____$1){
var seq__20345__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20345__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__20345__$1);
var G__20408 = cljs.core.chunk_rest.call(null,seq__20345__$1);
var G__20409 = c__11748__auto__;
var G__20410 = cljs.core.count.call(null,c__11748__auto__);
var G__20411 = (0);
seq__20345 = G__20408;
chunk__20346 = G__20409;
count__20347 = G__20410;
i__20348 = G__20411;
continue;
} else {
var role = cljs.core.first.call(null,seq__20345__$1);
var temp__5735__auto___20412__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___20412__$2)){
var spec_20413 = temp__5735__auto___20412__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20413));
} else {
}


var G__20414 = cljs.core.next.call(null,seq__20345__$1);
var G__20415 = null;
var G__20416 = (0);
var G__20417 = (0);
seq__20345 = G__20414;
chunk__20346 = G__20415;
count__20347 = G__20416;
i__20348 = G__20417;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20418 = cljs.core.conj.call(null,via,t);
var G__20419 = cljs.core.ex_cause.call(null,t);
via = G__20418;
t = G__20419;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20422 = datafied_throwable;
var map__20422__$1 = (((((!((map__20422 == null))))?(((((map__20422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20422):map__20422);
var via = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20423 = cljs.core.last.call(null,via);
var map__20423__$1 = (((((!((map__20423 == null))))?(((((map__20423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20423):map__20423);
var type = cljs.core.get.call(null,map__20423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20423__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20424 = data;
var map__20424__$1 = (((((!((map__20424 == null))))?(((((map__20424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20424):map__20424);
var problems = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20425 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20425__$1 = (((((!((map__20425 == null))))?(((((map__20425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20425):map__20425);
var top_data = map__20425__$1;
var source = cljs.core.get.call(null,map__20425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20430 = phase;
var G__20430__$1 = (((G__20430 instanceof cljs.core.Keyword))?G__20430.fqn:null);
switch (G__20430__$1) {
case "read-source":
var map__20431 = data;
var map__20431__$1 = (((((!((map__20431 == null))))?(((((map__20431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20431):map__20431);
var line = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20433 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20433__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20433,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20433);
var G__20433__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20433__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20433__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20433__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20434 = top_data;
var G__20434__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20434,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20434);
var G__20434__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20434__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20434__$1);
var G__20434__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20434__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20434__$2);
var G__20434__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20434__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20434__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20434__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20434__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20435 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20435,(0),null);
var method = cljs.core.nth.call(null,vec__20435,(1),null);
var file = cljs.core.nth.call(null,vec__20435,(2),null);
var line = cljs.core.nth.call(null,vec__20435,(3),null);
var G__20438 = top_data;
var G__20438__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20438,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20438);
var G__20438__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20438__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20438__$1);
var G__20438__$3 = (cljs.core.truth_((function (){var and__10763__auto__ = source__$1;
if(cljs.core.truth_(and__10763__auto__)){
return method;
} else {
return and__10763__auto__;
}
})())?cljs.core.assoc.call(null,G__20438__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20438__$2);
var G__20438__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20438__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20438__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20438__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20438__$4;
}

break;
case "execution":
var vec__20439 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20439,(0),null);
var method = cljs.core.nth.call(null,vec__20439,(1),null);
var file = cljs.core.nth.call(null,vec__20439,(2),null);
var line = cljs.core.nth.call(null,vec__20439,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20421_SHARP_){
var or__10778__auto__ = (p1__20421_SHARP_ == null);
if(or__10778__auto__){
return or__10778__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20421_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__10778__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return line;
}
})();
var G__20442 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20442__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20442,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20442);
var G__20442__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20442__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20442__$1);
var G__20442__$3 = (cljs.core.truth_((function (){var or__10778__auto__ = fn;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
var and__10763__auto__ = source__$1;
if(cljs.core.truth_(and__10763__auto__)){
return method;
} else {
return and__10763__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20442__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__10778__auto__ = fn;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20442__$2);
var G__20442__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20442__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20442__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20442__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20442__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20430__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20446){
var map__20447 = p__20446;
var map__20447__$1 = (((((!((map__20447 == null))))?(((((map__20447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20447):map__20447);
var triage_data = map__20447__$1;
var phase = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20447__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10778__auto__ = source;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10778__auto__ = line;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__10778__auto__ = class$;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20449 = phase;
var G__20449__$1 = (((G__20449 instanceof cljs.core.Keyword))?G__20449.fqn:null);
switch (G__20449__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__11941__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20450_20459 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20451_20460 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20452_20461 = true;
var _STAR_print_fn_STAR__temp_val__20453_20462 = (function (x__11942__auto__){
return sb__11941__auto__.append(x__11942__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20452_20461);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20453_20462);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20444_SHARP_){
return cljs.core.dissoc.call(null,p1__20444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20451_20460);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20450_20459);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11941__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__11941__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20454_20463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20455_20464 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20456_20465 = true;
var _STAR_print_fn_STAR__temp_val__20457_20466 = (function (x__11942__auto__){
return sb__11941__auto__.append(x__11942__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20456_20465);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20457_20466);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20445_SHARP_){
return cljs.core.dissoc.call(null,p1__20445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20455_20464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20454_20463);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11941__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20449__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
