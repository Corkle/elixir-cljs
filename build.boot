(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"web/static"}

  :dependencies '[
    [org.clojure/clojurescript  "1.7.228"        :scope "provided"]
    [adzerk/boot-cljs           "1.7.228-1"      :scope "test"]
    [adzerk/boot-reload         "0.4.4"          :scope "test"]
    [reagent                    "0.6.0-alpha"    :scope "provided"]
    [re-frame                   "0.7.0"          :scope "provided"]
    [com.cognitect/transit-cljs "0.8.237"        :scope "provided"]
    [cljs-ajax                  "0.5.4"          :scope "provided"]
;;     [com.taoensso/sente         "1.8.1"          :scope "provided"]
    [cljsjs/phoenix             "1.1.4-0"        :scope "provided"]
    ])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]])

(deftask dev
  "Launch boot-cljs dev environemnt"
  []
  (comp
    (watch)
    ; (reload)
    (cljs :source-map true)
    (target :dir #{"priv/static"})))

(deftask prod-cljs
  "Compile production files using advanced mode"
  []
  (comp
    (cljs :optimizations :advanced)
    (target :dir #{"priv/static"})))
