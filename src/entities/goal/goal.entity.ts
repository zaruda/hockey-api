import { Exclude } from 'class-transformer';

class GoalEntity {
  _id: string;
  date: string;

  @Exclude()
  __v: string;

  constructor(partial: Partial<GoalEntity>) {
    Object.assign(this, partial);
  }
}

export default GoalEntity;
