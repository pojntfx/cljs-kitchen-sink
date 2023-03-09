(ns com.pojtinger.felicitas.cljs-kitchen-sink.core
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.components :refer [wrapper]]
            [com.pojtinger.felicitas.cljs-kitchen-sink.pages :as pages]
            [com.pojtinger.felicitas.cljs-kitchen-sink.routes :refer [routes]]
            [reagent.core :as r]
            [reagent.dom.client :as client]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]))

(defonce root (client/create-root (js/document.getElementById "root")))

(defn ^:export ^:dev/after-load main []
  (let [match (r/atom nil)]
    (rfe/start!
     (rf/router routes {:data {:coercion rss/coercion}})
     #(reset! match %)
     {:use-fragment true})
    (client/render root [(fn [] [wrapper (get-in @match [:data :name]) #(rfe/push-state %)
                                 (if @match [(get-in @match [:data :view])] [pages/not-found])
                                 (if @match (get-in @match [:data :source]) "")])])))