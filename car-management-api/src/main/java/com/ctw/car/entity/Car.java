package com.ctw.car.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
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
@Table(name = "T_CAR")
@Builder
public class Car extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    public UUID id;

    @Column(name = "BRAND", nullable = false)
    public String brand;

    @Column(name = "MODEL", nullable = false)
    public String model;



    @Enumerated(EnumType.STRING)
    @Column(name = "ENGINE_TYPE", nullable = false)
    public EngineType engineType;

    @Column(name = "CREATED_AT", updatable = false, nullable = false)
    public LocalDateTime createdAt;

    @Column(name = "CREATED_BY", updatable = false)
    public String createdBy;




}
