import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tenders } from '../../../../tenders/infra/typeorm/entities/Tenders';

@Entity("activities")
class Activities {

   
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    status: Boolean;

    @ManyToOne(type => Tenders, activities => Activities )
    tender: Tenders

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Activities };