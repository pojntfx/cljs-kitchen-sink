(ns com.pojtinger.felicitas.cljs-kitchen-sink.components)

(defn navigation [path set-path]
  [:select {:value path
            :on-change #(set-path (keyword (-> % .-target .-value)))}
   [:option {:value :home} "Home"]
   [:option {:value :variables} "Variables"]
   [:option {:value :decisions} "Decisions"]])

(defn wrapper [path set-path child]
  [:<>
   [:h1 "ClojureScript Kitchen Sink"]
   [:nav
    [:span "Select demo: "]
    [navigation path set-path]]
   [:main child]])