import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { DataSourceOptions } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Senha@123',
    database: 'nestcourse',
    entities: [Course],
    synchronize: true,
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => {
                return {
                    ...dataSourceOptions
                }
            }
        })],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }
