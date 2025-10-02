package com.ctw.car.control;

import com.ctw.car.entity.Car;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
        carRepository.persist(car);
    }

    public void deleteCar(UUID id){ //DONE
        Car entity = Car.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.delete();
    }

    public void updateCar(UUID id, Car car){
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
        entity.autonomy = car.autonomy;
        entity.image = car.image;
        entity.color = car.color;
        entity.seats = car.seats;
    }

    public Car findCarID(UUID id){
        Optional<Car> optional_found = Car.findByIdOptional(id);
        return optional_found.orElseThrow(NotFoundException::new);
    }


}
