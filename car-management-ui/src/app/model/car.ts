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
  BEV = 'BEV',
  PHEV = 'PHEV',
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
}

export enum BrandName {
  BMW = "BMW",
  TOYOTA = "TOYOTA",
  FORD = "FORD",
  HONDA = "HONDA",
}
