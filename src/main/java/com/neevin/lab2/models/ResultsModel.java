package com.neevin.lab2.models;

import java.util.ArrayList;
import java.util.List;

public class ResultsModel {
    protected ArrayList<HitResultModel> results = new ArrayList<>();

    public ResultsModel(){
        // results.add(new HitResultModel(1, 1, 1, true));
        // results.add(new HitResultModel(-3, -2, 5, false));
    }

    public void addHit(HitResultModel hit){
        results.add(hit);
    }

    public List<HitResultModel> getHits(){
        return this.results;
    }
}
