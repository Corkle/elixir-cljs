(ns elixir-cljs.subscriptions
  (:require [re-frame.core :refer [register-sub]])
  (:require-macros [reagent.ratom :refer [reaction]]))

;; Navigation
;; ===========================================================

(register-sub
  :nav/get-nav
  (fn [db _]
    (reaction (:nav @db))))

;; Registration Form
;; ===========================================================

(register-sub
  :registration/name-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :name]))))

(register-sub
  :registration/username-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :username]))))

(register-sub
  :registration/password-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :password]))))

(register-sub
  :registration/password-conf-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :password-conf]))))

(register-sub
  :registration/form-errors
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :errors]))))

;; Session Authentication
;; ===========================================================

(register-sub
  :session/authentication
  (fn [db _]
    (reaction (get-in @db [:authentication]))))

(register-sub
  :session/current-user
  (fn [db _]
    (reaction (get-in @db [:authentication :current-user]))))

(register-sub
  :session/username-input
  (fn [db _]
    (reaction (get-in @db [:form-data :session :username]))))

(register-sub
  :session/password-input
  (fn [db _]
    (reaction (get-in @db [:form-data :session :password]))))

(register-sub
  :session/form-errors
  (fn [db _]
    (reaction (get-in @db [:form-data :session :errors]))))
