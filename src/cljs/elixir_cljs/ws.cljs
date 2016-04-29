(ns elixir-cljs.ws
  (:require [taoensso.sente :as sente]))
     
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk"
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )
  
;; Sente event handlers
(defmulti event-msg-handler :id)

(defn event-msg-handler*
  "Wraps 'event-msg-handler' with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event]}]
  (js/console.log (str "Unandled event: " event)))

;; Sente event router ('event-msg-handler' loop)
(defonce router_ (atom nil))
(defn stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
          (sente/start-client-chsk-router!
            ch-chsk event-msg-handler*)))
