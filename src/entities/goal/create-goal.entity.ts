import { IsNotEmpty } from 'class-validator';

class CreateGoalEntity {
  @IsNotEmpty()
  date: string;
}

export default CreateGoalEntity;
