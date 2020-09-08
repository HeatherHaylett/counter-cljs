(ns heather-counter.subs
    (:require [heather-counter.db :as db]
              [re-frame.core :refer [reg-sub]]))

    (reg-sub
    :get-number
    (fn [db _]
        (:click-counter db)))