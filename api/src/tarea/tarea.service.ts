import { Injectable } from "@nestjs/common";
import { CreateTareaDto } from "./dto/create-tarea.dto";
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Tarea } from "./schema/tarea.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class TareaService{

    constructor(
        @InjectModel( Tarea.name ) private tareaModel : Model<Tarea>
    ){}

    async create( tarea: CreateTareaDto ){
        const created_tarea = new this.tareaModel(tarea);
        return created_tarea.save();
    }

    async update( id: string, tarea: UpdateTareaDto ){
        return this.tareaModel.findByIdAndUpdate( id, tarea,{
            new: true
        }).exec();
    }

    async findAll(){
        return this.tareaModel.find().exec();
    }

    async findOne( id: string ){
        return this.tareaModel.findById(id).exec();
    }

    async delete( id: string ){
        return this.tareaModel.findByIdAndDelete( id ).exec();
    }

}
