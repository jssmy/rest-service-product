import { Controller } from "./controller";
import { IRequestCreateProduct } from "../requests/request-create-product";
import { IProduct } from "../interfaces/product";
import { Validate } from "../helpers/validate-helper";
import { DateHelper } from "../helpers/date-helper";
import { Helper } from "../helpers/helper";
import { Request, Response }  from 'express';
export class ProductController extends Controller{
    protected static collectionName = 'products';
    public static async create(req: Request, res: Response) {
        try {
            const product: IProduct = req.body;
            Validate.set(product).check(['title','description','price','images','categories', 'store']).valid();
            product.state = true;
            product.slug = Helper.uniqueSlug(product.title);
            product.created = DateHelper.current().getTime();
            product.updated = DateHelper.current().getTime();
            await this.collection().doc().create(product);
            res.status(200).send({
                message: `Se ha creado un nuevo producto ${product.title}`,
                status: 200
            });
        } catch (error) {
            res.status(400).send(error);
        }
    }
}