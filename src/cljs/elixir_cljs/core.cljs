(ns elixir-cljs.core
  (:require 
    [ajax.core :refer [GET POST]]
    [reagent.core :as r]
    [re-frame.core :refer [register-handler register-sub dispatch dispatch-sync subscribe]]
    ; [elixir-cljs.ws :refer [start-router!]]
            )
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(def test-user {:username "test_user"
                :name "Tim Jones"})

(defn error-handler [{:keys [status status-text]}]
  (js/console.log (str "error: " status " " status-text)))

(defn handler [res]
  (js/console.log (str res)))

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
      (POST "/api/v1/registrations"
        {:params {:user test-user}
         :handler handler
         :error-handler error-handler
         :format :json
         :response-format :json})
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
  (r/render app-main (.getElementById js/document "app"))
  ; (start-router!)
  )

(init)