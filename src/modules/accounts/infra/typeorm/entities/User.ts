import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from '../../../../course/infra/typeorm/entities/course';
import { Tenders } from '../../../../tenders/infra/typeorm/entities/Tenders';

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: string;

    @OneToOne(type => Course, user => User )
    @JoinColumn()
    course: Course

    @OneToMany(type=>Notification, user => User)
    notification: Notification[]

    @OneToMany(type=>Tenders, user => User)
    tender: Tenders[]

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { User };