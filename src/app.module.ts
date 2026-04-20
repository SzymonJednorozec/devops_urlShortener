import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from '@url-svcs/url/url.module';
import { ConfigModule } from '@url-svcs/core/config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/urlshortener'),
    UrlModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
