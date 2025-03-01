import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sensor } from './entities/sensor.entity';

@Injectable()
export class SensorService {
    
    constructor(
        @InjectRepository( Sensor )
        private sensorRepository : Repository<Sensor>
    ){}

    async create(createSensorDto: CreateSensorDto) {
        const register = this.sensorRepository.create( createSensorDto );
        return await this.sensorRepository.save( register );
    }

    async findAll() {
        return await this.sensorRepository.find();
    }

    async findOne(id_sensor: number) {
        return await this.sensorRepository.findBy({id_sensor});
    }

    async update(id_sensor: number, updateSensorDto: UpdateSensorDto) {
        return await this.sensorRepository.update( id_sensor, updateSensorDto);
    }

    async remove(id_sensor: number) {
        return await this.sensorRepository.delete(id_sensor);
    }
}
