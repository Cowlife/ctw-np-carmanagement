package com.ctw.car.boundary;

import com.ctw.car.control.CarService;
import com.ctw.car.control.PersonService;
import com.ctw.car.entity.Car;
import com.ctw.car.entity.Person;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/people")
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PersonResource {
    private final PersonService personService;

    @Inject
    public PersonResource(PersonService personService) {
        this.personService = personService;
    }

    @GET
    public Response getPeople(@QueryParam("name") String name) {
        List<Person> people = this.personService.getPeople();
        return Response.status(200).entity(people).build();
    }

    @GET
    @Path("/search/{email}")
    public Person searchPersonInfo(@PathParam("email") String email) {
        return this.personService.findByEmail(email);
    }


}
