import {UUID} from "node:crypto";

export interface Car {
    id: UUID,
    brand: BrandName,
    model: string,
    licensePlate: string;
    color: string;
    image: string;
    seats: number,
    autonomy: boolean,
    engineType: EngineType
    createdAt: string
    createdBy: string
}

export enum EngineType {
  BEV = 'BEV', // Electric
  PHEV = 'PHEV', // Plugin hybrid
  GASOLINE = 'GASOLINE', // ICE/Gasoline
  DIESEL = 'DIESEL', // ICE/Diesel
}

export enum BrandName {
  BMW = "BMW",
  TOYOTA = "TOYOTA",
  FORD = "FORD",
  HONDA = "HONDA",
}
