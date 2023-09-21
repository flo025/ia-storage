import { Injectable } from '@nestjs/common';
import { SaveImageDto } from './save-image.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RoomImage } from './room-image.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(RoomImage.name) private roomDataModel: Model<RoomImage>,
  ) {}

  saveImage(saveImageDto: SaveImageDto) {
    new this.roomDataModel({
      ...saveImageDto,
      timestamp: new Date(),
    })
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
