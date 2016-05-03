(ns elixir-cljs.subscriptions
  (:require [re-frame.core :refer [register-sub]])
  (:require-macros [reagent.ratom :refer [reaction]]))

;; Registration Form
;; ===========================================================

(register-sub
  :name-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :name]))))

(register-sub
  :username-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :username]))))

(register-sub
  :password-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :password]))))

(register-sub
  :password-conf-input
  (fn [db _]
    (reaction (get-in @db [:form-data :registration :password-conf]))))

;; Session Authentication
;; ===========================================================

(register-sub
  :session-auth
  (fn [db _]
    (reaction (get-in @db [:authentication]))))