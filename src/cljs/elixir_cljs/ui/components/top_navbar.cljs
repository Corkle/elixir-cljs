(ns elixir-cljs.ui.components.top-navbar
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [elixir-cljs.ui.components.current-user :refer [current-user-info-nav]]))

(defn top-navbar
  []
  (let [nav (subscribe [:nav/get-nav])]
    (fn []
      [:nav#top-navbar
       [:ul.nav.nav-pills.pull-right
        [:li (str (keyword @nav))]
        [:li " | "]
        [:li [current-user-info-nav]]

        ]])))
