import {UUID} from "node:crypto";

export interface Reserve{
  id: UUID,
  carLicensePlate: string;
  userPhone: string;
  pickDate: string,
  dropDate: string
}
