(ns elixir-cljs.ui.views.session.index
  (:require
    [re-frame.core :refer [dispatch dispatch-sync subscribe]]
    [elixir-cljs.ui.views.session.create :refer [session-create]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn session-view []
  (let [auth (subscribe [:session/authentication])
        user (reaction (:current-user @auth))]
    (fn []
      (if (:authenticating? @auth)
        [:div "Signing you in. Please wait..."]
        (if @user
          [:div
           [:h4 "You are currently logged in as:"]
           [:div [:strong "Username: "] (str (:username @user))]
           [:div [:strong "Name: "] (str (:name @user))]
           [:button {:on-click #(dispatch [:session/logoff])} "Logoff"]]
          [session-create])))))
