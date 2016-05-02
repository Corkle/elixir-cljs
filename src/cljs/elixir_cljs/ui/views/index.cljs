(ns elixir-cljs.ui.views.index
  (:require [re-frame.core :refer [dispatch]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn index-view []
  (fn []
    [:div
     [:h3 "INDEX"]
     [:div "Account:"]]))
