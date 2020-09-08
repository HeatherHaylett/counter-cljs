// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__14430 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14431 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14431);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___14464 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___14464)){
var new_db_14465 = temp__5735__auto___14464;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_14465);
} else {
}

var seq__14432 = cljs.core.seq.call(null,effects_without_db);
var chunk__14433 = null;
var count__14434 = (0);
var i__14435 = (0);
while(true){
if((i__14435 < count__14434)){
var vec__14442 = cljs.core._nth.call(null,chunk__14433,i__14435);
var effect_key = cljs.core.nth.call(null,vec__14442,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14442,(1),null);
var temp__5733__auto___14466 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14466)){
var effect_fn_14467 = temp__5733__auto___14466;
effect_fn_14467.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14468 = seq__14432;
var G__14469 = chunk__14433;
var G__14470 = count__14434;
var G__14471 = (i__14435 + (1));
seq__14432 = G__14468;
chunk__14433 = G__14469;
count__14434 = G__14470;
i__14435 = G__14471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14432);
if(temp__5735__auto__){
var seq__14432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14432__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14432__$1);
var G__14472 = cljs.core.chunk_rest.call(null,seq__14432__$1);
var G__14473 = c__11748__auto__;
var G__14474 = cljs.core.count.call(null,c__11748__auto__);
var G__14475 = (0);
seq__14432 = G__14472;
chunk__14433 = G__14473;
count__14434 = G__14474;
i__14435 = G__14475;
continue;
} else {
var vec__14445 = cljs.core.first.call(null,seq__14432__$1);
var effect_key = cljs.core.nth.call(null,vec__14445,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14445,(1),null);
var temp__5733__auto___14476 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14476)){
var effect_fn_14477 = temp__5733__auto___14476;
effect_fn_14477.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14478 = cljs.core.next.call(null,seq__14432__$1);
var G__14479 = null;
var G__14480 = (0);
var G__14481 = (0);
seq__14432 = G__14478;
chunk__14433 = G__14479;
count__14434 = G__14480;
i__14435 = G__14481;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14242__auto___14482 = re_frame.interop.now.call(null);
var duration__14243__auto___14483 = (end__14242__auto___14482 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14243__auto___14483,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14242__auto___14482);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14430);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___14484 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___14484)){
var new_db_14485 = temp__5735__auto___14484;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_14485);
} else {
}

