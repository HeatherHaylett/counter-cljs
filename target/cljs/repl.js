// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20452){
var map__20453 = p__20452;
var map__20453__$1 = (((((!((map__20453 == null))))?(((((map__20453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20453):map__20453);
var m = map__20453__$1;
var n = cljs.core.get.call(null,map__20453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__20455_20487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20456_20488 = null;
var count__20457_20489 = (0);
var i__20458_20490 = (0);
while(true){
if((i__20458_20490 < count__20457_20489)){
var f_20491 = cljs.core._nth.call(null,chunk__20456_20488,i__20458_20490);
cljs.core.println.call(null,"  ",f_20491);


var G__20492 = seq__20455_20487;
var G__20493 = chunk__20456_20488;
var G__20494 = count__20457_20489;
var G__20495 = (i__20458_20490 + (1));
seq__20455_20487 = G__20492;
chunk__20456_20488 = G__20493;
count__20457_20489 = G__20494;
i__20458_20490 = G__20495;
continue;
} else {
var temp__5735__auto___20496 = cljs.core.seq.call(null,seq__20455_20487);
if(temp__5735__auto___20496){
var seq__20455_20497__$1 = temp__5735__auto___20496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20455_20497__$1)){
var c__11748__auto___20498 = cljs.core.chunk_first.call(null,seq__20455_20497__$1);
var G__20499 = cljs.core.chunk_rest.call(null,seq__20455_20497__$1);
var G__20500 = c__11748__auto___20498;
var G__20501 = cljs.core.count.call(null,c__11748__auto___20498);
var G__20502 = (0);
seq__20455_20487 = G__20499;
chunk__20456_20488 = G__20500;
count__20457_20489 = G__20501;
i__20458_20490 = G__20502;
continue;
} else {
var f_20503 = cljs.core.first.call(null,seq__20455_20497__$1);
cljs.core.println.call(null,"  ",f_20503);


var G__20504 = cljs.core.next.call(null,seq__20455_20497__$1);
var G__20505 = null;
var G__20506 = (0);
var G__20507 = (0);
seq__20455_20487 = G__20504;
chunk__20456_20488 = G__20505;
count__20457_20489 = G__20506;
i__20458_20490 = G__20507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10778__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20508)))?cljs.core.second.call(null,arglists_20508):arglists_20508));
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
var seq__20459_20509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20460_20510 = null;
var count__20461_20511 = (0);
var i__20462_20512 = (0);
while(true){
if((i__20462_20512 < count__20461_20511)){
var vec__20473_20513 = cljs.core._nth.call(null,chunk__20460_20510,i__20462_20512);
var name_20514 = cljs.core.nth.call(null,vec__20473_20513,(0),null);
var map__20476_20515 = cljs.core.nth.call(null,vec__20473_20513,(1),null);
var map__20476_20516__$1 = (((((!((map__20476_20515 == null))))?(((((map__20476_20515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20476_20515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20476_20515):map__20476_20515);
var doc_20517 = cljs.core.get.call(null,map__20476_20516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20518 = cljs.core.get.call(null,map__20476_20516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20514);

cljs.core.println.call(null," ",arglists_20518);

if(cljs.core.truth_(doc_20517)){
cljs.core.println.call(null," ",doc_20517);
} else {
}


var G__20519 = seq__20459_20509;
var G__20520 = chunk__20460_20510;
var G__20521 = count__20461_20511;
var G__20522 = (i__20462_20512 + (1));
seq__20459_20509 = G__20519;
chunk__20460_20510 = G__20520;
count__20461_20511 = G__20521;
i__20462_20512 = G__20522;
continue;
} else {
var temp__5735__auto___20523 = cljs.core.seq.call(null,seq__20459_20509);
if(temp__5735__auto___20523){
var seq__20459_20524__$1 = temp__5735__auto___20523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20459_20524__$1)){
var c__11748__auto___20525 = cljs.core.chunk_first.call(null,seq__20459_20524__$1);
var G__20526 = cljs.core.chunk_rest.call(null,seq__20459_20524__$1);
var G__20527 = c__11748__auto___20525;
var G__20528 = cljs.core.count.call(null,c__11748__auto___20525);
var G__20529 = (0);
seq__20459_20509 = G__20526;
chunk__20460_20510 = G__20527;
count__20461_20511 = G__20528;
i__20462_20512 = G__20529;
continue;
} else {
var vec__20478_20530 = cljs.core.first.call(null,seq__20459_20524__$1);
var name_20531 = cljs.core.nth.call(null,vec__20478_20530,(0),null);
var map__20481_20532 = cljs.core.nth.call(null,vec__20478_20530,(1),null);
var map__20481_20533__$1 = (((((!((map__20481_20532 == null))))?(((((map__20481_20532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20481_20532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20481_20532):map__20481_20532);
var doc_20534 = cljs.core.get.call(null,map__20481_20533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20535 = cljs.core.get.call(null,map__20481_20533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20531);

cljs.core.println.call(null," ",arglists_20535);

if(cljs.core.truth_(doc_20534)){
cljs.core.println.call(null," ",doc_20534);
} else {
}


var G__20536 = cljs.core.next.call(null,seq__20459_20524__$1);
var G__20537 = null;
var G__20538 = (0);
var G__20539 = (0);
seq__20459_20509 = G__20536;
chunk__20460_20510 = G__20537;
count__20461_20511 = G__20538;
i__20462_20512 = G__20539;
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

var seq__20483 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20484 = null;
var count__20485 = (0);
var i__20486 = (0);
while(true){
if((i__20486 < count__20485)){
var role = cljs.core._nth.call(null,chunk__20484,i__20486);
var temp__5735__auto___20540__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___20540__$1)){
var spec_20541 = temp__5735__auto___20540__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20541));
} else {
}


var G__20542 = seq__20483;
var G__20543 = chunk__20484;
var G__20544 = count__20485;
var G__20545 = (i__20486 + (1));
seq__20483 = G__20542;
chunk__20484 = G__20543;
count__20485 = G__20544;
i__20486 = G__20545;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__20483);
if(temp__5735__auto____$1){
var seq__20483__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20483__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__20483__$1);
var G__20546 = cljs.core.chunk_rest.call(null,seq__20483__$1);
var G__20547 = c__11748__auto__;
var G__20548 = cljs.core.count.call(null,c__11748__auto__);
var G__20549 = (0);
seq__20483 = G__20546;
chunk__20484 = G__20547;
count__20485 = G__20548;
i__20486 = G__20549;
continue;
} else {
var role = cljs.core.first.call(null,seq__20483__$1);
var temp__5735__auto___20550__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___20550__$2)){
var spec_20551 = temp__5735__auto___20550__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20551));
} else {
}


var G__20552 = cljs.core.next.call(null,seq__20483__$1);
var G__20553 = null;
var G__20554 = (0);
var G__20555 = (0);
seq__20483 = G__20552;
chunk__20484 = G__20553;
count__20485 = G__20554;
i__20486 = G__20555;
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
var G__20556 = cljs.core.conj.call(null,via,t);
var G__20557 = cljs.core.ex_cause.call(null,t);
via = G__20556;
t = G__20557;
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
var map__20560 = datafied_throwable;
var map__20560__$1 = (((((!((map__20560 == null))))?(((((map__20560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20560):map__20560);
var via = cljs.core.get.call(null,map__20560__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20560__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20560__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20561 = cljs.core.last.call(null,via);
var map__20561__$1 = (((((!((map__20561 == null))))?(((((map__20561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20561):map__20561);
var type = cljs.core.get.call(null,map__20561__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20561__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20561__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20562 = data;
var map__20562__$1 = (((((!((map__20562 == null))))?(((((map__20562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20562):map__20562);
var problems = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20563 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20563__$1 = (((((!((map__20563 == null))))?(((((map__20563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20563):map__20563);
var top_data = map__20563__$1;
var source = cljs.core.get.call(null,map__20563__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20568 = phase;
var G__20568__$1 = (((G__20568 instanceof cljs.core.Keyword))?G__20568.fqn:null);
switch (G__20568__$1) {
case "read-source":
var map__20569 = data;
var map__20569__$1 = (((((!((map__20569 == null))))?(((((map__20569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20569):map__20569);
var line = cljs.core.get.call(null,map__20569__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20569__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20571 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20571__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20571,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20571);
var G__20571__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20571__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20571__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20571__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20571__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20572 = top_data;
var G__20572__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20572,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20572);
var G__20572__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20572__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20572__$1);
var G__20572__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20572__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20572__$2);
var G__20572__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20572__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20572__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20572__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20572__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20573 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20573,(0),null);
var method = cljs.core.nth.call(null,vec__20573,(1),null);
var file = cljs.core.nth.call(null,vec__20573,(2),null);
var line = cljs.core.nth.call(null,vec__20573,(3),null);
var G__20576 = top_data;
var G__20576__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20576,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20576);
var G__20576__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20576__$1);
var G__20576__$3 = (cljs.core.truth_((function (){var and__10763__auto__ = source__$1;
if(cljs.core.truth_(and__10763__auto__)){
return method;
} else {
return and__10763__auto__;
}
})())?cljs.core.assoc.call(null,G__20576__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20576__$2);
var G__20576__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20576__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20576__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20576__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20576__$4;
}

break;
case "execution":
var vec__20577 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20577,(0),null);
var method = cljs.core.nth.call(null,vec__20577,(1),null);
var file = cljs.core.nth.call(null,vec__20577,(2),null);
var line = cljs.core.nth.call(null,vec__20577,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20559_SHARP_){
var or__10778__auto__ = (p1__20559_SHARP_ == null);
if(or__10778__auto__){
return or__10778__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20559_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__10778__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return line;
}
})();
var G__20580 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20580__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20580,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20580);
var G__20580__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20580__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20580__$1);
var G__20580__$3 = (cljs.core.truth_((function (){var or__10778__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__20580__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__10778__auto__ = fn;
if(cljs.core.truth_(or__10778__auto__)){
return or__10778__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20580__$2);
var G__20580__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20580__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20580__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20580__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20580__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20568__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20584){
var map__20585 = p__20584;
var map__20585__$1 = (((((!((map__20585 == null))))?(((((map__20585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20585):map__20585);
var triage_data = map__20585__$1;
var phase = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20587 = phase;
var G__20587__$1 = (((G__20587 instanceof cljs.core.Keyword))?G__20587.fqn:null);
switch (G__20587__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__11941__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20588_20597 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20589_20598 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20590_20599 = true;
var _STAR_print_fn_STAR__temp_val__20591_20600 = (function (x__11942__auto__){
return sb__11941__auto__.append(x__11942__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20590_20599);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20591_20600);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20582_SHARP_){
return cljs.core.dissoc.call(null,p1__20582_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20589_20598);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20588_20597);
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
var _STAR_print_newline_STAR__orig_val__20592_20601 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20593_20602 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20594_20603 = true;
var _STAR_print_fn_STAR__temp_val__20595_20604 = (function (x__11942__auto__){
return sb__11941__auto__.append(x__11942__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20594_20603);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20595_20604);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20583_SHARP_){
return cljs.core.dissoc.call(null,p1__20583_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20593_20602);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20592_20601);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11941__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20587__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
