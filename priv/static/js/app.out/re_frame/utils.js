// Compiled by ClojureScript 1.7.228 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__8249_SHARP_){
return console.log(p1__8249_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__8250_SHARP_){
return console.warn(p1__8250_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__8251_SHARP_){
return console.error(p1__8251_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__8252_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__8252_SHARP_);
} else {
return console.log(p1__8252_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__7551__auto__ = [];
var len__7544__auto___8254 = arguments.length;
var i__7545__auto___8255 = (0);
while(true){
if((i__7545__auto___8255 < len__7544__auto___8254)){
args__7551__auto__.push((arguments[i__7545__auto___8255]));

var G__8256 = (i__7545__auto___8255 + (1));
i__7545__auto___8255 = G__8256;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq8253){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__7551__auto__ = [];
var len__7544__auto___8258 = arguments.length;
var i__7545__auto___8259 = (0);
while(true){
if((i__7545__auto___8259 < len__7544__auto___8258)){
args__7551__auto__.push((arguments[i__7545__auto___8259]));

var G__8260 = (i__7545__auto___8259 + (1));
i__7545__auto___8259 = G__8260;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq8257){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8257));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__7551__auto__ = [];
var len__7544__auto___8262 = arguments.length;
var i__7545__auto___8263 = (0);
while(true){
if((i__7545__auto___8263 < len__7544__auto___8262)){
args__7551__auto__.push((arguments[i__7545__auto___8263]));

var G__8264 = (i__7545__auto___8263 + (1));
i__7545__auto___8263 = G__8264;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq8261){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8261));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__7551__auto__ = [];
var len__7544__auto___8266 = arguments.length;
var i__7545__auto___8267 = (0);
while(true){
if((i__7545__auto___8267 < len__7544__auto___8266)){
args__7551__auto__.push((arguments[i__7545__auto___8267]));

var G__8268 = (i__7545__auto___8267 + (1));
i__7545__auto___8267 = G__8268;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq8265){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8265));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__7551__auto__ = [];
var len__7544__auto___8270 = arguments.length;
var i__7545__auto___8271 = (0);
while(true){
if((i__7545__auto___8271 < len__7544__auto___8270)){
args__7551__auto__.push((arguments[i__7545__auto___8271]));

var G__8272 = (i__7545__auto___8271 + (1));
i__7545__auto___8271 = G__8272;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq8269){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8269));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map