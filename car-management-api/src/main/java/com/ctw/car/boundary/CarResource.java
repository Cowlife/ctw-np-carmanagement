package com.ctw.car.boundary;

import com.ctw.car.control.CarService;
import com.ctw.car.entity.Car;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.net.URI;
import java.util.List;

@Path("/cars")
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarResource {

    private final CarService carService;

    @Inject
    public CarResource(final CarService carService) {
        this.carService = carService;
    }

    @GET
    public Response getCars(@QueryParam("brand") String brand) {
        List<Car> cars = this.carService.getCars();
        return Response.status(200).entity(cars).build();
    }

    @POST
    @Transactional
    public Response create(Car car) {
        this.carService.addCar(car);
        return Response.created(URI.create("/cars/" + car.id)).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response update(@PathParam("id") Long id, Car car) {
        this.carService.updateCar(id, car);
        return Response.status(200).entity(car).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(@PathParam("id") Long id) {
        this.carService.deleteCar(id);
    }

    @GET
    @Path("/search/{name}")
    public Car search(@PathParam("name") String name) {
        return this.carService.findCar(name);
    }

}
