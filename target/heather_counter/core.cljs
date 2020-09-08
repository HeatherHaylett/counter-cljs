(ns heather-counter.core
    (:require 
              [heather-counter.events]
              [heather-counter.subs]
              [reagent.core :as r]
              [reagent.react-native :as rn]
              [re-frame.core :refer [dispatch dispatch-sync subscribe]]))

  (defn change-number []
    (subscribe [:get-number]))


  (defn hello []
    (let [number (change-number)] 
    (js/console.log ">>>>" number)
      [rn/view {:style {:flex 1 :align-items "center" :marginTop 250}}
       [rn/text {:style {:font-size 30}} "counter"]
       [rn/text {:style {:font-size 20 :margin 25 :color "purple"}} (deref number)]
       [rn/button {:title "ADD 1"}]]))


  (defn ^:export -main [& args]
    (dispatch-sync [:init-db])
    (r/as-element [hello]))