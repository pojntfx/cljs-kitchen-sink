(ns com.pojtinger.felicitas.cljs-kitchen-sink.components
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.routes :as routes]))

(defn navigation [path set-path]
  [:select {:value path
            :on-change #(set-path (keyword (-> % .-target .-value)))}
   (map-indexed #(vector :option {:value (get (second %2) :name) :key %} (get (second %2) :title)) routes/routes)])

(defn wrapper [path set-path child source]
  [:<>
   [:header
    [:h1 "ClojureScript Kitchen Sink"]
    [:nav
     [:span "Select demo: "]
     [navigation path set-path]]]
   [:main child]
   [:footer
    [:details
     [:summary "Source code"]
     [:pre [:code source]]]]])
