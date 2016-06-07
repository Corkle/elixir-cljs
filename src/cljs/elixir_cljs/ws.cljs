(ns elixir-cljs.ws
  (:require [re-frame.core :refer [register-handler dispatch]]
            [cljsjs.phoenix]))

(register-handler
  :ws/join
  (fn [db _]
    (js/console.log "Connecting WS...")
    (let [token (get-in db [:authentication :jwt])
          username (get-in db [:authentication :current-user :username])
          ws (js/Phoenix.Socket. "/socket" #js {:params #js {:token token}})
          ch (.channel ws (str "users:" username))
          ]
      (.connect ws)
      (aset ws "onmessage" #(console.log %))
      (aset ws "onopen" #(console.log %))
      (js/console.log ch)
      (-> (.join ch)
          (js/console.log))
      (assoc db :ws ws))))
