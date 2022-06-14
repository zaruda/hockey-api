import { PartialType } from '@nestjs/mapped-types';
import CreateGoalEntity from './create-goal.entity';

class UpdateGoalEntity extends PartialType(CreateGoalEntity) {}

export default UpdateGoalEntity;
