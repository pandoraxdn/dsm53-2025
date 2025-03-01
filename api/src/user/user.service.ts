import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository( User )
        private userRepository: Repository<User>
    ){}

    async login( updateUser: UpdateUserDto ){
        try{
            const user: User = await this.userRepository.findOneBy({ email: updateUser.email });
            return (await bcrypt.compare( updateUser.password, user.password ) ? user:false)
        }catch(error){
            return false;
        }
    }

    async create(createUserDto: CreateUserDto) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash( createUserDto.password, saltOrRounds);
        const register = { ...createUserDto, password: hash };
        const new_user = this.userRepository.create( register );
        return await this.userRepository.save(new_user);
    }

    async update(id_user: number, updateUserDto: UpdateUserDto) {
        ( updateUserDto.password ) && ( async () => {
            const saltOrRounds = 10;
            const hash = await bcrypt.hash( updateUserDto.password, saltOrRounds);
            const register = { ...updateUserDto, password: hash };
            return await this.userRepository.update( id_user, register );
        })();

        return await this.userRepository.update(id_user, updateUserDto);
    }

    async findOne(id_user: number) {
        return await this.userRepository.findBy({ id_user });
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async remove(id_user: number) {
        return await this.userRepository.delete( id_user );
    }
}
