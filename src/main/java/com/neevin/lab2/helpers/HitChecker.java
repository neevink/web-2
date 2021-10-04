package com.neevin.lab2.helpers;

public class HitChecker {
    public static boolean checkHit(float x, float y, float r){
        if(x >= 0 && y >= 0){ // 1 четверть
            return x <= r && y <= r;
        }
        else if(x < 0 && y >= 0){ // 2 четверть
            return false;
        }
        else if(x < 0 && y < 0){ // 3 четверть
            return (-x) + (-y) <= r/2;
        }
        else{ // 4 четверть
            return x*x + y*y <= r*r/4;
        }
    }
}
