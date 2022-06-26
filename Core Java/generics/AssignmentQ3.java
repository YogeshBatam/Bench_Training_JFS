package com.corejava.generics;

public class AssignmentQ3 {

    public static void main(String[] args) {
        int[] arr = {12, 6, 8, 3, 5, 9, 45};
        int a = 0;
        int b = 6;
        Swap obj = new Swap();
        obj.swapElements(arr, a, b);
        obj.print(arr);

    }
}

class Swap {
    public <E> void swapElements(int arr[], int i, int j) {
        int temp = 0;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public void print(int aar[]) {
        for (int i = 0; i < aar.length; i++) {
            System.out.println(aar[i]);
        }
    }
}
