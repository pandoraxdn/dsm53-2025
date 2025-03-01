import { IsNotEmpty, IsString, IsOptional, IsEnum } from "class-validator";
import { EstadoTarea } from "../schema/tarea.schema";

export class UpdateTareaDto{

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    titulo: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(EstadoTarea)
    @IsOptional()
    estado: EstadoTarea;
}
