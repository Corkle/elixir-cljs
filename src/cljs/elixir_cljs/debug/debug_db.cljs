(ns elixir-cljs.debug.debug-db
  (:require [cljs.pprint :refer [pprint]]
            [re-frame.core :refer [dispatch subscribe register-sub]]
            [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

(declare debug-app-state)

(defn- mount-debug []
  (r/render #'debug-app-state (.getElementById js/document "debug")))

(defn- mount-app-state [get-in-vec]
  (r/render-component [:pre (with-out-str (pprint (get-in @re-frame.db/app-db get-in-vec)))] (.getElementById js/document "app-state")))

(defn- debug-button
  [get-in-vec text]
  [:button {:type "button"
            :on-click #(mount-app-state get-in-vec)}
   text])

(defn- close-debug []
  (r/render-component [:button {:title "Debug app-state"
                                :type "button"
                                :on-click #(mount-debug)
                                :style {:position "fixed"
                                        :bottom 0
                                        :right 0
                                        :margin "5px"}}
                       "+"]
                      (.getElementById js/document "debug")))

(defn debug-app-state []
  [:div {:style {:background-color "#ffcccc"
                 :color "#333333"
                 :z-index 9999}}
   [:div [:button {:title "Hide app-state"
                   :type "button"
                   :on-click #(close-debug) :style {:position "fixed"
                                                    :bottom 0
                                                    :right 0
                                                    :margin "5px"}}
          "X"]]
   [:div#app-state-buttons "deref app state: "
    [debug-button [] "App-State"]
    [debug-button [:authentication] "Auth"]
    [debug-button [:form-data] "Forms"]]
   [:div#app-state]])

(close-debug)
