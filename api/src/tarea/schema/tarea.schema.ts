import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum EstadoTarea{
    pendiente = 'Pendiente',
    en_proceso = 'En proceso',
    completado = 'Completado',
}

@Schema()
export class Tarea{
    @Prop({ required: true })
    titulo: string;

    @Prop()
    descripcion: string;

    @Prop({ default: EstadoTarea.pendiente })
    estado: EstadoTarea;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);
