import { 
    IsString, 
    MaxLength, 
    MinLength, 
    IsDateString, 
    IsOptional 
} from "class-validator";

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    @MaxLength(255)
    @MinLength(6)
    username:   string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    @MinLength(6)
    email:      string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    @MinLength(6)
    password:   string;

    @IsString()
    @IsOptional()
    image:      string;

    @IsOptional()
    @IsDateString()
    update:     Date;
}
