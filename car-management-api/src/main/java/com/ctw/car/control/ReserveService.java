package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.Person;
import com.ctw.car.entity.Reserve;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Dependent
public class ReserveService {
    private final ReserveRepository reserveRepository;

    @Inject
    public ReserveService(final ReserveRepository reserveRepository) {
        this.reserveRepository = reserveRepository;
    }

    public List<Reserve> getReserves(String car_license_plate) {
        List<Reserve> reserve_list = reserveRepository.listAll();
        if (car_license_plate == null || car_license_plate.isEmpty()){
            return reserve_list;
        }
        List<Reserve> updated_list = reserve_list.stream()
                .filter(p -> Objects.equals(p.getCarLicensePlate(), car_license_plate))
                .collect(Collectors.toList());
        return updated_list;
    }

    public void deleteReserveByID(UUID id) {
        Optional<Reserve> optional_found = Reserve.findByIdOptional(id);
        Reserve entity = optional_found.orElseThrow(NotFoundException::new);
        entity.delete();
    }

    public void addReserve(Reserve reserve){
        reserveRepository.persist(reserve);
    }

    public void updateReserve(UUID id, Reserve reserve) {
        Optional<Reserve> optional_found = Reserve.findByIdOptional(id);
        Reserve entity = optional_found.orElseThrow(NotFoundException::new);
        entity.dropDate = reserve.dropDate;
        entity.pickDate = reserve.pickDate;
    }

    public Reserve findServicePlateByID(UUID id) {
        Optional<Reserve> optional_found = Reserve.findByIdOptional(id);
        return optional_found.orElseThrow(NotFoundException::new);
    }


}
