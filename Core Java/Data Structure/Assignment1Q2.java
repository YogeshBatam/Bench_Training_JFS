package com.capg.datastructure;

public class Assignment1Q2 {
    public static void main(String[] args) {
        checkArmstrongNumbersInRange();
    }

    public static void checkArmstrongNumbersInRange(){
        for(int i=100;i<1000;i++){
            if(checkArmStrongNumber(i)){
                System.out.println(i);
            }


        }
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
