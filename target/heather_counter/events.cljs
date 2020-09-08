(ns heather-counter.events
    (:require [heather-counter.db :refer [state]]
              [re-frame.core :refer [reg-event-db]]))
  
  (reg-event-db :init-db
    (fn [_ _] state))

  (reg-event-db :set-number
    (fn [db [_ new-number]]
        (assoc db :click-counter new-number)))

  (reg-event-db :set-color
    (fn [db [_ new-color]]
        (assoc db :counter-color new-color)))