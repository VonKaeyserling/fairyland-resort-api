import { ObjectType, Field, ID } from '@nestjs/graphql';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column({
    default: 0,
  })
  @Field()
  rating: number;

  @Column()
  @Field()
  shortDescription: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  thumbnail: string;

  @Column()
  @Field()
  images: string[];

  @Column()
  @Field()
  logo: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  latitude: number;

  @Column()
  @Field()
  longitude: number;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  zipCode: string;

  @Column()
  @Field()
  addressNumber: string;

  @Column()
  @Field()
  neighborhood: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  city: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  // @Field()
  // rooms:  Room[]

  // @Field()
  // admin:  User   @relation(fields: [userId], references: [id])

  // @Field()
  // userId: string;
}
