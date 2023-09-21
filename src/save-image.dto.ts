import { IsString } from 'class-validator';

export class SaveImageDto {
  @IsString()
  readonly image: string;

  @IsString()
  readonly roomId: string;
}
