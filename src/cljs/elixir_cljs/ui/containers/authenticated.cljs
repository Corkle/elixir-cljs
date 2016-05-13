(ns elixir-cljs.ui.containers.authenticated
  (:require [re-frame.core :refer [dispatch subscribe]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn authenticated-container
  [component]
  (let [auth (subscribe [:session/authentication])
        current-user (reaction (:current-user @auth))]
    (fn []
      (if @current-user
        component
        [:div "Go away. This is private!"]))))
