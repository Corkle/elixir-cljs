(ns elixir-cljs.handlers
  (:require
    [ajax.core :refer [GET POST]]
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
  :ajax-res/response-handler
  (fn [db [_ res]]
    (js/console.log (str res))
    db))

(register-handler
  :ajax-res/response-error-handler
  (fn [db [_ {:keys [status status-text]}]]
    (js/console.log (str "error: " status " " status-text))
    db))

(defn- res-handler
  [res]
  (dispatch [:ajax-res/response-handler res]))

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

(defn- res-error-handler
  [res]
  (dispatch [:ajax-res/response-error-handler res]))

(register-handler
  :ajax/create-account
  (fn [db _]
    (let [user-form (get-in db [:form-data :registration])
          user {:username (:username user-form)
                :name (:name user-form)
                :password (:password user-form)}]
      (POST "/api/v1/registrations"
            {:params {:user user}
             :handler res-handler
             :error-handler res-error-handler
             :format :json
             :response-format :json})
      db)))

