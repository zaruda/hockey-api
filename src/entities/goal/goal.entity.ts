import { Exclude } from 'class-transformer';

class GoalEntity {
  id: string;
  date: string;

  @Exclude()
  __v: string;

  constructor(partial: Partial<GoalEntity>) {
    Object.assign(this, partial);
  }
}

export default GoalEntity;
