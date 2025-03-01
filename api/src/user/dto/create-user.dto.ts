import { 
    IsString, 
    MaxLength, 
    MinLength, 
    IsDateString, 
    IsOptional 
} from "class-validator";

export class CreateUserDto {

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    username:   string;

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    email:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    password:   string;

    @IsString()
    image:      string;

    @IsOptional()
    @IsDateString()
    update:     Date;
}
