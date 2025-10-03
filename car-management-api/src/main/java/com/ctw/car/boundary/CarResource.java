package com.ctw.car.boundary;

import com.ctw.car.control.CarService;
import com.ctw.car.control.ReserveService;
import com.ctw.car.entity.Car;
import com.ctw.car.entity.Reserve;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Path("/cars")
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarResource {

    private final CarService carService;
    private final ReserveService reserveService;

    @Inject
    public CarResource(final CarService carService, ReserveService reserveService) {
        this.carService = carService;
        this.reserveService = reserveService;
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
        return Response.created(URI.create("/cars")).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response update(@PathParam("id") UUID id, Car car) {
        this.carService.updateCar(id, car);
        return Response.status(200).entity(car).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(@PathParam("id") UUID id) {
        Car car = this.carService.findCarID(id);
        List<Reserve> reserves = this.reserveService.getReserves(car.licensePlate);
        for (Reserve rev: reserves){
            this.reserveService.deleteReserveByID(rev.id);
        }
        this.carService.deleteCar(car.id);
    }

    @GET
    @Path("/search/{id}")
    public Car search(@PathParam("id") UUID id) {
        return this.carService.findCarID(id);
    }

}
