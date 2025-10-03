package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.Person;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;

import java.util.List;

import static io.quarkus.hibernate.orm.panache.PanacheEntityBase.find;


@Dependent
public class PersonService {

    private final PersonRepository personRepository;

    @Inject
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getPeople() {
        return personRepository.listAll();
    }

    public Person findByEmail(String email){
        return Person.find("email", email).firstResult();
    }

    public void addPerson(Person person) {
        personRepository.persist(person);
    }
}
