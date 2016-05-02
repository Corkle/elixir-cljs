(ns elixir-cljs.core
  (:require
    [ajax.core :refer [GET POST]]
    [reagent.core :as r]
    [re-frame.core :refer [register-handler register-sub dispatch dispatch-sync subscribe]]
    ; [elixir-cljs.ws :refer [start-router!]]
    [elixir-cljs.handlers]
    [elixir-cljs.subscriptions]
    [elixir-cljs.ui.views.register :refer [registration-view]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(defn- app-main []
  [:div#app
    [registration-view]])

(defn init []
  (dispatch-sync [:init-db])
  (r/render app-main (.getElementById js/document "app"))
  ; (start-router!)
  )

(init)
