package com.ctw.car.control;

import com.ctw.car.entity.Car;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;

import java.util.List;

import static io.quarkus.hibernate.orm.panache.PanacheEntityBase.find;

@Dependent
public class CarService {
    private final CarRepository carRepository;

    @Inject
    public CarService(final CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars() {
        return carRepository.listAll();
    }

    public void addCar(Car car){
        try {
            carRepository.persist(car);
        }
        catch(Exception e) {
            System.out.println(e);
        }

    }

    public void deleteCar(Long id){
        Car entity = Car.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.delete();
    }

    public void updateCar(Long id, Car car){
        Car entity = Car.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }

        // map all fields from the person parameter to the existing entity
        entity.brand = car.brand;
        entity.createdAt = car.createdAt;
        entity.createdBy = car.createdBy;
        entity.engineType = car.engineType;
        entity.model = car.model;
    }

    public Car findCar(String name){
        return find("name", name).firstResult();
    }
}
