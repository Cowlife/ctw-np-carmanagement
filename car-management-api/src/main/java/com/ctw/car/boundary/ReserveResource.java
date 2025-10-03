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
import java.util.List;
import java.util.UUID;

@Path("/reserves")
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ReserveResource {
    private final ReserveService reserveService;

    @Inject
    public ReserveResource(ReserveService reserveService) {
        this.reserveService = reserveService;
    }

    @GET
    public Response getReserves(@QueryParam("car_license_plate") String car_license_plate) {
        List<Reserve> reserves = this.reserveService.getReserves(car_license_plate);
        return Response.status(200).entity(reserves).build();
    }

    @POST
    @Transactional
    public Response create(Reserve reserve) {
        this.reserveService.addReserve(reserve);
        return Response.created(URI.create("/reserves")).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response update(@PathParam("id") UUID id, Reserve reserve) {
        this.reserveService.updateReserve(id, reserve);
        return Response.status(200).entity(reserve).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void deletebyID(@PathParam("id") UUID id) {
        this.reserveService.deleteReserveByID(id);
    }

    @GET
    @Path("/search/{id}")
    public Reserve searchByID(@PathParam("id") UUID id) {
        return this.reserveService.findServicePlateByID(id);
    }




}
