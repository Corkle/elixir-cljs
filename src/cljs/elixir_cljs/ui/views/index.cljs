(ns elixir-cljs.ui.views.index
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [elixir-cljs.ui.views.register :refer [registration-view]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn index-view []
  (fn []
    (let [auth (subscribe [:session-auth])
          user (reaction (:user @auth))]
      (if @auth
        [:div
         [:h3 "INDEX"]
         [:div [:strong "Username: "] (str (:username @user))]
         [:div [:strong "Name: "] (str (:name @user))]]
        [registration-view]))))
