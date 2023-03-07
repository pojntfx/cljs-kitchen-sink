(ns com.pojtinger.felicitas.cljs-kitchen-sink.pages
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.const :as const]))

(defn home []
  [:<>
   [:p [:strong "Welcome to the ClojureScript Kitchen Sink!"]]
   [:p "Check out the source code (© 2023 AGPL-3.0 Felicitas Pojtinger): " [:a {:href const/source-code :target "_blank"} "GitHub"]]])

(defn variables []
  [:p "Variables"])