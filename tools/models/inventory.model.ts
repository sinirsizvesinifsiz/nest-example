import { AuditModel } from './audit.model';
import { InventoryTypeModel } from './inventory-type.model';
import { ProductModel } from './product.model';

export class InventoryModel {
    id: string;
    barcode: string;
    description: string;
    audit: AuditModel;
    type: InventoryTypeModel;
    product: ProductModel;
    
    
};