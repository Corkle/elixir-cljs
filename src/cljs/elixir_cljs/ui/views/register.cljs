(ns elixir-cljs.ui.views.register
  (:require
    [re-frame.core :refer [dispatch dispatch-sync subscribe]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn- input-group-item
  [label control]
  [:div.input-group
   [:span.input-group-addon label]
   [control]])

(defn- name-input []
  (let [name (subscribe [:name-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @name
                            :on-change #(dispatch [:set-name-input (-> % .-target .-value)])}])))
(defn- username-input []
  (let [username (subscribe [:username-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @username
                            :on-change #(dispatch [:set-username-input (-> % .-target .-value)])}])))

(defn- password-input []
  (let [password (subscribe [:password-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @password
                            :on-change #(dispatch [:set-password-input (-> % .-target .-value)])}])))

(defn- password-conf-input []
  (let [password-conf (subscribe [:password-conf-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @password-conf
                            :on-change #(dispatch [:set-password-conf-input (-> % .-target .-value)])}])))


(defn- add-user-form []
  (let []
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (dispatch [:ajax/create-account]))}
       [input-group-item "Name" name-input]
       [input-group-item "Username" username-input]
       [input-group-item "Passowrd" password-input]
       [input-group-item "Confirm Password" password-conf-input]
       [:hr]
       [:button "Add User"]])))

(defn registration-view []
  (fn []
    (dispatch [:init-registration-form])
    [:div "REGISTER"
     [add-user-form]]))
