(ns com.pojtinger.felicitas.cljs-kitchen-sink.core
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.components :refer [index]]
            [reagent.dom.client :as client]))

(defonce root (client/create-root (js/document.getElementById "root")))

(defn ^:export ^:dev/after-load main []
  (client/render root [index]))