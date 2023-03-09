(ns com.pojtinger.felicitas.cljs-kitchen-sink.routes
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.pages :as pages]))

(def routes [["/" {:name :home :view pages/home}]
             ["/variables" {:name :variables :view pages/variables}]
             ["/decisions" {:name :decisions :view pages/decisions}]])