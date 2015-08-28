package org.cold.angular.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by hui.liao on 2015/8/28.
 */
@Service
public class CarService {

    private static List<String> carList = new ArrayList<String>();

    public List<String> getCarList() {
        return carList;
    }

    public void addCar(String carName) {
        carList.add(carName);
    }
}
