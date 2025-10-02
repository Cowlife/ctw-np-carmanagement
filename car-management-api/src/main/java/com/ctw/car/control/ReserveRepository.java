package com.ctw.car.control;

import com.ctw.car.entity.Person;
import com.ctw.car.entity.Reserve;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.Dependent;

import java.util.UUID;

@Dependent
public class ReserveRepository implements PanacheRepositoryBase<Reserve, UUID> {
}
