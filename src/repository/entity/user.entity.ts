import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { unique: true })
  walletAddress: string;

  @Column('varchar', { nullable: true, unique: true })
  nickname: string;

  @CreateDateColumn({ nullable: true, type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, type: 'timestamptz' })
  updatedAt: Date;
}
