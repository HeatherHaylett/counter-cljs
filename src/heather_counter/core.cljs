(ns heather-counter.core
  (:require
   [heather-counter.util :refer [color-picker]]
   [heather-counter.events]
   [heather-counter.subs]
   [reagent.core :as r]
   [reagent.react-native :as rn]
   [re-frame.core :refer [dispatch dispatch-sync subscribe]]))

(defn change-number []
  (subscribe [:get-number]))

(defn change-color []
  (subscribe [:get-color]))

(defn hello []
  (let [number (change-number) color (change-color)]
    [rn/view {:style {:flex 1 :align-items "center" :marginTop 250}}
     [rn/text {:style {:font-size 30}} "counter"]
     [rn/text {:style {:font-size 40 :margin 25 :color (color-picker (deref color))}} (deref number)]
     [rn/button {:title "ADD 1"
                 :on-press #(dispatch [:set-number  (inc @number)])}]
     [rn/button {:title "SUBTRACT 1"
                 :on-press #(dispatch [:set-number (dec @number)])}]
     [rn/button {:title "CHANGE COLOR"
                 :on-press #(dispatch [:set-color  (inc @color)])}]]))


(defn ^:export -main [& args]
  (dispatch-sync [:init-db])
  (r/as-element [hello]))