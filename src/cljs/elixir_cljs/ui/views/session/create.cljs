(ns elixir-cljs.ui.views.session.create
  (:require
    [re-frame.core :refer [dispatch subscribe]]))

(defn- username-input []
  (let [username (subscribe [:session/username-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @username
                            :required true
                            :on-change #(dispatch [:session/set-username-input (-> % .-target .-value)])}])))

(defn- password-input []
  (let [password (subscribe [:session/password-input])]
    (fn []
      [:input.form-control {:type "password"
                            :value @password
                            :required true
                            :on-change #(dispatch [:session/set-password-input (-> % .-target .-value)])}])))

(defn- input-group-item
  [label control]
  [:div.input-group
   [:span.input-group-addon label]
   [control]])

(defn- session-create-form []
  (let []
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (dispatch [:ajax/create-session]))}
       [input-group-item "Username" username-input]
       [input-group-item "Password" password-input]
       [:hr]
       [:button {:type "submit"} "Sign in"]])))

(defn session-create []
  (fn []
    [:div "LOGIN"
     [session-create-form]]))
