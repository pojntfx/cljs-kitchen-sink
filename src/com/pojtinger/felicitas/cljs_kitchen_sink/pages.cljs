(ns com.pojtinger.felicitas.cljs-kitchen-sink.pages
  (:require [clojure.pprint :as pprint]
            [com.pojtinger.felicitas.cljs-kitchen-sink.const :as const]
            [reagent.core :as r])
  (:require-macros [com.pojtinger.felicitas.cljs-kitchen-sink.macros :refer [text-input-output-component]]))

(defn home []
  [:section#intro
   [:h2 "👋 Hey!"]
   [:p [:strong "Welcome to the ClojureScript Kitchen Sink."]]
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

(defn collections []
  (let [list-value (r/atom '("Existing"))
        vector-value (r/atom ["Existing"])]
    (fn []
      [:<>
       [:section#lists
        [:h2 "Lists"]
        [:button
         {:on-click #(swap! list-value (fn [prev]
                                         (conj prev "Prepended")))}
         "Prepend"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write @list-value))]]]
       [:section#vectors
        [:h2 "Vectors"]
        [:button
         {:on-click #(swap! vector-value (fn [prev]
                                           (conj prev "Appended")))}
         "Append"]
        [:button
         {:on-click #(if (> (count @vector-value) 0) (swap! vector-value pop) nil)}
         "Pop"]
        [:h3 "All"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write @vector-value))]]
        [:h3 "First"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write (first @vector-value)))]]
        [:h3 "3rd"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write (if (> (count @vector-value) 3) (nth @vector-value 3) nil)))]]]])))

(defn exceptions []
  (let [armed (r/atom false)]
    (fn []
      [:<>
       [:section#exceptions
        [:h2 "Try/Catch"]
        [:label {:for "armed-input"} "Armed: "]
        [:input
         {:id "armed-input"
          :type "checkbox"
          :on-click #(swap! armed not)}]
        [:br]
        (try () (if (true? @armed) (throw "Errored") [:span "No error"]) (catch :default e [:span {:style {:color "red"}} (str e)]))]])))