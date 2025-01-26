import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Song } from '../songs/song.entity';
import { User } from '../users/user.entity';
import { PlayListsService } from './playlists.service';
import { PlayListsController } from './playlists.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Song, User])],
  providers: [PlayListsService],
  controllers: [PlayListsController],
})
export class PlaylistsModule {}
