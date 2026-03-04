export type order_status = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

export type payment_method = 'cash_on_delivery' | 'credit_card' | 'bank_transfer';

export type user_role = 'customer' | 'admin' | 'super_admin';

export type user_status = 'active' | 'suspended' | 'deleted';

export type product_status = 'active' | 'inactive' | 'out_of_stock';

export type user_uniqueKey = {
  id: number; // Unique Key
};

export type user_without_PKs = {
  username: string;
  email: string;
  password: string;
  phone_number?: string | null;
  avatar_url?: string | null;
  role: user_role;
  status: user_status;
  last_login?: Date | null;
  created_at: Date;
  updated_at: Date;
};

export type user = user_uniqueKey & user_without_PKs;



export type admin_user_uniqueKey = {
  id: number; // Unique Key
};

export type admin_user_without_PKs = {
  username: string;
  email: string;
  password: string;
  role: user_role;
  status: user_status;
  created_at: Date;
  updated_at: Date;
};

export type admin_user = admin_user_uniqueKey & admin_user_without_PKs;



export type category_uniqueKey = {
  id: number; // Unique Key
};

export type category_without_PKs = {
  name: string;
  slug: string;
  description?: string | null;
  cover_image_url?: string | null;
  is_visible: boolean;
  created_at: Date;
  updated_at: Date;
};

export type category = category_uniqueKey & category_without_PKs;



export type product_uniqueKey = {
  id: number; // Unique Key
};

export type product_without_PKs = {
  title: string;
  name: string;
  sku: string;
  description_short?: string | null;
  description_long?: string | null;
  price: number;
  sale_price?: number | null;
  compare_at_price?: number | null;
  cover_image_url?: string | null;
  hover_image_url?: string | null;
  image_url_list?: string | null;
  stock_quantity: number;
  available_sizes?: string | null;
  available_colors?: string | null;
  material_info?: string | null;
  care_instructions?: string | null;
  size_chart_url?: string | null;
  status: product_status;
  category_id: number; // Foreign Key to category.id
  created_at: Date;
  updated_at: Date;
};

export type product = product_uniqueKey & product_without_PKs;



export type cart_uniqueKey = {
  id: number; // Unique Key
};

export type cart_without_PKs = {
  user_id: number; // Foreign Key to user.id
  subtotal_price: number;
  total_price: number;
  shipping_fee: number;
  created_at: Date;
  updated_at: Date;
};

export type cart = cart_uniqueKey & cart_without_PKs;



export type cart_item_uniqueKey = {
  id: number; // Unique Key
};

export type cart_item_without_PKs = {
  cart_id: number; // Foreign Key to cart.id
  product_id: number; // Foreign Key to product.id
  quantity: number;
  unit_price: number;
  selected_size?: string | null;
  selected_color?: string | null;
  created_at: Date;
  updated_at: Date;
};

export type cart_item = cart_item_uniqueKey & cart_item_without_PKs;



export type order_uniqueKey = {
  id: number; // Unique Key
};

export type order_without_PKs = {
  order_number: string;
  user_id: number; // Foreign Key to user.id
  status: order_status;
  payment_method: payment_method;
  total_amount: number;
  total_price: number;
  shipping_fee: number;
  shipping_name: string;
  shipping_phone: string;
  shipping_address: string;
  shipping_city?: string | null;
  tracking_number?: string | null;
  refund_reason?: string | null;
  created_at: Date;
  updated_at: Date;
};

export type order = order_uniqueKey & order_without_PKs;



export type order_item_uniqueKey = {
  id: number; // Unique Key
};

export type order_item_without_PKs = {
  order_id: number; // Foreign Key to order.id
  product_id: number; // Foreign Key to product.id
  product_title: string;
  product_cover_image_url?: string | null;
  quantity: number;
  unit_price: number;
  price_at_purchase: number;
  selected_size?: string | null;
  selected_color?: string | null;
  created_at: Date;
  updated_at: Date;
};

export type order_item = order_item_uniqueKey & order_item_without_PKs;



export type user_address_uniqueKey = {
  id: number; // Unique Key
};

