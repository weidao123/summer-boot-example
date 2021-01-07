import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    order_num: number;
}
