alter table car_management.t_car
    add brand varchar(50),
    add model varchar(50),
    add seats integer default 2,
    add license_plate varchar(50),
    add autonomy boolean,
    add color varchar(50),
    add image bytea;



