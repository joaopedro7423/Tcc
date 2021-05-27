import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../../accounts/infra/typeorm/entities/User';
import { Activities } from '../../../../activities/infra/typeorm/entities/Activities';

@Entity("tenders")
class Tenders {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(type => User, tender => Tenders )
    user: User

    @OneToMany(type=>Activities, tender => Tenders )
    activities: Activities[]

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Tenders };