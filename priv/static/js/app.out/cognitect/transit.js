// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8403_8407 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8404_8408 = null;
var count__8405_8409 = (0);
var i__8406_8410 = (0);
while(true){
if((i__8406_8410 < count__8405_8409)){
var k_8411 = cljs.core._nth.call(null,chunk__8404_8408,i__8406_8410);
var v_8412 = (b[k_8411]);
(a[k_8411] = v_8412);

var G__8413 = seq__8403_8407;
var G__8414 = chunk__8404_8408;
var G__8415 = count__8405_8409;
var G__8416 = (i__8406_8410 + (1));
seq__8403_8407 = G__8413;
chunk__8404_8408 = G__8414;
count__8405_8409 = G__8415;
i__8406_8410 = G__8416;
continue;
} else {
var temp__4657__auto___8417 = cljs.core.seq.call(null,seq__8403_8407);
if(temp__4657__auto___8417){
var seq__8403_8418__$1 = temp__4657__auto___8417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8403_8418__$1)){
var c__7289__auto___8419 = cljs.core.chunk_first.call(null,seq__8403_8418__$1);
var G__8420 = cljs.core.chunk_rest.call(null,seq__8403_8418__$1);
var G__8421 = c__7289__auto___8419;
var G__8422 = cljs.core.count.call(null,c__7289__auto___8419);
var G__8423 = (0);
seq__8403_8407 = G__8420;
chunk__8404_8408 = G__8421;
count__8405_8409 = G__8422;
i__8406_8410 = G__8423;
continue;
} else {
var k_8424 = cljs.core.first.call(null,seq__8403_8418__$1);
var v_8425 = (b[k_8424]);
(a[k_8424] = v_8425);

var G__8426 = cljs.core.next.call(null,seq__8403_8418__$1);
var G__8427 = null;
var G__8428 = (0);
var G__8429 = (0);
seq__8403_8407 = G__8426;
chunk__8404_8408 = G__8427;
count__8405_8409 = G__8428;
i__8406_8410 = G__8429;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8430 = [];
var len__7544__auto___8433 = arguments.length;
var i__7545__auto___8434 = (0);
while(true){
if((i__7545__auto___8434 < len__7544__auto___8433)){
args8430.push((arguments[i__7545__auto___8434]));

var G__8435 = (i__7545__auto___8434 + (1));
i__7545__auto___8434 = G__8435;
continue;
} else {
}
break;
}

var G__8432 = args8430.length;
switch (G__8432) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8430.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8437 = (i + (2));
var G__8438 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8437;
ret = G__8438;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8439_8443 = cljs.core.seq.call(null,v);
var chunk__8440_8444 = null;
var count__8441_8445 = (0);
var i__8442_8446 = (0);
while(true){
if((i__8442_8446 < count__8441_8445)){
var x_8447 = cljs.core._nth.call(null,chunk__8440_8444,i__8442_8446);
ret.push(x_8447);

var G__8448 = seq__8439_8443;
var G__8449 = chunk__8440_8444;
var G__8450 = count__8441_8445;
var G__8451 = (i__8442_8446 + (1));
seq__8439_8443 = G__8448;
chunk__8440_8444 = G__8449;
count__8441_8445 = G__8450;
i__8442_8446 = G__8451;
continue;
} else {
var temp__4657__auto___8452 = cljs.core.seq.call(null,seq__8439_8443);
if(temp__4657__auto___8452){
var seq__8439_8453__$1 = temp__4657__auto___8452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8439_8453__$1)){
var c__7289__auto___8454 = cljs.core.chunk_first.call(null,seq__8439_8453__$1);
var G__8455 = cljs.core.chunk_rest.call(null,seq__8439_8453__$1);
var G__8456 = c__7289__auto___8454;
var G__8457 = cljs.core.count.call(null,c__7289__auto___8454);
var G__8458 = (0);
seq__8439_8443 = G__8455;
chunk__8440_8444 = G__8456;
count__8441_8445 = G__8457;
i__8442_8446 = G__8458;
continue;
} else {
var x_8459 = cljs.core.first.call(null,seq__8439_8453__$1);
ret.push(x_8459);

var G__8460 = cljs.core.next.call(null,seq__8439_8453__$1);
var G__8461 = null;
var G__8462 = (0);
var G__8463 = (0);
seq__8439_8443 = G__8460;
chunk__8440_8444 = G__8461;
count__8441_8445 = G__8462;
i__8442_8446 = G__8463;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8464_8468 = cljs.core.seq.call(null,v);
var chunk__8465_8469 = null;
var count__8466_8470 = (0);
var i__8467_8471 = (0);
while(true){
if((i__8467_8471 < count__8466_8470)){
var x_8472 = cljs.core._nth.call(null,chunk__8465_8469,i__8467_8471);
ret.push(x_8472);

var G__8473 = seq__8464_8468;
var G__8474 = chunk__8465_8469;
var G__8475 = count__8466_8470;
var G__8476 = (i__8467_8471 + (1));
seq__8464_8468 = G__8473;
chunk__8465_8469 = G__8474;
count__8466_8470 = G__8475;
i__8467_8471 = G__8476;
continue;
} else {
var temp__4657__auto___8477 = cljs.core.seq.call(null,seq__8464_8468);
if(temp__4657__auto___8477){
var seq__8464_8478__$1 = temp__4657__auto___8477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8464_8478__$1)){
var c__7289__auto___8479 = cljs.core.chunk_first.call(null,seq__8464_8478__$1);
var G__8480 = cljs.core.chunk_rest.call(null,seq__8464_8478__$1);
var G__8481 = c__7289__auto___8479;
var G__8482 = cljs.core.count.call(null,c__7289__auto___8479);
var G__8483 = (0);
seq__8464_8468 = G__8480;
chunk__8465_8469 = G__8481;
count__8466_8470 = G__8482;
i__8467_8471 = G__8483;
continue;
} else {
var x_8484 = cljs.core.first.call(null,seq__8464_8478__$1);
ret.push(x_8484);

var G__8485 = cljs.core.next.call(null,seq__8464_8478__$1);
var G__8486 = null;
var G__8487 = (0);
var G__8488 = (0);
seq__8464_8468 = G__8485;
chunk__8465_8469 = G__8486;
count__8466_8470 = G__8487;
i__8467_8471 = G__8488;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8489_8493 = cljs.core.seq.call(null,v);
var chunk__8490_8494 = null;
var count__8491_8495 = (0);
var i__8492_8496 = (0);
while(true){
if((i__8492_8496 < count__8491_8495)){
var x_8497 = cljs.core._nth.call(null,chunk__8490_8494,i__8492_8496);
ret.push(x_8497);

var G__8498 = seq__8489_8493;
var G__8499 = chunk__8490_8494;
var G__8500 = count__8491_8495;
var G__8501 = (i__8492_8496 + (1));
seq__8489_8493 = G__8498;
chunk__8490_8494 = G__8499;
count__8491_8495 = G__8500;
i__8492_8496 = G__8501;
continue;
} else {
var temp__4657__auto___8502 = cljs.core.seq.call(null,seq__8489_8493);
if(temp__4657__auto___8502){
var seq__8489_8503__$1 = temp__4657__auto___8502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8503__$1)){
var c__7289__auto___8504 = cljs.core.chunk_first.call(null,seq__8489_8503__$1);
var G__8505 = cljs.core.chunk_rest.call(null,seq__8489_8503__$1);
var G__8506 = c__7289__auto___8504;
var G__8507 = cljs.core.count.call(null,c__7289__auto___8504);
var G__8508 = (0);
seq__8489_8493 = G__8505;
chunk__8490_8494 = G__8506;
count__8491_8495 = G__8507;
i__8492_8496 = G__8508;
continue;
} else {
var x_8509 = cljs.core.first.call(null,seq__8489_8503__$1);
ret.push(x_8509);

var G__8510 = cljs.core.next.call(null,seq__8489_8503__$1);
var G__8511 = null;
var G__8512 = (0);
var G__8513 = (0);
seq__8489_8493 = G__8510;
chunk__8490_8494 = G__8511;
count__8491_8495 = G__8512;
i__8492_8496 = G__8513;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8514 = [];
var len__7544__auto___8525 = arguments.length;
var i__7545__auto___8526 = (0);
while(true){
if((i__7545__auto___8526 < len__7544__auto___8525)){
args8514.push((arguments[i__7545__auto___8526]));

var G__8527 = (i__7545__auto___8526 + (1));
i__7545__auto___8526 = G__8527;
continue;
} else {
}
break;
}

var G__8516 = args8514.length;
switch (G__8516) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8514.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8517 = obj;
G__8517.push(kfn.call(null,k),vfn.call(null,v));

return G__8517;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8518 = cljs.core.clone.call(null,handlers);
x8518.forEach = ((function (x8518,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8519 = cljs.core.seq.call(null,coll);
var chunk__8520 = null;
var count__8521 = (0);
var i__8522 = (0);
while(true){
if((i__8522 < count__8521)){
var vec__8523 = cljs.core._nth.call(null,chunk__8520,i__8522);
var k = cljs.core.nth.call(null,vec__8523,(0),null);
var v = cljs.core.nth.call(null,vec__8523,(1),null);
f.call(null,v,k);

var G__8529 = seq__8519;
var G__8530 = chunk__8520;
var G__8531 = count__8521;
var G__8532 = (i__8522 + (1));
seq__8519 = G__8529;
chunk__8520 = G__8530;
count__8521 = G__8531;
i__8522 = G__8532;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8519);
if(temp__4657__auto__){
var seq__8519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8519__$1)){
var c__7289__auto__ = cljs.core.chunk_first.call(null,seq__8519__$1);
var G__8533 = cljs.core.chunk_rest.call(null,seq__8519__$1);
var G__8534 = c__7289__auto__;
var G__8535 = cljs.core.count.call(null,c__7289__auto__);
var G__8536 = (0);
seq__8519 = G__8533;
chunk__8520 = G__8534;
count__8521 = G__8535;
i__8522 = G__8536;
continue;
} else {
var vec__8524 = cljs.core.first.call(null,seq__8519__$1);
var k = cljs.core.nth.call(null,vec__8524,(0),null);
var v = cljs.core.nth.call(null,vec__8524,(1),null);
f.call(null,v,k);

var G__8537 = cljs.core.next.call(null,seq__8519__$1);
var G__8538 = null;
var G__8539 = (0);
var G__8540 = (0);
seq__8519 = G__8537;
chunk__8520 = G__8538;
count__8521 = G__8539;
i__8522 = G__8540;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8518,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8518;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8541 = [];
var len__7544__auto___8547 = arguments.length;
var i__7545__auto___8548 = (0);
while(true){
if((i__7545__auto___8548 < len__7544__auto___8547)){
args8541.push((arguments[i__7545__auto___8548]));

var G__8549 = (i__7545__auto___8548 + (1));
i__7545__auto___8548 = G__8549;
continue;
} else {
}
break;
}

var G__8543 = args8541.length;
switch (G__8543) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8541.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8544 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8545){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8545 = meta8545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8546,meta8545__$1){
var self__ = this;
var _8546__$1 = this;
return (new cognitect.transit.t_cognitect$transit8544(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8545__$1));
});

cognitect.transit.t_cognitect$transit8544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8546){
var self__ = this;
var _8546__$1 = this;
return self__.meta8545;
});

cognitect.transit.t_cognitect$transit8544.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8544.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8544.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8544.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8545","meta8545",-1342569074,null)], null);
});

cognitect.transit.t_cognitect$transit8544.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8544.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8544";

cognitect.transit.t_cognitect$transit8544.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cognitect.transit/t_cognitect$transit8544");
});

cognitect.transit.__GT_t_cognitect$transit8544 = (function cognitect$transit$__GT_t_cognitect$transit8544(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8545){
return (new cognitect.transit.t_cognitect$transit8544(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8545));
});

}

return (new cognitect.transit.t_cognitect$transit8544(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6486__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map