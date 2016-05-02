(ns elixir-cljs.handlers
  (:require
    [ajax.core :refer [GET POST]]
    [cognitect.transit :as t]
    [re-frame.core :refer [register-handler dispatch]]))

(def test-user {:username "test_user8"
                :name "Tammy Janes"})

(register-handler
  :init-db
  (fn [db _]
    {:ws nil
     :form-data {}
     :username-value ""
     :config {}}))

;; Registration Form
;; ===========================================================

(register-handler
  :init-registration-form
  (fn [db _]
    (assoc-in db [:form-data :registration] {:username ""
                                             :name ""
                                             :password ""
                                             :password-conf ""})))

(register-handler
  :ajax/registration-response-handler
  (fn [db [_ res]]
    (println res)
    (println (t/read (t/reader :json) res))
    (assoc-in db [:authentication] :nil)))

(defn- registration-response-handler
  [res]
  (dispatch [:ajax/registration-response-handler res]))

(register-handler
  :ajax/registration-response-error-handler
  (fn [db [_ {:keys [status status-text]}]]
    (js/console.log (str "error: " status " " status-text))
    db))

(defn- registration-response-error-handler
  [res]
  (dispatch [:ajax/registration-response-error-handler res]))

(register-handler
  :set-name-input
  (fn [db [_ name]]
    (assoc-in db [:form-data :registration :name] name)))

(register-handler
  :set-username-input
  (fn [db [_ username]]
    (assoc-in db [:form-data :registration :username] username)))

(register-handler
  :set-password-input
  (fn [db [_ password]]
    (assoc-in db [:form-data :registration :password] password)))

(register-handler
  :set-password-conf-input
  (fn [db [_ password-conf]]
    (assoc-in db [:form-data :registration :password-conf] password-conf)))

(register-handler
  :ajax/create-account
  (fn [db _]
    (let [user-form (get-in db [:form-data :registration])
          user {:username (:username user-form)
                :name (:name user-form)
                :password (:password user-form)
                :password-conf (:password-conf user-form)}]
      (POST "/api/v1/registrations"
            {:params {:user user}
             :handler registration-response-handler
             :error-handler registration-response-error-handler
             :format :json
             :response-format :json})
      (update-in db [:form-data] dissoc :registration))))

