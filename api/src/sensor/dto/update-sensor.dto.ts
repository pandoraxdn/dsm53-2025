import { IsNumber, IsNotEmpty, IsDateString, IsOptional } from "class-validator";

export class UpdateSensorDto {

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    id_sensor:      number;

    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    fecha?:         Date;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    distancia_cm:   number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    distancia_inch: number;
}
