(ns elixir-cljs.ui.views.registration.index
  (:require
    [re-frame.core :refer [dispatch dispatch-sync subscribe]]
    [elixir-cljs.ui.views.registration.create :refer [registration-new]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn registration-view []
  (let [auth (subscribe [:session-auth])
        user (reaction (:user @auth))]
    (fn []
      (dispatch [:init-registration-form])
      (if @auth
        [:div
         [:h4 "You are currently logged in as:"]
         [:div [:strong "Username: "] (str (:username @user))]
         [:div [:strong "Name: "] (str (:name @user))]
         [:button {:on-click #(dispatch [:session/logoff])} "Logoff"]]
        [registration-new]))))
