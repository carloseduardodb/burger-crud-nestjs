import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Burger {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'double precision',
  })
  price: number;

  @Column({
    type: 'double precision',
  })
  weight: number;

  @Column()
  availableQuantity: number;
}