export type user_address_without_PKs = {
  user_id: number; // Foreign Key to user.id
  recipient_name: string;
  phone_number: string;
  address_line_1: string;
  address_line_2?: string | null;
  city: string;
  postal_code?: string | null;
  zip_code?: string | null;
  is_default: boolean;
  created_at: Date;
  updated_at: Date;
};

export type user_address = user_address_uniqueKey & user_address_without_PKs;



export type review_uniqueKey = {
  id: number; // Unique Key
};

export type review_without_PKs = {
  product_id: number; // Foreign Key to product.id
  user_id: number; // Foreign Key to user.id
  user_name: string;
  rating_value: number;
  comment_text?: string | null;
  created_at: Date;
  updated_at: Date;
};

export type review = review_uniqueKey & review_without_PKs;



export type promotion_uniqueKey = {
  id: number; // Unique Key
};

export type promotion_without_PKs = {
  title: string;
  subtitle?: string | null;
  background_image_url?: string | null;
  created_at: Date;
  updated_at: Date;
};

export type promotion = promotion_uniqueKey & promotion_without_PKs;




export type StringFilter = {
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  equals?: string;
  in?: string[];
  notIn?: string[];
  not?: string | StringFilter;
};

export type NumberFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  not?: number | NumberFilter;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
};

export type DateFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  not?: Date | DateFilter;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
};

export type orderStatusFilter = {
  equals?: order_status;
  in?: order_status[];
  notIn?: order_status[];
  not?: order_status | orderStatusFilter;
};

export type paymentMethodFilter = {
  equals?: payment_method;
  in?: payment_method[];
  notIn?: payment_method[];
  not?: payment_method | paymentMethodFilter;
};

export type userRoleFilter = {
  equals?: user_role;
  in?: user_role[];
  notIn?: user_role[];
  not?: user_role | userRoleFilter;
};

export type userStatusFilter = {
  equals?: user_status;
  in?: user_status[];
  notIn?: user_status[];
  not?: user_status | userStatusFilter;
};

export type productStatusFilter = {
  equals?: product_status;
  in?: product_status[];
  notIn?: product_status[];
  not?: product_status | productStatusFilter;
};

