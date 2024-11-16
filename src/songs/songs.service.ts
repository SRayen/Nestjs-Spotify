import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = ['a', 'b', 'c', 'd', 'e', 'f'];

  create(song) {
    this.songs.push(song);
  }
  findAll() {
    return this.songs;
  }
}
