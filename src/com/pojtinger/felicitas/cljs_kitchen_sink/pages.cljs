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
        vector-value (r/atom ["Existing"])
        map-value (r/atom {})
        new-set-value (r/atom "")
        set-value (r/atom #{})]
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
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write (if (> (count @vector-value) 3) (nth @vector-value 3) nil)))]]]
       [:section#lists
        [:h2 "Maps"]
        [:button
         {:on-click #(swap! map-value (fn [prev]
                                        (assoc prev :a 1)))}
         "Assoc :a"]
        [:button
         {:on-click #(swap! map-value (fn [prev]
                                        (dissoc prev :a)))}
         "Dissoc :a"]
        [:button
         {:on-click #(swap! map-value (fn [prev]
                                        (assoc prev :b 1)))}
         "Assoc :b"]
        [:button
         {:on-click #(swap! map-value (fn [prev]
                                        (dissoc prev :b)))}
         "Dissoc :b"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write @map-value))]]]
       [:section#sets
        [:h2 "Sets"]
        [:label {:for "new-set-value"} "Value to add to set: "]
        [:input {:id "new-set-value"
                 :placeholder "New value"
                 :type "text"
                 :required true
                 :value @new-set-value
                 :on-change #(reset! new-set-value (-> % .-target .-value))
                 :on-key-down #(swap! set-value (fn [prev]
                                                  (let [new-value (conj prev @new-set-value)]
                                                    (if (= (-> % .-key) "Enter") (do
                                                                                   (reset! new-set-value "")
                                                                                   new-value) prev))))}]
        [:br]
        [:button
         {:on-click #(reset! set-value #{})}
         "Clear set"]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write @set-value))]]]])))

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

(defn maybe [value]
  (if (nil? value) nil {:value value}))

(defn maybe-divide [a b]
  (println a b)
  (if (zero? b) nil (maybe (/ (:value a) b))))

(defn monads []
  (let [start (r/atom 100)
        divisor (r/atom 2)]
    (fn []
      [:<>
       [:section#division
        [:h2 "Division"]
        [:label {:for "start-value"} "Value to start with: "]
        [:input {:id "start-value"
                 :placeholder "100"
                 :type "number"
                 :required true
                 :value @start
                 :on-change #(reset! start (js/parseInt (-> % .-target .-value)))}]
        [:br]
        [:label {:for "divisor-value"} "Divisor: "]
        [:input {:id "divisor-value"
                 :placeholder "5"
                 :type "number"
                 :required true
                 :value @divisor
                 :on-change #(reset! divisor (js/parseInt (-> % .-target .-value)))}]
        [:pre {:style {:margin-top "1rem"}} [:code (with-out-str (pprint/write (-> (maybe @start)
                                                                                   (maybe-divide 2)
                                                                                   (maybe-divide @divisor))))]]]])))
