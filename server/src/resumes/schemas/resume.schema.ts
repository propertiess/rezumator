import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AboutInfoDto, OptionalInfoDto } from 'src/fields/dto';

import { EducationState, ExperienceState } from 'src/fields/fields.types';

export type ResumeDocument = HydratedDocument<ResumeEntity>;

@Schema()
export class ResumeEntity {
  @Prop({ type: AboutInfoDto })
  aboutInfo: AboutInfoDto;

  @Prop({ type: OptionalInfoDto })
  personalInfo: OptionalInfoDto;

  @Prop()
  educationInfo: EducationState[];

  @Prop()
  // @Type(() => ResumeEntity)
  experienceInfo: ExperienceState[];

  @Prop({ type: OptionalInfoDto })
  optionalInfo: OptionalInfoDto;
}

export const ResumeSchema = SchemaFactory.createForClass(ResumeEntity);
