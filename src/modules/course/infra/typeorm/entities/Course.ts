import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Institute } from '../../../../Institutes/infra/typeorm/entities/Institute';
import { User } from '../../../../accounts/infra/typeorm/entities/User';

@Entity("course")
class Course {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToOne(type => User, course => Course )
    user:User

    @ManyToOne(type => Institute, course => Course)
    institute:Institute
    
    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Course };