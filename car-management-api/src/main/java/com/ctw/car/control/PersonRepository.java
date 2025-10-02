package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.Person;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.Dependent;

import java.util.UUID;

@Dependent
public class PersonRepository implements PanacheRepositoryBase<Person, UUID> {
}
