(ns com.pojtinger.felicitas.cljs-kitchen-sink.routes
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.pages :as pages])
  (:require-macros [com.pojtinger.felicitas.cljs-kitchen-sink.macros :refer [capture-source]]))

(def routes [["/" {:name :home
                   :view pages/home
                   :source (capture-source pages/home)}]
             ["/variables" {:name :variables
                            :view pages/variables
                            :source (capture-source pages/variables)}]
             ["/decisions" {:name :decisions
                            :view pages/decisions
                            :source (capture-source pages/decisions)}]])