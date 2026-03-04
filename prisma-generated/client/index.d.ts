
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model admin_user
 * 
 */
export type admin_user = $Result.DefaultSelection<Prisma.$admin_userPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model cart_item
 * 
 */
export type cart_item = $Result.DefaultSelection<Prisma.$cart_itemPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>
/**
 * Model user_address
 * 
 */
export type user_address = $Result.DefaultSelection<Prisma.$user_addressPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model promotion
 * 
 */
export type promotion = $Result.DefaultSelection<Prisma.$promotionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const order_status: {
  pending: 'pending',
  confirmed: 'confirmed',
  shipped: 'shipped',
  delivered: 'delivered',
  cancelled: 'cancelled',
  refunded: 'refunded'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const payment_method: {
  cash_on_delivery: 'cash_on_delivery',
  credit_card: 'credit_card',
  bank_transfer: 'bank_transfer'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const user_role: {
  customer: 'customer',
  admin: 'admin',
  super_admin: 'super_admin'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const user_status: {
  active: 'active',
  suspended: 'suspended',
  deleted: 'deleted'
};

export type user_status = (typeof user_status)[keyof typeof user_status]


export const product_status: {
  active: 'active',
  inactive: 'inactive',
  out_of_stock: 'out_of_stock'
};

export type product_status = (typeof product_status)[keyof typeof product_status]

}

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type user_status = $Enums.user_status

export const user_status: typeof $Enums.user_status

export type product_status = $Enums.product_status

export const product_status: typeof $Enums.product_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_user`: Exposes CRUD operations for the **admin_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_users
    * const admin_users = await prisma.admin_user.findMany()
    * ```
    */
  get admin_user(): Prisma.admin_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart_item`: Exposes CRUD operations for the **cart_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_item.findMany()
    * ```
    */
  get cart_item(): Prisma.cart_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_address`: Exposes CRUD operations for the **user_address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_addresses
    * const user_addresses = await prisma.user_address.findMany()
    * ```
    */
  get user_address(): Prisma.user_addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.promotionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    admin_user: 'admin_user',
    category: 'category',
    product: 'product',
    cart: 'cart',
    cart_item: 'cart_item',
    order: 'order',
    order_item: 'order_item',
    user_address: 'user_address',
    review: 'review',
    promotion: 'promotion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin_user" | "category" | "product" | "cart" | "cart_item" | "order" | "order_item" | "user_address" | "review" | "promotion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      admin_user: {
        payload: Prisma.$admin_userPayload<ExtArgs>
        fields: Prisma.admin_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          findFirst: {
            args: Prisma.admin_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          findMany: {
            args: Prisma.admin_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>[]
          }
          create: {
            args: Prisma.admin_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          createMany: {
            args: Prisma.admin_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          update: {
            args: Prisma.admin_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          deleteMany: {
            args: Prisma.admin_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_userPayload>
          }
          aggregate: {
            args: Prisma.Admin_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_user>
          }
          groupBy: {
            args: Prisma.admin_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_userCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_userCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      cart_item: {
        payload: Prisma.$cart_itemPayload<ExtArgs>
        fields: Prisma.cart_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          findFirst: {
            args: Prisma.cart_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          findMany: {
            args: Prisma.cart_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>[]
          }
          create: {
            args: Prisma.cart_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          createMany: {
            args: Prisma.cart_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cart_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          update: {
            args: Prisma.cart_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cart_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_item>
          }
          groupBy: {
            args: Prisma.cart_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
          }
        }
      }
      user_address: {
        payload: Prisma.$user_addressPayload<ExtArgs>
        fields: Prisma.user_addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          findFirst: {
            args: Prisma.user_addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          findMany: {
            args: Prisma.user_addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>[]
          }
          create: {
            args: Prisma.user_addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          createMany: {
            args: Prisma.user_addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          update: {
            args: Prisma.user_addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          deleteMany: {
            args: Prisma.user_addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          aggregate: {
            args: Prisma.User_addressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_address>
          }
          groupBy: {
            args: Prisma.user_addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_addressGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_addressCountArgs<ExtArgs>
            result: $Utils.Optional<User_addressCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      promotion: {
        payload: Prisma.$promotionPayload<ExtArgs>
        fields: Prisma.promotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.promotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.promotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          findFirst: {
            args: Prisma.promotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.promotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          findMany: {
            args: Prisma.promotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>[]
          }
          create: {
            args: Prisma.promotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          createMany: {
            args: Prisma.promotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.promotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          update: {
            args: Prisma.promotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          deleteMany: {
            args: Prisma.promotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.promotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.promotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.promotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.promotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    admin_user?: admin_userOmit
    category?: categoryOmit
    product?: productOmit
    cart?: cartOmit
    cart_item?: cart_itemOmit
    order?: orderOmit
    order_item?: order_itemOmit
    user_address?: user_addressOmit
    review?: reviewOmit
    promotion?: promotionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
    orders: number
    user_addresses: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    user_addresses?: boolean | UserCountOutputTypeCountUser_addressesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cart_items: number
    order_items: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductCountOutputTypeCountCart_itemsArgs
    order_items?: boolean | ProductCountOutputTypeCountOrder_itemsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cart_items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    avatar_url: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    avatar_url: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    phone_number: number
    avatar_url: number
    role: number
    status: number
    last_login: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_number?: true
    avatar_url?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_number?: true
    avatar_url?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_number?: true
    avatar_url?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    phone_number: string | null
    avatar_url: string | null
    role: $Enums.user_role
    status: $Enums.user_status
    last_login: Date | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    avatar_url?: boolean
    role?: boolean
    status?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
    carts?: boolean | user$cartsArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    user_addresses?: boolean | user$user_addressesArgs<ExtArgs>
    reviews?: boolean | user$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    avatar_url?: boolean
    role?: boolean
    status?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "phone_number" | "avatar_url" | "role" | "status" | "last_login" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | user$cartsArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    user_addresses?: boolean | user$user_addressesArgs<ExtArgs>
    reviews?: boolean | user$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      carts: Prisma.$cartPayload<ExtArgs>[]
      orders: Prisma.$orderPayload<ExtArgs>[]
      user_addresses: Prisma.$user_addressPayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      phone_number: string | null
      avatar_url: string | null
      role: $Enums.user_role
      status: $Enums.user_status
      last_login: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends user$cartsArgs<ExtArgs> = {}>(args?: Subset<T, user$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends user$ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_addresses<T extends user$user_addressesArgs<ExtArgs> = {}>(args?: Subset<T, user$user_addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends user$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly avatar_url: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly status: FieldRef<"user", 'user_status'>
    readonly last_login: FieldRef<"user", 'DateTime'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.carts
   */
  export type user$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * user.orders
   */
  export type user$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user.user_addresses
   */
  export type user$user_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    where?: user_addressWhereInput
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    cursor?: user_addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user.reviews
   */
  export type user$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model admin_user
   */

  export type AggregateAdmin_user = {
    _count: Admin_userCountAggregateOutputType | null
    _avg: Admin_userAvgAggregateOutputType | null
    _sum: Admin_userSumAggregateOutputType | null
    _min: Admin_userMinAggregateOutputType | null
    _max: Admin_userMaxAggregateOutputType | null
  }

  export type Admin_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Admin_userSumAggregateOutputType = {
    id: number | null
  }

  export type Admin_userMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Admin_userMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    status: $Enums.user_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Admin_userCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Admin_userAvgAggregateInputType = {
    id?: true
  }

  export type Admin_userSumAggregateInputType = {
    id?: true
  }

  export type Admin_userMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Admin_userMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Admin_userCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Admin_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_user to aggregate.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_userOrderByWithRelationInput | admin_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_users
    **/
    _count?: true | Admin_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_userMaxAggregateInputType
  }

  export type GetAdmin_userAggregateType<T extends Admin_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_user[P]>
      : GetScalarType<T[P], AggregateAdmin_user[P]>
  }




  export type admin_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_userWhereInput
    orderBy?: admin_userOrderByWithAggregationInput | admin_userOrderByWithAggregationInput[]
    by: Admin_userScalarFieldEnum[] | Admin_userScalarFieldEnum
    having?: admin_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_userCountAggregateInputType | true
    _avg?: Admin_userAvgAggregateInputType
    _sum?: Admin_userSumAggregateInputType
    _min?: Admin_userMinAggregateInputType
    _max?: Admin_userMaxAggregateInputType
  }

  export type Admin_userGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    status: $Enums.user_status
    created_at: Date
    updated_at: Date
    _count: Admin_userCountAggregateOutputType | null
    _avg: Admin_userAvgAggregateOutputType | null
    _sum: Admin_userSumAggregateOutputType | null
    _min: Admin_userMinAggregateOutputType | null
    _max: Admin_userMaxAggregateOutputType | null
  }

  type GetAdmin_userGroupByPayload<T extends admin_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_userGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_userGroupByOutputType[P]>
        }
      >
    >


  export type admin_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin_user"]>



  export type admin_userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type admin_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["admin_user"]>

  export type $admin_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.user_role
      status: $Enums.user_status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admin_user"]>
    composites: {}
  }

  type admin_userGetPayload<S extends boolean | null | undefined | admin_userDefaultArgs> = $Result.GetResult<Prisma.$admin_userPayload, S>

  type admin_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_userCountAggregateInputType | true
    }

  export interface admin_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_user'], meta: { name: 'admin_user' } }
    /**
     * Find zero or one Admin_user that matches the filter.
     * @param {admin_userFindUniqueArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_userFindUniqueArgs>(args: SelectSubset<T, admin_userFindUniqueArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_userFindUniqueOrThrowArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_userFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindFirstArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_userFindFirstArgs>(args?: SelectSubset<T, admin_userFindFirstArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindFirstOrThrowArgs} args - Arguments to find a Admin_user
     * @example
     * // Get one Admin_user
     * const admin_user = await prisma.admin_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_userFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_users
     * const admin_users = await prisma.admin_user.findMany()
     * 
     * // Get first 10 Admin_users
     * const admin_users = await prisma.admin_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_userWithIdOnly = await prisma.admin_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_userFindManyArgs>(args?: SelectSubset<T, admin_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_user.
     * @param {admin_userCreateArgs} args - Arguments to create a Admin_user.
     * @example
     * // Create one Admin_user
     * const Admin_user = await prisma.admin_user.create({
     *   data: {
     *     // ... data to create a Admin_user
     *   }
     * })
     * 
     */
    create<T extends admin_userCreateArgs>(args: SelectSubset<T, admin_userCreateArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_users.
     * @param {admin_userCreateManyArgs} args - Arguments to create many Admin_users.
     * @example
     * // Create many Admin_users
     * const admin_user = await prisma.admin_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_userCreateManyArgs>(args?: SelectSubset<T, admin_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_user.
     * @param {admin_userDeleteArgs} args - Arguments to delete one Admin_user.
     * @example
     * // Delete one Admin_user
     * const Admin_user = await prisma.admin_user.delete({
     *   where: {
     *     // ... filter to delete one Admin_user
     *   }
     * })
     * 
     */
    delete<T extends admin_userDeleteArgs>(args: SelectSubset<T, admin_userDeleteArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_user.
     * @param {admin_userUpdateArgs} args - Arguments to update one Admin_user.
     * @example
     * // Update one Admin_user
     * const admin_user = await prisma.admin_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_userUpdateArgs>(args: SelectSubset<T, admin_userUpdateArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_users.
     * @param {admin_userDeleteManyArgs} args - Arguments to filter Admin_users to delete.
     * @example
     * // Delete a few Admin_users
     * const { count } = await prisma.admin_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_userDeleteManyArgs>(args?: SelectSubset<T, admin_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_users
     * const admin_user = await prisma.admin_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_userUpdateManyArgs>(args: SelectSubset<T, admin_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_user.
     * @param {admin_userUpsertArgs} args - Arguments to update or create a Admin_user.
     * @example
     * // Update or create a Admin_user
     * const admin_user = await prisma.admin_user.upsert({
     *   create: {
     *     // ... data to create a Admin_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_user we want to update
     *   }
     * })
     */
    upsert<T extends admin_userUpsertArgs>(args: SelectSubset<T, admin_userUpsertArgs<ExtArgs>>): Prisma__admin_userClient<$Result.GetResult<Prisma.$admin_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userCountArgs} args - Arguments to filter Admin_users to count.
     * @example
     * // Count the number of Admin_users
     * const count = await prisma.admin_user.count({
     *   where: {
     *     // ... the filter for the Admin_users we want to count
     *   }
     * })
    **/
    count<T extends admin_userCountArgs>(
      args?: Subset<T, admin_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_userAggregateArgs>(args: Subset<T, Admin_userAggregateArgs>): Prisma.PrismaPromise<GetAdmin_userAggregateType<T>>

    /**
     * Group by Admin_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_userGroupByArgs['orderBy'] }
        : { orderBy?: admin_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_user model
   */
  readonly fields: admin_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_user model
   */
  interface admin_userFieldRefs {
    readonly id: FieldRef<"admin_user", 'Int'>
    readonly username: FieldRef<"admin_user", 'String'>
    readonly email: FieldRef<"admin_user", 'String'>
    readonly password: FieldRef<"admin_user", 'String'>
    readonly role: FieldRef<"admin_user", 'user_role'>
    readonly status: FieldRef<"admin_user", 'user_status'>
    readonly created_at: FieldRef<"admin_user", 'DateTime'>
    readonly updated_at: FieldRef<"admin_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin_user findUnique
   */
  export type admin_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter, which admin_user to fetch.
     */
    where: admin_userWhereUniqueInput
  }

  /**
   * admin_user findUniqueOrThrow
   */
  export type admin_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter, which admin_user to fetch.
     */
    where: admin_userWhereUniqueInput
  }

  /**
   * admin_user findFirst
   */
  export type admin_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter, which admin_user to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_userOrderByWithRelationInput | admin_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_userScalarFieldEnum | Admin_userScalarFieldEnum[]
  }

  /**
   * admin_user findFirstOrThrow
   */
  export type admin_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter, which admin_user to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_userOrderByWithRelationInput | admin_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_userScalarFieldEnum | Admin_userScalarFieldEnum[]
  }

  /**
   * admin_user findMany
   */
  export type admin_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_userOrderByWithRelationInput | admin_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_users.
     */
    cursor?: admin_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    distinct?: Admin_userScalarFieldEnum | Admin_userScalarFieldEnum[]
  }

  /**
   * admin_user create
   */
  export type admin_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_user.
     */
    data: XOR<admin_userCreateInput, admin_userUncheckedCreateInput>
  }

  /**
   * admin_user createMany
   */
  export type admin_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_users.
     */
    data: admin_userCreateManyInput | admin_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_user update
   */
  export type admin_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_user.
     */
    data: XOR<admin_userUpdateInput, admin_userUncheckedUpdateInput>
    /**
     * Choose, which admin_user to update.
     */
    where: admin_userWhereUniqueInput
  }

  /**
   * admin_user updateMany
   */
  export type admin_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_userUpdateManyMutationInput, admin_userUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_userWhereInput
    /**
     * Limit how many admin_users to update.
     */
    limit?: number
  }

  /**
   * admin_user upsert
   */
  export type admin_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_user to update in case it exists.
     */
    where: admin_userWhereUniqueInput
    /**
     * In case the admin_user found by the `where` argument doesn't exist, create a new admin_user with this data.
     */
    create: XOR<admin_userCreateInput, admin_userUncheckedCreateInput>
    /**
     * In case the admin_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_userUpdateInput, admin_userUncheckedUpdateInput>
  }

  /**
   * admin_user delete
   */
  export type admin_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
    /**
     * Filter which admin_user to delete.
     */
    where: admin_userWhereUniqueInput
  }

  /**
   * admin_user deleteMany
   */
  export type admin_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_users to delete
     */
    where?: admin_userWhereInput
    /**
     * Limit how many admin_users to delete.
     */
    limit?: number
  }

  /**
   * admin_user without action
   */
  export type admin_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_user
     */
    select?: admin_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_user
     */
    omit?: admin_userOmit<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    cover_image_url: string | null
    is_visible: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    cover_image_url: string | null
    is_visible: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    cover_image_url: number
    is_visible: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    cover_image_url?: true
    is_visible?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    cover_image_url?: true
    is_visible?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    cover_image_url?: true
    is_visible?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    cover_image_url: string | null
    is_visible: boolean
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cover_image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cover_image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "cover_image_url" | "is_visible" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      products: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      cover_image_url: string | null
      is_visible: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends category$productsArgs<ExtArgs> = {}>(args?: Subset<T, category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly slug: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly cover_image_url: FieldRef<"category", 'String'>
    readonly is_visible: FieldRef<"category", 'Boolean'>
    readonly created_at: FieldRef<"category", 'DateTime'>
    readonly updated_at: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.products
   */
  export type category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    sale_price: Decimal | null
    compare_at_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    sale_price: Decimal | null
    compare_at_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    sku: string | null
    description_short: string | null
    description_long: string | null
    price: Decimal | null
    sale_price: Decimal | null
    compare_at_price: Decimal | null
    cover_image_url: string | null
    hover_image_url: string | null
    image_url_list: string | null
    stock_quantity: number | null
    available_sizes: string | null
    available_colors: string | null
    material_info: string | null
    care_instructions: string | null
    size_chart_url: string | null
    status: $Enums.product_status | null
    category_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    sku: string | null
    description_short: string | null
    description_long: string | null
    price: Decimal | null
    sale_price: Decimal | null
    compare_at_price: Decimal | null
    cover_image_url: string | null
    hover_image_url: string | null
    image_url_list: string | null
    stock_quantity: number | null
    available_sizes: string | null
    available_colors: string | null
    material_info: string | null
    care_instructions: string | null
    size_chart_url: string | null
    status: $Enums.product_status | null
    category_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    name: number
    sku: number
    description_short: number
    description_long: number
    price: number
    sale_price: number
    compare_at_price: number
    cover_image_url: number
    hover_image_url: number
    image_url_list: number
    stock_quantity: number
    available_sizes: number
    available_colors: number
    material_info: number
    care_instructions: number
    size_chart_url: number
    status: number
    category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    sale_price?: true
    compare_at_price?: true
    stock_quantity?: true
    category_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    sale_price?: true
    compare_at_price?: true
    stock_quantity?: true
    category_id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    name?: true
    sku?: true
    description_short?: true
    description_long?: true
    price?: true
    sale_price?: true
    compare_at_price?: true
    cover_image_url?: true
    hover_image_url?: true
    image_url_list?: true
    stock_quantity?: true
    available_sizes?: true
    available_colors?: true
    material_info?: true
    care_instructions?: true
    size_chart_url?: true
    status?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    name?: true
    sku?: true
    description_short?: true
    description_long?: true
    price?: true
    sale_price?: true
    compare_at_price?: true
    cover_image_url?: true
    hover_image_url?: true
    image_url_list?: true
    stock_quantity?: true
    available_sizes?: true
    available_colors?: true
    material_info?: true
    care_instructions?: true
    size_chart_url?: true
    status?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    name?: true
    sku?: true
    description_short?: true
    description_long?: true
    price?: true
    sale_price?: true
    compare_at_price?: true
    cover_image_url?: true
    hover_image_url?: true
    image_url_list?: true
    stock_quantity?: true
    available_sizes?: true
    available_colors?: true
    material_info?: true
    care_instructions?: true
    size_chart_url?: true
    status?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title: string
    name: string
    sku: string
    description_short: string | null
    description_long: string | null
    price: Decimal
    sale_price: Decimal | null
    compare_at_price: Decimal | null
    cover_image_url: string | null
    hover_image_url: string | null
    image_url_list: string | null
    stock_quantity: number
    available_sizes: string | null
    available_colors: string | null
    material_info: string | null
    care_instructions: string | null
    size_chart_url: string | null
    status: $Enums.product_status
    category_id: number
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    description_short?: boolean
    description_long?: boolean
    price?: boolean
    sale_price?: boolean
    compare_at_price?: boolean
    cover_image_url?: boolean
    hover_image_url?: boolean
    image_url_list?: boolean
    stock_quantity?: boolean
    available_sizes?: boolean
    available_colors?: boolean
    material_info?: boolean
    care_instructions?: boolean
    size_chart_url?: boolean
    status?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    cart_items?: boolean | product$cart_itemsArgs<ExtArgs>
    order_items?: boolean | product$order_itemsArgs<ExtArgs>
    reviews?: boolean | product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    description_short?: boolean
    description_long?: boolean
    price?: boolean
    sale_price?: boolean
    compare_at_price?: boolean
    cover_image_url?: boolean
    hover_image_url?: boolean
    image_url_list?: boolean
    stock_quantity?: boolean
    available_sizes?: boolean
    available_colors?: boolean
    material_info?: boolean
    care_instructions?: boolean
    size_chart_url?: boolean
    status?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "name" | "sku" | "description_short" | "description_long" | "price" | "sale_price" | "compare_at_price" | "cover_image_url" | "hover_image_url" | "image_url_list" | "stock_quantity" | "available_sizes" | "available_colors" | "material_info" | "care_instructions" | "size_chart_url" | "status" | "category_id" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    cart_items?: boolean | product$cart_itemsArgs<ExtArgs>
    order_items?: boolean | product$order_itemsArgs<ExtArgs>
    reviews?: boolean | product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      cart_items: Prisma.$cart_itemPayload<ExtArgs>[]
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      name: string
      sku: string
      description_short: string | null
      description_long: string | null
      price: Prisma.Decimal
      sale_price: Prisma.Decimal | null
      compare_at_price: Prisma.Decimal | null
      cover_image_url: string | null
      hover_image_url: string | null
      image_url_list: string | null
      stock_quantity: number
      available_sizes: string | null
      available_colors: string | null
      material_info: string | null
      care_instructions: string | null
      size_chart_url: string | null
      status: $Enums.product_status
      category_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends product$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends product$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly title: FieldRef<"product", 'String'>
    readonly name: FieldRef<"product", 'String'>
    readonly sku: FieldRef<"product", 'String'>
    readonly description_short: FieldRef<"product", 'String'>
    readonly description_long: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Decimal'>
    readonly sale_price: FieldRef<"product", 'Decimal'>
    readonly compare_at_price: FieldRef<"product", 'Decimal'>
    readonly cover_image_url: FieldRef<"product", 'String'>
    readonly hover_image_url: FieldRef<"product", 'String'>
    readonly image_url_list: FieldRef<"product", 'String'>
    readonly stock_quantity: FieldRef<"product", 'Int'>
    readonly available_sizes: FieldRef<"product", 'String'>
    readonly available_colors: FieldRef<"product", 'String'>
    readonly material_info: FieldRef<"product", 'String'>
    readonly care_instructions: FieldRef<"product", 'String'>
    readonly size_chart_url: FieldRef<"product", 'String'>
    readonly status: FieldRef<"product", 'product_status'>
    readonly category_id: FieldRef<"product", 'Int'>
    readonly created_at: FieldRef<"product", 'DateTime'>
    readonly updated_at: FieldRef<"product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.cart_items
   */
  export type product$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    where?: cart_itemWhereInput
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    cursor?: cart_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemScalarFieldEnum | Cart_itemScalarFieldEnum[]
  }

  /**
   * product.order_items
   */
  export type product$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * product.reviews
   */
  export type product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal_price: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal_price: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal_price: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal_price: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    subtotal_price: number
    total_price: number
    shipping_fee: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    user_id?: true
    subtotal_price?: true
    total_price?: true
    shipping_fee?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    user_id?: true
    subtotal_price?: true
    total_price?: true
    shipping_fee?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
    subtotal_price?: true
    total_price?: true
    shipping_fee?: true
    created_at?: true
    updated_at?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
    subtotal_price?: true
    total_price?: true
    shipping_fee?: true
    created_at?: true
    updated_at?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    subtotal_price?: true
    total_price?: true
    shipping_fee?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    user_id: number
    subtotal_price: Decimal
    total_price: Decimal
    shipping_fee: Decimal
    created_at: Date
    updated_at: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subtotal_price?: boolean
    total_price?: boolean
    shipping_fee?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    cart_items?: boolean | cart$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type cartSelectScalar = {
    id?: boolean
    user_id?: boolean
    subtotal_price?: boolean
    total_price?: boolean
    shipping_fee?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subtotal_price" | "total_price" | "shipping_fee" | "created_at" | "updated_at", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    cart_items?: boolean | cart$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      cart_items: Prisma.$cart_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      subtotal_price: Prisma.Decimal
      total_price: Prisma.Decimal
      shipping_fee: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends cart$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, cart$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly user_id: FieldRef<"cart", 'Int'>
    readonly subtotal_price: FieldRef<"cart", 'Decimal'>
    readonly total_price: FieldRef<"cart", 'Decimal'>
    readonly shipping_fee: FieldRef<"cart", 'Decimal'>
    readonly created_at: FieldRef<"cart", 'DateTime'>
    readonly updated_at: FieldRef<"cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart.cart_items
   */
  export type cart$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    where?: cart_itemWhereInput
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    cursor?: cart_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemScalarFieldEnum | Cart_itemScalarFieldEnum[]
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model cart_item
   */

  export type AggregateCart_item = {
    _count: Cart_itemCountAggregateOutputType | null
    _avg: Cart_itemAvgAggregateOutputType | null
    _sum: Cart_itemSumAggregateOutputType | null
    _min: Cart_itemMinAggregateOutputType | null
    _max: Cart_itemMaxAggregateOutputType | null
  }

  export type Cart_itemAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Cart_itemSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Cart_itemMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    selected_size: string | null
    selected_color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Cart_itemMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    selected_size: string | null
    selected_color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Cart_itemCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    unit_price: number
    selected_size: number
    selected_color: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Cart_itemAvgAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Cart_itemSumAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Cart_itemMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
  }

  export type Cart_itemMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
  }

  export type Cart_itemCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Cart_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_item to aggregate.
     */
    where?: cart_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemMaxAggregateInputType
  }

  export type GetCart_itemAggregateType<T extends Cart_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_item[P]>
      : GetScalarType<T[P], AggregateCart_item[P]>
  }




  export type cart_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemWhereInput
    orderBy?: cart_itemOrderByWithAggregationInput | cart_itemOrderByWithAggregationInput[]
    by: Cart_itemScalarFieldEnum[] | Cart_itemScalarFieldEnum
    having?: cart_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemCountAggregateInputType | true
    _avg?: Cart_itemAvgAggregateInputType
    _sum?: Cart_itemSumAggregateInputType
    _min?: Cart_itemMinAggregateInputType
    _max?: Cart_itemMaxAggregateInputType
  }

  export type Cart_itemGroupByOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    unit_price: Decimal
    selected_size: string | null
    selected_color: string | null
    created_at: Date
    updated_at: Date
    _count: Cart_itemCountAggregateOutputType | null
    _avg: Cart_itemAvgAggregateOutputType | null
    _sum: Cart_itemSumAggregateOutputType | null
    _min: Cart_itemMinAggregateOutputType | null
    _max: Cart_itemMaxAggregateOutputType | null
  }

  type GetCart_itemGroupByPayload<T extends cart_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    selected_size?: boolean
    selected_color?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_item"]>



  export type cart_itemSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    selected_size?: boolean
    selected_color?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cart_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "quantity" | "unit_price" | "selected_size" | "selected_color" | "created_at" | "updated_at", ExtArgs["result"]["cart_item"]>
  export type cart_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $cart_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_item"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number
      product_id: number
      quantity: number
      unit_price: Prisma.Decimal
      selected_size: string | null
      selected_color: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cart_item"]>
    composites: {}
  }

  type cart_itemGetPayload<S extends boolean | null | undefined | cart_itemDefaultArgs> = $Result.GetResult<Prisma.$cart_itemPayload, S>

  type cart_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemCountAggregateInputType | true
    }

  export interface cart_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_item'], meta: { name: 'cart_item' } }
    /**
     * Find zero or one Cart_item that matches the filter.
     * @param {cart_itemFindUniqueArgs} args - Arguments to find a Cart_item
     * @example
     * // Get one Cart_item
     * const cart_item = await prisma.cart_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemFindUniqueArgs>(args: SelectSubset<T, cart_itemFindUniqueArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemFindUniqueOrThrowArgs} args - Arguments to find a Cart_item
     * @example
     * // Get one Cart_item
     * const cart_item = await prisma.cart_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemFindFirstArgs} args - Arguments to find a Cart_item
     * @example
     * // Get one Cart_item
     * const cart_item = await prisma.cart_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemFindFirstArgs>(args?: SelectSubset<T, cart_itemFindFirstArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemFindFirstOrThrowArgs} args - Arguments to find a Cart_item
     * @example
     * // Get one Cart_item
     * const cart_item = await prisma.cart_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_item.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_itemWithIdOnly = await prisma.cart_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_itemFindManyArgs>(args?: SelectSubset<T, cart_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_item.
     * @param {cart_itemCreateArgs} args - Arguments to create a Cart_item.
     * @example
     * // Create one Cart_item
     * const Cart_item = await prisma.cart_item.create({
     *   data: {
     *     // ... data to create a Cart_item
     *   }
     * })
     * 
     */
    create<T extends cart_itemCreateArgs>(args: SelectSubset<T, cart_itemCreateArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_item = await prisma.cart_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemCreateManyArgs>(args?: SelectSubset<T, cart_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart_item.
     * @param {cart_itemDeleteArgs} args - Arguments to delete one Cart_item.
     * @example
     * // Delete one Cart_item
     * const Cart_item = await prisma.cart_item.delete({
     *   where: {
     *     // ... filter to delete one Cart_item
     *   }
     * })
     * 
     */
    delete<T extends cart_itemDeleteArgs>(args: SelectSubset<T, cart_itemDeleteArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_item.
     * @param {cart_itemUpdateArgs} args - Arguments to update one Cart_item.
     * @example
     * // Update one Cart_item
     * const cart_item = await prisma.cart_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemUpdateArgs>(args: SelectSubset<T, cart_itemUpdateArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemDeleteManyArgs>(args?: SelectSubset<T, cart_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_item = await prisma.cart_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemUpdateManyArgs>(args: SelectSubset<T, cart_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart_item.
     * @param {cart_itemUpsertArgs} args - Arguments to update or create a Cart_item.
     * @example
     * // Update or create a Cart_item
     * const cart_item = await prisma.cart_item.upsert({
     *   create: {
     *     // ... data to create a Cart_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_item we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemUpsertArgs>(args: SelectSubset<T, cart_itemUpsertArgs<ExtArgs>>): Prisma__cart_itemClient<$Result.GetResult<Prisma.$cart_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_item.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemCountArgs>(
      args?: Subset<T, cart_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_itemAggregateArgs>(args: Subset<T, Cart_itemAggregateArgs>): Prisma.PrismaPromise<GetCart_itemAggregateType<T>>

    /**
     * Group by Cart_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cart_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cart_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_item model
   */
  readonly fields: cart_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart_item model
   */
  interface cart_itemFieldRefs {
    readonly id: FieldRef<"cart_item", 'Int'>
    readonly cart_id: FieldRef<"cart_item", 'Int'>
    readonly product_id: FieldRef<"cart_item", 'Int'>
    readonly quantity: FieldRef<"cart_item", 'Int'>
    readonly unit_price: FieldRef<"cart_item", 'Decimal'>
    readonly selected_size: FieldRef<"cart_item", 'String'>
    readonly selected_color: FieldRef<"cart_item", 'String'>
    readonly created_at: FieldRef<"cart_item", 'DateTime'>
    readonly updated_at: FieldRef<"cart_item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart_item findUnique
   */
  export type cart_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter, which cart_item to fetch.
     */
    where: cart_itemWhereUniqueInput
  }

  /**
   * cart_item findUniqueOrThrow
   */
  export type cart_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter, which cart_item to fetch.
     */
    where: cart_itemWhereUniqueInput
  }

  /**
   * cart_item findFirst
   */
  export type cart_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter, which cart_item to fetch.
     */
    where?: cart_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemScalarFieldEnum | Cart_itemScalarFieldEnum[]
  }

  /**
   * cart_item findFirstOrThrow
   */
  export type cart_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter, which cart_item to fetch.
     */
    where?: cart_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemScalarFieldEnum | Cart_itemScalarFieldEnum[]
  }

  /**
   * cart_item findMany
   */
  export type cart_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemOrderByWithRelationInput | cart_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    distinct?: Cart_itemScalarFieldEnum | Cart_itemScalarFieldEnum[]
  }

  /**
   * cart_item create
   */
  export type cart_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_item.
     */
    data: XOR<cart_itemCreateInput, cart_itemUncheckedCreateInput>
  }

  /**
   * cart_item createMany
   */
  export type cart_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemCreateManyInput | cart_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_item update
   */
  export type cart_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_item.
     */
    data: XOR<cart_itemUpdateInput, cart_itemUncheckedUpdateInput>
    /**
     * Choose, which cart_item to update.
     */
    where: cart_itemWhereUniqueInput
  }

  /**
   * cart_item updateMany
   */
  export type cart_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemUpdateManyMutationInput, cart_itemUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_item upsert
   */
  export type cart_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_item to update in case it exists.
     */
    where: cart_itemWhereUniqueInput
    /**
     * In case the cart_item found by the `where` argument doesn't exist, create a new cart_item with this data.
     */
    create: XOR<cart_itemCreateInput, cart_itemUncheckedCreateInput>
    /**
     * In case the cart_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemUpdateInput, cart_itemUncheckedUpdateInput>
  }

  /**
   * cart_item delete
   */
  export type cart_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
    /**
     * Filter which cart_item to delete.
     */
    where: cart_itemWhereUniqueInput
  }

  /**
   * cart_item deleteMany
   */
  export type cart_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_item without action
   */
  export type cart_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_item
     */
    select?: cart_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_item
     */
    omit?: cart_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    order_number: string | null
    user_id: number | null
    status: $Enums.order_status | null
    payment_method: $Enums.payment_method | null
    total_amount: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    shipping_name: string | null
    shipping_phone: string | null
    shipping_address: string | null
    shipping_city: string | null
    tracking_number: string | null
    refund_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    order_number: string | null
    user_id: number | null
    status: $Enums.order_status | null
    payment_method: $Enums.payment_method | null
    total_amount: Decimal | null
    total_price: Decimal | null
    shipping_fee: Decimal | null
    shipping_name: string | null
    shipping_phone: string | null
    shipping_address: string | null
    shipping_city: string | null
    tracking_number: string | null
    refund_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    order_number: number
    user_id: number
    status: number
    payment_method: number
    total_amount: number
    total_price: number
    shipping_fee: number
    shipping_name: number
    shipping_phone: number
    shipping_address: number
    shipping_city: number
    tracking_number: number
    refund_reason: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    total_price?: true
    shipping_fee?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    total_price?: true
    shipping_fee?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    order_number?: true
    user_id?: true
    status?: true
    payment_method?: true
    total_amount?: true
    total_price?: true
    shipping_fee?: true
    shipping_name?: true
    shipping_phone?: true
    shipping_address?: true
    shipping_city?: true
    tracking_number?: true
    refund_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    order_number?: true
    user_id?: true
    status?: true
    payment_method?: true
    total_amount?: true
    total_price?: true
    shipping_fee?: true
    shipping_name?: true
    shipping_phone?: true
    shipping_address?: true
    shipping_city?: true
    tracking_number?: true
    refund_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    order_number?: true
    user_id?: true
    status?: true
    payment_method?: true
    total_amount?: true
    total_price?: true
    shipping_fee?: true
    shipping_name?: true
    shipping_phone?: true
    shipping_address?: true
    shipping_city?: true
    tracking_number?: true
    refund_reason?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    order_number: string
    user_id: number
    status: $Enums.order_status
    payment_method: $Enums.payment_method
    total_amount: Decimal
    total_price: Decimal
    shipping_fee: Decimal
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city: string | null
    tracking_number: string | null
    refund_reason: string | null
    created_at: Date
    updated_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_number?: boolean
    user_id?: boolean
    status?: boolean
    payment_method?: boolean
    total_amount?: boolean
    total_price?: boolean
    shipping_fee?: boolean
    shipping_name?: boolean
    shipping_phone?: boolean
    shipping_address?: boolean
    shipping_city?: boolean
    tracking_number?: boolean
    refund_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type orderSelectScalar = {
    id?: boolean
    order_number?: boolean
    user_id?: boolean
    status?: boolean
    payment_method?: boolean
    total_amount?: boolean
    total_price?: boolean
    shipping_fee?: boolean
    shipping_name?: boolean
    shipping_phone?: boolean
    shipping_address?: boolean
    shipping_city?: boolean
    tracking_number?: boolean
    refund_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_number" | "user_id" | "status" | "payment_method" | "total_amount" | "total_price" | "shipping_fee" | "shipping_name" | "shipping_phone" | "shipping_address" | "shipping_city" | "tracking_number" | "refund_reason" | "created_at" | "updated_at", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_number: string
      user_id: number
      status: $Enums.order_status
      payment_method: $Enums.payment_method
      total_amount: Prisma.Decimal
      total_price: Prisma.Decimal
      shipping_fee: Prisma.Decimal
      shipping_name: string
      shipping_phone: string
      shipping_address: string
      shipping_city: string | null
      tracking_number: string | null
      refund_reason: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_items<T extends order$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'Int'>
    readonly order_number: FieldRef<"order", 'String'>
    readonly user_id: FieldRef<"order", 'Int'>
    readonly status: FieldRef<"order", 'order_status'>
    readonly payment_method: FieldRef<"order", 'payment_method'>
    readonly total_amount: FieldRef<"order", 'Decimal'>
    readonly total_price: FieldRef<"order", 'Decimal'>
    readonly shipping_fee: FieldRef<"order", 'Decimal'>
    readonly shipping_name: FieldRef<"order", 'String'>
    readonly shipping_phone: FieldRef<"order", 'String'>
    readonly shipping_address: FieldRef<"order", 'String'>
    readonly shipping_city: FieldRef<"order", 'String'>
    readonly tracking_number: FieldRef<"order", 'String'>
    readonly refund_reason: FieldRef<"order", 'String'>
    readonly created_at: FieldRef<"order", 'DateTime'>
    readonly updated_at: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.order_items
   */
  export type order$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    price_at_purchase: Decimal | null
  }

  export type Order_itemSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    price_at_purchase: Decimal | null
  }

  export type Order_itemMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    product_title: string | null
    product_cover_image_url: string | null
    quantity: number | null
    unit_price: Decimal | null
    price_at_purchase: Decimal | null
    selected_size: string | null
    selected_color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Order_itemMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    product_title: string | null
    product_cover_image_url: string | null
    quantity: number | null
    unit_price: Decimal | null
    price_at_purchase: Decimal | null
    selected_size: string | null
    selected_color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Order_itemCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    product_title: number
    product_cover_image_url: number
    quantity: number
    unit_price: number
    price_at_purchase: number
    selected_size: number
    selected_color: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    price_at_purchase?: true
  }

  export type Order_itemSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    price_at_purchase?: true
  }

  export type Order_itemMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_title?: true
    product_cover_image_url?: true
    quantity?: true
    unit_price?: true
    price_at_purchase?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
  }

  export type Order_itemMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_title?: true
    product_cover_image_url?: true
    quantity?: true
    unit_price?: true
    price_at_purchase?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
  }

  export type Order_itemCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_title?: true
    product_cover_image_url?: true
    quantity?: true
    unit_price?: true
    price_at_purchase?: true
    selected_size?: true
    selected_color?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    product_title: string
    product_cover_image_url: string | null
    quantity: number
    unit_price: Decimal
    price_at_purchase: Decimal
    selected_size: string | null
    selected_color: string | null
    created_at: Date
    updated_at: Date
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    product_title?: boolean
    product_cover_image_url?: boolean
    quantity?: boolean
    unit_price?: boolean
    price_at_purchase?: boolean
    selected_size?: boolean
    selected_color?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>



  export type order_itemSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    product_title?: boolean
    product_cover_image_url?: boolean
    quantity?: boolean
    unit_price?: boolean
    price_at_purchase?: boolean
    selected_size?: boolean
    selected_color?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type order_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "product_title" | "product_cover_image_url" | "quantity" | "unit_price" | "price_at_purchase" | "selected_size" | "selected_color" | "created_at" | "updated_at", ExtArgs["result"]["order_item"]>
  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      product_title: string
      product_cover_image_url: string | null
      quantity: number
      unit_price: Prisma.Decimal
      price_at_purchase: Prisma.Decimal
      selected_size: string | null
      selected_color: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemFindUniqueArgs>(args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemFindFirstArgs>(args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemWithIdOnly = await prisma.order_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemFindManyArgs>(args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
     */
    create<T extends order_itemCreateArgs>(args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemCreateManyArgs>(args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
     */
    delete<T extends order_itemDeleteArgs>(args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemUpdateArgs>(args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemDeleteManyArgs>(args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemUpdateManyArgs>(args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     */
    upsert<T extends order_itemUpsertArgs>(args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_item model
   */
  interface order_itemFieldRefs {
    readonly id: FieldRef<"order_item", 'Int'>
    readonly order_id: FieldRef<"order_item", 'Int'>
    readonly product_id: FieldRef<"order_item", 'Int'>
    readonly product_title: FieldRef<"order_item", 'String'>
    readonly product_cover_image_url: FieldRef<"order_item", 'String'>
    readonly quantity: FieldRef<"order_item", 'Int'>
    readonly unit_price: FieldRef<"order_item", 'Decimal'>
    readonly price_at_purchase: FieldRef<"order_item", 'Decimal'>
    readonly selected_size: FieldRef<"order_item", 'String'>
    readonly selected_color: FieldRef<"order_item", 'String'>
    readonly created_at: FieldRef<"order_item", 'DateTime'>
    readonly updated_at: FieldRef<"order_item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
  }


  /**
   * Model user_address
   */

  export type AggregateUser_address = {
    _count: User_addressCountAggregateOutputType | null
    _avg: User_addressAvgAggregateOutputType | null
    _sum: User_addressSumAggregateOutputType | null
    _min: User_addressMinAggregateOutputType | null
    _max: User_addressMaxAggregateOutputType | null
  }

  export type User_addressAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_addressSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_addressMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    recipient_name: string | null
    phone_number: string | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    postal_code: string | null
    zip_code: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_addressMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    recipient_name: string | null
    phone_number: string | null
    address_line_1: string | null
    address_line_2: string | null
    city: string | null
    postal_code: string | null
    zip_code: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_addressCountAggregateOutputType = {
    id: number
    user_id: number
    recipient_name: number
    phone_number: number
    address_line_1: number
    address_line_2: number
    city: number
    postal_code: number
    zip_code: number
    is_default: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_addressAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_addressSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_addressMinAggregateInputType = {
    id?: true
    user_id?: true
    recipient_name?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    postal_code?: true
    zip_code?: true
    is_default?: true
    created_at?: true
    updated_at?: true
  }

  export type User_addressMaxAggregateInputType = {
    id?: true
    user_id?: true
    recipient_name?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    postal_code?: true
    zip_code?: true
    is_default?: true
    created_at?: true
    updated_at?: true
  }

  export type User_addressCountAggregateInputType = {
    id?: true
    user_id?: true
    recipient_name?: true
    phone_number?: true
    address_line_1?: true
    address_line_2?: true
    city?: true
    postal_code?: true
    zip_code?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_addressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_address to aggregate.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_addresses
    **/
    _count?: true | User_addressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_addressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_addressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_addressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_addressMaxAggregateInputType
  }

  export type GetUser_addressAggregateType<T extends User_addressAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_address]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_address[P]>
      : GetScalarType<T[P], AggregateUser_address[P]>
  }




  export type user_addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressWhereInput
    orderBy?: user_addressOrderByWithAggregationInput | user_addressOrderByWithAggregationInput[]
    by: User_addressScalarFieldEnum[] | User_addressScalarFieldEnum
    having?: user_addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_addressCountAggregateInputType | true
    _avg?: User_addressAvgAggregateInputType
    _sum?: User_addressSumAggregateInputType
    _min?: User_addressMinAggregateInputType
    _max?: User_addressMaxAggregateInputType
  }

  export type User_addressGroupByOutputType = {
    id: number
    user_id: number
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2: string | null
    city: string
    postal_code: string | null
    zip_code: string | null
    is_default: boolean
    created_at: Date
    updated_at: Date
    _count: User_addressCountAggregateOutputType | null
    _avg: User_addressAvgAggregateOutputType | null
    _sum: User_addressSumAggregateOutputType | null
    _min: User_addressMinAggregateOutputType | null
    _max: User_addressMaxAggregateOutputType | null
  }

  type GetUser_addressGroupByPayload<T extends user_addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_addressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_addressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_addressGroupByOutputType[P]>
            : GetScalarType<T[P], User_addressGroupByOutputType[P]>
        }
      >
    >


  export type user_addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    recipient_name?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    postal_code?: boolean
    zip_code?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_address"]>



  export type user_addressSelectScalar = {
    id?: boolean
    user_id?: boolean
    recipient_name?: boolean
    phone_number?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    city?: boolean
    postal_code?: boolean
    zip_code?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "recipient_name" | "phone_number" | "address_line_1" | "address_line_2" | "city" | "postal_code" | "zip_code" | "is_default" | "created_at" | "updated_at", ExtArgs["result"]["user_address"]>
  export type user_addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_address"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      recipient_name: string
      phone_number: string
      address_line_1: string
      address_line_2: string | null
      city: string
      postal_code: string | null
      zip_code: string | null
      is_default: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_address"]>
    composites: {}
  }

  type user_addressGetPayload<S extends boolean | null | undefined | user_addressDefaultArgs> = $Result.GetResult<Prisma.$user_addressPayload, S>

  type user_addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_addressCountAggregateInputType | true
    }

  export interface user_addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_address'], meta: { name: 'user_address' } }
    /**
     * Find zero or one User_address that matches the filter.
     * @param {user_addressFindUniqueArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_addressFindUniqueArgs>(args: SelectSubset<T, user_addressFindUniqueArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_addressFindUniqueOrThrowArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_addressFindUniqueOrThrowArgs>(args: SelectSubset<T, user_addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindFirstArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_addressFindFirstArgs>(args?: SelectSubset<T, user_addressFindFirstArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindFirstOrThrowArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_addressFindFirstOrThrowArgs>(args?: SelectSubset<T, user_addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_addresses
     * const user_addresses = await prisma.user_address.findMany()
     * 
     * // Get first 10 User_addresses
     * const user_addresses = await prisma.user_address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_addressWithIdOnly = await prisma.user_address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_addressFindManyArgs>(args?: SelectSubset<T, user_addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_address.
     * @param {user_addressCreateArgs} args - Arguments to create a User_address.
     * @example
     * // Create one User_address
     * const User_address = await prisma.user_address.create({
     *   data: {
     *     // ... data to create a User_address
     *   }
     * })
     * 
     */
    create<T extends user_addressCreateArgs>(args: SelectSubset<T, user_addressCreateArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_addresses.
     * @param {user_addressCreateManyArgs} args - Arguments to create many User_addresses.
     * @example
     * // Create many User_addresses
     * const user_address = await prisma.user_address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_addressCreateManyArgs>(args?: SelectSubset<T, user_addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_address.
     * @param {user_addressDeleteArgs} args - Arguments to delete one User_address.
     * @example
     * // Delete one User_address
     * const User_address = await prisma.user_address.delete({
     *   where: {
     *     // ... filter to delete one User_address
     *   }
     * })
     * 
     */
    delete<T extends user_addressDeleteArgs>(args: SelectSubset<T, user_addressDeleteArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_address.
     * @param {user_addressUpdateArgs} args - Arguments to update one User_address.
     * @example
     * // Update one User_address
     * const user_address = await prisma.user_address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_addressUpdateArgs>(args: SelectSubset<T, user_addressUpdateArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_addresses.
     * @param {user_addressDeleteManyArgs} args - Arguments to filter User_addresses to delete.
     * @example
     * // Delete a few User_addresses
     * const { count } = await prisma.user_address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_addressDeleteManyArgs>(args?: SelectSubset<T, user_addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_addresses
     * const user_address = await prisma.user_address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_addressUpdateManyArgs>(args: SelectSubset<T, user_addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_address.
     * @param {user_addressUpsertArgs} args - Arguments to update or create a User_address.
     * @example
     * // Update or create a User_address
     * const user_address = await prisma.user_address.upsert({
     *   create: {
     *     // ... data to create a User_address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_address we want to update
     *   }
     * })
     */
    upsert<T extends user_addressUpsertArgs>(args: SelectSubset<T, user_addressUpsertArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressCountArgs} args - Arguments to filter User_addresses to count.
     * @example
     * // Count the number of User_addresses
     * const count = await prisma.user_address.count({
     *   where: {
     *     // ... the filter for the User_addresses we want to count
     *   }
     * })
    **/
    count<T extends user_addressCountArgs>(
      args?: Subset<T, user_addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_addressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_addressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_addressAggregateArgs>(args: Subset<T, User_addressAggregateArgs>): Prisma.PrismaPromise<GetUser_addressAggregateType<T>>

    /**
     * Group by User_address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_addressGroupByArgs['orderBy'] }
        : { orderBy?: user_addressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_addressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_address model
   */
  readonly fields: user_addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_address model
   */
  interface user_addressFieldRefs {
    readonly id: FieldRef<"user_address", 'Int'>
    readonly user_id: FieldRef<"user_address", 'Int'>
    readonly recipient_name: FieldRef<"user_address", 'String'>
    readonly phone_number: FieldRef<"user_address", 'String'>
    readonly address_line_1: FieldRef<"user_address", 'String'>
    readonly address_line_2: FieldRef<"user_address", 'String'>
    readonly city: FieldRef<"user_address", 'String'>
    readonly postal_code: FieldRef<"user_address", 'String'>
    readonly zip_code: FieldRef<"user_address", 'String'>
    readonly is_default: FieldRef<"user_address", 'Boolean'>
    readonly created_at: FieldRef<"user_address", 'DateTime'>
    readonly updated_at: FieldRef<"user_address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_address findUnique
   */
  export type user_addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address findUniqueOrThrow
   */
  export type user_addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address findFirst
   */
  export type user_addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address findFirstOrThrow
   */
  export type user_addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address findMany
   */
  export type user_addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address create
   */
  export type user_addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The data needed to create a user_address.
     */
    data: XOR<user_addressCreateInput, user_addressUncheckedCreateInput>
  }

  /**
   * user_address createMany
   */
  export type user_addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_addresses.
     */
    data: user_addressCreateManyInput | user_addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_address update
   */
  export type user_addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The data needed to update a user_address.
     */
    data: XOR<user_addressUpdateInput, user_addressUncheckedUpdateInput>
    /**
     * Choose, which user_address to update.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address updateMany
   */
  export type user_addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_addresses.
     */
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyInput>
    /**
     * Filter which user_addresses to update
     */
    where?: user_addressWhereInput
    /**
     * Limit how many user_addresses to update.
     */
    limit?: number
  }

  /**
   * user_address upsert
   */
  export type user_addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The filter to search for the user_address to update in case it exists.
     */
    where: user_addressWhereUniqueInput
    /**
     * In case the user_address found by the `where` argument doesn't exist, create a new user_address with this data.
     */
    create: XOR<user_addressCreateInput, user_addressUncheckedCreateInput>
    /**
     * In case the user_address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_addressUpdateInput, user_addressUncheckedUpdateInput>
  }

  /**
   * user_address delete
   */
  export type user_addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter which user_address to delete.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address deleteMany
   */
  export type user_addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_addresses to delete
     */
    where?: user_addressWhereInput
    /**
     * Limit how many user_addresses to delete.
     */
    limit?: number
  }

  /**
   * user_address without action
   */
  export type user_addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating_value: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating_value: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    user_name: string | null
    rating_value: number | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    user_name: string | null
    rating_value: number | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    product_id: number
    user_id: number
    user_name: number
    rating_value: number
    comment_text: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating_value?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating_value?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    user_name?: true
    rating_value?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    user_name?: true
    rating_value?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    user_name?: true
    rating_value?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    product_id: number
    user_id: number
    user_name: string
    rating_value: number
    comment_text: string | null
    created_at: Date
    updated_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    user_name?: boolean
    rating_value?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    user_name?: boolean
    rating_value?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "user_id" | "user_name" | "rating_value" | "comment_text" | "created_at" | "updated_at", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      user_id: number
      user_name: string
      rating_value: number
      comment_text: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'Int'>
    readonly product_id: FieldRef<"review", 'Int'>
    readonly user_id: FieldRef<"review", 'Int'>
    readonly user_name: FieldRef<"review", 'String'>
    readonly rating_value: FieldRef<"review", 'Int'>
    readonly comment_text: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
    readonly updated_at: FieldRef<"review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotionSumAggregateOutputType = {
    id: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    background_image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    background_image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    background_image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    id?: true
  }

  export type PromotionSumAggregateInputType = {
    id?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    background_image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    background_image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    background_image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promotion to aggregate.
     */
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionOrderByWithRelationInput | promotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type promotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: promotionWhereInput
    orderBy?: promotionOrderByWithAggregationInput | promotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: promotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: number
    title: string
    subtitle: string | null
    background_image_url: string | null
    created_at: Date
    updated_at: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends promotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type promotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    background_image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["promotion"]>



  export type promotionSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    background_image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type promotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "background_image_url" | "created_at" | "updated_at", ExtArgs["result"]["promotion"]>

  export type $promotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "promotion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      subtitle: string | null
      background_image_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type promotionGetPayload<S extends boolean | null | undefined | promotionDefaultArgs> = $Result.GetResult<Prisma.$promotionPayload, S>

  type promotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<promotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface promotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['promotion'], meta: { name: 'promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {promotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends promotionFindUniqueArgs>(args: SelectSubset<T, promotionFindUniqueArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {promotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends promotionFindUniqueOrThrowArgs>(args: SelectSubset<T, promotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends promotionFindFirstArgs>(args?: SelectSubset<T, promotionFindFirstArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends promotionFindFirstOrThrowArgs>(args?: SelectSubset<T, promotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends promotionFindManyArgs>(args?: SelectSubset<T, promotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {promotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends promotionCreateArgs>(args: SelectSubset<T, promotionCreateArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {promotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends promotionCreateManyArgs>(args?: SelectSubset<T, promotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {promotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends promotionDeleteArgs>(args: SelectSubset<T, promotionDeleteArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {promotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends promotionUpdateArgs>(args: SelectSubset<T, promotionUpdateArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {promotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends promotionDeleteManyArgs>(args?: SelectSubset<T, promotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends promotionUpdateManyArgs>(args: SelectSubset<T, promotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {promotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends promotionUpsertArgs>(args: SelectSubset<T, promotionUpsertArgs<ExtArgs>>): Prisma__promotionClient<$Result.GetResult<Prisma.$promotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends promotionCountArgs>(
      args?: Subset<T, promotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends promotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promotionGroupByArgs['orderBy'] }
        : { orderBy?: promotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, promotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the promotion model
   */
  readonly fields: promotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__promotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the promotion model
   */
  interface promotionFieldRefs {
    readonly id: FieldRef<"promotion", 'Int'>
    readonly title: FieldRef<"promotion", 'String'>
    readonly subtitle: FieldRef<"promotion", 'String'>
    readonly background_image_url: FieldRef<"promotion", 'String'>
    readonly created_at: FieldRef<"promotion", 'DateTime'>
    readonly updated_at: FieldRef<"promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * promotion findUnique
   */
  export type promotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter, which promotion to fetch.
     */
    where: promotionWhereUniqueInput
  }

  /**
   * promotion findUniqueOrThrow
   */
  export type promotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter, which promotion to fetch.
     */
    where: promotionWhereUniqueInput
  }

  /**
   * promotion findFirst
   */
  export type promotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter, which promotion to fetch.
     */
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionOrderByWithRelationInput | promotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promotions.
     */
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * promotion findFirstOrThrow
   */
  export type promotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter, which promotion to fetch.
     */
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionOrderByWithRelationInput | promotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promotions.
     */
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * promotion findMany
   */
  export type promotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionOrderByWithRelationInput | promotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promotions.
     */
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * promotion create
   */
  export type promotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * The data needed to create a promotion.
     */
    data: XOR<promotionCreateInput, promotionUncheckedCreateInput>
  }

  /**
   * promotion createMany
   */
  export type promotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many promotions.
     */
    data: promotionCreateManyInput | promotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promotion update
   */
  export type promotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * The data needed to update a promotion.
     */
    data: XOR<promotionUpdateInput, promotionUncheckedUpdateInput>
    /**
     * Choose, which promotion to update.
     */
    where: promotionWhereUniqueInput
  }

  /**
   * promotion updateMany
   */
  export type promotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update promotions.
     */
    data: XOR<promotionUpdateManyMutationInput, promotionUncheckedUpdateManyInput>
    /**
     * Filter which promotions to update
     */
    where?: promotionWhereInput
    /**
     * Limit how many promotions to update.
     */
    limit?: number
  }

  /**
   * promotion upsert
   */
  export type promotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * The filter to search for the promotion to update in case it exists.
     */
    where: promotionWhereUniqueInput
    /**
     * In case the promotion found by the `where` argument doesn't exist, create a new promotion with this data.
     */
    create: XOR<promotionCreateInput, promotionUncheckedCreateInput>
    /**
     * In case the promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promotionUpdateInput, promotionUncheckedUpdateInput>
  }

  /**
   * promotion delete
   */
  export type promotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
    /**
     * Filter which promotion to delete.
     */
    where: promotionWhereUniqueInput
  }

  /**
   * promotion deleteMany
   */
  export type promotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promotions to delete
     */
    where?: promotionWhereInput
    /**
     * Limit how many promotions to delete.
     */
    limit?: number
  }

  /**
   * promotion without action
   */
  export type promotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotion
     */
    select?: promotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotion
     */
    omit?: promotionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    avatar_url: 'avatar_url',
    role: 'role',
    status: 'status',
    last_login: 'last_login',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Admin_userScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Admin_userScalarFieldEnum = (typeof Admin_userScalarFieldEnum)[keyof typeof Admin_userScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    cover_image_url: 'cover_image_url',
    is_visible: 'is_visible',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    name: 'name',
    sku: 'sku',
    description_short: 'description_short',
    description_long: 'description_long',
    price: 'price',
    sale_price: 'sale_price',
    compare_at_price: 'compare_at_price',
    cover_image_url: 'cover_image_url',
    hover_image_url: 'hover_image_url',
    image_url_list: 'image_url_list',
    stock_quantity: 'stock_quantity',
    available_sizes: 'available_sizes',
    available_colors: 'available_colors',
    material_info: 'material_info',
    care_instructions: 'care_instructions',
    size_chart_url: 'size_chart_url',
    status: 'status',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subtotal_price: 'subtotal_price',
    total_price: 'total_price',
    shipping_fee: 'shipping_fee',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const Cart_itemScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    selected_size: 'selected_size',
    selected_color: 'selected_color',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Cart_itemScalarFieldEnum = (typeof Cart_itemScalarFieldEnum)[keyof typeof Cart_itemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    order_number: 'order_number',
    user_id: 'user_id',
    status: 'status',
    payment_method: 'payment_method',
    total_amount: 'total_amount',
    total_price: 'total_price',
    shipping_fee: 'shipping_fee',
    shipping_name: 'shipping_name',
    shipping_phone: 'shipping_phone',
    shipping_address: 'shipping_address',
    shipping_city: 'shipping_city',
    tracking_number: 'tracking_number',
    refund_reason: 'refund_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    product_title: 'product_title',
    product_cover_image_url: 'product_cover_image_url',
    quantity: 'quantity',
    unit_price: 'unit_price',
    price_at_purchase: 'price_at_purchase',
    selected_size: 'selected_size',
    selected_color: 'selected_color',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


  export const User_addressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    recipient_name: 'recipient_name',
    phone_number: 'phone_number',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    city: 'city',
    postal_code: 'postal_code',
    zip_code: 'zip_code',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_addressScalarFieldEnum = (typeof User_addressScalarFieldEnum)[keyof typeof User_addressScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    user_id: 'user_id',
    user_name: 'user_name',
    rating_value: 'rating_value',
    comment_text: 'comment_text',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    background_image_url: 'background_image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    avatar_url: 'avatar_url'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const admin_userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type admin_userOrderByRelevanceFieldEnum = (typeof admin_userOrderByRelevanceFieldEnum)[keyof typeof admin_userOrderByRelevanceFieldEnum]


  export const categoryOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    description: 'description',
    cover_image_url: 'cover_image_url'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const productOrderByRelevanceFieldEnum: {
    title: 'title',
    name: 'name',
    sku: 'sku',
    description_short: 'description_short',
    description_long: 'description_long',
    cover_image_url: 'cover_image_url',
    hover_image_url: 'hover_image_url',
    image_url_list: 'image_url_list',
    available_sizes: 'available_sizes',
    available_colors: 'available_colors',
    material_info: 'material_info',
    care_instructions: 'care_instructions',
    size_chart_url: 'size_chart_url'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  export const cart_itemOrderByRelevanceFieldEnum: {
    selected_size: 'selected_size',
    selected_color: 'selected_color'
  };

  export type cart_itemOrderByRelevanceFieldEnum = (typeof cart_itemOrderByRelevanceFieldEnum)[keyof typeof cart_itemOrderByRelevanceFieldEnum]


  export const orderOrderByRelevanceFieldEnum: {
    order_number: 'order_number',
    shipping_name: 'shipping_name',
    shipping_phone: 'shipping_phone',
    shipping_address: 'shipping_address',
    shipping_city: 'shipping_city',
    tracking_number: 'tracking_number',
    refund_reason: 'refund_reason'
  };

  export type orderOrderByRelevanceFieldEnum = (typeof orderOrderByRelevanceFieldEnum)[keyof typeof orderOrderByRelevanceFieldEnum]


  export const order_itemOrderByRelevanceFieldEnum: {
    product_title: 'product_title',
    product_cover_image_url: 'product_cover_image_url',
    selected_size: 'selected_size',
    selected_color: 'selected_color'
  };

  export type order_itemOrderByRelevanceFieldEnum = (typeof order_itemOrderByRelevanceFieldEnum)[keyof typeof order_itemOrderByRelevanceFieldEnum]


  export const user_addressOrderByRelevanceFieldEnum: {
    recipient_name: 'recipient_name',
    phone_number: 'phone_number',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    city: 'city',
    postal_code: 'postal_code',
    zip_code: 'zip_code'
  };

  export type user_addressOrderByRelevanceFieldEnum = (typeof user_addressOrderByRelevanceFieldEnum)[keyof typeof user_addressOrderByRelevanceFieldEnum]


  export const reviewOrderByRelevanceFieldEnum: {
    user_name: 'user_name',
    comment_text: 'comment_text'
  };

  export type reviewOrderByRelevanceFieldEnum = (typeof reviewOrderByRelevanceFieldEnum)[keyof typeof reviewOrderByRelevanceFieldEnum]


  export const promotionOrderByRelevanceFieldEnum: {
    title: 'title',
    subtitle: 'subtitle',
    background_image_url: 'background_image_url'
  };

  export type promotionOrderByRelevanceFieldEnum = (typeof promotionOrderByRelevanceFieldEnum)[keyof typeof promotionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_status'
   */
  export type Enumuser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'product_status'
   */
  export type Enumproduct_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_status'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    phone_number?: StringNullableFilter<"user"> | string | null
    avatar_url?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"user"> | $Enums.user_status
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    user_addresses?: User_addressListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    carts?: cartOrderByRelationAggregateInput
    orders?: orderOrderByRelationAggregateInput
    user_addresses?: user_addressOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    phone_number?: StringNullableFilter<"user"> | string | null
    avatar_url?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"user"> | $Enums.user_status
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    user_addresses?: User_addressListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    phone_number?: StringNullableWithAggregatesFilter<"user"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    status?: Enumuser_statusWithAggregatesFilter<"user"> | $Enums.user_status
    last_login?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type admin_userWhereInput = {
    AND?: admin_userWhereInput | admin_userWhereInput[]
    OR?: admin_userWhereInput[]
    NOT?: admin_userWhereInput | admin_userWhereInput[]
    id?: IntFilter<"admin_user"> | number
    username?: StringFilter<"admin_user"> | string
    email?: StringFilter<"admin_user"> | string
    password?: StringFilter<"admin_user"> | string
    role?: Enumuser_roleFilter<"admin_user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"admin_user"> | $Enums.user_status
    created_at?: DateTimeFilter<"admin_user"> | Date | string
    updated_at?: DateTimeFilter<"admin_user"> | Date | string
  }

  export type admin_userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: admin_userOrderByRelevanceInput
  }

  export type admin_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: admin_userWhereInput | admin_userWhereInput[]
    OR?: admin_userWhereInput[]
    NOT?: admin_userWhereInput | admin_userWhereInput[]
    password?: StringFilter<"admin_user"> | string
    role?: Enumuser_roleFilter<"admin_user"> | $Enums.user_role
    status?: Enumuser_statusFilter<"admin_user"> | $Enums.user_status
    created_at?: DateTimeFilter<"admin_user"> | Date | string
    updated_at?: DateTimeFilter<"admin_user"> | Date | string
  }, "id" | "username" | "email">

  export type admin_userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: admin_userCountOrderByAggregateInput
    _avg?: admin_userAvgOrderByAggregateInput
    _max?: admin_userMaxOrderByAggregateInput
    _min?: admin_userMinOrderByAggregateInput
    _sum?: admin_userSumOrderByAggregateInput
  }

  export type admin_userScalarWhereWithAggregatesInput = {
    AND?: admin_userScalarWhereWithAggregatesInput | admin_userScalarWhereWithAggregatesInput[]
    OR?: admin_userScalarWhereWithAggregatesInput[]
    NOT?: admin_userScalarWhereWithAggregatesInput | admin_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_user"> | number
    username?: StringWithAggregatesFilter<"admin_user"> | string
    email?: StringWithAggregatesFilter<"admin_user"> | string
    password?: StringWithAggregatesFilter<"admin_user"> | string
    role?: Enumuser_roleWithAggregatesFilter<"admin_user"> | $Enums.user_role
    status?: Enumuser_statusWithAggregatesFilter<"admin_user"> | $Enums.user_status
    created_at?: DateTimeWithAggregatesFilter<"admin_user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"admin_user"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    slug?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    cover_image_url?: StringNullableFilter<"category"> | string | null
    is_visible?: BoolFilter<"category"> | boolean
    created_at?: DateTimeFilter<"category"> | Date | string
    updated_at?: DateTimeFilter<"category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    cover_image_url?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: productOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    cover_image_url?: StringNullableFilter<"category"> | string | null
    is_visible?: BoolFilter<"category"> | boolean
    created_at?: DateTimeFilter<"category"> | Date | string
    updated_at?: DateTimeFilter<"category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    cover_image_url?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    slug?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    cover_image_url?: StringNullableWithAggregatesFilter<"category"> | string | null
    is_visible?: BoolWithAggregatesFilter<"category"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    title?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    sku?: StringFilter<"product"> | string
    description_short?: StringNullableFilter<"product"> | string | null
    description_long?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    sale_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: StringNullableFilter<"product"> | string | null
    hover_image_url?: StringNullableFilter<"product"> | string | null
    image_url_list?: StringNullableFilter<"product"> | string | null
    stock_quantity?: IntFilter<"product"> | number
    available_sizes?: StringNullableFilter<"product"> | string | null
    available_colors?: StringNullableFilter<"product"> | string | null
    material_info?: StringNullableFilter<"product"> | string | null
    care_instructions?: StringNullableFilter<"product"> | string | null
    size_chart_url?: StringNullableFilter<"product"> | string | null
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    category_id?: IntFilter<"product"> | number
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    cart_items?: Cart_itemListRelationFilter
    order_items?: Order_itemListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description_short?: SortOrderInput | SortOrder
    description_long?: SortOrderInput | SortOrder
    price?: SortOrder
    sale_price?: SortOrderInput | SortOrder
    compare_at_price?: SortOrderInput | SortOrder
    cover_image_url?: SortOrderInput | SortOrder
    hover_image_url?: SortOrderInput | SortOrder
    image_url_list?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    available_sizes?: SortOrderInput | SortOrder
    available_colors?: SortOrderInput | SortOrder
    material_info?: SortOrderInput | SortOrder
    care_instructions?: SortOrderInput | SortOrder
    size_chart_url?: SortOrderInput | SortOrder
    status?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: categoryOrderByWithRelationInput
    cart_items?: cart_itemOrderByRelationAggregateInput
    order_items?: order_itemOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    title?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    description_short?: StringNullableFilter<"product"> | string | null
    description_long?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    sale_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: StringNullableFilter<"product"> | string | null
    hover_image_url?: StringNullableFilter<"product"> | string | null
    image_url_list?: StringNullableFilter<"product"> | string | null
    stock_quantity?: IntFilter<"product"> | number
    available_sizes?: StringNullableFilter<"product"> | string | null
    available_colors?: StringNullableFilter<"product"> | string | null
    material_info?: StringNullableFilter<"product"> | string | null
    care_instructions?: StringNullableFilter<"product"> | string | null
    size_chart_url?: StringNullableFilter<"product"> | string | null
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    category_id?: IntFilter<"product"> | number
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    cart_items?: Cart_itemListRelationFilter
    order_items?: Order_itemListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "sku">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description_short?: SortOrderInput | SortOrder
    description_long?: SortOrderInput | SortOrder
    price?: SortOrder
    sale_price?: SortOrderInput | SortOrder
    compare_at_price?: SortOrderInput | SortOrder
    cover_image_url?: SortOrderInput | SortOrder
    hover_image_url?: SortOrderInput | SortOrder
    image_url_list?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    available_sizes?: SortOrderInput | SortOrder
    available_colors?: SortOrderInput | SortOrder
    material_info?: SortOrderInput | SortOrder
    care_instructions?: SortOrderInput | SortOrder
    size_chart_url?: SortOrderInput | SortOrder
    status?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    title?: StringWithAggregatesFilter<"product"> | string
    name?: StringWithAggregatesFilter<"product"> | string
    sku?: StringWithAggregatesFilter<"product"> | string
    description_short?: StringNullableWithAggregatesFilter<"product"> | string | null
    description_long?: StringNullableWithAggregatesFilter<"product"> | string | null
    price?: DecimalWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string
    sale_price?: DecimalNullableWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: DecimalNullableWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: StringNullableWithAggregatesFilter<"product"> | string | null
    hover_image_url?: StringNullableWithAggregatesFilter<"product"> | string | null
    image_url_list?: StringNullableWithAggregatesFilter<"product"> | string | null
    stock_quantity?: IntWithAggregatesFilter<"product"> | number
    available_sizes?: StringNullableWithAggregatesFilter<"product"> | string | null
    available_colors?: StringNullableWithAggregatesFilter<"product"> | string | null
    material_info?: StringNullableWithAggregatesFilter<"product"> | string | null
    care_instructions?: StringNullableWithAggregatesFilter<"product"> | string | null
    size_chart_url?: StringNullableWithAggregatesFilter<"product"> | string | null
    status?: Enumproduct_statusWithAggregatesFilter<"product"> | $Enums.product_status
    category_id?: IntWithAggregatesFilter<"product"> | number
    created_at?: DateTimeWithAggregatesFilter<"product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"product"> | Date | string
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    subtotal_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    updated_at?: DateTimeFilter<"cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    cart_items?: Cart_itemListRelationFilter
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    cart_items?: cart_itemOrderByRelationAggregateInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    user_id?: IntFilter<"cart"> | number
    subtotal_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    updated_at?: DateTimeFilter<"cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    cart_items?: Cart_itemListRelationFilter
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    user_id?: IntWithAggregatesFilter<"cart"> | number
    subtotal_price?: DecimalWithAggregatesFilter<"cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"cart"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalWithAggregatesFilter<"cart"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"cart"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cart"> | Date | string
  }

  export type cart_itemWhereInput = {
    AND?: cart_itemWhereInput | cart_itemWhereInput[]
    OR?: cart_itemWhereInput[]
    NOT?: cart_itemWhereInput | cart_itemWhereInput[]
    id?: IntFilter<"cart_item"> | number
    cart_id?: IntFilter<"cart_item"> | number
    product_id?: IntFilter<"cart_item"> | number
    quantity?: IntFilter<"cart_item"> | number
    unit_price?: DecimalFilter<"cart_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"cart_item"> | string | null
    selected_color?: StringNullableFilter<"cart_item"> | string | null
    created_at?: DateTimeFilter<"cart_item"> | Date | string
    updated_at?: DateTimeFilter<"cart_item"> | Date | string
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type cart_itemOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    selected_size?: SortOrderInput | SortOrder
    selected_color?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: cartOrderByWithRelationInput
    product?: productOrderByWithRelationInput
    _relevance?: cart_itemOrderByRelevanceInput
  }

  export type cart_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cart_itemWhereInput | cart_itemWhereInput[]
    OR?: cart_itemWhereInput[]
    NOT?: cart_itemWhereInput | cart_itemWhereInput[]
    cart_id?: IntFilter<"cart_item"> | number
    product_id?: IntFilter<"cart_item"> | number
    quantity?: IntFilter<"cart_item"> | number
    unit_price?: DecimalFilter<"cart_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"cart_item"> | string | null
    selected_color?: StringNullableFilter<"cart_item"> | string | null
    created_at?: DateTimeFilter<"cart_item"> | Date | string
    updated_at?: DateTimeFilter<"cart_item"> | Date | string
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type cart_itemOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    selected_size?: SortOrderInput | SortOrder
    selected_color?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cart_itemCountOrderByAggregateInput
    _avg?: cart_itemAvgOrderByAggregateInput
    _max?: cart_itemMaxOrderByAggregateInput
    _min?: cart_itemMinOrderByAggregateInput
    _sum?: cart_itemSumOrderByAggregateInput
  }

  export type cart_itemScalarWhereWithAggregatesInput = {
    AND?: cart_itemScalarWhereWithAggregatesInput | cart_itemScalarWhereWithAggregatesInput[]
    OR?: cart_itemScalarWhereWithAggregatesInput[]
    NOT?: cart_itemScalarWhereWithAggregatesInput | cart_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart_item"> | number
    cart_id?: IntWithAggregatesFilter<"cart_item"> | number
    product_id?: IntWithAggregatesFilter<"cart_item"> | number
    quantity?: IntWithAggregatesFilter<"cart_item"> | number
    unit_price?: DecimalWithAggregatesFilter<"cart_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableWithAggregatesFilter<"cart_item"> | string | null
    selected_color?: StringNullableWithAggregatesFilter<"cart_item"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"cart_item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cart_item"> | Date | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: IntFilter<"order"> | number
    order_number?: StringFilter<"order"> | string
    user_id?: IntFilter<"order"> | number
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    payment_method?: Enumpayment_methodFilter<"order"> | $Enums.payment_method
    total_amount?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFilter<"order"> | string
    shipping_phone?: StringFilter<"order"> | string
    shipping_address?: StringFilter<"order"> | string
    shipping_city?: StringNullableFilter<"order"> | string | null
    tracking_number?: StringNullableFilter<"order"> | string | null
    refund_reason?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeFilter<"order"> | Date | string
    updated_at?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    order_items?: Order_itemListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    order_number?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    shipping_name?: SortOrder
    shipping_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_city?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    refund_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    order_items?: order_itemOrderByRelationAggregateInput
    _relevance?: orderOrderByRelevanceInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_number?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    user_id?: IntFilter<"order"> | number
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    payment_method?: Enumpayment_methodFilter<"order"> | $Enums.payment_method
    total_amount?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFilter<"order"> | string
    shipping_phone?: StringFilter<"order"> | string
    shipping_address?: StringFilter<"order"> | string
    shipping_city?: StringNullableFilter<"order"> | string | null
    tracking_number?: StringNullableFilter<"order"> | string | null
    refund_reason?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeFilter<"order"> | Date | string
    updated_at?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    order_items?: Order_itemListRelationFilter
  }, "id" | "order_number">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    order_number?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    shipping_name?: SortOrder
    shipping_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_city?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    refund_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order"> | number
    order_number?: StringWithAggregatesFilter<"order"> | string
    user_id?: IntWithAggregatesFilter<"order"> | number
    status?: Enumorder_statusWithAggregatesFilter<"order"> | $Enums.order_status
    payment_method?: Enumpayment_methodWithAggregatesFilter<"order"> | $Enums.payment_method
    total_amount?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_name?: StringWithAggregatesFilter<"order"> | string
    shipping_phone?: StringWithAggregatesFilter<"order"> | string
    shipping_address?: StringWithAggregatesFilter<"order"> | string
    shipping_city?: StringNullableWithAggregatesFilter<"order"> | string | null
    tracking_number?: StringNullableWithAggregatesFilter<"order"> | string | null
    refund_reason?: StringNullableWithAggregatesFilter<"order"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    product_title?: StringFilter<"order_item"> | string
    product_cover_image_url?: StringNullableFilter<"order_item"> | string | null
    quantity?: IntFilter<"order_item"> | number
    unit_price?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"order_item"> | string | null
    selected_color?: StringNullableFilter<"order_item"> | string | null
    created_at?: DateTimeFilter<"order_item"> | Date | string
    updated_at?: DateTimeFilter<"order_item"> | Date | string
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type order_itemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_title?: SortOrder
    product_cover_image_url?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
    selected_size?: SortOrderInput | SortOrder
    selected_color?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: orderOrderByWithRelationInput
    product?: productOrderByWithRelationInput
    _relevance?: order_itemOrderByRelevanceInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    product_title?: StringFilter<"order_item"> | string
    product_cover_image_url?: StringNullableFilter<"order_item"> | string | null
    quantity?: IntFilter<"order_item"> | number
    unit_price?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"order_item"> | string | null
    selected_color?: StringNullableFilter<"order_item"> | string | null
    created_at?: DateTimeFilter<"order_item"> | Date | string
    updated_at?: DateTimeFilter<"order_item"> | Date | string
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type order_itemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_title?: SortOrder
    product_cover_image_url?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
    selected_size?: SortOrderInput | SortOrder
    selected_color?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_item"> | number
    order_id?: IntWithAggregatesFilter<"order_item"> | number
    product_id?: IntWithAggregatesFilter<"order_item"> | number
    product_title?: StringWithAggregatesFilter<"order_item"> | string
    product_cover_image_url?: StringNullableWithAggregatesFilter<"order_item"> | string | null
    quantity?: IntWithAggregatesFilter<"order_item"> | number
    unit_price?: DecimalWithAggregatesFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalWithAggregatesFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableWithAggregatesFilter<"order_item"> | string | null
    selected_color?: StringNullableWithAggregatesFilter<"order_item"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"order_item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"order_item"> | Date | string
  }

  export type user_addressWhereInput = {
    AND?: user_addressWhereInput | user_addressWhereInput[]
    OR?: user_addressWhereInput[]
    NOT?: user_addressWhereInput | user_addressWhereInput[]
    id?: IntFilter<"user_address"> | number
    user_id?: IntFilter<"user_address"> | number
    recipient_name?: StringFilter<"user_address"> | string
    phone_number?: StringFilter<"user_address"> | string
    address_line_1?: StringFilter<"user_address"> | string
    address_line_2?: StringNullableFilter<"user_address"> | string | null
    city?: StringFilter<"user_address"> | string
    postal_code?: StringNullableFilter<"user_address"> | string | null
    zip_code?: StringNullableFilter<"user_address"> | string | null
    is_default?: BoolFilter<"user_address"> | boolean
    created_at?: DateTimeFilter<"user_address"> | Date | string
    updated_at?: DateTimeFilter<"user_address"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_addressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: user_addressOrderByRelevanceInput
  }

  export type user_addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_addressWhereInput | user_addressWhereInput[]
    OR?: user_addressWhereInput[]
    NOT?: user_addressWhereInput | user_addressWhereInput[]
    user_id?: IntFilter<"user_address"> | number
    recipient_name?: StringFilter<"user_address"> | string
    phone_number?: StringFilter<"user_address"> | string
    address_line_1?: StringFilter<"user_address"> | string
    address_line_2?: StringNullableFilter<"user_address"> | string | null
    city?: StringFilter<"user_address"> | string
    postal_code?: StringNullableFilter<"user_address"> | string | null
    zip_code?: StringNullableFilter<"user_address"> | string | null
    is_default?: BoolFilter<"user_address"> | boolean
    created_at?: DateTimeFilter<"user_address"> | Date | string
    updated_at?: DateTimeFilter<"user_address"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type user_addressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrderInput | SortOrder
    city?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_addressCountOrderByAggregateInput
    _avg?: user_addressAvgOrderByAggregateInput
    _max?: user_addressMaxOrderByAggregateInput
    _min?: user_addressMinOrderByAggregateInput
    _sum?: user_addressSumOrderByAggregateInput
  }

  export type user_addressScalarWhereWithAggregatesInput = {
    AND?: user_addressScalarWhereWithAggregatesInput | user_addressScalarWhereWithAggregatesInput[]
    OR?: user_addressScalarWhereWithAggregatesInput[]
    NOT?: user_addressScalarWhereWithAggregatesInput | user_addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_address"> | number
    user_id?: IntWithAggregatesFilter<"user_address"> | number
    recipient_name?: StringWithAggregatesFilter<"user_address"> | string
    phone_number?: StringWithAggregatesFilter<"user_address"> | string
    address_line_1?: StringWithAggregatesFilter<"user_address"> | string
    address_line_2?: StringNullableWithAggregatesFilter<"user_address"> | string | null
    city?: StringWithAggregatesFilter<"user_address"> | string
    postal_code?: StringNullableWithAggregatesFilter<"user_address"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"user_address"> | string | null
    is_default?: BoolWithAggregatesFilter<"user_address"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user_address"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_address"> | Date | string
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: IntFilter<"review"> | number
    product_id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    user_name?: StringFilter<"review"> | string
    rating_value?: IntFilter<"review"> | number
    comment_text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    updated_at?: DateTimeFilter<"review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    rating_value?: SortOrder
    comment_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: productOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: reviewOrderByRelevanceInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    product_id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    user_name?: StringFilter<"review"> | string
    rating_value?: IntFilter<"review"> | number
    comment_text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    updated_at?: DateTimeFilter<"review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    rating_value?: SortOrder
    comment_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"review"> | number
    product_id?: IntWithAggregatesFilter<"review"> | number
    user_id?: IntWithAggregatesFilter<"review"> | number
    user_name?: StringWithAggregatesFilter<"review"> | string
    rating_value?: IntWithAggregatesFilter<"review"> | number
    comment_text?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"review"> | Date | string
  }

  export type promotionWhereInput = {
    AND?: promotionWhereInput | promotionWhereInput[]
    OR?: promotionWhereInput[]
    NOT?: promotionWhereInput | promotionWhereInput[]
    id?: IntFilter<"promotion"> | number
    title?: StringFilter<"promotion"> | string
    subtitle?: StringNullableFilter<"promotion"> | string | null
    background_image_url?: StringNullableFilter<"promotion"> | string | null
    created_at?: DateTimeFilter<"promotion"> | Date | string
    updated_at?: DateTimeFilter<"promotion"> | Date | string
  }

  export type promotionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    background_image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: promotionOrderByRelevanceInput
  }

  export type promotionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: promotionWhereInput | promotionWhereInput[]
    OR?: promotionWhereInput[]
    NOT?: promotionWhereInput | promotionWhereInput[]
    title?: StringFilter<"promotion"> | string
    subtitle?: StringNullableFilter<"promotion"> | string | null
    background_image_url?: StringNullableFilter<"promotion"> | string | null
    created_at?: DateTimeFilter<"promotion"> | Date | string
    updated_at?: DateTimeFilter<"promotion"> | Date | string
  }, "id">

  export type promotionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    background_image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: promotionCountOrderByAggregateInput
    _avg?: promotionAvgOrderByAggregateInput
    _max?: promotionMaxOrderByAggregateInput
    _min?: promotionMinOrderByAggregateInput
    _sum?: promotionSumOrderByAggregateInput
  }

  export type promotionScalarWhereWithAggregatesInput = {
    AND?: promotionScalarWhereWithAggregatesInput | promotionScalarWhereWithAggregatesInput[]
    OR?: promotionScalarWhereWithAggregatesInput[]
    NOT?: promotionScalarWhereWithAggregatesInput | promotionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"promotion"> | number
    title?: StringWithAggregatesFilter<"promotion"> | string
    subtitle?: StringNullableWithAggregatesFilter<"promotion"> | string | null
    background_image_url?: StringNullableWithAggregatesFilter<"promotion"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"promotion"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"promotion"> | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    user_addresses?: user_addressCreateNestedManyWithoutUserInput
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: user_addressUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUpdateManyWithoutUserNestedInput
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_userCreateInput = {
    username: string
    email: string
    password: string
    role?: $Enums.user_role
    status?: $Enums.user_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type admin_userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.user_role
    status?: $Enums.user_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type admin_userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.user_role
    status?: $Enums.user_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type admin_userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    name: string
    slug: string
    description?: string | null
    cover_image_url?: string | null
    is_visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    cover_image_url?: string | null
    is_visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    cover_image_url?: string | null
    is_visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    cart_items?: cart_itemCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    cart_items?: cart_itemUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateInput = {
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutCartsInput
    cart_items?: cart_itemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    id?: number
    user_id: number
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartUpdateInput = {
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCartsNestedInput
    cart_items?: cart_itemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartCreateManyInput = {
    id?: number
    user_id: number
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cartUpdateManyMutationInput = {
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemCreateInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart: cartCreateNestedOneWithoutCart_itemsInput
    product: productCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemUncheckedCreateInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: productUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemCreateManyInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateInput = {
    order_number: string
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutOrdersInput
    order_items?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: number
    order_number: string
    user_id: number
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: number
    order_number: string
    user_id: number
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateInput = {
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: orderCreateNestedOneWithoutOrder_itemsInput
    product: productCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemUpdateInput = {
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: productUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemUpdateManyMutationInput = {
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressCreateInput = {
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutUser_addressesInput
  }

  export type user_addressUncheckedCreateInput = {
    id?: number
    user_id: number
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_addressUpdateInput = {
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_addressesNestedInput
  }

  export type user_addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressCreateManyInput = {
    id?: number
    user_id: number
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_addressUpdateManyMutationInput = {
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateInput = {
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutReviewsInput
    user: userCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateInput = {
    id?: number
    product_id: number
    user_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutReviewsNestedInput
    user?: userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateManyInput = {
    id?: number
    product_id: number
    user_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promotionCreateInput = {
    title: string
    subtitle?: string | null
    background_image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type promotionUncheckedCreateInput = {
    id?: number
    title: string
    subtitle?: string | null
    background_image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type promotionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promotionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promotionCreateManyInput = {
    id?: number
    title: string
    subtitle?: string | null
    background_image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type promotionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promotionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type Enumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type User_addressListRelationFilter = {
    every?: user_addressWhereInput
    some?: user_addressWhereInput
    none?: user_addressWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type Enumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_statusFilter<$PrismaModel>
    _max?: NestedEnumuser_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type admin_userOrderByRelevanceInput = {
    fields: admin_userOrderByRelevanceFieldEnum | admin_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type admin_userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type admin_userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cover_image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cover_image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cover_image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Cart_itemListRelationFilter = {
    every?: cart_itemWhereInput
    some?: cart_itemWhereInput
    none?: cart_itemWhereInput
  }

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type cart_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description_short?: SortOrder
    description_long?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    compare_at_price?: SortOrder
    cover_image_url?: SortOrder
    hover_image_url?: SortOrder
    image_url_list?: SortOrder
    stock_quantity?: SortOrder
    available_sizes?: SortOrder
    available_colors?: SortOrder
    material_info?: SortOrder
    care_instructions?: SortOrder
    size_chart_url?: SortOrder
    status?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    compare_at_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description_short?: SortOrder
    description_long?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    compare_at_price?: SortOrder
    cover_image_url?: SortOrder
    hover_image_url?: SortOrder
    image_url_list?: SortOrder
    stock_quantity?: SortOrder
    available_sizes?: SortOrder
    available_colors?: SortOrder
    material_info?: SortOrder
    care_instructions?: SortOrder
    size_chart_url?: SortOrder
    status?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description_short?: SortOrder
    description_long?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    compare_at_price?: SortOrder
    cover_image_url?: SortOrder
    hover_image_url?: SortOrder
    image_url_list?: SortOrder
    stock_quantity?: SortOrder
    available_sizes?: SortOrder
    available_colors?: SortOrder
    material_info?: SortOrder
    care_instructions?: SortOrder
    size_chart_url?: SortOrder
    status?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    compare_at_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal_price?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: cartWhereInput
    isNot?: cartWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type cart_itemOrderByRelevanceInput = {
    fields: cart_itemOrderByRelevanceFieldEnum | cart_itemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cart_itemCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type cart_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type orderOrderByRelevanceInput = {
    fields: orderOrderByRelevanceFieldEnum | orderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    shipping_name?: SortOrder
    shipping_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_city?: SortOrder
    tracking_number?: SortOrder
    refund_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    shipping_name?: SortOrder
    shipping_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_city?: SortOrder
    tracking_number?: SortOrder
    refund_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
    shipping_name?: SortOrder
    shipping_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_city?: SortOrder
    tracking_number?: SortOrder
    refund_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    total_price?: SortOrder
    shipping_fee?: SortOrder
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type order_itemOrderByRelevanceInput = {
    fields: order_itemOrderByRelevanceFieldEnum | order_itemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type order_itemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_title?: SortOrder
    product_cover_image_url?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_title?: SortOrder
    product_cover_image_url?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_title?: SortOrder
    product_cover_image_url?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
    selected_size?: SortOrder
    selected_color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    price_at_purchase?: SortOrder
  }

  export type user_addressOrderByRelevanceInput = {
    fields: user_addressOrderByRelevanceFieldEnum | user_addressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_addressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    zip_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_addressAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_addressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    zip_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_addressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipient_name?: SortOrder
    phone_number?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    zip_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_addressSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type reviewOrderByRelevanceInput = {
    fields: reviewOrderByRelevanceFieldEnum | reviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    rating_value?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating_value?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    rating_value?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    rating_value?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating_value?: SortOrder
  }

  export type promotionOrderByRelevanceInput = {
    fields: promotionOrderByRelevanceFieldEnum | promotionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type promotionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    background_image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type promotionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type promotionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    background_image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type promotionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    background_image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type promotionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cartCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type user_addressCreateNestedManyWithoutUserInput = {
    create?: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput> | user_addressCreateWithoutUserInput[] | user_addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUserInput | user_addressCreateOrConnectWithoutUserInput[]
    createMany?: user_addressCreateManyUserInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type user_addressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput> | user_addressCreateWithoutUserInput[] | user_addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUserInput | user_addressCreateOrConnectWithoutUserInput[]
    createMany?: user_addressCreateManyUserInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type Enumuser_statusFieldUpdateOperationsInput = {
    set?: $Enums.user_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cartUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type user_addressUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput> | user_addressCreateWithoutUserInput[] | user_addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUserInput | user_addressCreateOrConnectWithoutUserInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutUserInput | user_addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_addressCreateManyUserInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutUserInput | user_addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutUserInput | user_addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type user_addressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput> | user_addressCreateWithoutUserInput[] | user_addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUserInput | user_addressCreateOrConnectWithoutUserInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutUserInput | user_addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_addressCreateManyUserInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutUserInput | user_addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutUserInput | user_addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput
    connect?: categoryWhereUniqueInput
  }

  export type cart_itemCreateNestedManyWithoutProductInput = {
    create?: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput> | cart_itemCreateWithoutProductInput[] | cart_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutProductInput | cart_itemCreateOrConnectWithoutProductInput[]
    createMany?: cart_itemCreateManyProductInputEnvelope
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
  }

  export type order_itemCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type cart_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput> | cart_itemCreateWithoutProductInput[] | cart_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutProductInput | cart_itemCreateOrConnectWithoutProductInput[]
    createMany?: cart_itemCreateManyProductInputEnvelope
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumproduct_statusFieldUpdateOperationsInput = {
    set?: $Enums.product_status
  }

  export type categoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput
    upsert?: categoryUpsertWithoutProductsInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductsInput, categoryUpdateWithoutProductsInput>, categoryUncheckedUpdateWithoutProductsInput>
  }

  export type cart_itemUpdateManyWithoutProductNestedInput = {
    create?: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput> | cart_itemCreateWithoutProductInput[] | cart_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutProductInput | cart_itemCreateOrConnectWithoutProductInput[]
    upsert?: cart_itemUpsertWithWhereUniqueWithoutProductInput | cart_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cart_itemCreateManyProductInputEnvelope
    set?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    disconnect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    delete?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    update?: cart_itemUpdateWithWhereUniqueWithoutProductInput | cart_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cart_itemUpdateManyWithWhereWithoutProductInput | cart_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
  }

  export type order_itemUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type cart_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput> | cart_itemCreateWithoutProductInput[] | cart_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutProductInput | cart_itemCreateOrConnectWithoutProductInput[]
    upsert?: cart_itemUpsertWithWhereUniqueWithoutProductInput | cart_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cart_itemCreateManyProductInputEnvelope
    set?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    disconnect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    delete?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    update?: cart_itemUpdateWithWhereUniqueWithoutProductInput | cart_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cart_itemUpdateManyWithWhereWithoutProductInput | cart_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCartsInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    connect?: userWhereUniqueInput
  }

  export type cart_itemCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput> | cart_itemCreateWithoutCartInput[] | cart_itemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutCartInput | cart_itemCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemCreateManyCartInputEnvelope
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
  }

  export type cart_itemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput> | cart_itemCreateWithoutCartInput[] | cart_itemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutCartInput | cart_itemCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemCreateManyCartInputEnvelope
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    upsert?: userUpsertWithoutCartsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCartsInput, userUpdateWithoutCartsInput>, userUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput> | cart_itemCreateWithoutCartInput[] | cart_itemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutCartInput | cart_itemCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemUpsertWithWhereUniqueWithoutCartInput | cart_itemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemCreateManyCartInputEnvelope
    set?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    disconnect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    delete?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    update?: cart_itemUpdateWithWhereUniqueWithoutCartInput | cart_itemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemUpdateManyWithWhereWithoutCartInput | cart_itemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
  }

  export type cart_itemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput> | cart_itemCreateWithoutCartInput[] | cart_itemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemCreateOrConnectWithoutCartInput | cart_itemCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemUpsertWithWhereUniqueWithoutCartInput | cart_itemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemCreateManyCartInputEnvelope
    set?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    disconnect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    delete?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    connect?: cart_itemWhereUniqueInput | cart_itemWhereUniqueInput[]
    update?: cart_itemUpdateWithWhereUniqueWithoutCartInput | cart_itemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemUpdateManyWithWhereWithoutCartInput | cart_itemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
  }

  export type cartCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartCreateWithoutCart_itemsInput, cartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutCart_itemsInput
    connect?: cartWhereUniqueInput
  }

  export type productCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<productCreateWithoutCart_itemsInput, productUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutCart_itemsInput
    connect?: productWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<cartCreateWithoutCart_itemsInput, cartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutCart_itemsInput
    upsert?: cartUpsertWithoutCart_itemsInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutCart_itemsInput, cartUpdateWithoutCart_itemsInput>, cartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<productCreateWithoutCart_itemsInput, productUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutCart_itemsInput
    upsert?: productUpsertWithoutCart_itemsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCart_itemsInput, productUpdateWithoutCart_itemsInput>, productUncheckedUpdateWithoutCart_itemsInput>
  }

  export type userCreateNestedOneWithoutOrdersInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    connect?: userWhereUniqueInput
  }

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method
  }

  export type userUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    upsert?: userUpsertWithoutOrdersInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrdersInput, userUpdateWithoutOrdersInput>, userUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemsInput
    connect?: productWhereUniqueInput
  }

  export type orderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    upsert?: orderUpsertWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrder_itemsInput, orderUpdateWithoutOrder_itemsInput>, orderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemsInput
    upsert?: productUpsertWithoutOrder_itemsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrder_itemsInput, productUpdateWithoutOrder_itemsInput>, productUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type userCreateNestedOneWithoutUser_addressesInput = {
    create?: XOR<userCreateWithoutUser_addressesInput, userUncheckedCreateWithoutUser_addressesInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_addressesInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUser_addressesNestedInput = {
    create?: XOR<userCreateWithoutUser_addressesInput, userUncheckedCreateWithoutUser_addressesInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_addressesInput
    upsert?: userUpsertWithoutUser_addressesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_addressesInput, userUpdateWithoutUser_addressesInput>, userUncheckedUpdateWithoutUser_addressesInput>
  }

  export type productCreateNestedOneWithoutReviewsInput = {
    create?: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewsInput
    connect?: productWhereUniqueInput
  }

  export type userCreateNestedOneWithoutReviewsInput = {
    create?: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewsInput
    connect?: userWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewsInput
    upsert?: productUpsertWithoutReviewsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReviewsInput, productUpdateWithoutReviewsInput>, productUncheckedUpdateWithoutReviewsInput>
  }

  export type userUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewsInput
    upsert?: userUpsertWithoutReviewsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewsInput, userUpdateWithoutReviewsInput>, userUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedEnumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Enumuser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.user_status[]
    notIn?: $Enums.user_status[]
    not?: NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_statusFilter<$PrismaModel>
    _max?: NestedEnumuser_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type cartCreateWithoutUserInput = {
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateWithoutUserInput = {
    id?: number
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutUserInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartCreateManyUserInputEnvelope = {
    data: cartCreateManyUserInput | cartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    order_number: string
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: number
    order_number: string
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_addressCreateWithoutUserInput = {
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_addressUncheckedCreateWithoutUserInput = {
    id?: number
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_addressCreateOrConnectWithoutUserInput = {
    where: user_addressWhereUniqueInput
    create: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput>
  }

  export type user_addressCreateManyUserInputEnvelope = {
    data: user_addressCreateManyUserInput | user_addressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: number
    product_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartUpsertWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
  }

  export type cartUpdateManyWithWhereWithoutUserInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUserInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    subtotal_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"cart"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    updated_at?: DateTimeFilter<"cart"> | Date | string
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: IntFilter<"order"> | number
    order_number?: StringFilter<"order"> | string
    user_id?: IntFilter<"order"> | number
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    payment_method?: Enumpayment_methodFilter<"order"> | $Enums.payment_method
    total_amount?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFilter<"order"> | string
    shipping_phone?: StringFilter<"order"> | string
    shipping_address?: StringFilter<"order"> | string
    shipping_city?: StringNullableFilter<"order"> | string | null
    tracking_number?: StringNullableFilter<"order"> | string | null
    refund_reason?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeFilter<"order"> | Date | string
    updated_at?: DateTimeFilter<"order"> | Date | string
  }

  export type user_addressUpsertWithWhereUniqueWithoutUserInput = {
    where: user_addressWhereUniqueInput
    update: XOR<user_addressUpdateWithoutUserInput, user_addressUncheckedUpdateWithoutUserInput>
    create: XOR<user_addressCreateWithoutUserInput, user_addressUncheckedCreateWithoutUserInput>
  }

  export type user_addressUpdateWithWhereUniqueWithoutUserInput = {
    where: user_addressWhereUniqueInput
    data: XOR<user_addressUpdateWithoutUserInput, user_addressUncheckedUpdateWithoutUserInput>
  }

  export type user_addressUpdateManyWithWhereWithoutUserInput = {
    where: user_addressScalarWhereInput
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyWithoutUserInput>
  }

  export type user_addressScalarWhereInput = {
    AND?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
    OR?: user_addressScalarWhereInput[]
    NOT?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
    id?: IntFilter<"user_address"> | number
    user_id?: IntFilter<"user_address"> | number
    recipient_name?: StringFilter<"user_address"> | string
    phone_number?: StringFilter<"user_address"> | string
    address_line_1?: StringFilter<"user_address"> | string
    address_line_2?: StringNullableFilter<"user_address"> | string | null
    city?: StringFilter<"user_address"> | string
    postal_code?: StringNullableFilter<"user_address"> | string | null
    zip_code?: StringNullableFilter<"user_address"> | string | null
    is_default?: BoolFilter<"user_address"> | boolean
    created_at?: DateTimeFilter<"user_address"> | Date | string
    updated_at?: DateTimeFilter<"user_address"> | Date | string
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: IntFilter<"review"> | number
    product_id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    user_name?: StringFilter<"review"> | string
    rating_value?: IntFilter<"review"> | number
    comment_text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    updated_at?: DateTimeFilter<"review"> | Date | string
  }

  export type productCreateWithoutCategoryInput = {
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: IntFilter<"product"> | number
    title?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    sku?: StringFilter<"product"> | string
    description_short?: StringNullableFilter<"product"> | string | null
    description_long?: StringNullableFilter<"product"> | string | null
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    sale_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: StringNullableFilter<"product"> | string | null
    hover_image_url?: StringNullableFilter<"product"> | string | null
    image_url_list?: StringNullableFilter<"product"> | string | null
    stock_quantity?: IntFilter<"product"> | number
    available_sizes?: StringNullableFilter<"product"> | string | null
    available_colors?: StringNullableFilter<"product"> | string | null
    material_info?: StringNullableFilter<"product"> | string | null
    care_instructions?: StringNullableFilter<"product"> | string | null
    size_chart_url?: StringNullableFilter<"product"> | string | null
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    category_id?: IntFilter<"product"> | number
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
  }

  export type categoryCreateWithoutProductsInput = {
    name: string
    slug: string
    description?: string | null
    cover_image_url?: string | null
    is_visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    cover_image_url?: string | null
    is_visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryCreateOrConnectWithoutProductsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemCreateWithoutProductInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart: cartCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemUncheckedCreateWithoutProductInput = {
    id?: number
    cart_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemCreateOrConnectWithoutProductInput = {
    where: cart_itemWhereUniqueInput
    create: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput>
  }

  export type cart_itemCreateManyProductInputEnvelope = {
    data: cart_itemCreateManyProductInput | cart_itemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type order_itemCreateWithoutProductInput = {
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: orderCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemCreateOrConnectWithoutProductInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemCreateManyProductInputEnvelope = {
    data: order_itemCreateManyProductInput | order_itemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutProductInput = {
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewCreateOrConnectWithoutProductInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateManyProductInputEnvelope = {
    data: reviewCreateManyProductInput | reviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutProductsInput = {
    update: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
  }

  export type categoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: cart_itemWhereUniqueInput
    update: XOR<cart_itemUpdateWithoutProductInput, cart_itemUncheckedUpdateWithoutProductInput>
    create: XOR<cart_itemCreateWithoutProductInput, cart_itemUncheckedCreateWithoutProductInput>
  }

  export type cart_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: cart_itemWhereUniqueInput
    data: XOR<cart_itemUpdateWithoutProductInput, cart_itemUncheckedUpdateWithoutProductInput>
  }

  export type cart_itemUpdateManyWithWhereWithoutProductInput = {
    where: cart_itemScalarWhereInput
    data: XOR<cart_itemUpdateManyMutationInput, cart_itemUncheckedUpdateManyWithoutProductInput>
  }

  export type cart_itemScalarWhereInput = {
    AND?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
    OR?: cart_itemScalarWhereInput[]
    NOT?: cart_itemScalarWhereInput | cart_itemScalarWhereInput[]
    id?: IntFilter<"cart_item"> | number
    cart_id?: IntFilter<"cart_item"> | number
    product_id?: IntFilter<"cart_item"> | number
    quantity?: IntFilter<"cart_item"> | number
    unit_price?: DecimalFilter<"cart_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"cart_item"> | string | null
    selected_color?: StringNullableFilter<"cart_item"> | string | null
    created_at?: DateTimeFilter<"cart_item"> | Date | string
    updated_at?: DateTimeFilter<"cart_item"> | Date | string
  }

  export type order_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
  }

  export type order_itemUpdateManyWithWhereWithoutProductInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutProductInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    product_title?: StringFilter<"order_item"> | string
    product_cover_image_url?: StringNullableFilter<"order_item"> | string | null
    quantity?: IntFilter<"order_item"> | number
    unit_price?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFilter<"order_item"> | Decimal | DecimalJsLike | number | string
    selected_size?: StringNullableFilter<"order_item"> | string | null
    selected_color?: StringNullableFilter<"order_item"> | string | null
    created_at?: DateTimeFilter<"order_item"> | Date | string
    updated_at?: DateTimeFilter<"order_item"> | Date | string
  }

  export type reviewUpsertWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithWhereWithoutProductInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProductInput>
  }

  export type userCreateWithoutCartsInput = {
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: orderCreateNestedManyWithoutUserInput
    user_addresses?: user_addressCreateNestedManyWithoutUserInput
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCartsInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: user_addressUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCartsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemCreateWithoutCartInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemUncheckedCreateWithoutCartInput = {
    id?: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemCreateOrConnectWithoutCartInput = {
    where: cart_itemWhereUniqueInput
    create: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput>
  }

  export type cart_itemCreateManyCartInputEnvelope = {
    data: cart_itemCreateManyCartInput | cart_itemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCartsInput = {
    update: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCartsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
  }

  export type userUpdateWithoutCartsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: orderUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUpdateManyWithoutUserNestedInput
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cart_itemUpsertWithWhereUniqueWithoutCartInput = {
    where: cart_itemWhereUniqueInput
    update: XOR<cart_itemUpdateWithoutCartInput, cart_itemUncheckedUpdateWithoutCartInput>
    create: XOR<cart_itemCreateWithoutCartInput, cart_itemUncheckedCreateWithoutCartInput>
  }

  export type cart_itemUpdateWithWhereUniqueWithoutCartInput = {
    where: cart_itemWhereUniqueInput
    data: XOR<cart_itemUpdateWithoutCartInput, cart_itemUncheckedUpdateWithoutCartInput>
  }

  export type cart_itemUpdateManyWithWhereWithoutCartInput = {
    where: cart_itemScalarWhereInput
    data: XOR<cart_itemUpdateManyMutationInput, cart_itemUncheckedUpdateManyWithoutCartInput>
  }

  export type cartCreateWithoutCart_itemsInput = {
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    user_id: number
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cartCreateOrConnectWithoutCart_itemsInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutCart_itemsInput, cartUncheckedCreateWithoutCart_itemsInput>
  }

  export type productCreateWithoutCart_itemsInput = {
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCart_itemsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCart_itemsInput, productUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartUpsertWithoutCart_itemsInput = {
    update: XOR<cartUpdateWithoutCart_itemsInput, cartUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartCreateWithoutCart_itemsInput, cartUncheckedCreateWithoutCart_itemsInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutCart_itemsInput, cartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartUpdateWithoutCart_itemsInput = {
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutCart_itemsInput = {
    update: XOR<productUpdateWithoutCart_itemsInput, productUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<productCreateWithoutCart_itemsInput, productUncheckedCreateWithoutCart_itemsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCart_itemsInput, productUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productUpdateWithoutCart_itemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userCreateWithoutOrdersInput = {
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartCreateNestedManyWithoutUserInput
    user_addresses?: user_addressCreateNestedManyWithoutUserInput
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: user_addressUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrdersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemCreateWithoutOrderInput = {
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOrdersInput = {
    update: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrdersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
  }

  export type userUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUpdateManyWithoutUserNestedInput
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderCreateWithoutOrder_itemsInput = {
    order_number: string
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutOrdersInput
  }

  export type orderUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    order_number: string
    user_id: number
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderCreateOrConnectWithoutOrder_itemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productCreateWithoutOrder_itemsInput = {
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    cart_items?: cart_itemCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrder_itemsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
  }

  export type orderUpsertWithoutOrder_itemsInput = {
    update: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type orderUpdateWithoutOrder_itemsInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type orderUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutOrder_itemsInput = {
    update: XOR<productUpdateWithoutOrder_itemsInput, productUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrder_itemsInput, productUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productUpdateWithoutOrder_itemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    cart_items?: cart_itemUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userCreateWithoutUser_addressesInput = {
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_addressesInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_addressesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_addressesInput, userUncheckedCreateWithoutUser_addressesInput>
  }

  export type userUpsertWithoutUser_addressesInput = {
    update: XOR<userUpdateWithoutUser_addressesInput, userUncheckedUpdateWithoutUser_addressesInput>
    create: XOR<userCreateWithoutUser_addressesInput, userUncheckedCreateWithoutUser_addressesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_addressesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_addressesInput, userUncheckedUpdateWithoutUser_addressesInput>
  }

  export type userUpdateWithoutUser_addressesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_addressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productCreateWithoutReviewsInput = {
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    cart_items?: cart_itemCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: cart_itemUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutReviewsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
  }

  export type userCreateWithoutReviewsInput = {
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    user_addresses?: user_addressCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_number?: string | null
    avatar_url?: string | null
    role?: $Enums.user_role
    status?: $Enums.user_status
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: user_addressUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReviewsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
  }

  export type productUpsertWithoutReviewsInput = {
    update: XOR<productUpdateWithoutReviewsInput, productUncheckedUpdateWithoutReviewsInput>
    create: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReviewsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReviewsInput, productUncheckedUpdateWithoutReviewsInput>
  }

  export type productUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    cart_items?: cart_itemUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userUpsertWithoutReviewsInput = {
    update: XOR<userUpdateWithoutReviewsInput, userUncheckedUpdateWithoutReviewsInput>
    create: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewsInput, userUncheckedUpdateWithoutReviewsInput>
  }

  export type userUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    status?: Enumuser_statusFieldUpdateOperationsInput | $Enums.user_status
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: user_addressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cartCreateManyUserInput = {
    id?: number
    subtotal_price?: Decimal | DecimalJsLike | number | string
    total_price?: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderCreateManyUserInput = {
    id?: number
    order_number: string
    status?: $Enums.order_status
    payment_method?: $Enums.payment_method
    total_amount: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    shipping_fee?: Decimal | DecimalJsLike | number | string
    shipping_name: string
    shipping_phone: string
    shipping_address: string
    shipping_city?: string | null
    tracking_number?: string | null
    refund_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_addressCreateManyUserInput = {
    id?: number
    recipient_name: string
    phone_number: string
    address_line_1: string
    address_line_2?: string | null
    city: string
    postal_code?: string | null
    zip_code?: string | null
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewCreateManyUserInput = {
    id?: number
    product_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cartUpdateWithoutUserInput = {
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subtotal_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUpdateWithoutUserInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_name?: StringFieldUpdateOperationsInput | string
    shipping_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_city?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    refund_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressUpdateWithoutUserInput = {
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_addressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpdateWithoutUserInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateManyCategoryInput = {
    id?: number
    title: string
    name: string
    sku: string
    description_short?: string | null
    description_long?: string | null
    price: Decimal | DecimalJsLike | number | string
    sale_price?: Decimal | DecimalJsLike | number | string | null
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    cover_image_url?: string | null
    hover_image_url?: string | null
    image_url_list?: string | null
    stock_quantity?: number
    available_sizes?: string | null
    available_colors?: string | null
    material_info?: string | null
    care_instructions?: string | null
    size_chart_url?: string | null
    status?: $Enums.product_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description_short?: NullableStringFieldUpdateOperationsInput | string | null
    description_long?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    hover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url_list?: NullableStringFieldUpdateOperationsInput | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    available_sizes?: NullableStringFieldUpdateOperationsInput | string | null
    available_colors?: NullableStringFieldUpdateOperationsInput | string | null
    material_info?: NullableStringFieldUpdateOperationsInput | string | null
    care_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    size_chart_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemCreateManyProductInput = {
    id?: number
    cart_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemCreateManyProductInput = {
    id?: number
    order_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewCreateManyProductInput = {
    id?: number
    user_id: number
    user_name: string
    rating_value: number
    comment_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemUpdateWithoutProductInput = {
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpdateWithoutProductInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    rating_value?: IntFieldUpdateOperationsInput | number
    comment_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemCreateManyCartInput = {
    id?: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cart_itemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateManyOrderInput = {
    id?: number
    product_id: number
    product_title: string
    product_cover_image_url?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    price_at_purchase: Decimal | DecimalJsLike | number | string
    selected_size?: string | null
    selected_color?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type order_itemUpdateWithoutOrderInput = {
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_title?: StringFieldUpdateOperationsInput | string
    product_cover_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_at_purchase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selected_size?: NullableStringFieldUpdateOperationsInput | string | null
    selected_color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}