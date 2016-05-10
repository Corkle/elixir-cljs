(ns elixir-cljs.ui.views.index
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [elixir-cljs.ui.views.registration.index :refer [registration-view]]
    [elixir-cljs.ui.views.admin.index :refer [admin-view]]))

(defn root-view []
  [:div "You are at ROOT"
   [:hr]
   [:button {:on-click #(dispatch [:nav/goto :login])} "Login"]
   [:button {:on-click #(dispatch [:nav/goto :registration])} "Register"]
   [:button {:on-click #(dispatch [:nav/goto :admin])} "Admin"]]
  )

(defn index-view []
  (fn []
    (let [nav (subscribe [:nav/get-nav])]
      [:div
       [:h4 (str "NAV: " (keyword @nav))]
       (if-not (= @nav :root)
         [:button {:on-click #(dispatch [:nav/goto :root])} "Home"])
       (case @nav
         :root [root-view]
         :admin [admin-view]
         :registration [registration-view]
         (dispatch [:nav/goto :root]))])))