export type filtered_user = {
  id?: number | NumberFilter | null;
  username?: string | StringFilter | null;
  email?: string | StringFilter | null;
  password?: string | StringFilter | null;
  phone_number?: string | StringFilter | null;
  avatar_url?: string | StringFilter | null;
  role?: user_role | userRoleFilter | null;
  status?: user_status | userStatusFilter | null;
  last_login?: Date | DateFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_admin_user = {
  id?: number | NumberFilter | null;
  username?: string | StringFilter | null;
  email?: string | StringFilter | null;
  password?: string | StringFilter | null;
  role?: user_role | userRoleFilter | null;
  status?: user_status | userStatusFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_category = {
  id?: number | NumberFilter | null;
  name?: string | StringFilter | null;
  slug?: string | StringFilter | null;
  description?: string | StringFilter | null;
  cover_image_url?: string | StringFilter | null;
  is_visible?: boolean | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_product = {
  id?: number | NumberFilter | null;
  title?: string | StringFilter | null;
  name?: string | StringFilter | null;
  sku?: string | StringFilter | null;
  description_short?: string | StringFilter | null;
  description_long?: string | StringFilter | null;
  price?: number | NumberFilter | null;
  sale_price?: number | NumberFilter | null;
  compare_at_price?: number | NumberFilter | null;
  cover_image_url?: string | StringFilter | null;
  hover_image_url?: string | StringFilter | null;
  image_url_list?: string | StringFilter | null;
  stock_quantity?: number | NumberFilter | null;
  available_sizes?: string | StringFilter | null;
  available_colors?: string | StringFilter | null;
  material_info?: string | StringFilter | null;
  care_instructions?: string | StringFilter | null;
  size_chart_url?: string | StringFilter | null;
  status?: product_status | productStatusFilter | null;
  category_id?: number | NumberFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_cart = {
  id?: number | NumberFilter | null;
  user_id?: number | NumberFilter | null;
  subtotal_price?: number | NumberFilter | null;
  total_price?: number | NumberFilter | null;
  shipping_fee?: number | NumberFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_cart_item = {
  id?: number | NumberFilter | null;
  cart_id?: number | NumberFilter | null;
  product_id?: number | NumberFilter | null;
  quantity?: number | NumberFilter | null;
  unit_price?: number | NumberFilter | null;
  selected_size?: string | StringFilter | null;
  selected_color?: string | StringFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_order = {
  id?: number | NumberFilter | null;
  order_number?: string | StringFilter | null;
  user_id?: number | NumberFilter | null;
  status?: order_status | orderStatusFilter | null;
  payment_method?: payment_method | paymentMethodFilter | null;
  total_amount?: number | NumberFilter | null;
  total_price?: number | NumberFilter | null;
  shipping_fee?: number | NumberFilter | null;
  shipping_name?: string | StringFilter | null;
  shipping_phone?: string | StringFilter | null;
  shipping_address?: string | StringFilter | null;
  shipping_city?: string | StringFilter | null;
  tracking_number?: string | StringFilter | null;
  refund_reason?: string | StringFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_order_item = {
  id?: number | NumberFilter | null;
  order_id?: number | NumberFilter | null;
  product_id?: number | NumberFilter | null;
  product_title?: string | StringFilter | null;
  product_cover_image_url?: string | StringFilter | null;
  quantity?: number | NumberFilter | null;
  unit_price?: number | NumberFilter | null;
  price_at_purchase?: number | NumberFilter | null;
  selected_size?: string | StringFilter | null;
  selected_color?: string | StringFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_user_address = {
  id?: number | NumberFilter | null;
  user_id?: number | NumberFilter | null;
  recipient_name?: string | StringFilter | null;
  phone_number?: string | StringFilter | null;
  address_line_1?: string | StringFilter | null;
  address_line_2?: string | StringFilter | null;
  city?: string | StringFilter | null;
  postal_code?: string | StringFilter | null;
  zip_code?: string | StringFilter | null;
  is_default?: boolean | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_review = {
  id?: number | NumberFilter | null;
  product_id?: number | NumberFilter | null;
  user_id?: number | NumberFilter | null;
  user_name?: string | StringFilter | null;
  rating_value?: number | NumberFilter | null;
  comment_text?: string | StringFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type filtered_promotion = {
  id?: number | NumberFilter | null;
  title?: string | StringFilter | null;
  subtitle?: string | StringFilter | null;
  background_image_url?: string | StringFilter | null;
  created_at?: Date | DateFilter | null;
  updated_at?: Date | DateFilter | null;
};

export type Entities = {
  user: {
    Create(data: user_without_PKs): Promise<user | null>;
    Get(args: user_uniqueKey): Promise<user | null>;
    GetAll(args?: filtered_user): Promise<user[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_user): Promise<user[]>;
    Count(args?: filtered_user): Promise<number>;
    Update(args: { where: user_uniqueKey; data: user_without_PKs }): Promise<user | null>;
    Delete(args: user_uniqueKey): Promise<user | null>;
  };
  admin_user: {
    Create(data: admin_user_without_PKs): Promise<admin_user | null>;
    Get(args: admin_user_uniqueKey): Promise<admin_user | null>;
    GetAll(args?: filtered_admin_user): Promise<admin_user[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_admin_user): Promise<admin_user[]>;
    Count(args?: filtered_admin_user): Promise<number>;
    Update(args: { where: admin_user_uniqueKey; data: admin_user_without_PKs }): Promise<admin_user | null>;
    Delete(args: admin_user_uniqueKey): Promise<admin_user | null>;
  };
  category: {
    Create(data: category_without_PKs): Promise<category | null>;
    Get(args: category_uniqueKey): Promise<category | null>;
    GetAll(args?: filtered_category): Promise<category[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_category): Promise<category[]>;
    Count(args?: filtered_category): Promise<number>;
    Update(args: { where: category_uniqueKey; data: category_without_PKs }): Promise<category | null>;
    Delete(args: category_uniqueKey): Promise<category | null>;
  };
  product: {
    Create(data: product_without_PKs): Promise<product | null>;
    Get(args: product_uniqueKey): Promise<product | null>;
    GetAll(args?: filtered_product): Promise<product[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_product): Promise<product[]>;
    Count(args?: filtered_product): Promise<number>;
    Update(args: { where: product_uniqueKey; data: product_without_PKs }): Promise<product | null>;
    Delete(args: product_uniqueKey): Promise<product | null>;
  };
  cart: {
    Create(data: cart_without_PKs): Promise<cart | null>;
    Get(args: cart_uniqueKey): Promise<cart | null>;
    GetAll(args?: filtered_cart): Promise<cart[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_cart): Promise<cart[]>;
    Count(args?: filtered_cart): Promise<number>;
    Update(args: { where: cart_uniqueKey; data: cart_without_PKs }): Promise<cart | null>;
    Delete(args: cart_uniqueKey): Promise<cart | null>;
  };
  cart_item: {
    Create(data: cart_item_without_PKs): Promise<cart_item | null>;
    Get(args: cart_item_uniqueKey): Promise<cart_item | null>;
    GetAll(args?: filtered_cart_item): Promise<cart_item[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_cart_item): Promise<cart_item[]>;
    Count(args?: filtered_cart_item): Promise<number>;
    Update(args: { where: cart_item_uniqueKey; data: cart_item_without_PKs }): Promise<cart_item | null>;
    Delete(args: cart_item_uniqueKey): Promise<cart_item | null>;
  };
  order: {
    Create(data: order_without_PKs): Promise<order | null>;
    Get(args: order_uniqueKey): Promise<order | null>;
    GetAll(args?: filtered_order): Promise<order[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_order): Promise<order[]>;
    Count(args?: filtered_order): Promise<number>;
    Update(args: { where: order_uniqueKey; data: order_without_PKs }): Promise<order | null>;
    Delete(args: order_uniqueKey): Promise<order | null>;
  };
  order_item: {
    Create(data: order_item_without_PKs): Promise<order_item | null>;
    Get(args: order_item_uniqueKey): Promise<order_item | null>;
    GetAll(args?: filtered_order_item): Promise<order_item[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_order_item): Promise<order_item[]>;
    Count(args?: filtered_order_item): Promise<number>;
    Update(args: { where: order_item_uniqueKey; data: order_item_without_PKs }): Promise<order_item | null>;
    Delete(args: order_item_uniqueKey): Promise<order_item | null>;
  };
  user_address: {
    Create(data: user_address_without_PKs): Promise<user_address | null>;
    Get(args: user_address_uniqueKey): Promise<user_address | null>;
    GetAll(args?: filtered_user_address): Promise<user_address[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_user_address): Promise<user_address[]>;
    Count(args?: filtered_user_address): Promise<number>;
    Update(args: { where: user_address_uniqueKey; data: user_address_without_PKs }): Promise<user_address | null>;
    Delete(args: user_address_uniqueKey): Promise<user_address | null>;
  };
  review: {
    Create(data: review_without_PKs): Promise<review | null>;
    Get(args: review_uniqueKey): Promise<review | null>;
    GetAll(args?: filtered_review): Promise<review[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_review): Promise<review[]>;
    Count(args?: filtered_review): Promise<number>;
    Update(args: { where: review_uniqueKey; data: review_without_PKs }): Promise<review | null>;
    Delete(args: review_uniqueKey): Promise<review | null>;
  };
  promotion: {
    Create(data: promotion_without_PKs): Promise<promotion | null>;
    Get(args: promotion_uniqueKey): Promise<promotion | null>;
    GetAll(args?: filtered_promotion): Promise<promotion[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_promotion): Promise<promotion[]>;
    Count(args?: filtered_promotion): Promise<number>;
    Update(args: { where: promotion_uniqueKey; data: promotion_without_PKs }): Promise<promotion | null>;
    Delete(args: promotion_uniqueKey): Promise<promotion | null>;
  };
};

