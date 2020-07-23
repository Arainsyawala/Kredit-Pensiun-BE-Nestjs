import {Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";
import { Transform } from 'class-transformer';


@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nik: number;

    @Column()
    name: string;

    @Transform(value => value.valueOf(), { toPlainOnly: true })
    @Column()
    birth_date: Date;

    @Column()
    address: string;

    @Column()
    telp: number;

    @Column()
    status_kepegawaian:string;

    @Column()
    gaji:number;

    @Column()
    bank:string

    @Column()
    respon: string;

}

