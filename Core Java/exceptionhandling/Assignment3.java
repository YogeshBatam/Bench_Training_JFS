package com.corejava.exceptionhandling;

public class Assignment3 {
    public static void main(String[] args) {
        SavingAccount cust1=new SavingAccount(101,20000);
        System.out.println("Your account created successfully with your ID "+cust1.getID()+" and your current balance is "+cust1.getBalance());
        cust1.deposite(5000);
        System.out.println(cust1.getBalance());
        try {
           // cust1.withdraw(400000);
            cust1.withdraw(-50);
        }
        catch (InsufficientBalanceException e){
            System.out.println("Insufficient Funds: Unfortunately, You Don't have Sufficient Balance in your account");
        }
        catch (IlleagalBankTransactionException f){
            System.out.println(" Illegal Entry: This is technically an illegal amount, You cannot withdraw in negative numbers");
        }
    }
}

class SavingAccount{
    long id;
    double balance;

    public SavingAccount(long id,double balance){
        this.id=id;
        this.balance=balance;
    }

    public void deposite(double deposite) {
        balance=balance+deposite;
    }
    public long getID(){
        return id;
    }

    public double getBalance(){
        return balance;
    }
    public void withdraw(int withdrawl_amount) throws InsufficientBalanceException, IlleagalBankTransactionException{
        if(withdrawl_amount>balance || balance==0){
            throw new InsufficientBalanceException("Exception");
        }
        else if(withdrawl_amount<0){
            throw new IlleagalBankTransactionException("Exception");
        }
        balance=balance-withdrawl_amount;
        System.out.println("You've received "+ (int)(withdrawl_amount)+" in cash:" );
    }

}
class InsufficientBalanceException extends Exception{
    InsufficientBalanceException(String exception){
        super(exception);
    }
}
class IlleagalBankTransactionException extends Exception{
    IlleagalBankTransactionException(String exception2){
        super(exception2);
    }
}

