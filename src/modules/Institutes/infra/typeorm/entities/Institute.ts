import { v4 as uuidV4 } from 'uuid';
import { Column,  Entity, PrimaryColumn } from 'typeorm';

@Entity("institute")
class Institute {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    campus: string;

    constructor() {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Institute };