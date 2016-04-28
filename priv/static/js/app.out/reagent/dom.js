// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6486__auto__ = (function (){var and__6474__auto__ = typeof ReactDOM !== 'undefined';
if(and__6474__auto__){
return ReactDOM;
} else {
return and__6474__auto__;
}
})();
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
var and__6474__auto__ = typeof require !== 'undefined';
if(and__6474__auto__){
return require("react-dom");
} else {
return and__6474__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8121 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8121){
return (function (){
var _STAR_always_update_STAR_8122 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8122;
}});})(_STAR_always_update_STAR_8121))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8121;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8123 = [];
var len__7544__auto___8126 = arguments.length;
var i__7545__auto___8127 = (0);
while(true){
if((i__7545__auto___8127 < len__7544__auto___8126)){
args8123.push((arguments[i__7545__auto___8127]));

var G__8128 = (i__7545__auto___8127 + (1));
i__7545__auto___8127 = G__8128;
continue;
} else {
}
break;
}

var G__8125 = args8123.length;
switch (G__8125) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8123.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__8134_8138 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8135_8139 = null;
var count__8136_8140 = (0);
var i__8137_8141 = (0);
while(true){
if((i__8137_8141 < count__8136_8140)){
var v_8142 = cljs.core._nth.call(null,chunk__8135_8139,i__8137_8141);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8142);

var G__8143 = seq__8134_8138;
var G__8144 = chunk__8135_8139;
var G__8145 = count__8136_8140;
var G__8146 = (i__8137_8141 + (1));
seq__8134_8138 = G__8143;
chunk__8135_8139 = G__8144;
count__8136_8140 = G__8145;
i__8137_8141 = G__8146;
continue;
} else {
var temp__4657__auto___8147 = cljs.core.seq.call(null,seq__8134_8138);
if(temp__4657__auto___8147){
var seq__8134_8148__$1 = temp__4657__auto___8147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8134_8148__$1)){
var c__7289__auto___8149 = cljs.core.chunk_first.call(null,seq__8134_8148__$1);
var G__8150 = cljs.core.chunk_rest.call(null,seq__8134_8148__$1);
var G__8151 = c__7289__auto___8149;
var G__8152 = cljs.core.count.call(null,c__7289__auto___8149);
var G__8153 = (0);
seq__8134_8138 = G__8150;
chunk__8135_8139 = G__8151;
count__8136_8140 = G__8152;
i__8137_8141 = G__8153;
continue;
} else {
var v_8154 = cljs.core.first.call(null,seq__8134_8148__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8154);

var G__8155 = cljs.core.next.call(null,seq__8134_8148__$1);
var G__8156 = null;
var G__8157 = (0);
var G__8158 = (0);
seq__8134_8138 = G__8155;
chunk__8135_8139 = G__8156;
count__8136_8140 = G__8157;
i__8137_8141 = G__8158;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map