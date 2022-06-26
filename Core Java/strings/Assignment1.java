package com.corejava.strings;

public class Assignment1 {
    public static void main(String[] args) {
        //Q1.
        String str="Hello World";
        System.out.println(str.length());
        System.out.println();

        //Q2.
        String a="Hello,";
        String b="How are you?";
        String x=a.concat(b);
        System.out.println(x);
        System.out.println();

        //Q3.
        String string="Java String pool refers to collection of Strings which are stored in heap memory";

        System.out.println("To lower case");
        System.out.println(string.toLowerCase()+"\n");

        System.out.println("To upper case");
        System.out.println(string.toUpperCase()+"\n");

        System.out.println("Replace 'a' with '$'");
        System.out.println(string.replace('a','$')+"\n");

        System.out.println("String contains collection");
        System.out.println(string.contains("collection")+"\n");

        String two="java string pool refers to collection of strings which are stored in heap memory";
        System.out.println(string.compareTo(two));
        System.out.println(string.equals(two));

        //Assignment on string buffer
        String l="StringBuffer";
        String m="is a peer class of String";
        String n="that provides much of";
        String o="the functionality of strings";
        StringBuffer p=new StringBuffer();
        p.append(l);
        p.append(" "+m);
        p.append(" "+n);
        p.append(" "+o);
        System.out.println(p);
        System.out.println();

        //part-2
        StringBuffer in=new StringBuffer("It is used to at the specified index");
        in.insert(14,"insert text ");
        System.out.println(in);
        System.out.println();

        //part-3
        StringBuffer rev=new StringBuffer("This method returns the reversed object on which it was called");
        System.out.println(rev.reverse());


        //Assignment on StringBuilder
        StringBuilder q=new StringBuilder();
        q.append(l);
        q.append(" "+m);
        q.append(" "+n);
        q.append(" "+o);
        System.out.println(q);
        //part-2
        StringBuilder s1=new StringBuilder("It is used to at the specified index");
        s1.insert(14,"insert text ");
        System.out.println(s1);
        //part-3
        StringBuilder s2=new StringBuilder("This method returns the reversed object on which it was called");
        System.out.println(s2.reverse());
    }
}
