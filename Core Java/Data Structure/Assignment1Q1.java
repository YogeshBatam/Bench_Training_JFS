package com.capg.datastructure;

import java.util.Scanner;

public class Assignment1Q1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number to check whether it is ArmString Number or not");
        int number=sc.nextInt();
        String result=checkArmStrongNumber(number)?"Number is Armstrong number":"Not an ArmStrong number";
        System.out.println(number+" "+result);
    }

    public static boolean  checkArmStrongNumber(int number){
        int count=0,sum=0,temp=number,result=number;
        while(number>0){
            count++;
            number=number/10;
        }
        while(temp>0){
            int digit=temp%10;
            sum=sum+getPower(digit,count);
            temp=temp/10;
        }
        if(result==sum){
            return true;
        }
        else{
            return false;
        }
    }
    public static int getPower(int num,int power){
        int result=1;
        while(power>0){
            result=result*num;
            power--;
        }
        return result;
    }
}
