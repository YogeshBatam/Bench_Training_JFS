package com.corejava.oops;
    abstract class Employee{
        abstract public void getSalary();
    }
    class Manager extends Employee{
        int sal,incentive;
        public Manager(int sal,int incentive){
            this.sal=sal;
            this.incentive=incentive;
        }
        public void getSalary(){
            System.out.println("Manager Salary:"+(sal+incentive));
        }
        public int get(){
            return sal+incentive;
        }

    }
    class Labour extends Employee{
        int overtime;
        int labour_salary;

        public Labour(int labour_salary,int overtime){
            this.labour_salary=labour_salary;
            this.overtime=overtime;
        }
        public void getSalary(){
            System.out.println("Labour Salary:"+(labour_salary+overtime));
        }
        public int get(){
            return labour_salary+overtime;
        }
    }
    public class Assignment2Q2 {
        public static void main(String[] args) {
            Manager akash=new Manager(500,100);
            Labour raj=new Labour(150,40);
            akash.getSalary();
            raj.getSalary();
            int totalSalary=akash.get()+raj.get();
            System.out.println("Total Salary of all employees: "+totalSalary);
        }
    }


