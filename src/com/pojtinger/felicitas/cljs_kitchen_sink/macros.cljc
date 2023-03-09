(ns com.pojtinger.felicitas.cljs-kitchen-sink.macros
  (:require [cljs.repl :refer [source]]))

(defmacro text-input-output-component [title value id]
  `[:<> [:label {:for ~id} (str ~title " value input: ")]
    [:input {:id ~id
             :placeholder "Enter value"
             :value @~value
             :on-change #(reset! ~value (-> % .-target .-value))}]
    [:div (str ~title " value output: " @~value)]])

(defmacro capture-source [obj]
  `(let [output# (atom "")]
     (let [old-console# js/console]
       (set! js/console
             (cljs.core/clj->js
              {:log (fn [& args#]
                      (swap! output# str (apply str args#) "\n"))}))
       (source ~obj)
       (set! js/console old-console#))
     (deref output#)))