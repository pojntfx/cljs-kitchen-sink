(ns com.pojtinger.felicitas.cljs-kitchen-sink.components)

(defn navigation [path set-path]
  [:select {:value path
            :on-change #(set-path (keyword (-> % .-target .-value)))}
   [:option {:value :home} "Home"]
   [:option {:value :variables} "Variables"]
   [:option {:value :decisions} "Decisions"]])

(defn wrapper [path set-path child source]
  [:<>
   [:header
    [:nav
     [:h1 "ClojureScript Kitchen Sink"]
     [:div
      [:span "Select demo: "]
      [navigation path set-path]]]]
   [:main child]
   [:footer
    [:details
     [:summary "Source code"]
     [:pre [:code source]]]]])
