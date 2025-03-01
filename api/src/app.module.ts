import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorModule } from './sensor/sensor.module';
import { Sensor } from './sensor/entities/sensor.entity';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/dsm53"),
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "najimi",
        password: "pass",
        database: "dsm53",
        entities: [ User ],
        synchronize: true,
        autoLoadEntities: false,
    }),
    TypeOrmModule.forRoot({
        type: 'mariadb',
        host: 'localhost',
        database: 'dsm53',
        port: 3306,
        username: 'najimi',
        password: 'pass',
        entities: [ Sensor ],
        synchronize: true,
        autoLoadEntities: false,
    }),
    TareaModule,
    UserModule,
    SensorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
