package com.neevin.lab2.models;

import java.util.ArrayList;
import java.util.List;

public class ResultsModel {
    protected ArrayList<HitResultModel> results = new ArrayList<>();

    public ResultsModel(){
    }

    public void addHit(HitResultModel hit){
        results.add(hit);
    }

    public List<HitResultModel> getHits(){
        return this.results;
    }
}
