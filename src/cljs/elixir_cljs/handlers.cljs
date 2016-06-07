(ns elixir-cljs.handlers
  (:require
    [ajax.core :refer [GET POST DELETE]]
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
    (ls/set-item! "phoenixAuthToken" jwt)
    (dispatch [:ws/join])
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

(defn- logoff-response-handler
  [res]
  (dispatch [:ajax/logoff-response-handler res]))

(register-handler
  :ajax/logoff-response-handler
  (fn [db [_ res]]
    (ls/remove-item! "phoenixAuthToken")
    (dissoc db :authentication)))

(defn- logoff-error-response-handler
  [res]
  (dispatch [:ajax/logoff-error-response-handler res]))

(register-handler
  :ajax/logoff-error-response-handler
  (fn [db [_ {:keys [response]}]]
    (js/console.log response)
    db))

(register-handler
  :session/logoff
  (fn [db _]
    (let [jwt (get-in db [:authentication :jwt])]
      (DELETE "/api/v1/sessions"
              {:headers {"Content-Type" "applicaton/json"
                         "Accept" "application/json"
                         "Authorization" jwt}
               :handler logoff-response-handler
               :error-handler logoff-error-response-handler
               :response-format :json
               :keywords? true})
      db)))

(register-handler
  :ajax/current-user-response-handler
  (fn [db [_ res]]
    (let [user (:username res)
          name (:name res)]
      (assoc-in db [:authentication :current-user] {:username user :name name}))))

(defn- current-user-response-handler
  [res]
  (dispatch [:ajax/current-user-response-handler res]))

(register-handler
  :ajax/current-user-error-response-handler
  (fn [db [_ {:keys [response]}]]
    (js/console.log response)
    db))

(defn- current-user-error-response-handler
  [err-res]
  (dispatch [:ajax/current-user-error-response-handler err-res]))

(register-handler
  :session/get-user-from-token
  (fn [db _]
    (let [jwt (get-in db [:authentication :jwt])]
      (GET "/api/v1/current_user"
           {
            :headers {"Content-Type" "applicaton/json"
                      "Accept" "application/json"
                      "Authorization" jwt}
            :handler current-user-response-handler
            :error-handler current-user-error-response-handler
            :format :json
            :response-format :json
            :keywords? true})
      db)))
