import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Tarea, TareaSchema } from "./schema/tarea.schema";
import { TareaService } from "./tarea.service";
import { TareaController } from "./tarea.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Tarea.name,
                schema: TareaSchema,
            }
        ]),
    ],
    controllers: [ TareaController ],
    providers: [ TareaService ]
})

export class TareaModule{}

