package com.ctw.car.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.enterprise.context.Dependent;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;


@EqualsAndHashCode(callSuper = true)
@Data // getter, setter, required args constructor
@NoArgsConstructor // removing empty constructor
@AllArgsConstructor // removing this.id = id inside constructor
@Entity
@Table(name = "t_car")
@Builder
public class Car extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    public UUID id;

    @Enumerated(EnumType.STRING)
    @Column(name = "brand", nullable = false)
    public BrandName brand;

    @Column(name = "model", nullable = false)
    public String model;

    @Column(name = "license_plate", nullable = false)
    public String licensePlate;

    @Column(name = "color")
    public String color;

    @Column(name="image")
    public String image;

    @Column(name = "seats")
    public Integer seats;

    @Column(name= "autonomy")
    public boolean autonomy;

    @Enumerated(EnumType.STRING)
    @Column(name = "engine_type", nullable = false)
    public EngineType engineType;

    @Column(name = "created_at", updatable = false, nullable = false)
    public LocalDateTime createdAt;

    @Column(name = "created_by", updatable = false)
    public String createdBy;




}
