package com.corejava.exceptionhandling;

import java.util.Scanner;

public class Assignment1 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        try{
            System.out.printf("Enter the numerator and denominator: ");
            int numerator=s.nextInt();
            int denominator=s.nextInt();
            double quotient=numerator/denominator;
            System.out.println("The quotient is "+quotient);

        }
        catch (ArithmeticException e){
            System.out.printf("Cannot divide by zero");
        }
    }
}
