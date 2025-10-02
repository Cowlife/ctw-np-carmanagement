package com.ctw.car.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data // getter, setter, required args constructor
@NoArgsConstructor // removing empty constructor
@AllArgsConstructor // removing this.id = id inside constructor
@Entity
@Table(name = "reserve_table")
@Builder
public class Reserve extends PanacheEntityBase{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "reserve_id")
    public UUID id;

    @Column(name = "car_license_plate", nullable = false)
    public String carLicensePlate;
    @Column(name = "user_email", nullable = false)
    public String userEmail;

    @Column(name = "pick_date", updatable = false, nullable = false)
    public LocalDateTime pickDate;
    @Column(name = "drop_date", updatable = false, nullable = false)
    public LocalDateTime dropDate;

}
