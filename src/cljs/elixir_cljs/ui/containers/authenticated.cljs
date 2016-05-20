(ns elixir-cljs.ui.containers.authenticated
  (:require [re-frame.core :refer [dispatch subscribe]]
            [elixir-cljs.ui.components.shared :refer [register-button login-button]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn- get-current-user []
  (dispatch [:session/get-user-from-token])
  [:div "Getting your profile data..."])

(defn- get-authorization
  [jwt]
  (if jwt
    [get-current-user]
    [:div
     [:p "You are not authorized to view this content. Please sign in."]
     [register-button]
     [login-button]]))

(defn authenticated-container
  [component]
  (let [auth (subscribe [:session/authentication])
        user (reaction (:current-user @auth))]
    (fn [component]
      [:div
       [:h4 "PROTECTED CONTENT"]
       (if @user
         component
         [get-authorization (:jwt @auth)])])))
