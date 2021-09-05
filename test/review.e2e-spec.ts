import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from '../dist/review/dto/create-review.dto';
import { mongoose } from '@typegoose/typegoose';

const productId = new mongoose.Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
	name: 'Test',
	title: 'Заголовок',
	description: 'Описание',
	rating: 5,
	productId
}

describe('AppController (e2e)', () => {
  let app: INestApplication;
	let createdId: string;

  beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
  });

  it('/review/create (POST)',  () => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDto)
			.expect(201)
			.then(({body}: request.Response) => {
				createdId = body._id;
				expect(createdId).toBeDefined();
			})
		});
});
