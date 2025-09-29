package com.ctw.car.control;

import com.ctw.car.entity.Car;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Dependent;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Dependent
public class CarRepository implements PanacheRepository<Car> {

    // Main methods to search elements are going to be implemented here


}
