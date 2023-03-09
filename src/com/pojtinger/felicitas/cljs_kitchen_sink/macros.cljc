(ns com.pojtinger.felicitas.cljs-kitchen-sink.macros)

(defmacro text-input-output-component [title value id]
  `[:<> [:label {:for ~id} (str ~title " value input: ")]
    [:input {:id ~id
             :placeholder "Enter value"
             :value @~value
             :on-change #(reset! ~value (-> % .-target .-value))}]
    [:div (str ~title " value output: " @~value)]])

;; Left for future reference (hack to capture `stdout`/`window.console` logs)
;; (defmacro capture-source [obj]
;;   `(let [output# (atom "")]
;;      (let [old-console# js/console]
;;        (set! js/console
;;              (cljs.core/clj->js
;;               {:log (fn [& args#]
;;                       (swap! output# str (apply str args#) "\n"))}))
;;        (source ~obj)
;;        (set! js/console old-console#))
;;      (deref output#)))