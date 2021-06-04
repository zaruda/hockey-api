class GoalEntity {
  id: string;
  date: string;
  name: string;

  constructor(partial: Partial<GoalEntity>) {
    Object.assign(this, partial);
  }
}

export default GoalEntity;
