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
  :session-auth
  (fn [db _]
    (reaction (get-in @db [:authentication]))))
