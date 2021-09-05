import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { mongoose, prop } from '@typegoose/typegoose';


export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {
	@prop()
	name: string;

	@prop()
	title: string;

	@prop()
	description: string;

	@prop()
	rating: number;

	@prop()
	productId: mongoose.Types.ObjectId;
}
