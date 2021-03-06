import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Form } from "./form.entity";
import { FormEntryField } from "./formEntryField.entity";
import { FormField } from "./formField.entity";
import { User } from "../core/user.entity";
import { Transaction } from "../core/transaction.entity";

@Entity()
export class FormEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(type => User, { nullable: true })
  public user: User;

  @Column({ nullable: true })
  public email: string;

  @Column({ default: false })
  public cancelled: boolean;

  @ManyToOne(type => Form)
  public form: Form;

  @OneToMany(
    type => FormEntryField,
    entryField => entryField.entry
  )
  fields: FormEntryField[];

  @ManyToOne(type => Transaction, { nullable: true })
  public transaction?: Transaction;
}
