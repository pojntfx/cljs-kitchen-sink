(ns com.pojtinger.felicitas.cljs-kitchen-sink.components)

(defn navigation [path set-path]
  [:select {:value path
            :on-change #(set-path (keyword (-> % .-target .-value)))}
   [:option {:value :home} "Home"]
   [:option {:value :variables} "Variables"]
   [:option {:value :decisions} "Decisions"]])

(defn wrapper [path set-path child source]
  [:<>
   [:h1 "ClojureScript Kitchen Sink"]
   [:nav
    [:span "Select demo: "]
    [navigation path set-path]]
   [:main child]
   [:footer {:style {:margin-top "1rem"}}
    [:details
     [:summary "Source code"]
     [:code [:pre {:style {:overflow-x "auto"}} source]]]]])
