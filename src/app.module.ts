import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomImage, RoomImageSchema } from './room-image.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
      //retryWrites: true,
      //writeConcern: { w: 'majority' },
    }),
    MongooseModule.forFeature([
      { name: RoomImage.name, schema: RoomImageSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
