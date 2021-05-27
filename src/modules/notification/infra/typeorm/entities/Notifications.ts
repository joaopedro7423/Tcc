import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../../accounts/infra/typeorm/entities/User';

@Entity("notification")
class Notification {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(type => User, notification => Notification )
    user: User

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Notification };