import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from '@url-svcs/url/url.module';
import { ConfigModule } from '@url-svcs/core/config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://mongo:27017/urls'),
    UrlModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
