import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as request from 'supertest';
import { UsersModule } from './../src/users/users.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<UserEntity>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, TypeOrmModule.forRoot()],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = moduleFixture.get('UserRepository');
  });

  it('/users (GET)', async () => {
    await repository.save([
      {
        username: 'test-username-0',
        email: 'test0@gmail.com',
        password: 'password123',
      },
      {
        username: 'test-username-1',
        email: 'test1@gmail.com',
        password: 'password123',
      },
    ]);

    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect('test');
  });
});