var seq__14448 = cljs.core.seq.call(null,effects_without_db);
var chunk__14449 = null;
var count__14450 = (0);
var i__14451 = (0);
while(true){
if((i__14451 < count__14450)){
var vec__14458 = cljs.core._nth.call(null,chunk__14449,i__14451);
var effect_key = cljs.core.nth.call(null,vec__14458,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14458,(1),null);
var temp__5733__auto___14486 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14486)){
var effect_fn_14487 = temp__5733__auto___14486;
effect_fn_14487.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14488 = seq__14448;
var G__14489 = chunk__14449;
var G__14490 = count__14450;
var G__14491 = (i__14451 + (1));
seq__14448 = G__14488;
chunk__14449 = G__14489;
count__14450 = G__14490;
i__14451 = G__14491;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14448);
if(temp__5735__auto__){
var seq__14448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14448__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14448__$1);
var G__14492 = cljs.core.chunk_rest.call(null,seq__14448__$1);
var G__14493 = c__11748__auto__;
var G__14494 = cljs.core.count.call(null,c__11748__auto__);
var G__14495 = (0);
seq__14448 = G__14492;
chunk__14449 = G__14493;
count__14450 = G__14494;
i__14451 = G__14495;
continue;
} else {
var vec__14461 = cljs.core.first.call(null,seq__14448__$1);
var effect_key = cljs.core.nth.call(null,vec__14461,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14461,(1),null);
var temp__5733__auto___14496 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14496)){
var effect_fn_14497 = temp__5733__auto___14496;
effect_fn_14497.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14498 = cljs.core.next.call(null,seq__14448__$1);
var G__14499 = null;
var G__14500 = (0);
var G__14501 = (0);
seq__14448 = G__14498;
chunk__14449 = G__14499;
count__14450 = G__14500;
i__14451 = G__14501;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__14502){
var map__14503 = p__14502;
var map__14503__$1 = (((((!((map__14503 == null))))?(((((map__14503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14503):map__14503);
var effect = map__14503__$1;
var ms = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__14505 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14506 = null;
var count__14507 = (0);
var i__14508 = (0);
while(true){
if((i__14508 < count__14507)){
var effect = cljs.core._nth.call(null,chunk__14506,i__14508);
re_frame.fx.dispatch_later.call(null,effect);


var G__14509 = seq__14505;
var G__14510 = chunk__14506;
var G__14511 = count__14507;
var G__14512 = (i__14508 + (1));
seq__14505 = G__14509;
chunk__14506 = G__14510;
count__14507 = G__14511;
i__14508 = G__14512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14505);
if(temp__5735__auto__){
var seq__14505__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14505__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14505__$1);
var G__14513 = cljs.core.chunk_rest.call(null,seq__14505__$1);
var G__14514 = c__11748__auto__;
var G__14515 = cljs.core.count.call(null,c__11748__auto__);
var G__14516 = (0);
seq__14505 = G__14513;
chunk__14506 = G__14514;
count__14507 = G__14515;
i__14508 = G__14516;
continue;
} else {
var effect = cljs.core.first.call(null,seq__14505__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__14517 = cljs.core.next.call(null,seq__14505__$1);
var G__14518 = null;
var G__14519 = (0);
var G__14520 = (0);
seq__14505 = G__14517;
chunk__14506 = G__14518;
count__14507 = G__14519;
i__14508 = G__14520;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__14521 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14522 = null;
var count__14523 = (0);
var i__14524 = (0);
while(true){
if((i__14524 < count__14523)){
var vec__14531 = cljs.core._nth.call(null,chunk__14522,i__14524);
var effect_key = cljs.core.nth.call(null,vec__14531,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14531,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___14537 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14537)){
var effect_fn_14538 = temp__5733__auto___14537;
effect_fn_14538.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__14539 = seq__14521;
var G__14540 = chunk__14522;
var G__14541 = count__14523;
var G__14542 = (i__14524 + (1));
seq__14521 = G__14539;
chunk__14522 = G__14540;
count__14523 = G__14541;
i__14524 = G__14542;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14521);
if(temp__5735__auto__){
var seq__14521__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14521__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14521__$1);
var G__14543 = cljs.core.chunk_rest.call(null,seq__14521__$1);
var G__14544 = c__11748__auto__;
var G__14545 = cljs.core.count.call(null,c__11748__auto__);
var G__14546 = (0);
seq__14521 = G__14543;
chunk__14522 = G__14544;
count__14523 = G__14545;
i__14524 = G__14546;
continue;
} else {
var vec__14534 = cljs.core.first.call(null,seq__14521__$1);
var effect_key = cljs.core.nth.call(null,vec__14534,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14534,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___14547 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14547)){
var effect_fn_14548 = temp__5733__auto___14547;
effect_fn_14548.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__14549 = cljs.core.next.call(null,seq__14521__$1);
var G__14550 = null;
var G__14551 = (0);
var G__14552 = (0);
seq__14521 = G__14549;
chunk__14522 = G__14550;
count__14523 = G__14551;
i__14524 = G__14552;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__14553 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14554 = null;
var count__14555 = (0);
var i__14556 = (0);
while(true){
if((i__14556 < count__14555)){
var event = cljs.core._nth.call(null,chunk__14554,i__14556);
re_frame.router.dispatch.call(null,event);


var G__14557 = seq__14553;
var G__14558 = chunk__14554;
var G__14559 = count__14555;
var G__14560 = (i__14556 + (1));
seq__14553 = G__14557;
chunk__14554 = G__14558;
count__14555 = G__14559;
i__14556 = G__14560;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14553);
if(temp__5735__auto__){
var seq__14553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14553__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14553__$1);
var G__14561 = cljs.core.chunk_rest.call(null,seq__14553__$1);
var G__14562 = c__11748__auto__;
var G__14563 = cljs.core.count.call(null,c__11748__auto__);
var G__14564 = (0);
seq__14553 = G__14561;
chunk__14554 = G__14562;
count__14555 = G__14563;
i__14556 = G__14564;
continue;
} else {
var event = cljs.core.first.call(null,seq__14553__$1);
re_frame.router.dispatch.call(null,event);


var G__14565 = cljs.core.next.call(null,seq__14553__$1);
var G__14566 = null;
var G__14567 = (0);
var G__14568 = (0);
seq__14553 = G__14565;
chunk__14554 = G__14566;
count__14555 = G__14567;
i__14556 = G__14568;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14569 = cljs.core.seq.call(null,value);
var chunk__14570 = null;
var count__14571 = (0);
var i__14572 = (0);
while(true){
if((i__14572 < count__14571)){
var event = cljs.core._nth.call(null,chunk__14570,i__14572);
clear_event.call(null,event);


var G__14573 = seq__14569;
var G__14574 = chunk__14570;
var G__14575 = count__14571;
var G__14576 = (i__14572 + (1));
seq__14569 = G__14573;
chunk__14570 = G__14574;
count__14571 = G__14575;
i__14572 = G__14576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14569);
if(temp__5735__auto__){
var seq__14569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14569__$1)){
var c__11748__auto__ = cljs.core.chunk_first.call(null,seq__14569__$1);
var G__14577 = cljs.core.chunk_rest.call(null,seq__14569__$1);
var G__14578 = c__11748__auto__;
var G__14579 = cljs.core.count.call(null,c__11748__auto__);
var G__14580 = (0);
seq__14569 = G__14577;
chunk__14570 = G__14578;
count__14571 = G__14579;
i__14572 = G__14580;
continue;
} else {
var event = cljs.core.first.call(null,seq__14569__$1);
clear_event.call(null,event);


var G__14581 = cljs.core.next.call(null,seq__14569__$1);
var G__14582 = null;
var G__14583 = (0);
var G__14584 = (0);
seq__14569 = G__14581;
chunk__14570 = G__14582;
count__14571 = G__14583;
i__14572 = G__14584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
