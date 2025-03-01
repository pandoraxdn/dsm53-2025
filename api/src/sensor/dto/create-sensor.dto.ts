import { IsNumber, IsNotEmpty, IsDateString } from "class-validator";

export class CreateSensorDto {

    @IsNumber()
    @IsNotEmpty()
    id_sensor:      number;

    @IsDateString()
    @IsNotEmpty()
    fecha?:         Date;

    @IsNumber()
    @IsNotEmpty()
    distancia_cm:   number;

    @IsNumber()
    @IsNotEmpty()
    distancia_inch: number;
}
