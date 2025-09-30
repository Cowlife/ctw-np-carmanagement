ALTER TABLE car_management.t_car
    ADD COLUMN seats integer default 2,
    ADD COLUMN license_plate varchar(50),
    ADD COLUMN autonomy boolean,
    ADD COLUMN color varchar(50),
    ADD COLUMN image bytea;

SELECT * FROM car_management.t_car;



