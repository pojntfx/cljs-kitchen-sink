(ns com.pojtinger.felicitas.cljs-kitchen-sink.pages
  (:require [com.pojtinger.felicitas.cljs-kitchen-sink.const :as const]
            [reagent.core :as r])
  (:require-macros [com.pojtinger.felicitas.cljs-kitchen-sink.macros :refer [text-input-output-component]]))

(defn home []
  [:section#intro
   [:p [:strong "Welcome to the ClojureScript Kitchen Sink!"]]
   [:p "Check out the source code (© 2023 AGPL-3.0 Felicitas Pojtinger): " [:a {:href const/source-code :target "_blank"} "GitHub"]]])

(defn not-found []
  [:h2 "404 not found"])

(def global-initial-value "Global initial value")

(defn variables []
  (let [global-value (r/atom global-initial-value)
        local-initial-value "Local initial value"
        local-value (r/atom local-initial-value)]
    (fn []
      [:<>
       [:section#globals
        [:h2 "Global variables"]
        (text-input-output-component "Global" global-value "global-value-input")]
       [:section#locals
        [:h2 "Local variables"]
        (text-input-output-component "Local" local-value "local-value-input")]])))

(defn decisions []
  (let [enabled (r/atom false)
        name (r/atom "Animal")]
    (fn []
      [:<>
       [:section#booleans
        [:h2 "Booleans"]
        [:button
         {:on-click #(swap! enabled not)}
         (if @enabled "Disable" "Enable")]]
       [:section#expressions
        [:h2 "Expressions"]
        [:button
         {:on-click #(swap! name (fn [prev] (if (= prev "Human") "Animal" "Human")))}
         (if (= @name "Human") "Disable" "Enable")]]])))