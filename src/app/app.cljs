(ns app.app
  (:require
   [shadow.expo :as expo]
   [reagent.core :as r]
   [react-native :as rn]))

(defn root []
  [:> rn/SafeAreaView 
   [:> rn/Text "Hello World"]])

(defn start
  {:dev/after-load true}
  []
  (expo/render-root (r/as-element [root])))

(defn init []
  (start))
