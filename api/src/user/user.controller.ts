import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    ValidationPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) 
    {}

    @Post('login')
    async login(@Body( new ValidationPipe() ) updateUserDto: UpdateUserDto) {
        return await this.userService.login(updateUserDto);
    }

    @Post()
    async create(@Body( new ValidationPipe() ) createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Patch(':id_user')
    async update(@Param('id_user') id_user: number, @Body( new ValidationPipe() ) updateUserDto: UpdateUserDto) {
        return await this.userService.update(id_user, updateUserDto);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id_user')
    async findOne(@Param('id_user') id_user: number) {
        return await this.userService.findOne(id_user);
    }

    @Delete(':id_user')
    async remove(@Param('id_user') id_user: number) {
        return await this.userService.remove( id_user );
    }
}
