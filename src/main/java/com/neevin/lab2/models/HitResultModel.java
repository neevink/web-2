package com.neevin.lab2.models;

public class HitResultModel {
    final float x, y, r;
    final boolean hit;

    public HitResultModel(float x, float y, float r, boolean hit){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
    }

    public float getX(){
        return this.x;
    }

    public float getY(){
        return this.y;
    }

    public float getR() {
        return this.r;
    }

    public boolean getHit(){
        return this.hit;
    }
}
