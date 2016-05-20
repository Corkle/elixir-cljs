(ns elixir-cljs.handlers
  (:require
    [ajax.core :refer [GET POST]]
    [cognitect.transit :as t]
    [re-frame.core :refer [register-handler dispatch]]
    [elixir-cljs.utility.localstorage :as ls]))

(def new-db {:ws nil
             :nav :root
             :form-data {}
             :config {}})

(register-handler
  :init-db
  (fn [db _]
    (if-let [jwt (ls/get-item "phoenixAuthToken")]
      (assoc-in new-db [:authentication :jwt] jwt)
      new-db)))

;; Navigation
;; ===========================================================

(register-handler
  :nav/goto
  (fn [db [_ page]]
    (assoc-in db [:nav] page)))


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
  (fn [db [_ {:keys [jwt user] :as res}]]
    (js/console.log res)
    (ls/set-item! "phoenixAuthToken" jwt)
    (assoc-in db [:authentication] {:jwt jwt :current-user user})))

(defn- registration-response-handler
  [res]
  (dispatch [:ajax/registration-response-handler res]))

(register-handler
  :ajax/registration-response-error-handler
  (fn [db [_ {:keys [response]}]]
    (js/console.log response)
    (-> db
        (assoc-in [:form-data :registration :errors] (:errors response))
        (dissoc :authentication))))

(defn- registration-response-error-handler
  [res]
  (dispatch [:ajax/registration-response-error-handler res]))

(register-handler
  :registration/set-name-input
  (fn [db [_ name]]
    (assoc-in db [:form-data :registration :name] name)))

(register-handler
  :registration/set-username-input
  (fn [db [_ username]]
    (assoc-in db [:form-data :registration :username] username)))

(register-handler
  :registration/set-password-input
  (fn [db [_ password]]
    (assoc-in db [:form-data :registration :password] password)))

(register-handler
  :registration/set-password-conf-input
  (fn [db [_ password-conf]]
    (assoc-in db [:form-data :registration :password-conf] password-conf)))

(register-handler
  :ajax/create-account
  (fn [db _]
    (let [user-form (get-in db [:form-data :registration])
          user {:username (:username user-form)
                :name (:name user-form)
                :password (:password user-form)
                :password_confirmation (:password-conf user-form)}]
      (POST "/api/v1/registrations"
            {:params {:user user}
             :handler registration-response-handler
             :error-handler registration-response-error-handler
             :format :json
             :response-format :json
             :keywords? true})
      (-> db
          (update-in [:form-data] dissoc :registration)
          (assoc-in [:authentication :registering?] true)))))

(register-handler
  :add-test-user
  (fn [db _]
    (let [test-user {:username "User_Name"
                     :name "My Real Name"
                     :password "#12345"
                     :password_confirmation "#12345"}]
      (POST "/api/v1/registrations"
            {:params {:user test-user}
             :handler registration-response-handler
             :error-handler registration-response-error-handler
             :format :json
             :response-format :json
             :keywords? true})
      (update-in db [:form-data] dissoc :registration))))


;; Session
;; ===========================================================

(register-handler
  :session/set-username-input
  (fn [db [_ username]]
    (assoc-in db [:form-data :session :username] username)))

(register-handler
  :session/set-password-input
  (fn [db [_ password]]
    (assoc-in db [:form-data :session :password] password)))

(register-handler
  :ajax/session-response-handler
  (fn [db [_ {:keys [jwt user] :as res}]]
    (js/console.log res)
    (ls/set-item! "phoenixAuthToken" jwt)
    (assoc-in db [:authentication] {:jwt jwt :current-user user})))

(defn- session-response-handler
  [res]
  (dispatch [:ajax/session-response-handler res]))

(register-handler
  :ajax/session-response-error-handler
  (fn [db [_ {:keys [response]}]]
    (js/console.log response)
    (-> db
        (assoc-in [:form-data :session :errors] {:authentication [(:error response)]})
        (dissoc :authentication))))

(defn- session-response-error-handler
  [res]
  (dispatch [:ajax/session-response-error-handler res]))

(register-handler
  :ajax/create-session
  (fn [db _]
    (let [session-form (get-in db [:form-data :session])
          session {:username (:username session-form)
                   :password (:password session-form)}]
      (POST "/api/v1/sessions"
            {:params {:session session}
             :handler session-response-handler
             :error-handler session-response-error-handler
             :format :json
             :response-format :json
             :keywords? true})
      (-> db
          (update-in [:form-data] dissoc :session)
          (assoc-in [:authentication :authenticating?] true)))))

(register-handler
  :session/logoff
  (fn [db _]
    (dissoc db :authentication)))

(register-handler
  :session/get-user-from-token
  (fn [db _]
    (let [jwt (get-in db [:authentication :jwt])]
      (assoc-in db [:authentication :current-user] {:username "token_user" :name "User"})
      )))
