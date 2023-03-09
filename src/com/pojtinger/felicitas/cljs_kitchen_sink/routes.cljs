(ns com.pojtinger.felicitas.cljs-kitchen-sink.routes
  (:require [cljs.repl :refer [source]]
            [com.pojtinger.felicitas.cljs-kitchen-sink.pages :as pages]))

(def routes [["/" {:title "Home"
                   :name :home
                   :view pages/home
                   :source (with-out-str (source pages/home))}]
             ["/variables" {:title "Variables"
                            :name :variables
                            :view pages/variables
                            :source (with-out-str (source pages/variables))}]
             ["/decisions" {:title "Decisions"
                            :name :decisions
                            :view pages/decisions
                            :source (with-out-str (source pages/decisions))}]
             ["/collections" {:title "Collections"
                              :name :collections
                              :view pages/collections
                              :source (with-out-str (source pages/collections))}]])