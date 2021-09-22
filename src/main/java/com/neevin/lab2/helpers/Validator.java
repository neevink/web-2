package com.neevin.lab2.helpers;

public class Validator {
    final static float MIN_X = -3, MAX_X = 3;
    final static int MIN_Y = -5, MAX_Y = 3;
    final static float MIN_R = 1, MAX_R = 5;

    public static boolean validateX(float x){
        return MIN_X <= x && x <= MAX_X;
    }

    public static boolean validateY(int y){
        return MIN_Y <= y && y <= MAX_Y;
    }

    public static boolean validateR(int r){
        return MIN_R <= r && r <= MAX_R;
    }
}
