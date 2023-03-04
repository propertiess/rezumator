import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AboutInfoDto, OptionalInfoDto } from '../../fields/dto';

import { EducationState, ExperienceState } from '../../fields/fields.types';

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
  experienceInfo: ExperienceState[];

  @Prop({ type: OptionalInfoDto })
  optionalInfo: OptionalInfoDto;
}

export const ResumeSchema = SchemaFactory.createForClass(ResumeEntity);
ResumeSchema.virtual('user', {
  ref: 'UserEntity',
  localField: '_id',
  foreignField: 'fields'
});

export const ResumeModel = { name: ResumeEntity.name, schema: ResumeSchema };
