package com.corejava.exceptionhandling;

import java.util.Scanner;

public class Assingment2 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        try{
            System.out.printf("Enter the numerator and denominator: ");
            int numerator=s.nextInt();
            int denominator=s.nextInt();
            double quotient=divideOperation(numerator,denominator);
            System.out.println("The quotient is "+quotient);

        }
        catch (UnsupportedOperationException e){
            System.out.printf("Cannot divide by zero");
        }
    }
    public static int divideOperation(int num,int den) throws UnsupportedOperationException{
        if(den==0){
            throw new UnsupportedOperationException("Cannot divide by 0");
        }
        return num/den;
    }
}
class UnsupportedOperationException extends Exception{
    UnsupportedOperationException(String message){
        super(message);
    }
}
