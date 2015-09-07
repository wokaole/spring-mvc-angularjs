package org.cold.angular.service;

import org.cold.angular.beans.Train;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by hui.liao on 2015/8/29.
 */
@Service
public class TrainService {
    private static List<Train> trainList = new ArrayList<Train>();
    private static long id = 0L;

    public List<Train> getTrainList() {
        return trainList;
    }

    public void addTrain(Train train) {
        train.setId(++id);
        trainList.add(train);
    }

    public void delTrain(long id) {
        Train train = findById(id);
        trainList.remove(train);
    }

    public Train findById(long id) {
        if (trainList != null && !trainList.isEmpty()) {
            for (Train train : trainList) {
                if (id == train.getId()) {
                    return train;
                }
            }
        }
        return null;
    }

    public void removeAll() {
        trainList.clear();
    }

    public void editTrain(Train train) {
        Train oldTrain = findById(train.getId());
        if (oldTrain != null) {
            BeanUtils.copyProperties(train, oldTrain);
        }
    }
}
