import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = ['a', 'b', 'c', 'd', 'e', 'f'];

  create(song) {
    this.songs.push(song);
  }
  findAll() {
    throw new Error('Error in DB while fetching songs');
    return this.songs;
  }
}
