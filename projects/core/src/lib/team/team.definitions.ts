export interface IPackageAccessScope {
  'read:customer'?: boolean;
  'write:customer'?: boolean;
  'read:csv'?: boolean;
  'write:csv'?: boolean;
  'read:bank_accounts'?: boolean;
  'write:bank_accounts'?: boolean;
  'read:transactions'?: boolean;
  'write:transactions'?: boolean;
  'read:teamAttachments'?: boolean;
  'write:teamAttachments'?: boolean;
  'read:clients'?: boolean;
  'write:clients'?: boolean;
  'read:companies'?: boolean;
  'write:companies'?: boolean;
  'read:templates'?: boolean;
  'write:templates'?: boolean;
  'read:generatedInvoices'?: boolean;
  'write:generatedInvoices'?: boolean;
  'read:transactionTemplates'?: boolean;
  'write:transactionTemplates'?: boolean;
  'read:upcomingPayouts'?: boolean;
  'write:upcomingPayouts'?: boolean;
  'read:customTransactions'?: boolean;
  'write:customTransactions'?: boolean;
  'read:importHistories'?: boolean;
  'write:importHistories'?: boolean;
}

export type PackageStatus = 'INACTIVE' | 'PROCESSING' | 'ACTIVE';

export interface IPackage {
  available_countries: Array<string>;
  activation_status: PackageStatus;
  can_activate?: boolean;
  provider?: {
    name: string;
    website?: string;
    isTrusted: boolean;
  };
  can_deactivate?: boolean;
  configuration_path?: string;
  required_data?: {
    company: any;
  };
  access_scope?: IPackageAccessScope;
}

export interface IProductActivation {
  product_id?: number;
  activation_status: PackageStatus;
  user: number;
  id?: number;
  team: number;
}

export interface IPayment {
  id?: number;
  user: number;
  team: number;
  amount?: number;
  products?: Array<IProduct<any>>;
  date_received?: string;
  date_transferred?: string;
  external_key?: string;
  gateway: 'MANUAL' | 'STRIPE';
  gateway_data: any;
  type: 'SINGLE_TIME';
  currency: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  title?: string;
  description?: string;
}

export interface IProduct<T> {
  id?: number;
  name: string;
  activations?: IProductActivation[];
  description: string;
  price: number;
  currency: string;
  type: string;
  payment_mode: 'ONCE' | 'PERIOD';
  meta_data?: T;
}
