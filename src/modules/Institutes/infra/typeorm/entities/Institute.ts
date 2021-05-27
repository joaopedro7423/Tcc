import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from '../../../../course/infra/typeorm/entities/course';

@Entity("institute")
class Institute {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    campus: string;

    @OneToMany(type => Course,  institute => Institute)
    @JoinColumn()
    course : Course;

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Institute };