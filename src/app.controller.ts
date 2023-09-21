import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SaveImageDto } from './save-image.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  saveImage(@Body() saveImageDto: SaveImageDto) {
    return this.appService.saveImage(saveImageDto);
  }
}
