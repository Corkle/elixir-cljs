(ns elixir-cljs.ui.components.shared
  (:require [re-frame.core :refer [dispatch]]))

(defn login-button []
  [:button {:on-click #(dispatch [:nav/goto :login])} "Sign In"])

(defn register-button []
  [:button {:on-click #(dispatch [:nav/goto :registration])} "Register"])
