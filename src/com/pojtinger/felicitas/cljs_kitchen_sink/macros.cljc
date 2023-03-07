(ns com.pojtinger.felicitas.cljs-kitchen-sink.macros)

(defmacro text-input-output-component [title value id]
  `[:<> [:label {:for ~id} (str ~title " value input: ")]
    [:input {:id ~id
             :placeholder "Enter value"
             :value @~value
             :on-change #(reset! ~value (-> % .-target .-value))}]
    [:div (str ~title " value output: " @~value)]])