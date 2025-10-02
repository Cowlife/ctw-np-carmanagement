package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.Person;
import com.ctw.car.entity.Reserve;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Dependent
public class ReserveService {
    private final ReserveRepository reserveRepository;

    @Inject
    public ReserveService(final ReserveRepository reserveRepository) {
        this.reserveRepository = reserveRepository;
    }

    public List<Reserve> getReserves() {
        return reserveRepository.listAll();
    }

    public void deleteReserve(String license){ //DONE
        Reserve entity = (Reserve) Reserve.find("car_license_plate", license);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.delete();
    }

    public void addReserve(Reserve reserve){
        reserveRepository.persist(reserve);
    }

    public void updateReserve(String carLicensePlate, Reserve reserve) {
        Reserve entity = (Reserve) Reserve.find("car_license_plate", carLicensePlate);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.dropDate = reserve.dropDate;
        entity.pickDate = reserve.pickDate;
    }

    public Reserve findServicePlate(String carLicensePlate) {
        return (Reserve) Reserve.find("car_license_plate", carLicensePlate);
    }
}
