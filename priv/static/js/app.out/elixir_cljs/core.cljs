(ns elixir-cljs.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [register-handler register-sub dispatch dispatch-sync subscribe]]
            [cognitect.transit :as transit])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(defn deserialize
  [x]
  (transit/read (transit/reader :json) x))

(defn serialize
  [x]
  (transit/write (transit/writer :json) x))

(register-handler
  :init
  (fn [db _]
    {:ws nil
     :username-value ""
     :config {}}))

(register-handler
  :update-username
  (fn [db [_ user]]
    (assoc db :username-value user)))

(register-handler
  :add-user
  (fn [db [_ user]]
    (let [user (:username-value db)]
      (js/console.log (serialize {:user user}))
      db)))

(register-sub
  :username-value
  (fn [db _]
    (reaction (:username-value @db))))

(defn- add-user-form []
  (let [username (subscribe [:username-value])]
    (fn []
      [:form {:on-submit (fn [e]
                         (.preventDefault e)
                         (dispatch [:add-user]))}
        [:input {:type "text"
                 :value @username
                 :name "username"
                 :on-change #(dispatch [:update-username (-> % .-target .-value)])}]
        [:button "Add User"]])))

(defn- app-main []
  [:div
    [add-user-form]])

(defn init []
  (dispatch-sync [:init])
  (r/render app-main (.getElementById js/document "app")))

(init)