package org.cold.angular.controller;

import org.cold.angular.beans.Train;
import org.cold.angular.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by hui.liao on 2015/8/28.
 */

@Controller
@RequestMapping("/trains")
public class TrainController {

    @Autowired
    private TrainService trainService;

    @RequestMapping("/trainList.json")
    @ResponseBody
    public List<Train> getTrainList() {
        return trainService.getTrainList();
    }

    @RequestMapping(value = "/train", method = RequestMethod.POST)
    @ResponseBody
    public void addTrain(@RequestBody Train train) {
        trainService.addTrain(train);
    }

    @RequestMapping(value = "/train", method = RequestMethod.PUT)
    @ResponseBody
    public void editTrain(@RequestBody Train train) {
        trainService.editTrain(train);
    }

    @RequestMapping(value = "/train/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void delTrain(@PathVariable long id) {
        trainService.delTrain(id);
    }

    @RequestMapping(value = "/removeAll", method = RequestMethod.DELETE)
    @ResponseBody
    public void removeAll() {
        trainService.removeAll();
    }

    @RequestMapping("/layout")
    public String getTrainPage() {
        return "trains/layout";
    }
}
