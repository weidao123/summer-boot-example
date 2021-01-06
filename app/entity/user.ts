import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column("datetime")
    create_time: Date;

    @Column("datetime")
    update_time: Date;
}
