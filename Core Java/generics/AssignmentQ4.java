package com.corejava.generics;

import java.util.Date;

public class AssignmentQ4 {
    public static void main(String[] args) {
        /**
         * Scenario 1
         */
        Pair<String, String> pair=new Pair<String, String>("1","Hello");
        System.out.println("{"+pair.getKey()+"="+pair.getValue()+"}");

        /**
         * Scenario 2
         */
        Date objc = new Date();
        Pair<String, java.util.Date> object = new Pair<String, java.util.Date>("Today is ", objc);
        System.out.println("{" + object.getKey() + "" + object.getValue() + "}");
    }
}
class Pair<K,V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}
