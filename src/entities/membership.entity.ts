import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { Member } from './member.entity';

@Entity()
export class Membership extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public startDate: Date;

    @Column()
    public endDate: Date;

    @ManyToOne(type => Member, member => member.memberships)
    public member: Member;

}
