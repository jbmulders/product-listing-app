import { IProduct } from './product';

export interface IStarEvent {
    event: MouseEvent;
    product: IProduct;
}