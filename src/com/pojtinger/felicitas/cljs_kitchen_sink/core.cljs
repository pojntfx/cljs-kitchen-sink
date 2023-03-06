(ns com.pojtinger.felicitas.cljs-kitchen-sink.core
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.components :as components]
            [reagent.dom.client :as client]))

(defn ^:export ^:dev/after-load main []
  (client/render (client/create-root (js/document.getElementById "root")) [components/home]))