package org.cold.angular.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by hui.liao on 2015/8/28.
 */

@Controller
@RequestMapping("/trains")
public class TrainController {

    @RequestMapping("/layout")
    public String getTrainPage() {
        return "trains/layout";
    }
}
