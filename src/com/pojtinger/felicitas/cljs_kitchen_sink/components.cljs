(ns com.pojtinger.felicitas.cljs-kitchen-sink.components
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.pages :as pages]
            [reagent.core :as r]))

(defn navigation [path set-path]
  [:select {:value path
            :on-change #(set-path (keyword (-> % .-target .-value)))}
   [:option {:value :home} "Home"]
   [:option {:value :variables} "Variables"]])

(defn index []
  (let [path (r/atom :home)]
    (fn [] [:<>
            [:h1 "ClojureScript Kitchen Sink"]
            [:nav
             [:span "Select demo: "]
             [navigation @path #(reset! path %)]]
            [:main
             (case @path
               :home [pages/home]
               :variables [pages/variables]
               [:h2 "404 Not Found"])]])))