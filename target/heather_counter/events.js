// Compiled by ClojureScript 0.0.1108670661 {:target :nodejs}
goog.provide('heather_counter.events');
goog.require('cljs.core');
goog.require('heather_counter.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (_,___$1){
return heather_counter.db.state;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-number","set-number",-1511619438),(function (db,p__13149){
var vec__13150 = p__13149;
var _ = cljs.core.nth.call(null,vec__13150,(0),null);
var new_number = cljs.core.nth.call(null,vec__13150,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"click-counter","click-counter",-638411887),new_number);
}));

//# sourceMappingURL=events.js.map
