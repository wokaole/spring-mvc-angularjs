package org.cold.angular.controller;

import org.cold.angular.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by hui.liao on 2015/8/28.
 */
@Controller
@RequestMapping("/cars")
public class CarController {

    @Autowired
    public CarService carService;

    @RequestMapping("/carList.json")
    @ResponseBody
    public List<String> getCarList() {
        return carService.getCarList();
    }

    @RequestMapping(value = "/car", method = RequestMethod.POST)
    @ResponseBody
    public void addCar(@RequestParam String carName) {
        carService.addCar(carName);
    }

    @RequestMapping("/layout")
    public String getCarPage() {
        return "cars/layout";
    }
}
