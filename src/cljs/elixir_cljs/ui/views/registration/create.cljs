(ns elixir-cljs.ui.views.registration.create
  (:require
    [re-frame.core :refer [dispatch dispatch-sync subscribe]]
    [elixir-cljs.ui.views.registration.form :refer [add-user-form]]))

(defn- test-add-user []
  [:button {:on-click #(dispatch [:add-test-user])} "Add Test"])

(defn registration-create []
  (fn []
    [:div "REGISTER"
     [add-user-form]
     [test-add-user]]))
