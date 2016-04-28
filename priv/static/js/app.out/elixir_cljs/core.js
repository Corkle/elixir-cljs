// Compiled by ClojureScript 1.7.228 {}
goog.provide('elixir_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
elixir_cljs.core.deserialize = (function elixir_cljs$core$deserialize(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
elixir_cljs.core.serialize = (function elixir_cljs$core$serialize(x){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"username-value","username-value",-1410174060),"",new cljs.core.Keyword(null,"config","config",994861415),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-username","update-username",1912129493),(function (db,p__8747){
var vec__8748 = p__8747;
var _ = cljs.core.nth.call(null,vec__8748,(0),null);
var user = cljs.core.nth.call(null,vec__8748,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"username-value","username-value",-1410174060),user);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693),(function (db,p__8749){
var vec__8750 = p__8749;
var _ = cljs.core.nth.call(null,vec__8750,(0),null);
var user = cljs.core.nth.call(null,vec__8750,(1),null);
var user__$1 = new cljs.core.Keyword(null,"username-value","username-value",-1410174060).cljs$core$IFn$_invoke$arity$1(db);
console.log(elixir_cljs.core.serialize.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user__$1], null)));

return db;
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"username-value","username-value",-1410174060),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"username-value","username-value",-1410174060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
elixir_cljs.core.add_user_form = (function elixir_cljs$core$add_user_form(){
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-value","username-value",-1410174060)], null));
return ((function (username){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (username){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-user","add-user",-1150614693)], null));
});})(username))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,username),new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username){
return (function (p1__8751_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-username","update-username",1912129493),p1__8751_SHARP_.target.value], null));
});})(username))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Add User"], null)], null);
});
;})(username))
});
elixir_cljs.core.app_main = (function elixir_cljs$core$app_main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elixir_cljs.core.add_user_form], null)], null);
});
elixir_cljs.core.init = (function elixir_cljs$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null));

return reagent.core.render.call(null,elixir_cljs.core.app_main,document.getElementById("app"));
});
elixir_cljs.core.init.call(null);

//# sourceMappingURL=core.js.map