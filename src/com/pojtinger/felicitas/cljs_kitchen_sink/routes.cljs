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
                              :source (with-out-str (source pages/collections))}]
             ["exceptions" {:title "Exceptions"
                            :name :exceptions
                            :view pages/exceptions
                            :source (with-out-str (source pages/exceptions))}]
             ["monads" {:title "Monads"
                        :name :monads
                        :view pages/monads
                        :source (with-out-str [(source pages/maybe) (source pages/maybe-divide) (source pages/monads)])}]])