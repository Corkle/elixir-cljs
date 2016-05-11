(ns elixir-cljs.ui.views.registration.form
  (:require
    [re-frame.core :refer [dispatch subscribe]]))

(defn- name-input []
  (let [name (subscribe [:registration/name-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @name
                            :required true
                            :on-change #(dispatch [:registration/set-name-input (-> % .-target .-value)])}])))
(defn- username-input []
  (let [username (subscribe [:registration/username-input])]
    (fn []
      [:input.form-control {:type "text"
                            :value @username
                            :required true
                            :on-change #(dispatch [:registration/set-username-input (-> % .-target .-value)])}])))

(defn- password-input []
  (let [password (subscribe [:registration/password-input])]
    (fn []
      [:input.form-control {:type "password"
                            :value @password
                            :required true
                            :on-change #(dispatch [:registration/set-password-input (-> % .-target .-value)])}])))

(defn- password-conf-input []
  (let [password-conf (subscribe [:registration/password-conf-input])]
    (fn []
      [:input.form-control {:type "password"
                            :value @password-conf
                            :required true
                            :on-change #(dispatch [:registration/set-password-conf-input (-> % .-target .-value)])}])))

(defn- input-group-item
  [label control]
  [:div.input-group
   [:span.input-group-addon label]
   [control]])

(defn- show-errors []
  (let [errors (subscribe [:registration/form-errors])]
    (fn []
      (if-not (empty? @errors)
        [:div.alert.alert-danger
         [:p "Oops, something went wrong! Please check the errors below:"]
         [:ul
          (for [[field err-list] @errors]
            ^{:key field} [:li (first err-list)])]]))))

(defn add-user-form []
  (let []
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (dispatch [:ajax/create-user]))}
       [show-errors]
       [input-group-item "Name" name-input]
       [input-group-item "Username" username-input]
       [input-group-item "Password" password-input]
       [input-group-item "Confirm Password" password-conf-input]
       [:hr]
       [:button "Add User"]])))
