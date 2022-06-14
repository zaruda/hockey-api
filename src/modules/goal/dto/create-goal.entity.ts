import { IsDateString, IsNotEmpty } from 'class-validator';

class CreateGoalEntity {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  name: string;
}

export default CreateGoalEntity;
