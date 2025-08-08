
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
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Operador
 * 
 */
export type Operador = $Result.DefaultSelection<Prisma.$OperadorPayload>
/**
 * Model BotonPanico
 * 
 */
export type BotonPanico = $Result.DefaultSelection<Prisma.$BotonPanicoPayload>
/**
 * Model Supervisor
 * 
 */
export type Supervisor = $Result.DefaultSelection<Prisma.$SupervisorPayload>
/**
 * Model UbicacionSupervisor
 * 
 */
export type UbicacionSupervisor = $Result.DefaultSelection<Prisma.$UbicacionSupervisorPayload>
/**
 * Model Coordinador
 * 
 */
export type Coordinador = $Result.DefaultSelection<Prisma.$CoordinadorPayload>
/**
 * Model IncidenteAsignado
 * 
 */
export type IncidenteAsignado = $Result.DefaultSelection<Prisma.$IncidenteAsignadoPayload>
/**
 * Model ReporteIncidente
 * 
 */
export type ReporteIncidente = $Result.DefaultSelection<Prisma.$ReporteIncidentePayload>
/**
 * Model FotoIncidente
 * 
 */
export type FotoIncidente = $Result.DefaultSelection<Prisma.$FotoIncidentePayload>
/**
 * Model Patio
 * 
 */
export type Patio = $Result.DefaultSelection<Prisma.$PatioPayload>
/**
 * Model RegistroSalidaUnidad
 * 
 */
export type RegistroSalidaUnidad = $Result.DefaultSelection<Prisma.$RegistroSalidaUnidadPayload>
/**
 * Model AsignacionUnidad
 * 
 */
export type AsignacionUnidad = $Result.DefaultSelection<Prisma.$AsignacionUnidadPayload>
/**
 * Model DeviceToken
 * 
 */
export type DeviceToken = $Result.DefaultSelection<Prisma.$DeviceTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Coordinador: 'Coordinador',
  Operador: 'Operador',
  Supervisor: 'Supervisor',
  Dirección: 'Dirección',
  Patio: 'Patio'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserRoles
 * const userRoles = await prisma.userRole.findMany()
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
   * // Fetch zero or more UserRoles
   * const userRoles = await prisma.userRole.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operador`: Exposes CRUD operations for the **Operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operadors
    * const operadors = await prisma.operador.findMany()
    * ```
    */
  get operador(): Prisma.OperadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.botonPanico`: Exposes CRUD operations for the **BotonPanico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotonPanicos
    * const botonPanicos = await prisma.botonPanico.findMany()
    * ```
    */
  get botonPanico(): Prisma.BotonPanicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisor`: Exposes CRUD operations for the **Supervisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supervisors
    * const supervisors = await prisma.supervisor.findMany()
    * ```
    */
  get supervisor(): Prisma.SupervisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacionSupervisor`: Exposes CRUD operations for the **UbicacionSupervisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UbicacionSupervisors
    * const ubicacionSupervisors = await prisma.ubicacionSupervisor.findMany()
    * ```
    */
  get ubicacionSupervisor(): Prisma.UbicacionSupervisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coordinador`: Exposes CRUD operations for the **Coordinador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinadors
    * const coordinadors = await prisma.coordinador.findMany()
    * ```
    */
  get coordinador(): Prisma.CoordinadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidenteAsignado`: Exposes CRUD operations for the **IncidenteAsignado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidenteAsignados
    * const incidenteAsignados = await prisma.incidenteAsignado.findMany()
    * ```
    */
  get incidenteAsignado(): Prisma.IncidenteAsignadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reporteIncidente`: Exposes CRUD operations for the **ReporteIncidente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReporteIncidentes
    * const reporteIncidentes = await prisma.reporteIncidente.findMany()
    * ```
    */
  get reporteIncidente(): Prisma.ReporteIncidenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoIncidente`: Exposes CRUD operations for the **FotoIncidente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoIncidentes
    * const fotoIncidentes = await prisma.fotoIncidente.findMany()
    * ```
    */
  get fotoIncidente(): Prisma.FotoIncidenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patio`: Exposes CRUD operations for the **Patio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patios
    * const patios = await prisma.patio.findMany()
    * ```
    */
  get patio(): Prisma.PatioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroSalidaUnidad`: Exposes CRUD operations for the **RegistroSalidaUnidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroSalidaUnidads
    * const registroSalidaUnidads = await prisma.registroSalidaUnidad.findMany()
    * ```
    */
  get registroSalidaUnidad(): Prisma.RegistroSalidaUnidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignacionUnidad`: Exposes CRUD operations for the **AsignacionUnidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsignacionUnidads
    * const asignacionUnidads = await prisma.asignacionUnidad.findMany()
    * ```
    */
  get asignacionUnidad(): Prisma.AsignacionUnidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceToken`: Exposes CRUD operations for the **DeviceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTokens
    * const deviceTokens = await prisma.deviceToken.findMany()
    * ```
    */
  get deviceToken(): Prisma.DeviceTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    UserRole: 'UserRole',
    Operador: 'Operador',
    BotonPanico: 'BotonPanico',
    Supervisor: 'Supervisor',
    UbicacionSupervisor: 'UbicacionSupervisor',
    Coordinador: 'Coordinador',
    IncidenteAsignado: 'IncidenteAsignado',
    ReporteIncidente: 'ReporteIncidente',
    FotoIncidente: 'FotoIncidente',
    Patio: 'Patio',
    RegistroSalidaUnidad: 'RegistroSalidaUnidad',
    AsignacionUnidad: 'AsignacionUnidad',
    DeviceToken: 'DeviceToken'
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
      modelProps: "userRole" | "operador" | "botonPanico" | "supervisor" | "ubicacionSupervisor" | "coordinador" | "incidenteAsignado" | "reporteIncidente" | "fotoIncidente" | "patio" | "registroSalidaUnidad" | "asignacionUnidad" | "deviceToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Operador: {
        payload: Prisma.$OperadorPayload<ExtArgs>
        fields: Prisma.OperadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          findFirst: {
            args: Prisma.OperadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          findMany: {
            args: Prisma.OperadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>[]
          }
          create: {
            args: Prisma.OperadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          createMany: {
            args: Prisma.OperadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OperadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          update: {
            args: Prisma.OperadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          deleteMany: {
            args: Prisma.OperadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          aggregate: {
            args: Prisma.OperadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperador>
          }
          groupBy: {
            args: Prisma.OperadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperadorCountArgs<ExtArgs>
            result: $Utils.Optional<OperadorCountAggregateOutputType> | number
          }
        }
      }
      BotonPanico: {
        payload: Prisma.$BotonPanicoPayload<ExtArgs>
        fields: Prisma.BotonPanicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotonPanicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotonPanicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          findFirst: {
            args: Prisma.BotonPanicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotonPanicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          findMany: {
            args: Prisma.BotonPanicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>[]
          }
          create: {
            args: Prisma.BotonPanicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          createMany: {
            args: Prisma.BotonPanicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BotonPanicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          update: {
            args: Prisma.BotonPanicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          deleteMany: {
            args: Prisma.BotonPanicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotonPanicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BotonPanicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotonPanicoPayload>
          }
          aggregate: {
            args: Prisma.BotonPanicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotonPanico>
          }
          groupBy: {
            args: Prisma.BotonPanicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotonPanicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotonPanicoCountArgs<ExtArgs>
            result: $Utils.Optional<BotonPanicoCountAggregateOutputType> | number
          }
        }
      }
      Supervisor: {
        payload: Prisma.$SupervisorPayload<ExtArgs>
        fields: Prisma.SupervisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findFirst: {
            args: Prisma.SupervisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findMany: {
            args: Prisma.SupervisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>[]
          }
          create: {
            args: Prisma.SupervisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          createMany: {
            args: Prisma.SupervisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupervisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          update: {
            args: Prisma.SupervisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          deleteMany: {
            args: Prisma.SupervisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          aggregate: {
            args: Prisma.SupervisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisor>
          }
          groupBy: {
            args: Prisma.SupervisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisorCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorCountAggregateOutputType> | number
          }
        }
      }
      UbicacionSupervisor: {
        payload: Prisma.$UbicacionSupervisorPayload<ExtArgs>
        fields: Prisma.UbicacionSupervisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionSupervisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionSupervisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          findFirst: {
            args: Prisma.UbicacionSupervisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionSupervisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          findMany: {
            args: Prisma.UbicacionSupervisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>[]
          }
          create: {
            args: Prisma.UbicacionSupervisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          createMany: {
            args: Prisma.UbicacionSupervisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UbicacionSupervisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          update: {
            args: Prisma.UbicacionSupervisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionSupervisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionSupervisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UbicacionSupervisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionSupervisorPayload>
          }
          aggregate: {
            args: Prisma.UbicacionSupervisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacionSupervisor>
          }
          groupBy: {
            args: Prisma.UbicacionSupervisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionSupervisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionSupervisorCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionSupervisorCountAggregateOutputType> | number
          }
        }
      }
      Coordinador: {
        payload: Prisma.$CoordinadorPayload<ExtArgs>
        fields: Prisma.CoordinadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordinadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordinadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          findFirst: {
            args: Prisma.CoordinadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordinadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          findMany: {
            args: Prisma.CoordinadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>[]
          }
          create: {
            args: Prisma.CoordinadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          createMany: {
            args: Prisma.CoordinadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoordinadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          update: {
            args: Prisma.CoordinadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          deleteMany: {
            args: Prisma.CoordinadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordinadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoordinadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinadorPayload>
          }
          aggregate: {
            args: Prisma.CoordinadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinador>
          }
          groupBy: {
            args: Prisma.CoordinadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordinadorCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinadorCountAggregateOutputType> | number
          }
        }
      }
      IncidenteAsignado: {
        payload: Prisma.$IncidenteAsignadoPayload<ExtArgs>
        fields: Prisma.IncidenteAsignadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidenteAsignadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidenteAsignadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          findFirst: {
            args: Prisma.IncidenteAsignadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidenteAsignadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          findMany: {
            args: Prisma.IncidenteAsignadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>[]
          }
          create: {
            args: Prisma.IncidenteAsignadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          createMany: {
            args: Prisma.IncidenteAsignadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidenteAsignadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          update: {
            args: Prisma.IncidenteAsignadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          deleteMany: {
            args: Prisma.IncidenteAsignadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidenteAsignadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidenteAsignadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidenteAsignadoPayload>
          }
          aggregate: {
            args: Prisma.IncidenteAsignadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidenteAsignado>
          }
          groupBy: {
            args: Prisma.IncidenteAsignadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidenteAsignadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidenteAsignadoCountArgs<ExtArgs>
            result: $Utils.Optional<IncidenteAsignadoCountAggregateOutputType> | number
          }
        }
      }
      ReporteIncidente: {
        payload: Prisma.$ReporteIncidentePayload<ExtArgs>
        fields: Prisma.ReporteIncidenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReporteIncidenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReporteIncidenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          findFirst: {
            args: Prisma.ReporteIncidenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReporteIncidenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          findMany: {
            args: Prisma.ReporteIncidenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>[]
          }
          create: {
            args: Prisma.ReporteIncidenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          createMany: {
            args: Prisma.ReporteIncidenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReporteIncidenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          update: {
            args: Prisma.ReporteIncidenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          deleteMany: {
            args: Prisma.ReporteIncidenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReporteIncidenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReporteIncidenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReporteIncidentePayload>
          }
          aggregate: {
            args: Prisma.ReporteIncidenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporteIncidente>
          }
          groupBy: {
            args: Prisma.ReporteIncidenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReporteIncidenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReporteIncidenteCountArgs<ExtArgs>
            result: $Utils.Optional<ReporteIncidenteCountAggregateOutputType> | number
          }
        }
      }
      FotoIncidente: {
        payload: Prisma.$FotoIncidentePayload<ExtArgs>
        fields: Prisma.FotoIncidenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoIncidenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoIncidenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          findFirst: {
            args: Prisma.FotoIncidenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoIncidenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          findMany: {
            args: Prisma.FotoIncidenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>[]
          }
          create: {
            args: Prisma.FotoIncidenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          createMany: {
            args: Prisma.FotoIncidenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FotoIncidenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          update: {
            args: Prisma.FotoIncidenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          deleteMany: {
            args: Prisma.FotoIncidenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoIncidenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FotoIncidenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoIncidentePayload>
          }
          aggregate: {
            args: Prisma.FotoIncidenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoIncidente>
          }
          groupBy: {
            args: Prisma.FotoIncidenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoIncidenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoIncidenteCountArgs<ExtArgs>
            result: $Utils.Optional<FotoIncidenteCountAggregateOutputType> | number
          }
        }
      }
      Patio: {
        payload: Prisma.$PatioPayload<ExtArgs>
        fields: Prisma.PatioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          findFirst: {
            args: Prisma.PatioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          findMany: {
            args: Prisma.PatioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>[]
          }
          create: {
            args: Prisma.PatioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          createMany: {
            args: Prisma.PatioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          update: {
            args: Prisma.PatioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          deleteMany: {
            args: Prisma.PatioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatioPayload>
          }
          aggregate: {
            args: Prisma.PatioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatio>
          }
          groupBy: {
            args: Prisma.PatioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatioCountArgs<ExtArgs>
            result: $Utils.Optional<PatioCountAggregateOutputType> | number
          }
        }
      }
      RegistroSalidaUnidad: {
        payload: Prisma.$RegistroSalidaUnidadPayload<ExtArgs>
        fields: Prisma.RegistroSalidaUnidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroSalidaUnidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroSalidaUnidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          findFirst: {
            args: Prisma.RegistroSalidaUnidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroSalidaUnidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          findMany: {
            args: Prisma.RegistroSalidaUnidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>[]
          }
          create: {
            args: Prisma.RegistroSalidaUnidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          createMany: {
            args: Prisma.RegistroSalidaUnidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistroSalidaUnidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          update: {
            args: Prisma.RegistroSalidaUnidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          deleteMany: {
            args: Prisma.RegistroSalidaUnidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroSalidaUnidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroSalidaUnidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSalidaUnidadPayload>
          }
          aggregate: {
            args: Prisma.RegistroSalidaUnidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroSalidaUnidad>
          }
          groupBy: {
            args: Prisma.RegistroSalidaUnidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroSalidaUnidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroSalidaUnidadCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroSalidaUnidadCountAggregateOutputType> | number
          }
        }
      }
      AsignacionUnidad: {
        payload: Prisma.$AsignacionUnidadPayload<ExtArgs>
        fields: Prisma.AsignacionUnidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignacionUnidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignacionUnidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          findFirst: {
            args: Prisma.AsignacionUnidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignacionUnidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          findMany: {
            args: Prisma.AsignacionUnidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>[]
          }
          create: {
            args: Prisma.AsignacionUnidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          createMany: {
            args: Prisma.AsignacionUnidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AsignacionUnidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          update: {
            args: Prisma.AsignacionUnidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          deleteMany: {
            args: Prisma.AsignacionUnidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignacionUnidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsignacionUnidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionUnidadPayload>
          }
          aggregate: {
            args: Prisma.AsignacionUnidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignacionUnidad>
          }
          groupBy: {
            args: Prisma.AsignacionUnidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignacionUnidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignacionUnidadCountArgs<ExtArgs>
            result: $Utils.Optional<AsignacionUnidadCountAggregateOutputType> | number
          }
        }
      }
      DeviceToken: {
        payload: Prisma.$DeviceTokenPayload<ExtArgs>
        fields: Prisma.DeviceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findFirst: {
            args: Prisma.DeviceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findMany: {
            args: Prisma.DeviceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          create: {
            args: Prisma.DeviceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          createMany: {
            args: Prisma.DeviceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          update: {
            args: Prisma.DeviceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          deleteMany: {
            args: Prisma.DeviceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          aggregate: {
            args: Prisma.DeviceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceToken>
          }
          groupBy: {
            args: Prisma.DeviceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenCountAggregateOutputType> | number
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
    userRole?: UserRoleOmit
    operador?: OperadorOmit
    botonPanico?: BotonPanicoOmit
    supervisor?: SupervisorOmit
    ubicacionSupervisor?: UbicacionSupervisorOmit
    coordinador?: CoordinadorOmit
    incidenteAsignado?: IncidenteAsignadoOmit
    reporteIncidente?: ReporteIncidenteOmit
    fotoIncidente?: FotoIncidenteOmit
    patio?: PatioOmit
    registroSalidaUnidad?: RegistroSalidaUnidadOmit
    asignacionUnidad?: AsignacionUnidadOmit
    deviceToken?: DeviceTokenOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    DeviceToken: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeviceToken?: boolean | UserRoleCountOutputTypeCountDeviceTokenArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountDeviceTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
  }


  /**
   * Count Type OperadorCountOutputType
   */

  export type OperadorCountOutputType = {
    botonesPanico: number
    RegistroSalidaUnidad: number
    AsignacionUnidad: number
  }

  export type OperadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    botonesPanico?: boolean | OperadorCountOutputTypeCountBotonesPanicoArgs
    RegistroSalidaUnidad?: boolean | OperadorCountOutputTypeCountRegistroSalidaUnidadArgs
    AsignacionUnidad?: boolean | OperadorCountOutputTypeCountAsignacionUnidadArgs
  }

  // Custom InputTypes
  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperadorCountOutputType
     */
    select?: OperadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountBotonesPanicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotonPanicoWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountRegistroSalidaUnidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSalidaUnidadWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountAsignacionUnidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionUnidadWhereInput
  }


  /**
   * Count Type BotonPanicoCountOutputType
   */

  export type BotonPanicoCountOutputType = {
    IncidenteAsignado: number
  }

  export type BotonPanicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IncidenteAsignado?: boolean | BotonPanicoCountOutputTypeCountIncidenteAsignadoArgs
  }

  // Custom InputTypes
  /**
   * BotonPanicoCountOutputType without action
   */
  export type BotonPanicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanicoCountOutputType
     */
    select?: BotonPanicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BotonPanicoCountOutputType without action
   */
  export type BotonPanicoCountOutputTypeCountIncidenteAsignadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidenteAsignadoWhereInput
  }


  /**
   * Count Type SupervisorCountOutputType
   */

  export type SupervisorCountOutputType = {
    ubicaciones: number
    reportes: number
    asignaciones: number
  }

  export type SupervisorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicaciones?: boolean | SupervisorCountOutputTypeCountUbicacionesArgs
    reportes?: boolean | SupervisorCountOutputTypeCountReportesArgs
    asignaciones?: boolean | SupervisorCountOutputTypeCountAsignacionesArgs
  }

  // Custom InputTypes
  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorCountOutputType
     */
    select?: SupervisorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountUbicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionSupervisorWhereInput
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteIncidenteWhereInput
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidenteAsignadoWhereInput
  }


  /**
   * Count Type ReporteIncidenteCountOutputType
   */

  export type ReporteIncidenteCountOutputType = {
    fotos: number
  }

  export type ReporteIncidenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | ReporteIncidenteCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * ReporteIncidenteCountOutputType without action
   */
  export type ReporteIncidenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidenteCountOutputType
     */
    select?: ReporteIncidenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReporteIncidenteCountOutputType without action
   */
  export type ReporteIncidenteCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoIncidenteWhereInput
  }


  /**
   * Count Type PatioCountOutputType
   */

  export type PatioCountOutputType = {
    registrosSalida: number
    asignaciones: number
  }

  export type PatioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrosSalida?: boolean | PatioCountOutputTypeCountRegistrosSalidaArgs
    asignaciones?: boolean | PatioCountOutputTypeCountAsignacionesArgs
  }

  // Custom InputTypes
  /**
   * PatioCountOutputType without action
   */
  export type PatioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatioCountOutputType
     */
    select?: PatioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatioCountOutputType without action
   */
  export type PatioCountOutputTypeCountRegistrosSalidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSalidaUnidadWhereInput
  }

  /**
   * PatioCountOutputType without action
   */
  export type PatioCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionUnidadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    idFirebase: string | null
    role: $Enums.Role | null
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    profilePhotoUrl: string | null
    telefono: string | null
    correo: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    idFirebase: string | null
    role: $Enums.Role | null
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    profilePhotoUrl: string | null
    telefono: string | null
    correo: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    idFirebase: number
    role: number
    nombre: number
    apellidoPaterno: number
    apellidoMaterno: number
    profilePhotoUrl: number
    telefono: number
    correo: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    idFirebase?: true
    role?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    profilePhotoUrl?: true
    telefono?: true
    correo?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    idFirebase?: true
    role?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    profilePhotoUrl?: true
    telefono?: true
    correo?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    idFirebase?: true
    role?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    profilePhotoUrl?: true
    telefono?: true
    correo?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    idFirebase: string
    role: $Enums.Role
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    profilePhotoUrl: string | null
    telefono: string | null
    correo: string | null
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idFirebase?: boolean
    role?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    profilePhotoUrl?: boolean
    telefono?: boolean
    correo?: boolean
    operador?: boolean | UserRole$operadorArgs<ExtArgs>
    supervisor?: boolean | UserRole$supervisorArgs<ExtArgs>
    patio?: boolean | UserRole$patioArgs<ExtArgs>
    coordinador?: boolean | UserRole$coordinadorArgs<ExtArgs>
    DeviceToken?: boolean | UserRole$DeviceTokenArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>



  export type UserRoleSelectScalar = {
    id?: boolean
    idFirebase?: boolean
    role?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    profilePhotoUrl?: boolean
    telefono?: boolean
    correo?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idFirebase" | "role" | "nombre" | "apellidoPaterno" | "apellidoMaterno" | "profilePhotoUrl" | "telefono" | "correo", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | UserRole$operadorArgs<ExtArgs>
    supervisor?: boolean | UserRole$supervisorArgs<ExtArgs>
    patio?: boolean | UserRole$patioArgs<ExtArgs>
    coordinador?: boolean | UserRole$coordinadorArgs<ExtArgs>
    DeviceToken?: boolean | UserRole$DeviceTokenArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      operador: Prisma.$OperadorPayload<ExtArgs> | null
      supervisor: Prisma.$SupervisorPayload<ExtArgs> | null
      patio: Prisma.$PatioPayload<ExtArgs> | null
      coordinador: Prisma.$CoordinadorPayload<ExtArgs> | null
      DeviceToken: Prisma.$DeviceTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idFirebase: string
      role: $Enums.Role
      nombre: string | null
      apellidoPaterno: string | null
      apellidoMaterno: string | null
      profilePhotoUrl: string | null
      telefono: string | null
      correo: string | null
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends UserRole$operadorArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$operadorArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UserRole$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$supervisorArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patio<T extends UserRole$patioArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$patioArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coordinador<T extends UserRole$coordinadorArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$coordinadorArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DeviceToken<T extends UserRole$DeviceTokenArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$DeviceTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly idFirebase: FieldRef<"UserRole", 'String'>
    readonly role: FieldRef<"UserRole", 'Role'>
    readonly nombre: FieldRef<"UserRole", 'String'>
    readonly apellidoPaterno: FieldRef<"UserRole", 'String'>
    readonly apellidoMaterno: FieldRef<"UserRole", 'String'>
    readonly profilePhotoUrl: FieldRef<"UserRole", 'String'>
    readonly telefono: FieldRef<"UserRole", 'String'>
    readonly correo: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.operador
   */
  export type UserRole$operadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    where?: OperadorWhereInput
  }

  /**
   * UserRole.supervisor
   */
  export type UserRole$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    where?: SupervisorWhereInput
  }

  /**
   * UserRole.patio
   */
  export type UserRole$patioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    where?: PatioWhereInput
  }

  /**
   * UserRole.coordinador
   */
  export type UserRole$coordinadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    where?: CoordinadorWhereInput
  }

  /**
   * UserRole.DeviceToken
   */
  export type UserRole$DeviceTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    cursor?: DeviceTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Operador
   */

  export type AggregateOperador = {
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  export type OperadorAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type OperadorSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type OperadorMinAggregateOutputType = {
    id: number | null
    userRoleId: number | null
    unidadAsignada: string | null
    rutaAsignada: string | null
  }

  export type OperadorMaxAggregateOutputType = {
    id: number | null
    userRoleId: number | null
    unidadAsignada: string | null
    rutaAsignada: string | null
  }

  export type OperadorCountAggregateOutputType = {
    id: number
    userRoleId: number
    unidadAsignada: number
    rutaAsignada: number
    _all: number
  }


  export type OperadorAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type OperadorSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type OperadorMinAggregateInputType = {
    id?: true
    userRoleId?: true
    unidadAsignada?: true
    rutaAsignada?: true
  }

  export type OperadorMaxAggregateInputType = {
    id?: true
    userRoleId?: true
    unidadAsignada?: true
    rutaAsignada?: true
  }

  export type OperadorCountAggregateInputType = {
    id?: true
    userRoleId?: true
    unidadAsignada?: true
    rutaAsignada?: true
    _all?: true
  }

  export type OperadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operador to aggregate.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operadors
    **/
    _count?: true | OperadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperadorMaxAggregateInputType
  }

  export type GetOperadorAggregateType<T extends OperadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperador[P]>
      : GetScalarType<T[P], AggregateOperador[P]>
  }




  export type OperadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperadorWhereInput
    orderBy?: OperadorOrderByWithAggregationInput | OperadorOrderByWithAggregationInput[]
    by: OperadorScalarFieldEnum[] | OperadorScalarFieldEnum
    having?: OperadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperadorCountAggregateInputType | true
    _avg?: OperadorAvgAggregateInputType
    _sum?: OperadorSumAggregateInputType
    _min?: OperadorMinAggregateInputType
    _max?: OperadorMaxAggregateInputType
  }

  export type OperadorGroupByOutputType = {
    id: number
    userRoleId: number
    unidadAsignada: string | null
    rutaAsignada: string | null
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  type GetOperadorGroupByPayload<T extends OperadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperadorGroupByOutputType[P]>
            : GetScalarType<T[P], OperadorGroupByOutputType[P]>
        }
      >
    >


  export type OperadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleId?: boolean
    unidadAsignada?: boolean
    rutaAsignada?: boolean
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    botonesPanico?: boolean | Operador$botonesPanicoArgs<ExtArgs>
    RegistroSalidaUnidad?: boolean | Operador$RegistroSalidaUnidadArgs<ExtArgs>
    AsignacionUnidad?: boolean | Operador$AsignacionUnidadArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operador"]>



  export type OperadorSelectScalar = {
    id?: boolean
    userRoleId?: boolean
    unidadAsignada?: boolean
    rutaAsignada?: boolean
  }

  export type OperadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRoleId" | "unidadAsignada" | "rutaAsignada", ExtArgs["result"]["operador"]>
  export type OperadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    botonesPanico?: boolean | Operador$botonesPanicoArgs<ExtArgs>
    RegistroSalidaUnidad?: boolean | Operador$RegistroSalidaUnidadArgs<ExtArgs>
    AsignacionUnidad?: boolean | Operador$AsignacionUnidadArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OperadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operador"
    objects: {
      user: Prisma.$UserRolePayload<ExtArgs>
      botonesPanico: Prisma.$BotonPanicoPayload<ExtArgs>[]
      RegistroSalidaUnidad: Prisma.$RegistroSalidaUnidadPayload<ExtArgs>[]
      AsignacionUnidad: Prisma.$AsignacionUnidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userRoleId: number
      unidadAsignada: string | null
      rutaAsignada: string | null
    }, ExtArgs["result"]["operador"]>
    composites: {}
  }

  type OperadorGetPayload<S extends boolean | null | undefined | OperadorDefaultArgs> = $Result.GetResult<Prisma.$OperadorPayload, S>

  type OperadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperadorCountAggregateInputType | true
    }

  export interface OperadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operador'], meta: { name: 'Operador' } }
    /**
     * Find zero or one Operador that matches the filter.
     * @param {OperadorFindUniqueArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperadorFindUniqueArgs>(args: SelectSubset<T, OperadorFindUniqueArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperadorFindUniqueOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperadorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindFirstArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperadorFindFirstArgs>(args?: SelectSubset<T, OperadorFindFirstArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindFirstOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperadorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operadors
     * const operadors = await prisma.operador.findMany()
     * 
     * // Get first 10 Operadors
     * const operadors = await prisma.operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operadorWithIdOnly = await prisma.operador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperadorFindManyArgs>(args?: SelectSubset<T, OperadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operador.
     * @param {OperadorCreateArgs} args - Arguments to create a Operador.
     * @example
     * // Create one Operador
     * const Operador = await prisma.operador.create({
     *   data: {
     *     // ... data to create a Operador
     *   }
     * })
     * 
     */
    create<T extends OperadorCreateArgs>(args: SelectSubset<T, OperadorCreateArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operadors.
     * @param {OperadorCreateManyArgs} args - Arguments to create many Operadors.
     * @example
     * // Create many Operadors
     * const operador = await prisma.operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperadorCreateManyArgs>(args?: SelectSubset<T, OperadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operador.
     * @param {OperadorDeleteArgs} args - Arguments to delete one Operador.
     * @example
     * // Delete one Operador
     * const Operador = await prisma.operador.delete({
     *   where: {
     *     // ... filter to delete one Operador
     *   }
     * })
     * 
     */
    delete<T extends OperadorDeleteArgs>(args: SelectSubset<T, OperadorDeleteArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operador.
     * @param {OperadorUpdateArgs} args - Arguments to update one Operador.
     * @example
     * // Update one Operador
     * const operador = await prisma.operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperadorUpdateArgs>(args: SelectSubset<T, OperadorUpdateArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operadors.
     * @param {OperadorDeleteManyArgs} args - Arguments to filter Operadors to delete.
     * @example
     * // Delete a few Operadors
     * const { count } = await prisma.operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperadorDeleteManyArgs>(args?: SelectSubset<T, OperadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperadorUpdateManyArgs>(args: SelectSubset<T, OperadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operador.
     * @param {OperadorUpsertArgs} args - Arguments to update or create a Operador.
     * @example
     * // Update or create a Operador
     * const operador = await prisma.operador.upsert({
     *   create: {
     *     // ... data to create a Operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operador we want to update
     *   }
     * })
     */
    upsert<T extends OperadorUpsertArgs>(args: SelectSubset<T, OperadorUpsertArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorCountArgs} args - Arguments to filter Operadors to count.
     * @example
     * // Count the number of Operadors
     * const count = await prisma.operador.count({
     *   where: {
     *     // ... the filter for the Operadors we want to count
     *   }
     * })
    **/
    count<T extends OperadorCountArgs>(
      args?: Subset<T, OperadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperadorAggregateArgs>(args: Subset<T, OperadorAggregateArgs>): Prisma.PrismaPromise<GetOperadorAggregateType<T>>

    /**
     * Group by Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorGroupByArgs} args - Group by arguments.
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
      T extends OperadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperadorGroupByArgs['orderBy'] }
        : { orderBy?: OperadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operador model
   */
  readonly fields: OperadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    botonesPanico<T extends Operador$botonesPanicoArgs<ExtArgs> = {}>(args?: Subset<T, Operador$botonesPanicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RegistroSalidaUnidad<T extends Operador$RegistroSalidaUnidadArgs<ExtArgs> = {}>(args?: Subset<T, Operador$RegistroSalidaUnidadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AsignacionUnidad<T extends Operador$AsignacionUnidadArgs<ExtArgs> = {}>(args?: Subset<T, Operador$AsignacionUnidadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Operador model
   */
  interface OperadorFieldRefs {
    readonly id: FieldRef<"Operador", 'Int'>
    readonly userRoleId: FieldRef<"Operador", 'Int'>
    readonly unidadAsignada: FieldRef<"Operador", 'String'>
    readonly rutaAsignada: FieldRef<"Operador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Operador findUnique
   */
  export type OperadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador findUniqueOrThrow
   */
  export type OperadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador findFirst
   */
  export type OperadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador findFirstOrThrow
   */
  export type OperadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador findMany
   */
  export type OperadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operadors to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador create
   */
  export type OperadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Operador.
     */
    data: XOR<OperadorCreateInput, OperadorUncheckedCreateInput>
  }

  /**
   * Operador createMany
   */
  export type OperadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operadors.
     */
    data: OperadorCreateManyInput | OperadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operador update
   */
  export type OperadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Operador.
     */
    data: XOR<OperadorUpdateInput, OperadorUncheckedUpdateInput>
    /**
     * Choose, which Operador to update.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador updateMany
   */
  export type OperadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operadors.
     */
    data: XOR<OperadorUpdateManyMutationInput, OperadorUncheckedUpdateManyInput>
    /**
     * Filter which Operadors to update
     */
    where?: OperadorWhereInput
    /**
     * Limit how many Operadors to update.
     */
    limit?: number
  }

  /**
   * Operador upsert
   */
  export type OperadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Operador to update in case it exists.
     */
    where: OperadorWhereUniqueInput
    /**
     * In case the Operador found by the `where` argument doesn't exist, create a new Operador with this data.
     */
    create: XOR<OperadorCreateInput, OperadorUncheckedCreateInput>
    /**
     * In case the Operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperadorUpdateInput, OperadorUncheckedUpdateInput>
  }

  /**
   * Operador delete
   */
  export type OperadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter which Operador to delete.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador deleteMany
   */
  export type OperadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operadors to delete
     */
    where?: OperadorWhereInput
    /**
     * Limit how many Operadors to delete.
     */
    limit?: number
  }

  /**
   * Operador.botonesPanico
   */
  export type Operador$botonesPanicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    where?: BotonPanicoWhereInput
    orderBy?: BotonPanicoOrderByWithRelationInput | BotonPanicoOrderByWithRelationInput[]
    cursor?: BotonPanicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BotonPanicoScalarFieldEnum | BotonPanicoScalarFieldEnum[]
  }

  /**
   * Operador.RegistroSalidaUnidad
   */
  export type Operador$RegistroSalidaUnidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    where?: RegistroSalidaUnidadWhereInput
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroSalidaUnidadScalarFieldEnum | RegistroSalidaUnidadScalarFieldEnum[]
  }

  /**
   * Operador.AsignacionUnidad
   */
  export type Operador$AsignacionUnidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    where?: AsignacionUnidadWhereInput
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    cursor?: AsignacionUnidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionUnidadScalarFieldEnum | AsignacionUnidadScalarFieldEnum[]
  }

  /**
   * Operador without action
   */
  export type OperadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
  }


  /**
   * Model BotonPanico
   */

  export type AggregateBotonPanico = {
    _count: BotonPanicoCountAggregateOutputType | null
    _avg: BotonPanicoAvgAggregateOutputType | null
    _sum: BotonPanicoSumAggregateOutputType | null
    _min: BotonPanicoMinAggregateOutputType | null
    _max: BotonPanicoMaxAggregateOutputType | null
  }

  export type BotonPanicoAvgAggregateOutputType = {
    id: number | null
    operadorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type BotonPanicoSumAggregateOutputType = {
    id: number | null
    operadorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type BotonPanicoMinAggregateOutputType = {
    id: number | null
    operadorId: number | null
    timestamp: Date | null
    motivo: string | null
    atendido: boolean | null
    latitud: number | null
    longitud: number | null
  }

  export type BotonPanicoMaxAggregateOutputType = {
    id: number | null
    operadorId: number | null
    timestamp: Date | null
    motivo: string | null
    atendido: boolean | null
    latitud: number | null
    longitud: number | null
  }

  export type BotonPanicoCountAggregateOutputType = {
    id: number
    operadorId: number
    timestamp: number
    motivo: number
    atendido: number
    latitud: number
    longitud: number
    _all: number
  }


  export type BotonPanicoAvgAggregateInputType = {
    id?: true
    operadorId?: true
    latitud?: true
    longitud?: true
  }

  export type BotonPanicoSumAggregateInputType = {
    id?: true
    operadorId?: true
    latitud?: true
    longitud?: true
  }

  export type BotonPanicoMinAggregateInputType = {
    id?: true
    operadorId?: true
    timestamp?: true
    motivo?: true
    atendido?: true
    latitud?: true
    longitud?: true
  }

  export type BotonPanicoMaxAggregateInputType = {
    id?: true
    operadorId?: true
    timestamp?: true
    motivo?: true
    atendido?: true
    latitud?: true
    longitud?: true
  }

  export type BotonPanicoCountAggregateInputType = {
    id?: true
    operadorId?: true
    timestamp?: true
    motivo?: true
    atendido?: true
    latitud?: true
    longitud?: true
    _all?: true
  }

  export type BotonPanicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotonPanico to aggregate.
     */
    where?: BotonPanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotonPanicos to fetch.
     */
    orderBy?: BotonPanicoOrderByWithRelationInput | BotonPanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotonPanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotonPanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotonPanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotonPanicos
    **/
    _count?: true | BotonPanicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotonPanicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotonPanicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotonPanicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotonPanicoMaxAggregateInputType
  }

  export type GetBotonPanicoAggregateType<T extends BotonPanicoAggregateArgs> = {
        [P in keyof T & keyof AggregateBotonPanico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotonPanico[P]>
      : GetScalarType<T[P], AggregateBotonPanico[P]>
  }




  export type BotonPanicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotonPanicoWhereInput
    orderBy?: BotonPanicoOrderByWithAggregationInput | BotonPanicoOrderByWithAggregationInput[]
    by: BotonPanicoScalarFieldEnum[] | BotonPanicoScalarFieldEnum
    having?: BotonPanicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotonPanicoCountAggregateInputType | true
    _avg?: BotonPanicoAvgAggregateInputType
    _sum?: BotonPanicoSumAggregateInputType
    _min?: BotonPanicoMinAggregateInputType
    _max?: BotonPanicoMaxAggregateInputType
  }

  export type BotonPanicoGroupByOutputType = {
    id: number
    operadorId: number
    timestamp: Date
    motivo: string | null
    atendido: boolean
    latitud: number | null
    longitud: number | null
    _count: BotonPanicoCountAggregateOutputType | null
    _avg: BotonPanicoAvgAggregateOutputType | null
    _sum: BotonPanicoSumAggregateOutputType | null
    _min: BotonPanicoMinAggregateOutputType | null
    _max: BotonPanicoMaxAggregateOutputType | null
  }

  type GetBotonPanicoGroupByPayload<T extends BotonPanicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotonPanicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotonPanicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotonPanicoGroupByOutputType[P]>
            : GetScalarType<T[P], BotonPanicoGroupByOutputType[P]>
        }
      >
    >


  export type BotonPanicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operadorId?: boolean
    timestamp?: boolean
    motivo?: boolean
    atendido?: boolean
    latitud?: boolean
    longitud?: boolean
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
    IncidenteAsignado?: boolean | BotonPanico$IncidenteAsignadoArgs<ExtArgs>
    _count?: boolean | BotonPanicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botonPanico"]>



  export type BotonPanicoSelectScalar = {
    id?: boolean
    operadorId?: boolean
    timestamp?: boolean
    motivo?: boolean
    atendido?: boolean
    latitud?: boolean
    longitud?: boolean
  }

  export type BotonPanicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "operadorId" | "timestamp" | "motivo" | "atendido" | "latitud" | "longitud", ExtArgs["result"]["botonPanico"]>
  export type BotonPanicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
    IncidenteAsignado?: boolean | BotonPanico$IncidenteAsignadoArgs<ExtArgs>
    _count?: boolean | BotonPanicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BotonPanicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotonPanico"
    objects: {
      operador: Prisma.$OperadorPayload<ExtArgs>
      IncidenteAsignado: Prisma.$IncidenteAsignadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      operadorId: number
      timestamp: Date
      motivo: string | null
      atendido: boolean
      latitud: number | null
      longitud: number | null
    }, ExtArgs["result"]["botonPanico"]>
    composites: {}
  }

  type BotonPanicoGetPayload<S extends boolean | null | undefined | BotonPanicoDefaultArgs> = $Result.GetResult<Prisma.$BotonPanicoPayload, S>

  type BotonPanicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BotonPanicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BotonPanicoCountAggregateInputType | true
    }

  export interface BotonPanicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotonPanico'], meta: { name: 'BotonPanico' } }
    /**
     * Find zero or one BotonPanico that matches the filter.
     * @param {BotonPanicoFindUniqueArgs} args - Arguments to find a BotonPanico
     * @example
     * // Get one BotonPanico
     * const botonPanico = await prisma.botonPanico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotonPanicoFindUniqueArgs>(args: SelectSubset<T, BotonPanicoFindUniqueArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BotonPanico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BotonPanicoFindUniqueOrThrowArgs} args - Arguments to find a BotonPanico
     * @example
     * // Get one BotonPanico
     * const botonPanico = await prisma.botonPanico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotonPanicoFindUniqueOrThrowArgs>(args: SelectSubset<T, BotonPanicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotonPanico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoFindFirstArgs} args - Arguments to find a BotonPanico
     * @example
     * // Get one BotonPanico
     * const botonPanico = await prisma.botonPanico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotonPanicoFindFirstArgs>(args?: SelectSubset<T, BotonPanicoFindFirstArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotonPanico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoFindFirstOrThrowArgs} args - Arguments to find a BotonPanico
     * @example
     * // Get one BotonPanico
     * const botonPanico = await prisma.botonPanico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotonPanicoFindFirstOrThrowArgs>(args?: SelectSubset<T, BotonPanicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BotonPanicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotonPanicos
     * const botonPanicos = await prisma.botonPanico.findMany()
     * 
     * // Get first 10 BotonPanicos
     * const botonPanicos = await prisma.botonPanico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botonPanicoWithIdOnly = await prisma.botonPanico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotonPanicoFindManyArgs>(args?: SelectSubset<T, BotonPanicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BotonPanico.
     * @param {BotonPanicoCreateArgs} args - Arguments to create a BotonPanico.
     * @example
     * // Create one BotonPanico
     * const BotonPanico = await prisma.botonPanico.create({
     *   data: {
     *     // ... data to create a BotonPanico
     *   }
     * })
     * 
     */
    create<T extends BotonPanicoCreateArgs>(args: SelectSubset<T, BotonPanicoCreateArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BotonPanicos.
     * @param {BotonPanicoCreateManyArgs} args - Arguments to create many BotonPanicos.
     * @example
     * // Create many BotonPanicos
     * const botonPanico = await prisma.botonPanico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotonPanicoCreateManyArgs>(args?: SelectSubset<T, BotonPanicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BotonPanico.
     * @param {BotonPanicoDeleteArgs} args - Arguments to delete one BotonPanico.
     * @example
     * // Delete one BotonPanico
     * const BotonPanico = await prisma.botonPanico.delete({
     *   where: {
     *     // ... filter to delete one BotonPanico
     *   }
     * })
     * 
     */
    delete<T extends BotonPanicoDeleteArgs>(args: SelectSubset<T, BotonPanicoDeleteArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BotonPanico.
     * @param {BotonPanicoUpdateArgs} args - Arguments to update one BotonPanico.
     * @example
     * // Update one BotonPanico
     * const botonPanico = await prisma.botonPanico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotonPanicoUpdateArgs>(args: SelectSubset<T, BotonPanicoUpdateArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BotonPanicos.
     * @param {BotonPanicoDeleteManyArgs} args - Arguments to filter BotonPanicos to delete.
     * @example
     * // Delete a few BotonPanicos
     * const { count } = await prisma.botonPanico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotonPanicoDeleteManyArgs>(args?: SelectSubset<T, BotonPanicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotonPanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotonPanicos
     * const botonPanico = await prisma.botonPanico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotonPanicoUpdateManyArgs>(args: SelectSubset<T, BotonPanicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotonPanico.
     * @param {BotonPanicoUpsertArgs} args - Arguments to update or create a BotonPanico.
     * @example
     * // Update or create a BotonPanico
     * const botonPanico = await prisma.botonPanico.upsert({
     *   create: {
     *     // ... data to create a BotonPanico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotonPanico we want to update
     *   }
     * })
     */
    upsert<T extends BotonPanicoUpsertArgs>(args: SelectSubset<T, BotonPanicoUpsertArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BotonPanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoCountArgs} args - Arguments to filter BotonPanicos to count.
     * @example
     * // Count the number of BotonPanicos
     * const count = await prisma.botonPanico.count({
     *   where: {
     *     // ... the filter for the BotonPanicos we want to count
     *   }
     * })
    **/
    count<T extends BotonPanicoCountArgs>(
      args?: Subset<T, BotonPanicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotonPanicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotonPanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BotonPanicoAggregateArgs>(args: Subset<T, BotonPanicoAggregateArgs>): Prisma.PrismaPromise<GetBotonPanicoAggregateType<T>>

    /**
     * Group by BotonPanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotonPanicoGroupByArgs} args - Group by arguments.
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
      T extends BotonPanicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotonPanicoGroupByArgs['orderBy'] }
        : { orderBy?: BotonPanicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BotonPanicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotonPanicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotonPanico model
   */
  readonly fields: BotonPanicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotonPanico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotonPanicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends OperadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperadorDefaultArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    IncidenteAsignado<T extends BotonPanico$IncidenteAsignadoArgs<ExtArgs> = {}>(args?: Subset<T, BotonPanico$IncidenteAsignadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BotonPanico model
   */
  interface BotonPanicoFieldRefs {
    readonly id: FieldRef<"BotonPanico", 'Int'>
    readonly operadorId: FieldRef<"BotonPanico", 'Int'>
    readonly timestamp: FieldRef<"BotonPanico", 'DateTime'>
    readonly motivo: FieldRef<"BotonPanico", 'String'>
    readonly atendido: FieldRef<"BotonPanico", 'Boolean'>
    readonly latitud: FieldRef<"BotonPanico", 'Float'>
    readonly longitud: FieldRef<"BotonPanico", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BotonPanico findUnique
   */
  export type BotonPanicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter, which BotonPanico to fetch.
     */
    where: BotonPanicoWhereUniqueInput
  }

  /**
   * BotonPanico findUniqueOrThrow
   */
  export type BotonPanicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter, which BotonPanico to fetch.
     */
    where: BotonPanicoWhereUniqueInput
  }

  /**
   * BotonPanico findFirst
   */
  export type BotonPanicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter, which BotonPanico to fetch.
     */
    where?: BotonPanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotonPanicos to fetch.
     */
    orderBy?: BotonPanicoOrderByWithRelationInput | BotonPanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotonPanicos.
     */
    cursor?: BotonPanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotonPanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotonPanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotonPanicos.
     */
    distinct?: BotonPanicoScalarFieldEnum | BotonPanicoScalarFieldEnum[]
  }

  /**
   * BotonPanico findFirstOrThrow
   */
  export type BotonPanicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter, which BotonPanico to fetch.
     */
    where?: BotonPanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotonPanicos to fetch.
     */
    orderBy?: BotonPanicoOrderByWithRelationInput | BotonPanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotonPanicos.
     */
    cursor?: BotonPanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotonPanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotonPanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotonPanicos.
     */
    distinct?: BotonPanicoScalarFieldEnum | BotonPanicoScalarFieldEnum[]
  }

  /**
   * BotonPanico findMany
   */
  export type BotonPanicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter, which BotonPanicos to fetch.
     */
    where?: BotonPanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotonPanicos to fetch.
     */
    orderBy?: BotonPanicoOrderByWithRelationInput | BotonPanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotonPanicos.
     */
    cursor?: BotonPanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotonPanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotonPanicos.
     */
    skip?: number
    distinct?: BotonPanicoScalarFieldEnum | BotonPanicoScalarFieldEnum[]
  }

  /**
   * BotonPanico create
   */
  export type BotonPanicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * The data needed to create a BotonPanico.
     */
    data: XOR<BotonPanicoCreateInput, BotonPanicoUncheckedCreateInput>
  }

  /**
   * BotonPanico createMany
   */
  export type BotonPanicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotonPanicos.
     */
    data: BotonPanicoCreateManyInput | BotonPanicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotonPanico update
   */
  export type BotonPanicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * The data needed to update a BotonPanico.
     */
    data: XOR<BotonPanicoUpdateInput, BotonPanicoUncheckedUpdateInput>
    /**
     * Choose, which BotonPanico to update.
     */
    where: BotonPanicoWhereUniqueInput
  }

  /**
   * BotonPanico updateMany
   */
  export type BotonPanicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotonPanicos.
     */
    data: XOR<BotonPanicoUpdateManyMutationInput, BotonPanicoUncheckedUpdateManyInput>
    /**
     * Filter which BotonPanicos to update
     */
    where?: BotonPanicoWhereInput
    /**
     * Limit how many BotonPanicos to update.
     */
    limit?: number
  }

  /**
   * BotonPanico upsert
   */
  export type BotonPanicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * The filter to search for the BotonPanico to update in case it exists.
     */
    where: BotonPanicoWhereUniqueInput
    /**
     * In case the BotonPanico found by the `where` argument doesn't exist, create a new BotonPanico with this data.
     */
    create: XOR<BotonPanicoCreateInput, BotonPanicoUncheckedCreateInput>
    /**
     * In case the BotonPanico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotonPanicoUpdateInput, BotonPanicoUncheckedUpdateInput>
  }

  /**
   * BotonPanico delete
   */
  export type BotonPanicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
    /**
     * Filter which BotonPanico to delete.
     */
    where: BotonPanicoWhereUniqueInput
  }

  /**
   * BotonPanico deleteMany
   */
  export type BotonPanicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotonPanicos to delete
     */
    where?: BotonPanicoWhereInput
    /**
     * Limit how many BotonPanicos to delete.
     */
    limit?: number
  }

  /**
   * BotonPanico.IncidenteAsignado
   */
  export type BotonPanico$IncidenteAsignadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    where?: IncidenteAsignadoWhereInput
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    cursor?: IncidenteAsignadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidenteAsignadoScalarFieldEnum | IncidenteAsignadoScalarFieldEnum[]
  }

  /**
   * BotonPanico without action
   */
  export type BotonPanicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotonPanico
     */
    select?: BotonPanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotonPanico
     */
    omit?: BotonPanicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotonPanicoInclude<ExtArgs> | null
  }


  /**
   * Model Supervisor
   */

  export type AggregateSupervisor = {
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  export type SupervisorAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type SupervisorSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type SupervisorMinAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type SupervisorMaxAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type SupervisorCountAggregateOutputType = {
    id: number
    userRoleId: number
    _all: number
  }


  export type SupervisorAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type SupervisorSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type SupervisorMinAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type SupervisorMaxAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type SupervisorCountAggregateInputType = {
    id?: true
    userRoleId?: true
    _all?: true
  }

  export type SupervisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisor to aggregate.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supervisors
    **/
    _count?: true | SupervisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorMaxAggregateInputType
  }

  export type GetSupervisorAggregateType<T extends SupervisorAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisor[P]>
      : GetScalarType<T[P], AggregateSupervisor[P]>
  }




  export type SupervisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorWhereInput
    orderBy?: SupervisorOrderByWithAggregationInput | SupervisorOrderByWithAggregationInput[]
    by: SupervisorScalarFieldEnum[] | SupervisorScalarFieldEnum
    having?: SupervisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorCountAggregateInputType | true
    _avg?: SupervisorAvgAggregateInputType
    _sum?: SupervisorSumAggregateInputType
    _min?: SupervisorMinAggregateInputType
    _max?: SupervisorMaxAggregateInputType
  }

  export type SupervisorGroupByOutputType = {
    id: number
    userRoleId: number
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  type GetSupervisorGroupByPayload<T extends SupervisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
        }
      >
    >


  export type SupervisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleId?: boolean
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    ubicaciones?: boolean | Supervisor$ubicacionesArgs<ExtArgs>
    reportes?: boolean | Supervisor$reportesArgs<ExtArgs>
    asignaciones?: boolean | Supervisor$asignacionesArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>



  export type SupervisorSelectScalar = {
    id?: boolean
    userRoleId?: boolean
  }

  export type SupervisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRoleId", ExtArgs["result"]["supervisor"]>
  export type SupervisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    ubicaciones?: boolean | Supervisor$ubicacionesArgs<ExtArgs>
    reportes?: boolean | Supervisor$reportesArgs<ExtArgs>
    asignaciones?: boolean | Supervisor$asignacionesArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SupervisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supervisor"
    objects: {
      user: Prisma.$UserRolePayload<ExtArgs>
      ubicaciones: Prisma.$UbicacionSupervisorPayload<ExtArgs>[]
      reportes: Prisma.$ReporteIncidentePayload<ExtArgs>[]
      asignaciones: Prisma.$IncidenteAsignadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userRoleId: number
    }, ExtArgs["result"]["supervisor"]>
    composites: {}
  }

  type SupervisorGetPayload<S extends boolean | null | undefined | SupervisorDefaultArgs> = $Result.GetResult<Prisma.$SupervisorPayload, S>

  type SupervisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupervisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisorCountAggregateInputType | true
    }

  export interface SupervisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supervisor'], meta: { name: 'Supervisor' } }
    /**
     * Find zero or one Supervisor that matches the filter.
     * @param {SupervisorFindUniqueArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisorFindUniqueArgs>(args: SelectSubset<T, SupervisorFindUniqueArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supervisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupervisorFindUniqueOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisorFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisorFindFirstArgs>(args?: SelectSubset<T, SupervisorFindFirstArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisorFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisors
     * const supervisors = await prisma.supervisor.findMany()
     * 
     * // Get first 10 Supervisors
     * const supervisors = await prisma.supervisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisorWithIdOnly = await prisma.supervisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisorFindManyArgs>(args?: SelectSubset<T, SupervisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supervisor.
     * @param {SupervisorCreateArgs} args - Arguments to create a Supervisor.
     * @example
     * // Create one Supervisor
     * const Supervisor = await prisma.supervisor.create({
     *   data: {
     *     // ... data to create a Supervisor
     *   }
     * })
     * 
     */
    create<T extends SupervisorCreateArgs>(args: SelectSubset<T, SupervisorCreateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supervisors.
     * @param {SupervisorCreateManyArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisorCreateManyArgs>(args?: SelectSubset<T, SupervisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supervisor.
     * @param {SupervisorDeleteArgs} args - Arguments to delete one Supervisor.
     * @example
     * // Delete one Supervisor
     * const Supervisor = await prisma.supervisor.delete({
     *   where: {
     *     // ... filter to delete one Supervisor
     *   }
     * })
     * 
     */
    delete<T extends SupervisorDeleteArgs>(args: SelectSubset<T, SupervisorDeleteArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supervisor.
     * @param {SupervisorUpdateArgs} args - Arguments to update one Supervisor.
     * @example
     * // Update one Supervisor
     * const supervisor = await prisma.supervisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisorUpdateArgs>(args: SelectSubset<T, SupervisorUpdateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supervisors.
     * @param {SupervisorDeleteManyArgs} args - Arguments to filter Supervisors to delete.
     * @example
     * // Delete a few Supervisors
     * const { count } = await prisma.supervisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisorDeleteManyArgs>(args?: SelectSubset<T, SupervisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisors
     * const supervisor = await prisma.supervisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisorUpdateManyArgs>(args: SelectSubset<T, SupervisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supervisor.
     * @param {SupervisorUpsertArgs} args - Arguments to update or create a Supervisor.
     * @example
     * // Update or create a Supervisor
     * const supervisor = await prisma.supervisor.upsert({
     *   create: {
     *     // ... data to create a Supervisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisor we want to update
     *   }
     * })
     */
    upsert<T extends SupervisorUpsertArgs>(args: SelectSubset<T, SupervisorUpsertArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorCountArgs} args - Arguments to filter Supervisors to count.
     * @example
     * // Count the number of Supervisors
     * const count = await prisma.supervisor.count({
     *   where: {
     *     // ... the filter for the Supervisors we want to count
     *   }
     * })
    **/
    count<T extends SupervisorCountArgs>(
      args?: Subset<T, SupervisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisorAggregateArgs>(args: Subset<T, SupervisorAggregateArgs>): Prisma.PrismaPromise<GetSupervisorAggregateType<T>>

    /**
     * Group by Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorGroupByArgs} args - Group by arguments.
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
      T extends SupervisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisorGroupByArgs['orderBy'] }
        : { orderBy?: SupervisorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupervisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supervisor model
   */
  readonly fields: SupervisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supervisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ubicaciones<T extends Supervisor$ubicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$ubicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Supervisor$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Supervisor$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supervisor model
   */
  interface SupervisorFieldRefs {
    readonly id: FieldRef<"Supervisor", 'Int'>
    readonly userRoleId: FieldRef<"Supervisor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Supervisor findUnique
   */
  export type SupervisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findUniqueOrThrow
   */
  export type SupervisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findFirst
   */
  export type SupervisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findFirstOrThrow
   */
  export type SupervisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findMany
   */
  export type SupervisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisors to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor create
   */
  export type SupervisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to create a Supervisor.
     */
    data: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
  }

  /**
   * Supervisor createMany
   */
  export type SupervisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supervisors.
     */
    data: SupervisorCreateManyInput | SupervisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supervisor update
   */
  export type SupervisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to update a Supervisor.
     */
    data: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
    /**
     * Choose, which Supervisor to update.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor updateMany
   */
  export type SupervisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supervisors.
     */
    data: XOR<SupervisorUpdateManyMutationInput, SupervisorUncheckedUpdateManyInput>
    /**
     * Filter which Supervisors to update
     */
    where?: SupervisorWhereInput
    /**
     * Limit how many Supervisors to update.
     */
    limit?: number
  }

  /**
   * Supervisor upsert
   */
  export type SupervisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The filter to search for the Supervisor to update in case it exists.
     */
    where: SupervisorWhereUniqueInput
    /**
     * In case the Supervisor found by the `where` argument doesn't exist, create a new Supervisor with this data.
     */
    create: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
    /**
     * In case the Supervisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
  }

  /**
   * Supervisor delete
   */
  export type SupervisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter which Supervisor to delete.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor deleteMany
   */
  export type SupervisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisors to delete
     */
    where?: SupervisorWhereInput
    /**
     * Limit how many Supervisors to delete.
     */
    limit?: number
  }

  /**
   * Supervisor.ubicaciones
   */
  export type Supervisor$ubicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    where?: UbicacionSupervisorWhereInput
    orderBy?: UbicacionSupervisorOrderByWithRelationInput | UbicacionSupervisorOrderByWithRelationInput[]
    cursor?: UbicacionSupervisorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbicacionSupervisorScalarFieldEnum | UbicacionSupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor.reportes
   */
  export type Supervisor$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    where?: ReporteIncidenteWhereInput
    orderBy?: ReporteIncidenteOrderByWithRelationInput | ReporteIncidenteOrderByWithRelationInput[]
    cursor?: ReporteIncidenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteIncidenteScalarFieldEnum | ReporteIncidenteScalarFieldEnum[]
  }

  /**
   * Supervisor.asignaciones
   */
  export type Supervisor$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    where?: IncidenteAsignadoWhereInput
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    cursor?: IncidenteAsignadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidenteAsignadoScalarFieldEnum | IncidenteAsignadoScalarFieldEnum[]
  }

  /**
   * Supervisor without action
   */
  export type SupervisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supervisor
     */
    omit?: SupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
  }


  /**
   * Model UbicacionSupervisor
   */

  export type AggregateUbicacionSupervisor = {
    _count: UbicacionSupervisorCountAggregateOutputType | null
    _avg: UbicacionSupervisorAvgAggregateOutputType | null
    _sum: UbicacionSupervisorSumAggregateOutputType | null
    _min: UbicacionSupervisorMinAggregateOutputType | null
    _max: UbicacionSupervisorMaxAggregateOutputType | null
  }

  export type UbicacionSupervisorAvgAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type UbicacionSupervisorSumAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type UbicacionSupervisorMinAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    timestamp: Date | null
    latitud: number | null
    longitud: number | null
  }

  export type UbicacionSupervisorMaxAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    timestamp: Date | null
    latitud: number | null
    longitud: number | null
  }

  export type UbicacionSupervisorCountAggregateOutputType = {
    id: number
    supervisorId: number
    timestamp: number
    latitud: number
    longitud: number
    _all: number
  }


  export type UbicacionSupervisorAvgAggregateInputType = {
    id?: true
    supervisorId?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionSupervisorSumAggregateInputType = {
    id?: true
    supervisorId?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionSupervisorMinAggregateInputType = {
    id?: true
    supervisorId?: true
    timestamp?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionSupervisorMaxAggregateInputType = {
    id?: true
    supervisorId?: true
    timestamp?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionSupervisorCountAggregateInputType = {
    id?: true
    supervisorId?: true
    timestamp?: true
    latitud?: true
    longitud?: true
    _all?: true
  }

  export type UbicacionSupervisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionSupervisor to aggregate.
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionSupervisors to fetch.
     */
    orderBy?: UbicacionSupervisorOrderByWithRelationInput | UbicacionSupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionSupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionSupervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionSupervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UbicacionSupervisors
    **/
    _count?: true | UbicacionSupervisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionSupervisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSupervisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionSupervisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionSupervisorMaxAggregateInputType
  }

  export type GetUbicacionSupervisorAggregateType<T extends UbicacionSupervisorAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacionSupervisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacionSupervisor[P]>
      : GetScalarType<T[P], AggregateUbicacionSupervisor[P]>
  }




  export type UbicacionSupervisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionSupervisorWhereInput
    orderBy?: UbicacionSupervisorOrderByWithAggregationInput | UbicacionSupervisorOrderByWithAggregationInput[]
    by: UbicacionSupervisorScalarFieldEnum[] | UbicacionSupervisorScalarFieldEnum
    having?: UbicacionSupervisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionSupervisorCountAggregateInputType | true
    _avg?: UbicacionSupervisorAvgAggregateInputType
    _sum?: UbicacionSupervisorSumAggregateInputType
    _min?: UbicacionSupervisorMinAggregateInputType
    _max?: UbicacionSupervisorMaxAggregateInputType
  }

  export type UbicacionSupervisorGroupByOutputType = {
    id: number
    supervisorId: number
    timestamp: Date
    latitud: number
    longitud: number
    _count: UbicacionSupervisorCountAggregateOutputType | null
    _avg: UbicacionSupervisorAvgAggregateOutputType | null
    _sum: UbicacionSupervisorSumAggregateOutputType | null
    _min: UbicacionSupervisorMinAggregateOutputType | null
    _max: UbicacionSupervisorMaxAggregateOutputType | null
  }

  type GetUbicacionSupervisorGroupByPayload<T extends UbicacionSupervisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionSupervisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionSupervisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionSupervisorGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionSupervisorGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionSupervisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorId?: boolean
    timestamp?: boolean
    latitud?: boolean
    longitud?: boolean
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionSupervisor"]>



  export type UbicacionSupervisorSelectScalar = {
    id?: boolean
    supervisorId?: boolean
    timestamp?: boolean
    latitud?: boolean
    longitud?: boolean
  }

  export type UbicacionSupervisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervisorId" | "timestamp" | "latitud" | "longitud", ExtArgs["result"]["ubicacionSupervisor"]>
  export type UbicacionSupervisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }

  export type $UbicacionSupervisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UbicacionSupervisor"
    objects: {
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supervisorId: number
      timestamp: Date
      latitud: number
      longitud: number
    }, ExtArgs["result"]["ubicacionSupervisor"]>
    composites: {}
  }

  type UbicacionSupervisorGetPayload<S extends boolean | null | undefined | UbicacionSupervisorDefaultArgs> = $Result.GetResult<Prisma.$UbicacionSupervisorPayload, S>

  type UbicacionSupervisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbicacionSupervisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionSupervisorCountAggregateInputType | true
    }

  export interface UbicacionSupervisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UbicacionSupervisor'], meta: { name: 'UbicacionSupervisor' } }
    /**
     * Find zero or one UbicacionSupervisor that matches the filter.
     * @param {UbicacionSupervisorFindUniqueArgs} args - Arguments to find a UbicacionSupervisor
     * @example
     * // Get one UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionSupervisorFindUniqueArgs>(args: SelectSubset<T, UbicacionSupervisorFindUniqueArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UbicacionSupervisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbicacionSupervisorFindUniqueOrThrowArgs} args - Arguments to find a UbicacionSupervisor
     * @example
     * // Get one UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionSupervisorFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionSupervisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionSupervisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorFindFirstArgs} args - Arguments to find a UbicacionSupervisor
     * @example
     * // Get one UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionSupervisorFindFirstArgs>(args?: SelectSubset<T, UbicacionSupervisorFindFirstArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionSupervisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorFindFirstOrThrowArgs} args - Arguments to find a UbicacionSupervisor
     * @example
     * // Get one UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionSupervisorFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionSupervisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UbicacionSupervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UbicacionSupervisors
     * const ubicacionSupervisors = await prisma.ubicacionSupervisor.findMany()
     * 
     * // Get first 10 UbicacionSupervisors
     * const ubicacionSupervisors = await prisma.ubicacionSupervisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionSupervisorWithIdOnly = await prisma.ubicacionSupervisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbicacionSupervisorFindManyArgs>(args?: SelectSubset<T, UbicacionSupervisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UbicacionSupervisor.
     * @param {UbicacionSupervisorCreateArgs} args - Arguments to create a UbicacionSupervisor.
     * @example
     * // Create one UbicacionSupervisor
     * const UbicacionSupervisor = await prisma.ubicacionSupervisor.create({
     *   data: {
     *     // ... data to create a UbicacionSupervisor
     *   }
     * })
     * 
     */
    create<T extends UbicacionSupervisorCreateArgs>(args: SelectSubset<T, UbicacionSupervisorCreateArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UbicacionSupervisors.
     * @param {UbicacionSupervisorCreateManyArgs} args - Arguments to create many UbicacionSupervisors.
     * @example
     * // Create many UbicacionSupervisors
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionSupervisorCreateManyArgs>(args?: SelectSubset<T, UbicacionSupervisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UbicacionSupervisor.
     * @param {UbicacionSupervisorDeleteArgs} args - Arguments to delete one UbicacionSupervisor.
     * @example
     * // Delete one UbicacionSupervisor
     * const UbicacionSupervisor = await prisma.ubicacionSupervisor.delete({
     *   where: {
     *     // ... filter to delete one UbicacionSupervisor
     *   }
     * })
     * 
     */
    delete<T extends UbicacionSupervisorDeleteArgs>(args: SelectSubset<T, UbicacionSupervisorDeleteArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UbicacionSupervisor.
     * @param {UbicacionSupervisorUpdateArgs} args - Arguments to update one UbicacionSupervisor.
     * @example
     * // Update one UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionSupervisorUpdateArgs>(args: SelectSubset<T, UbicacionSupervisorUpdateArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UbicacionSupervisors.
     * @param {UbicacionSupervisorDeleteManyArgs} args - Arguments to filter UbicacionSupervisors to delete.
     * @example
     * // Delete a few UbicacionSupervisors
     * const { count } = await prisma.ubicacionSupervisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionSupervisorDeleteManyArgs>(args?: SelectSubset<T, UbicacionSupervisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbicacionSupervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UbicacionSupervisors
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionSupervisorUpdateManyArgs>(args: SelectSubset<T, UbicacionSupervisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UbicacionSupervisor.
     * @param {UbicacionSupervisorUpsertArgs} args - Arguments to update or create a UbicacionSupervisor.
     * @example
     * // Update or create a UbicacionSupervisor
     * const ubicacionSupervisor = await prisma.ubicacionSupervisor.upsert({
     *   create: {
     *     // ... data to create a UbicacionSupervisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UbicacionSupervisor we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionSupervisorUpsertArgs>(args: SelectSubset<T, UbicacionSupervisorUpsertArgs<ExtArgs>>): Prisma__UbicacionSupervisorClient<$Result.GetResult<Prisma.$UbicacionSupervisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UbicacionSupervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorCountArgs} args - Arguments to filter UbicacionSupervisors to count.
     * @example
     * // Count the number of UbicacionSupervisors
     * const count = await prisma.ubicacionSupervisor.count({
     *   where: {
     *     // ... the filter for the UbicacionSupervisors we want to count
     *   }
     * })
    **/
    count<T extends UbicacionSupervisorCountArgs>(
      args?: Subset<T, UbicacionSupervisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionSupervisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UbicacionSupervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UbicacionSupervisorAggregateArgs>(args: Subset<T, UbicacionSupervisorAggregateArgs>): Prisma.PrismaPromise<GetUbicacionSupervisorAggregateType<T>>

    /**
     * Group by UbicacionSupervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionSupervisorGroupByArgs} args - Group by arguments.
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
      T extends UbicacionSupervisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionSupervisorGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionSupervisorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UbicacionSupervisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionSupervisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UbicacionSupervisor model
   */
  readonly fields: UbicacionSupervisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UbicacionSupervisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionSupervisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UbicacionSupervisor model
   */
  interface UbicacionSupervisorFieldRefs {
    readonly id: FieldRef<"UbicacionSupervisor", 'Int'>
    readonly supervisorId: FieldRef<"UbicacionSupervisor", 'Int'>
    readonly timestamp: FieldRef<"UbicacionSupervisor", 'DateTime'>
    readonly latitud: FieldRef<"UbicacionSupervisor", 'Float'>
    readonly longitud: FieldRef<"UbicacionSupervisor", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UbicacionSupervisor findUnique
   */
  export type UbicacionSupervisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionSupervisor to fetch.
     */
    where: UbicacionSupervisorWhereUniqueInput
  }

  /**
   * UbicacionSupervisor findUniqueOrThrow
   */
  export type UbicacionSupervisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionSupervisor to fetch.
     */
    where: UbicacionSupervisorWhereUniqueInput
  }

  /**
   * UbicacionSupervisor findFirst
   */
  export type UbicacionSupervisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionSupervisor to fetch.
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionSupervisors to fetch.
     */
    orderBy?: UbicacionSupervisorOrderByWithRelationInput | UbicacionSupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionSupervisors.
     */
    cursor?: UbicacionSupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionSupervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionSupervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionSupervisors.
     */
    distinct?: UbicacionSupervisorScalarFieldEnum | UbicacionSupervisorScalarFieldEnum[]
  }

  /**
   * UbicacionSupervisor findFirstOrThrow
   */
  export type UbicacionSupervisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionSupervisor to fetch.
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionSupervisors to fetch.
     */
    orderBy?: UbicacionSupervisorOrderByWithRelationInput | UbicacionSupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionSupervisors.
     */
    cursor?: UbicacionSupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionSupervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionSupervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionSupervisors.
     */
    distinct?: UbicacionSupervisorScalarFieldEnum | UbicacionSupervisorScalarFieldEnum[]
  }

  /**
   * UbicacionSupervisor findMany
   */
  export type UbicacionSupervisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionSupervisors to fetch.
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionSupervisors to fetch.
     */
    orderBy?: UbicacionSupervisorOrderByWithRelationInput | UbicacionSupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UbicacionSupervisors.
     */
    cursor?: UbicacionSupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionSupervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionSupervisors.
     */
    skip?: number
    distinct?: UbicacionSupervisorScalarFieldEnum | UbicacionSupervisorScalarFieldEnum[]
  }

  /**
   * UbicacionSupervisor create
   */
  export type UbicacionSupervisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * The data needed to create a UbicacionSupervisor.
     */
    data: XOR<UbicacionSupervisorCreateInput, UbicacionSupervisorUncheckedCreateInput>
  }

  /**
   * UbicacionSupervisor createMany
   */
  export type UbicacionSupervisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UbicacionSupervisors.
     */
    data: UbicacionSupervisorCreateManyInput | UbicacionSupervisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UbicacionSupervisor update
   */
  export type UbicacionSupervisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * The data needed to update a UbicacionSupervisor.
     */
    data: XOR<UbicacionSupervisorUpdateInput, UbicacionSupervisorUncheckedUpdateInput>
    /**
     * Choose, which UbicacionSupervisor to update.
     */
    where: UbicacionSupervisorWhereUniqueInput
  }

  /**
   * UbicacionSupervisor updateMany
   */
  export type UbicacionSupervisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UbicacionSupervisors.
     */
    data: XOR<UbicacionSupervisorUpdateManyMutationInput, UbicacionSupervisorUncheckedUpdateManyInput>
    /**
     * Filter which UbicacionSupervisors to update
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * Limit how many UbicacionSupervisors to update.
     */
    limit?: number
  }

  /**
   * UbicacionSupervisor upsert
   */
  export type UbicacionSupervisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * The filter to search for the UbicacionSupervisor to update in case it exists.
     */
    where: UbicacionSupervisorWhereUniqueInput
    /**
     * In case the UbicacionSupervisor found by the `where` argument doesn't exist, create a new UbicacionSupervisor with this data.
     */
    create: XOR<UbicacionSupervisorCreateInput, UbicacionSupervisorUncheckedCreateInput>
    /**
     * In case the UbicacionSupervisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionSupervisorUpdateInput, UbicacionSupervisorUncheckedUpdateInput>
  }

  /**
   * UbicacionSupervisor delete
   */
  export type UbicacionSupervisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
    /**
     * Filter which UbicacionSupervisor to delete.
     */
    where: UbicacionSupervisorWhereUniqueInput
  }

  /**
   * UbicacionSupervisor deleteMany
   */
  export type UbicacionSupervisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionSupervisors to delete
     */
    where?: UbicacionSupervisorWhereInput
    /**
     * Limit how many UbicacionSupervisors to delete.
     */
    limit?: number
  }

  /**
   * UbicacionSupervisor without action
   */
  export type UbicacionSupervisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionSupervisor
     */
    select?: UbicacionSupervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionSupervisor
     */
    omit?: UbicacionSupervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionSupervisorInclude<ExtArgs> | null
  }


  /**
   * Model Coordinador
   */

  export type AggregateCoordinador = {
    _count: CoordinadorCountAggregateOutputType | null
    _avg: CoordinadorAvgAggregateOutputType | null
    _sum: CoordinadorSumAggregateOutputType | null
    _min: CoordinadorMinAggregateOutputType | null
    _max: CoordinadorMaxAggregateOutputType | null
  }

  export type CoordinadorAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type CoordinadorSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type CoordinadorMinAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type CoordinadorMaxAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type CoordinadorCountAggregateOutputType = {
    id: number
    userRoleId: number
    _all: number
  }


  export type CoordinadorAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type CoordinadorSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type CoordinadorMinAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type CoordinadorMaxAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type CoordinadorCountAggregateInputType = {
    id?: true
    userRoleId?: true
    _all?: true
  }

  export type CoordinadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinador to aggregate.
     */
    where?: CoordinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinadors to fetch.
     */
    orderBy?: CoordinadorOrderByWithRelationInput | CoordinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinadors
    **/
    _count?: true | CoordinadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinadorMaxAggregateInputType
  }

  export type GetCoordinadorAggregateType<T extends CoordinadorAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinador[P]>
      : GetScalarType<T[P], AggregateCoordinador[P]>
  }




  export type CoordinadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinadorWhereInput
    orderBy?: CoordinadorOrderByWithAggregationInput | CoordinadorOrderByWithAggregationInput[]
    by: CoordinadorScalarFieldEnum[] | CoordinadorScalarFieldEnum
    having?: CoordinadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinadorCountAggregateInputType | true
    _avg?: CoordinadorAvgAggregateInputType
    _sum?: CoordinadorSumAggregateInputType
    _min?: CoordinadorMinAggregateInputType
    _max?: CoordinadorMaxAggregateInputType
  }

  export type CoordinadorGroupByOutputType = {
    id: number
    userRoleId: number
    _count: CoordinadorCountAggregateOutputType | null
    _avg: CoordinadorAvgAggregateOutputType | null
    _sum: CoordinadorSumAggregateOutputType | null
    _min: CoordinadorMinAggregateOutputType | null
    _max: CoordinadorMaxAggregateOutputType | null
  }

  type GetCoordinadorGroupByPayload<T extends CoordinadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinadorGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinadorGroupByOutputType[P]>
        }
      >
    >


  export type CoordinadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleId?: boolean
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinador"]>



  export type CoordinadorSelectScalar = {
    id?: boolean
    userRoleId?: boolean
  }

  export type CoordinadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRoleId", ExtArgs["result"]["coordinador"]>
  export type CoordinadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $CoordinadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coordinador"
    objects: {
      user: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userRoleId: number
    }, ExtArgs["result"]["coordinador"]>
    composites: {}
  }

  type CoordinadorGetPayload<S extends boolean | null | undefined | CoordinadorDefaultArgs> = $Result.GetResult<Prisma.$CoordinadorPayload, S>

  type CoordinadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoordinadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordinadorCountAggregateInputType | true
    }

  export interface CoordinadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coordinador'], meta: { name: 'Coordinador' } }
    /**
     * Find zero or one Coordinador that matches the filter.
     * @param {CoordinadorFindUniqueArgs} args - Arguments to find a Coordinador
     * @example
     * // Get one Coordinador
     * const coordinador = await prisma.coordinador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordinadorFindUniqueArgs>(args: SelectSubset<T, CoordinadorFindUniqueArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coordinador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoordinadorFindUniqueOrThrowArgs} args - Arguments to find a Coordinador
     * @example
     * // Get one Coordinador
     * const coordinador = await prisma.coordinador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordinadorFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordinadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorFindFirstArgs} args - Arguments to find a Coordinador
     * @example
     * // Get one Coordinador
     * const coordinador = await prisma.coordinador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordinadorFindFirstArgs>(args?: SelectSubset<T, CoordinadorFindFirstArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorFindFirstOrThrowArgs} args - Arguments to find a Coordinador
     * @example
     * // Get one Coordinador
     * const coordinador = await prisma.coordinador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordinadorFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordinadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coordinadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinadors
     * const coordinadors = await prisma.coordinador.findMany()
     * 
     * // Get first 10 Coordinadors
     * const coordinadors = await prisma.coordinador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinadorWithIdOnly = await prisma.coordinador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordinadorFindManyArgs>(args?: SelectSubset<T, CoordinadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coordinador.
     * @param {CoordinadorCreateArgs} args - Arguments to create a Coordinador.
     * @example
     * // Create one Coordinador
     * const Coordinador = await prisma.coordinador.create({
     *   data: {
     *     // ... data to create a Coordinador
     *   }
     * })
     * 
     */
    create<T extends CoordinadorCreateArgs>(args: SelectSubset<T, CoordinadorCreateArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coordinadors.
     * @param {CoordinadorCreateManyArgs} args - Arguments to create many Coordinadors.
     * @example
     * // Create many Coordinadors
     * const coordinador = await prisma.coordinador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordinadorCreateManyArgs>(args?: SelectSubset<T, CoordinadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coordinador.
     * @param {CoordinadorDeleteArgs} args - Arguments to delete one Coordinador.
     * @example
     * // Delete one Coordinador
     * const Coordinador = await prisma.coordinador.delete({
     *   where: {
     *     // ... filter to delete one Coordinador
     *   }
     * })
     * 
     */
    delete<T extends CoordinadorDeleteArgs>(args: SelectSubset<T, CoordinadorDeleteArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coordinador.
     * @param {CoordinadorUpdateArgs} args - Arguments to update one Coordinador.
     * @example
     * // Update one Coordinador
     * const coordinador = await prisma.coordinador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordinadorUpdateArgs>(args: SelectSubset<T, CoordinadorUpdateArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coordinadors.
     * @param {CoordinadorDeleteManyArgs} args - Arguments to filter Coordinadors to delete.
     * @example
     * // Delete a few Coordinadors
     * const { count } = await prisma.coordinador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordinadorDeleteManyArgs>(args?: SelectSubset<T, CoordinadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinadors
     * const coordinador = await prisma.coordinador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordinadorUpdateManyArgs>(args: SelectSubset<T, CoordinadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coordinador.
     * @param {CoordinadorUpsertArgs} args - Arguments to update or create a Coordinador.
     * @example
     * // Update or create a Coordinador
     * const coordinador = await prisma.coordinador.upsert({
     *   create: {
     *     // ... data to create a Coordinador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinador we want to update
     *   }
     * })
     */
    upsert<T extends CoordinadorUpsertArgs>(args: SelectSubset<T, CoordinadorUpsertArgs<ExtArgs>>): Prisma__CoordinadorClient<$Result.GetResult<Prisma.$CoordinadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coordinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorCountArgs} args - Arguments to filter Coordinadors to count.
     * @example
     * // Count the number of Coordinadors
     * const count = await prisma.coordinador.count({
     *   where: {
     *     // ... the filter for the Coordinadors we want to count
     *   }
     * })
    **/
    count<T extends CoordinadorCountArgs>(
      args?: Subset<T, CoordinadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoordinadorAggregateArgs>(args: Subset<T, CoordinadorAggregateArgs>): Prisma.PrismaPromise<GetCoordinadorAggregateType<T>>

    /**
     * Group by Coordinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinadorGroupByArgs} args - Group by arguments.
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
      T extends CoordinadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinadorGroupByArgs['orderBy'] }
        : { orderBy?: CoordinadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoordinadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coordinador model
   */
  readonly fields: CoordinadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordinadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Coordinador model
   */
  interface CoordinadorFieldRefs {
    readonly id: FieldRef<"Coordinador", 'Int'>
    readonly userRoleId: FieldRef<"Coordinador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Coordinador findUnique
   */
  export type CoordinadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinador to fetch.
     */
    where: CoordinadorWhereUniqueInput
  }

  /**
   * Coordinador findUniqueOrThrow
   */
  export type CoordinadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinador to fetch.
     */
    where: CoordinadorWhereUniqueInput
  }

  /**
   * Coordinador findFirst
   */
  export type CoordinadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinador to fetch.
     */
    where?: CoordinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinadors to fetch.
     */
    orderBy?: CoordinadorOrderByWithRelationInput | CoordinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinadors.
     */
    cursor?: CoordinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinadors.
     */
    distinct?: CoordinadorScalarFieldEnum | CoordinadorScalarFieldEnum[]
  }

  /**
   * Coordinador findFirstOrThrow
   */
  export type CoordinadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinador to fetch.
     */
    where?: CoordinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinadors to fetch.
     */
    orderBy?: CoordinadorOrderByWithRelationInput | CoordinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinadors.
     */
    cursor?: CoordinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinadors.
     */
    distinct?: CoordinadorScalarFieldEnum | CoordinadorScalarFieldEnum[]
  }

  /**
   * Coordinador findMany
   */
  export type CoordinadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinadors to fetch.
     */
    where?: CoordinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinadors to fetch.
     */
    orderBy?: CoordinadorOrderByWithRelationInput | CoordinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinadors.
     */
    cursor?: CoordinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinadors.
     */
    skip?: number
    distinct?: CoordinadorScalarFieldEnum | CoordinadorScalarFieldEnum[]
  }

  /**
   * Coordinador create
   */
  export type CoordinadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Coordinador.
     */
    data: XOR<CoordinadorCreateInput, CoordinadorUncheckedCreateInput>
  }

  /**
   * Coordinador createMany
   */
  export type CoordinadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coordinadors.
     */
    data: CoordinadorCreateManyInput | CoordinadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinador update
   */
  export type CoordinadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Coordinador.
     */
    data: XOR<CoordinadorUpdateInput, CoordinadorUncheckedUpdateInput>
    /**
     * Choose, which Coordinador to update.
     */
    where: CoordinadorWhereUniqueInput
  }

  /**
   * Coordinador updateMany
   */
  export type CoordinadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coordinadors.
     */
    data: XOR<CoordinadorUpdateManyMutationInput, CoordinadorUncheckedUpdateManyInput>
    /**
     * Filter which Coordinadors to update
     */
    where?: CoordinadorWhereInput
    /**
     * Limit how many Coordinadors to update.
     */
    limit?: number
  }

  /**
   * Coordinador upsert
   */
  export type CoordinadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Coordinador to update in case it exists.
     */
    where: CoordinadorWhereUniqueInput
    /**
     * In case the Coordinador found by the `where` argument doesn't exist, create a new Coordinador with this data.
     */
    create: XOR<CoordinadorCreateInput, CoordinadorUncheckedCreateInput>
    /**
     * In case the Coordinador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordinadorUpdateInput, CoordinadorUncheckedUpdateInput>
  }

  /**
   * Coordinador delete
   */
  export type CoordinadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
    /**
     * Filter which Coordinador to delete.
     */
    where: CoordinadorWhereUniqueInput
  }

  /**
   * Coordinador deleteMany
   */
  export type CoordinadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinadors to delete
     */
    where?: CoordinadorWhereInput
    /**
     * Limit how many Coordinadors to delete.
     */
    limit?: number
  }

  /**
   * Coordinador without action
   */
  export type CoordinadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinador
     */
    select?: CoordinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinador
     */
    omit?: CoordinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinadorInclude<ExtArgs> | null
  }


  /**
   * Model IncidenteAsignado
   */

  export type AggregateIncidenteAsignado = {
    _count: IncidenteAsignadoCountAggregateOutputType | null
    _avg: IncidenteAsignadoAvgAggregateOutputType | null
    _sum: IncidenteAsignadoSumAggregateOutputType | null
    _min: IncidenteAsignadoMinAggregateOutputType | null
    _max: IncidenteAsignadoMaxAggregateOutputType | null
  }

  export type IncidenteAsignadoAvgAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    panicId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type IncidenteAsignadoSumAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    panicId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type IncidenteAsignadoMinAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    fechaAsignacion: Date | null
    panicId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type IncidenteAsignadoMaxAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    fechaAsignacion: Date | null
    panicId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type IncidenteAsignadoCountAggregateOutputType = {
    id: number
    supervisorId: number
    fechaAsignacion: number
    panicId: number
    latitud: number
    longitud: number
    _all: number
  }


  export type IncidenteAsignadoAvgAggregateInputType = {
    id?: true
    supervisorId?: true
    panicId?: true
    latitud?: true
    longitud?: true
  }

  export type IncidenteAsignadoSumAggregateInputType = {
    id?: true
    supervisorId?: true
    panicId?: true
    latitud?: true
    longitud?: true
  }

  export type IncidenteAsignadoMinAggregateInputType = {
    id?: true
    supervisorId?: true
    fechaAsignacion?: true
    panicId?: true
    latitud?: true
    longitud?: true
  }

  export type IncidenteAsignadoMaxAggregateInputType = {
    id?: true
    supervisorId?: true
    fechaAsignacion?: true
    panicId?: true
    latitud?: true
    longitud?: true
  }

  export type IncidenteAsignadoCountAggregateInputType = {
    id?: true
    supervisorId?: true
    fechaAsignacion?: true
    panicId?: true
    latitud?: true
    longitud?: true
    _all?: true
  }

  export type IncidenteAsignadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidenteAsignado to aggregate.
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidenteAsignados to fetch.
     */
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidenteAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidenteAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidenteAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidenteAsignados
    **/
    _count?: true | IncidenteAsignadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidenteAsignadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidenteAsignadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidenteAsignadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidenteAsignadoMaxAggregateInputType
  }

  export type GetIncidenteAsignadoAggregateType<T extends IncidenteAsignadoAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidenteAsignado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidenteAsignado[P]>
      : GetScalarType<T[P], AggregateIncidenteAsignado[P]>
  }




  export type IncidenteAsignadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidenteAsignadoWhereInput
    orderBy?: IncidenteAsignadoOrderByWithAggregationInput | IncidenteAsignadoOrderByWithAggregationInput[]
    by: IncidenteAsignadoScalarFieldEnum[] | IncidenteAsignadoScalarFieldEnum
    having?: IncidenteAsignadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidenteAsignadoCountAggregateInputType | true
    _avg?: IncidenteAsignadoAvgAggregateInputType
    _sum?: IncidenteAsignadoSumAggregateInputType
    _min?: IncidenteAsignadoMinAggregateInputType
    _max?: IncidenteAsignadoMaxAggregateInputType
  }

  export type IncidenteAsignadoGroupByOutputType = {
    id: number
    supervisorId: number
    fechaAsignacion: Date
    panicId: number
    latitud: number
    longitud: number
    _count: IncidenteAsignadoCountAggregateOutputType | null
    _avg: IncidenteAsignadoAvgAggregateOutputType | null
    _sum: IncidenteAsignadoSumAggregateOutputType | null
    _min: IncidenteAsignadoMinAggregateOutputType | null
    _max: IncidenteAsignadoMaxAggregateOutputType | null
  }

  type GetIncidenteAsignadoGroupByPayload<T extends IncidenteAsignadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidenteAsignadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidenteAsignadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidenteAsignadoGroupByOutputType[P]>
            : GetScalarType<T[P], IncidenteAsignadoGroupByOutputType[P]>
        }
      >
    >


  export type IncidenteAsignadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorId?: boolean
    fechaAsignacion?: boolean
    panicId?: boolean
    latitud?: boolean
    longitud?: boolean
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    panic?: boolean | BotonPanicoDefaultArgs<ExtArgs>
    reporte?: boolean | IncidenteAsignado$reporteArgs<ExtArgs>
  }, ExtArgs["result"]["incidenteAsignado"]>



  export type IncidenteAsignadoSelectScalar = {
    id?: boolean
    supervisorId?: boolean
    fechaAsignacion?: boolean
    panicId?: boolean
    latitud?: boolean
    longitud?: boolean
  }

  export type IncidenteAsignadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervisorId" | "fechaAsignacion" | "panicId" | "latitud" | "longitud", ExtArgs["result"]["incidenteAsignado"]>
  export type IncidenteAsignadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    panic?: boolean | BotonPanicoDefaultArgs<ExtArgs>
    reporte?: boolean | IncidenteAsignado$reporteArgs<ExtArgs>
  }

  export type $IncidenteAsignadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidenteAsignado"
    objects: {
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
      panic: Prisma.$BotonPanicoPayload<ExtArgs>
      reporte: Prisma.$ReporteIncidentePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supervisorId: number
      fechaAsignacion: Date
      panicId: number
      latitud: number
      longitud: number
    }, ExtArgs["result"]["incidenteAsignado"]>
    composites: {}
  }

  type IncidenteAsignadoGetPayload<S extends boolean | null | undefined | IncidenteAsignadoDefaultArgs> = $Result.GetResult<Prisma.$IncidenteAsignadoPayload, S>

  type IncidenteAsignadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidenteAsignadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidenteAsignadoCountAggregateInputType | true
    }

  export interface IncidenteAsignadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidenteAsignado'], meta: { name: 'IncidenteAsignado' } }
    /**
     * Find zero or one IncidenteAsignado that matches the filter.
     * @param {IncidenteAsignadoFindUniqueArgs} args - Arguments to find a IncidenteAsignado
     * @example
     * // Get one IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidenteAsignadoFindUniqueArgs>(args: SelectSubset<T, IncidenteAsignadoFindUniqueArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidenteAsignado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidenteAsignadoFindUniqueOrThrowArgs} args - Arguments to find a IncidenteAsignado
     * @example
     * // Get one IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidenteAsignadoFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidenteAsignadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidenteAsignado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoFindFirstArgs} args - Arguments to find a IncidenteAsignado
     * @example
     * // Get one IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidenteAsignadoFindFirstArgs>(args?: SelectSubset<T, IncidenteAsignadoFindFirstArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidenteAsignado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoFindFirstOrThrowArgs} args - Arguments to find a IncidenteAsignado
     * @example
     * // Get one IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidenteAsignadoFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidenteAsignadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidenteAsignados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidenteAsignados
     * const incidenteAsignados = await prisma.incidenteAsignado.findMany()
     * 
     * // Get first 10 IncidenteAsignados
     * const incidenteAsignados = await prisma.incidenteAsignado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidenteAsignadoWithIdOnly = await prisma.incidenteAsignado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidenteAsignadoFindManyArgs>(args?: SelectSubset<T, IncidenteAsignadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidenteAsignado.
     * @param {IncidenteAsignadoCreateArgs} args - Arguments to create a IncidenteAsignado.
     * @example
     * // Create one IncidenteAsignado
     * const IncidenteAsignado = await prisma.incidenteAsignado.create({
     *   data: {
     *     // ... data to create a IncidenteAsignado
     *   }
     * })
     * 
     */
    create<T extends IncidenteAsignadoCreateArgs>(args: SelectSubset<T, IncidenteAsignadoCreateArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidenteAsignados.
     * @param {IncidenteAsignadoCreateManyArgs} args - Arguments to create many IncidenteAsignados.
     * @example
     * // Create many IncidenteAsignados
     * const incidenteAsignado = await prisma.incidenteAsignado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidenteAsignadoCreateManyArgs>(args?: SelectSubset<T, IncidenteAsignadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IncidenteAsignado.
     * @param {IncidenteAsignadoDeleteArgs} args - Arguments to delete one IncidenteAsignado.
     * @example
     * // Delete one IncidenteAsignado
     * const IncidenteAsignado = await prisma.incidenteAsignado.delete({
     *   where: {
     *     // ... filter to delete one IncidenteAsignado
     *   }
     * })
     * 
     */
    delete<T extends IncidenteAsignadoDeleteArgs>(args: SelectSubset<T, IncidenteAsignadoDeleteArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidenteAsignado.
     * @param {IncidenteAsignadoUpdateArgs} args - Arguments to update one IncidenteAsignado.
     * @example
     * // Update one IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidenteAsignadoUpdateArgs>(args: SelectSubset<T, IncidenteAsignadoUpdateArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidenteAsignados.
     * @param {IncidenteAsignadoDeleteManyArgs} args - Arguments to filter IncidenteAsignados to delete.
     * @example
     * // Delete a few IncidenteAsignados
     * const { count } = await prisma.incidenteAsignado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidenteAsignadoDeleteManyArgs>(args?: SelectSubset<T, IncidenteAsignadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidenteAsignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidenteAsignados
     * const incidenteAsignado = await prisma.incidenteAsignado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidenteAsignadoUpdateManyArgs>(args: SelectSubset<T, IncidenteAsignadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IncidenteAsignado.
     * @param {IncidenteAsignadoUpsertArgs} args - Arguments to update or create a IncidenteAsignado.
     * @example
     * // Update or create a IncidenteAsignado
     * const incidenteAsignado = await prisma.incidenteAsignado.upsert({
     *   create: {
     *     // ... data to create a IncidenteAsignado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidenteAsignado we want to update
     *   }
     * })
     */
    upsert<T extends IncidenteAsignadoUpsertArgs>(args: SelectSubset<T, IncidenteAsignadoUpsertArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidenteAsignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoCountArgs} args - Arguments to filter IncidenteAsignados to count.
     * @example
     * // Count the number of IncidenteAsignados
     * const count = await prisma.incidenteAsignado.count({
     *   where: {
     *     // ... the filter for the IncidenteAsignados we want to count
     *   }
     * })
    **/
    count<T extends IncidenteAsignadoCountArgs>(
      args?: Subset<T, IncidenteAsignadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidenteAsignadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidenteAsignado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidenteAsignadoAggregateArgs>(args: Subset<T, IncidenteAsignadoAggregateArgs>): Prisma.PrismaPromise<GetIncidenteAsignadoAggregateType<T>>

    /**
     * Group by IncidenteAsignado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAsignadoGroupByArgs} args - Group by arguments.
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
      T extends IncidenteAsignadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidenteAsignadoGroupByArgs['orderBy'] }
        : { orderBy?: IncidenteAsignadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidenteAsignadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidenteAsignadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidenteAsignado model
   */
  readonly fields: IncidenteAsignadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidenteAsignado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidenteAsignadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    panic<T extends BotonPanicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BotonPanicoDefaultArgs<ExtArgs>>): Prisma__BotonPanicoClient<$Result.GetResult<Prisma.$BotonPanicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reporte<T extends IncidenteAsignado$reporteArgs<ExtArgs> = {}>(args?: Subset<T, IncidenteAsignado$reporteArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidenteAsignado model
   */
  interface IncidenteAsignadoFieldRefs {
    readonly id: FieldRef<"IncidenteAsignado", 'Int'>
    readonly supervisorId: FieldRef<"IncidenteAsignado", 'Int'>
    readonly fechaAsignacion: FieldRef<"IncidenteAsignado", 'DateTime'>
    readonly panicId: FieldRef<"IncidenteAsignado", 'Int'>
    readonly latitud: FieldRef<"IncidenteAsignado", 'Float'>
    readonly longitud: FieldRef<"IncidenteAsignado", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * IncidenteAsignado findUnique
   */
  export type IncidenteAsignadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which IncidenteAsignado to fetch.
     */
    where: IncidenteAsignadoWhereUniqueInput
  }

  /**
   * IncidenteAsignado findUniqueOrThrow
   */
  export type IncidenteAsignadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which IncidenteAsignado to fetch.
     */
    where: IncidenteAsignadoWhereUniqueInput
  }

  /**
   * IncidenteAsignado findFirst
   */
  export type IncidenteAsignadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which IncidenteAsignado to fetch.
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidenteAsignados to fetch.
     */
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidenteAsignados.
     */
    cursor?: IncidenteAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidenteAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidenteAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidenteAsignados.
     */
    distinct?: IncidenteAsignadoScalarFieldEnum | IncidenteAsignadoScalarFieldEnum[]
  }

  /**
   * IncidenteAsignado findFirstOrThrow
   */
  export type IncidenteAsignadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which IncidenteAsignado to fetch.
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidenteAsignados to fetch.
     */
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidenteAsignados.
     */
    cursor?: IncidenteAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidenteAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidenteAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidenteAsignados.
     */
    distinct?: IncidenteAsignadoScalarFieldEnum | IncidenteAsignadoScalarFieldEnum[]
  }

  /**
   * IncidenteAsignado findMany
   */
  export type IncidenteAsignadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which IncidenteAsignados to fetch.
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidenteAsignados to fetch.
     */
    orderBy?: IncidenteAsignadoOrderByWithRelationInput | IncidenteAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidenteAsignados.
     */
    cursor?: IncidenteAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidenteAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidenteAsignados.
     */
    skip?: number
    distinct?: IncidenteAsignadoScalarFieldEnum | IncidenteAsignadoScalarFieldEnum[]
  }

  /**
   * IncidenteAsignado create
   */
  export type IncidenteAsignadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidenteAsignado.
     */
    data: XOR<IncidenteAsignadoCreateInput, IncidenteAsignadoUncheckedCreateInput>
  }

  /**
   * IncidenteAsignado createMany
   */
  export type IncidenteAsignadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidenteAsignados.
     */
    data: IncidenteAsignadoCreateManyInput | IncidenteAsignadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidenteAsignado update
   */
  export type IncidenteAsignadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidenteAsignado.
     */
    data: XOR<IncidenteAsignadoUpdateInput, IncidenteAsignadoUncheckedUpdateInput>
    /**
     * Choose, which IncidenteAsignado to update.
     */
    where: IncidenteAsignadoWhereUniqueInput
  }

  /**
   * IncidenteAsignado updateMany
   */
  export type IncidenteAsignadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidenteAsignados.
     */
    data: XOR<IncidenteAsignadoUpdateManyMutationInput, IncidenteAsignadoUncheckedUpdateManyInput>
    /**
     * Filter which IncidenteAsignados to update
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * Limit how many IncidenteAsignados to update.
     */
    limit?: number
  }

  /**
   * IncidenteAsignado upsert
   */
  export type IncidenteAsignadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidenteAsignado to update in case it exists.
     */
    where: IncidenteAsignadoWhereUniqueInput
    /**
     * In case the IncidenteAsignado found by the `where` argument doesn't exist, create a new IncidenteAsignado with this data.
     */
    create: XOR<IncidenteAsignadoCreateInput, IncidenteAsignadoUncheckedCreateInput>
    /**
     * In case the IncidenteAsignado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidenteAsignadoUpdateInput, IncidenteAsignadoUncheckedUpdateInput>
  }

  /**
   * IncidenteAsignado delete
   */
  export type IncidenteAsignadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
    /**
     * Filter which IncidenteAsignado to delete.
     */
    where: IncidenteAsignadoWhereUniqueInput
  }

  /**
   * IncidenteAsignado deleteMany
   */
  export type IncidenteAsignadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidenteAsignados to delete
     */
    where?: IncidenteAsignadoWhereInput
    /**
     * Limit how many IncidenteAsignados to delete.
     */
    limit?: number
  }

  /**
   * IncidenteAsignado.reporte
   */
  export type IncidenteAsignado$reporteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    where?: ReporteIncidenteWhereInput
  }

  /**
   * IncidenteAsignado without action
   */
  export type IncidenteAsignadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteAsignado
     */
    select?: IncidenteAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidenteAsignado
     */
    omit?: IncidenteAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteAsignadoInclude<ExtArgs> | null
  }


  /**
   * Model ReporteIncidente
   */

  export type AggregateReporteIncidente = {
    _count: ReporteIncidenteCountAggregateOutputType | null
    _avg: ReporteIncidenteAvgAggregateOutputType | null
    _sum: ReporteIncidenteSumAggregateOutputType | null
    _min: ReporteIncidenteMinAggregateOutputType | null
    _max: ReporteIncidenteMaxAggregateOutputType | null
  }

  export type ReporteIncidenteAvgAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    incidenteAsignadoId: number | null
  }

  export type ReporteIncidenteSumAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    incidenteAsignadoId: number | null
  }

  export type ReporteIncidenteMinAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    incidenteAsignadoId: number | null
    fecha: Date | null
    estado: string | null
    descripcion: string | null
    ambulancia: boolean | null
    policia: boolean | null
    heridos: boolean | null
  }

  export type ReporteIncidenteMaxAggregateOutputType = {
    id: number | null
    supervisorId: number | null
    incidenteAsignadoId: number | null
    fecha: Date | null
    estado: string | null
    descripcion: string | null
    ambulancia: boolean | null
    policia: boolean | null
    heridos: boolean | null
  }

  export type ReporteIncidenteCountAggregateOutputType = {
    id: number
    supervisorId: number
    incidenteAsignadoId: number
    fecha: number
    estado: number
    descripcion: number
    ambulancia: number
    policia: number
    heridos: number
    _all: number
  }


  export type ReporteIncidenteAvgAggregateInputType = {
    id?: true
    supervisorId?: true
    incidenteAsignadoId?: true
  }

  export type ReporteIncidenteSumAggregateInputType = {
    id?: true
    supervisorId?: true
    incidenteAsignadoId?: true
  }

  export type ReporteIncidenteMinAggregateInputType = {
    id?: true
    supervisorId?: true
    incidenteAsignadoId?: true
    fecha?: true
    estado?: true
    descripcion?: true
    ambulancia?: true
    policia?: true
    heridos?: true
  }

  export type ReporteIncidenteMaxAggregateInputType = {
    id?: true
    supervisorId?: true
    incidenteAsignadoId?: true
    fecha?: true
    estado?: true
    descripcion?: true
    ambulancia?: true
    policia?: true
    heridos?: true
  }

  export type ReporteIncidenteCountAggregateInputType = {
    id?: true
    supervisorId?: true
    incidenteAsignadoId?: true
    fecha?: true
    estado?: true
    descripcion?: true
    ambulancia?: true
    policia?: true
    heridos?: true
    _all?: true
  }

  export type ReporteIncidenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReporteIncidente to aggregate.
     */
    where?: ReporteIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReporteIncidentes to fetch.
     */
    orderBy?: ReporteIncidenteOrderByWithRelationInput | ReporteIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReporteIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReporteIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReporteIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReporteIncidentes
    **/
    _count?: true | ReporteIncidenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReporteIncidenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReporteIncidenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReporteIncidenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReporteIncidenteMaxAggregateInputType
  }

  export type GetReporteIncidenteAggregateType<T extends ReporteIncidenteAggregateArgs> = {
        [P in keyof T & keyof AggregateReporteIncidente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporteIncidente[P]>
      : GetScalarType<T[P], AggregateReporteIncidente[P]>
  }




  export type ReporteIncidenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteIncidenteWhereInput
    orderBy?: ReporteIncidenteOrderByWithAggregationInput | ReporteIncidenteOrderByWithAggregationInput[]
    by: ReporteIncidenteScalarFieldEnum[] | ReporteIncidenteScalarFieldEnum
    having?: ReporteIncidenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReporteIncidenteCountAggregateInputType | true
    _avg?: ReporteIncidenteAvgAggregateInputType
    _sum?: ReporteIncidenteSumAggregateInputType
    _min?: ReporteIncidenteMinAggregateInputType
    _max?: ReporteIncidenteMaxAggregateInputType
  }

  export type ReporteIncidenteGroupByOutputType = {
    id: number
    supervisorId: number
    incidenteAsignadoId: number
    fecha: Date
    estado: string | null
    descripcion: string
    ambulancia: boolean
    policia: boolean
    heridos: boolean
    _count: ReporteIncidenteCountAggregateOutputType | null
    _avg: ReporteIncidenteAvgAggregateOutputType | null
    _sum: ReporteIncidenteSumAggregateOutputType | null
    _min: ReporteIncidenteMinAggregateOutputType | null
    _max: ReporteIncidenteMaxAggregateOutputType | null
  }

  type GetReporteIncidenteGroupByPayload<T extends ReporteIncidenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReporteIncidenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReporteIncidenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReporteIncidenteGroupByOutputType[P]>
            : GetScalarType<T[P], ReporteIncidenteGroupByOutputType[P]>
        }
      >
    >


  export type ReporteIncidenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervisorId?: boolean
    incidenteAsignadoId?: boolean
    fecha?: boolean
    estado?: boolean
    descripcion?: boolean
    ambulancia?: boolean
    policia?: boolean
    heridos?: boolean
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    incidenteAsignado?: boolean | IncidenteAsignadoDefaultArgs<ExtArgs>
    fotos?: boolean | ReporteIncidente$fotosArgs<ExtArgs>
    _count?: boolean | ReporteIncidenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporteIncidente"]>



  export type ReporteIncidenteSelectScalar = {
    id?: boolean
    supervisorId?: boolean
    incidenteAsignadoId?: boolean
    fecha?: boolean
    estado?: boolean
    descripcion?: boolean
    ambulancia?: boolean
    policia?: boolean
    heridos?: boolean
  }

  export type ReporteIncidenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervisorId" | "incidenteAsignadoId" | "fecha" | "estado" | "descripcion" | "ambulancia" | "policia" | "heridos", ExtArgs["result"]["reporteIncidente"]>
  export type ReporteIncidenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
    incidenteAsignado?: boolean | IncidenteAsignadoDefaultArgs<ExtArgs>
    fotos?: boolean | ReporteIncidente$fotosArgs<ExtArgs>
    _count?: boolean | ReporteIncidenteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReporteIncidentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReporteIncidente"
    objects: {
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
      incidenteAsignado: Prisma.$IncidenteAsignadoPayload<ExtArgs>
      fotos: Prisma.$FotoIncidentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supervisorId: number
      incidenteAsignadoId: number
      fecha: Date
      estado: string | null
      descripcion: string
      ambulancia: boolean
      policia: boolean
      heridos: boolean
    }, ExtArgs["result"]["reporteIncidente"]>
    composites: {}
  }

  type ReporteIncidenteGetPayload<S extends boolean | null | undefined | ReporteIncidenteDefaultArgs> = $Result.GetResult<Prisma.$ReporteIncidentePayload, S>

  type ReporteIncidenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReporteIncidenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReporteIncidenteCountAggregateInputType | true
    }

  export interface ReporteIncidenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReporteIncidente'], meta: { name: 'ReporteIncidente' } }
    /**
     * Find zero or one ReporteIncidente that matches the filter.
     * @param {ReporteIncidenteFindUniqueArgs} args - Arguments to find a ReporteIncidente
     * @example
     * // Get one ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReporteIncidenteFindUniqueArgs>(args: SelectSubset<T, ReporteIncidenteFindUniqueArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReporteIncidente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReporteIncidenteFindUniqueOrThrowArgs} args - Arguments to find a ReporteIncidente
     * @example
     * // Get one ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReporteIncidenteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReporteIncidenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReporteIncidente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteFindFirstArgs} args - Arguments to find a ReporteIncidente
     * @example
     * // Get one ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReporteIncidenteFindFirstArgs>(args?: SelectSubset<T, ReporteIncidenteFindFirstArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReporteIncidente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteFindFirstOrThrowArgs} args - Arguments to find a ReporteIncidente
     * @example
     * // Get one ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReporteIncidenteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReporteIncidenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReporteIncidentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReporteIncidentes
     * const reporteIncidentes = await prisma.reporteIncidente.findMany()
     * 
     * // Get first 10 ReporteIncidentes
     * const reporteIncidentes = await prisma.reporteIncidente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reporteIncidenteWithIdOnly = await prisma.reporteIncidente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReporteIncidenteFindManyArgs>(args?: SelectSubset<T, ReporteIncidenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReporteIncidente.
     * @param {ReporteIncidenteCreateArgs} args - Arguments to create a ReporteIncidente.
     * @example
     * // Create one ReporteIncidente
     * const ReporteIncidente = await prisma.reporteIncidente.create({
     *   data: {
     *     // ... data to create a ReporteIncidente
     *   }
     * })
     * 
     */
    create<T extends ReporteIncidenteCreateArgs>(args: SelectSubset<T, ReporteIncidenteCreateArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReporteIncidentes.
     * @param {ReporteIncidenteCreateManyArgs} args - Arguments to create many ReporteIncidentes.
     * @example
     * // Create many ReporteIncidentes
     * const reporteIncidente = await prisma.reporteIncidente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReporteIncidenteCreateManyArgs>(args?: SelectSubset<T, ReporteIncidenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReporteIncidente.
     * @param {ReporteIncidenteDeleteArgs} args - Arguments to delete one ReporteIncidente.
     * @example
     * // Delete one ReporteIncidente
     * const ReporteIncidente = await prisma.reporteIncidente.delete({
     *   where: {
     *     // ... filter to delete one ReporteIncidente
     *   }
     * })
     * 
     */
    delete<T extends ReporteIncidenteDeleteArgs>(args: SelectSubset<T, ReporteIncidenteDeleteArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReporteIncidente.
     * @param {ReporteIncidenteUpdateArgs} args - Arguments to update one ReporteIncidente.
     * @example
     * // Update one ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReporteIncidenteUpdateArgs>(args: SelectSubset<T, ReporteIncidenteUpdateArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReporteIncidentes.
     * @param {ReporteIncidenteDeleteManyArgs} args - Arguments to filter ReporteIncidentes to delete.
     * @example
     * // Delete a few ReporteIncidentes
     * const { count } = await prisma.reporteIncidente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReporteIncidenteDeleteManyArgs>(args?: SelectSubset<T, ReporteIncidenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReporteIncidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReporteIncidentes
     * const reporteIncidente = await prisma.reporteIncidente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReporteIncidenteUpdateManyArgs>(args: SelectSubset<T, ReporteIncidenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReporteIncidente.
     * @param {ReporteIncidenteUpsertArgs} args - Arguments to update or create a ReporteIncidente.
     * @example
     * // Update or create a ReporteIncidente
     * const reporteIncidente = await prisma.reporteIncidente.upsert({
     *   create: {
     *     // ... data to create a ReporteIncidente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReporteIncidente we want to update
     *   }
     * })
     */
    upsert<T extends ReporteIncidenteUpsertArgs>(args: SelectSubset<T, ReporteIncidenteUpsertArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReporteIncidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteCountArgs} args - Arguments to filter ReporteIncidentes to count.
     * @example
     * // Count the number of ReporteIncidentes
     * const count = await prisma.reporteIncidente.count({
     *   where: {
     *     // ... the filter for the ReporteIncidentes we want to count
     *   }
     * })
    **/
    count<T extends ReporteIncidenteCountArgs>(
      args?: Subset<T, ReporteIncidenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReporteIncidenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReporteIncidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReporteIncidenteAggregateArgs>(args: Subset<T, ReporteIncidenteAggregateArgs>): Prisma.PrismaPromise<GetReporteIncidenteAggregateType<T>>

    /**
     * Group by ReporteIncidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteIncidenteGroupByArgs} args - Group by arguments.
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
      T extends ReporteIncidenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReporteIncidenteGroupByArgs['orderBy'] }
        : { orderBy?: ReporteIncidenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReporteIncidenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReporteIncidenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReporteIncidente model
   */
  readonly fields: ReporteIncidenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReporteIncidente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReporteIncidenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidenteAsignado<T extends IncidenteAsignadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidenteAsignadoDefaultArgs<ExtArgs>>): Prisma__IncidenteAsignadoClient<$Result.GetResult<Prisma.$IncidenteAsignadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends ReporteIncidente$fotosArgs<ExtArgs> = {}>(args?: Subset<T, ReporteIncidente$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReporteIncidente model
   */
  interface ReporteIncidenteFieldRefs {
    readonly id: FieldRef<"ReporteIncidente", 'Int'>
    readonly supervisorId: FieldRef<"ReporteIncidente", 'Int'>
    readonly incidenteAsignadoId: FieldRef<"ReporteIncidente", 'Int'>
    readonly fecha: FieldRef<"ReporteIncidente", 'DateTime'>
    readonly estado: FieldRef<"ReporteIncidente", 'String'>
    readonly descripcion: FieldRef<"ReporteIncidente", 'String'>
    readonly ambulancia: FieldRef<"ReporteIncidente", 'Boolean'>
    readonly policia: FieldRef<"ReporteIncidente", 'Boolean'>
    readonly heridos: FieldRef<"ReporteIncidente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ReporteIncidente findUnique
   */
  export type ReporteIncidenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which ReporteIncidente to fetch.
     */
    where: ReporteIncidenteWhereUniqueInput
  }

  /**
   * ReporteIncidente findUniqueOrThrow
   */
  export type ReporteIncidenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which ReporteIncidente to fetch.
     */
    where: ReporteIncidenteWhereUniqueInput
  }

  /**
   * ReporteIncidente findFirst
   */
  export type ReporteIncidenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which ReporteIncidente to fetch.
     */
    where?: ReporteIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReporteIncidentes to fetch.
     */
    orderBy?: ReporteIncidenteOrderByWithRelationInput | ReporteIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReporteIncidentes.
     */
    cursor?: ReporteIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReporteIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReporteIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReporteIncidentes.
     */
    distinct?: ReporteIncidenteScalarFieldEnum | ReporteIncidenteScalarFieldEnum[]
  }

  /**
   * ReporteIncidente findFirstOrThrow
   */
  export type ReporteIncidenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which ReporteIncidente to fetch.
     */
    where?: ReporteIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReporteIncidentes to fetch.
     */
    orderBy?: ReporteIncidenteOrderByWithRelationInput | ReporteIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReporteIncidentes.
     */
    cursor?: ReporteIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReporteIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReporteIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReporteIncidentes.
     */
    distinct?: ReporteIncidenteScalarFieldEnum | ReporteIncidenteScalarFieldEnum[]
  }

  /**
   * ReporteIncidente findMany
   */
  export type ReporteIncidenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which ReporteIncidentes to fetch.
     */
    where?: ReporteIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReporteIncidentes to fetch.
     */
    orderBy?: ReporteIncidenteOrderByWithRelationInput | ReporteIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReporteIncidentes.
     */
    cursor?: ReporteIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReporteIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReporteIncidentes.
     */
    skip?: number
    distinct?: ReporteIncidenteScalarFieldEnum | ReporteIncidenteScalarFieldEnum[]
  }

  /**
   * ReporteIncidente create
   */
  export type ReporteIncidenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReporteIncidente.
     */
    data: XOR<ReporteIncidenteCreateInput, ReporteIncidenteUncheckedCreateInput>
  }

  /**
   * ReporteIncidente createMany
   */
  export type ReporteIncidenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReporteIncidentes.
     */
    data: ReporteIncidenteCreateManyInput | ReporteIncidenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReporteIncidente update
   */
  export type ReporteIncidenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReporteIncidente.
     */
    data: XOR<ReporteIncidenteUpdateInput, ReporteIncidenteUncheckedUpdateInput>
    /**
     * Choose, which ReporteIncidente to update.
     */
    where: ReporteIncidenteWhereUniqueInput
  }

  /**
   * ReporteIncidente updateMany
   */
  export type ReporteIncidenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReporteIncidentes.
     */
    data: XOR<ReporteIncidenteUpdateManyMutationInput, ReporteIncidenteUncheckedUpdateManyInput>
    /**
     * Filter which ReporteIncidentes to update
     */
    where?: ReporteIncidenteWhereInput
    /**
     * Limit how many ReporteIncidentes to update.
     */
    limit?: number
  }

  /**
   * ReporteIncidente upsert
   */
  export type ReporteIncidenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReporteIncidente to update in case it exists.
     */
    where: ReporteIncidenteWhereUniqueInput
    /**
     * In case the ReporteIncidente found by the `where` argument doesn't exist, create a new ReporteIncidente with this data.
     */
    create: XOR<ReporteIncidenteCreateInput, ReporteIncidenteUncheckedCreateInput>
    /**
     * In case the ReporteIncidente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReporteIncidenteUpdateInput, ReporteIncidenteUncheckedUpdateInput>
  }

  /**
   * ReporteIncidente delete
   */
  export type ReporteIncidenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
    /**
     * Filter which ReporteIncidente to delete.
     */
    where: ReporteIncidenteWhereUniqueInput
  }

  /**
   * ReporteIncidente deleteMany
   */
  export type ReporteIncidenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReporteIncidentes to delete
     */
    where?: ReporteIncidenteWhereInput
    /**
     * Limit how many ReporteIncidentes to delete.
     */
    limit?: number
  }

  /**
   * ReporteIncidente.fotos
   */
  export type ReporteIncidente$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    where?: FotoIncidenteWhereInput
    orderBy?: FotoIncidenteOrderByWithRelationInput | FotoIncidenteOrderByWithRelationInput[]
    cursor?: FotoIncidenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoIncidenteScalarFieldEnum | FotoIncidenteScalarFieldEnum[]
  }

  /**
   * ReporteIncidente without action
   */
  export type ReporteIncidenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteIncidente
     */
    select?: ReporteIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReporteIncidente
     */
    omit?: ReporteIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncidenteInclude<ExtArgs> | null
  }


  /**
   * Model FotoIncidente
   */

  export type AggregateFotoIncidente = {
    _count: FotoIncidenteCountAggregateOutputType | null
    _avg: FotoIncidenteAvgAggregateOutputType | null
    _sum: FotoIncidenteSumAggregateOutputType | null
    _min: FotoIncidenteMinAggregateOutputType | null
    _max: FotoIncidenteMaxAggregateOutputType | null
  }

  export type FotoIncidenteAvgAggregateOutputType = {
    id: number | null
    reporteId: number | null
  }

  export type FotoIncidenteSumAggregateOutputType = {
    id: number | null
    reporteId: number | null
  }

  export type FotoIncidenteMinAggregateOutputType = {
    id: number | null
    reporteId: number | null
    url: string | null
    createdAt: Date | null
  }

  export type FotoIncidenteMaxAggregateOutputType = {
    id: number | null
    reporteId: number | null
    url: string | null
    createdAt: Date | null
  }

  export type FotoIncidenteCountAggregateOutputType = {
    id: number
    reporteId: number
    url: number
    createdAt: number
    _all: number
  }


  export type FotoIncidenteAvgAggregateInputType = {
    id?: true
    reporteId?: true
  }

  export type FotoIncidenteSumAggregateInputType = {
    id?: true
    reporteId?: true
  }

  export type FotoIncidenteMinAggregateInputType = {
    id?: true
    reporteId?: true
    url?: true
    createdAt?: true
  }

  export type FotoIncidenteMaxAggregateInputType = {
    id?: true
    reporteId?: true
    url?: true
    createdAt?: true
  }

  export type FotoIncidenteCountAggregateInputType = {
    id?: true
    reporteId?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type FotoIncidenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoIncidente to aggregate.
     */
    where?: FotoIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoIncidentes to fetch.
     */
    orderBy?: FotoIncidenteOrderByWithRelationInput | FotoIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoIncidentes
    **/
    _count?: true | FotoIncidenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoIncidenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoIncidenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoIncidenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoIncidenteMaxAggregateInputType
  }

  export type GetFotoIncidenteAggregateType<T extends FotoIncidenteAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoIncidente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoIncidente[P]>
      : GetScalarType<T[P], AggregateFotoIncidente[P]>
  }




  export type FotoIncidenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoIncidenteWhereInput
    orderBy?: FotoIncidenteOrderByWithAggregationInput | FotoIncidenteOrderByWithAggregationInput[]
    by: FotoIncidenteScalarFieldEnum[] | FotoIncidenteScalarFieldEnum
    having?: FotoIncidenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoIncidenteCountAggregateInputType | true
    _avg?: FotoIncidenteAvgAggregateInputType
    _sum?: FotoIncidenteSumAggregateInputType
    _min?: FotoIncidenteMinAggregateInputType
    _max?: FotoIncidenteMaxAggregateInputType
  }

  export type FotoIncidenteGroupByOutputType = {
    id: number
    reporteId: number
    url: string
    createdAt: Date
    _count: FotoIncidenteCountAggregateOutputType | null
    _avg: FotoIncidenteAvgAggregateOutputType | null
    _sum: FotoIncidenteSumAggregateOutputType | null
    _min: FotoIncidenteMinAggregateOutputType | null
    _max: FotoIncidenteMaxAggregateOutputType | null
  }

  type GetFotoIncidenteGroupByPayload<T extends FotoIncidenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoIncidenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoIncidenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoIncidenteGroupByOutputType[P]>
            : GetScalarType<T[P], FotoIncidenteGroupByOutputType[P]>
        }
      >
    >


  export type FotoIncidenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    url?: boolean
    createdAt?: boolean
    reporte?: boolean | ReporteIncidenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoIncidente"]>



  export type FotoIncidenteSelectScalar = {
    id?: boolean
    reporteId?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type FotoIncidenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporteId" | "url" | "createdAt", ExtArgs["result"]["fotoIncidente"]>
  export type FotoIncidenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteIncidenteDefaultArgs<ExtArgs>
  }

  export type $FotoIncidentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoIncidente"
    objects: {
      reporte: Prisma.$ReporteIncidentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reporteId: number
      url: string
      createdAt: Date
    }, ExtArgs["result"]["fotoIncidente"]>
    composites: {}
  }

  type FotoIncidenteGetPayload<S extends boolean | null | undefined | FotoIncidenteDefaultArgs> = $Result.GetResult<Prisma.$FotoIncidentePayload, S>

  type FotoIncidenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoIncidenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoIncidenteCountAggregateInputType | true
    }

  export interface FotoIncidenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoIncidente'], meta: { name: 'FotoIncidente' } }
    /**
     * Find zero or one FotoIncidente that matches the filter.
     * @param {FotoIncidenteFindUniqueArgs} args - Arguments to find a FotoIncidente
     * @example
     * // Get one FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoIncidenteFindUniqueArgs>(args: SelectSubset<T, FotoIncidenteFindUniqueArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoIncidente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoIncidenteFindUniqueOrThrowArgs} args - Arguments to find a FotoIncidente
     * @example
     * // Get one FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoIncidenteFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoIncidenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoIncidente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteFindFirstArgs} args - Arguments to find a FotoIncidente
     * @example
     * // Get one FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoIncidenteFindFirstArgs>(args?: SelectSubset<T, FotoIncidenteFindFirstArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoIncidente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteFindFirstOrThrowArgs} args - Arguments to find a FotoIncidente
     * @example
     * // Get one FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoIncidenteFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoIncidenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoIncidentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoIncidentes
     * const fotoIncidentes = await prisma.fotoIncidente.findMany()
     * 
     * // Get first 10 FotoIncidentes
     * const fotoIncidentes = await prisma.fotoIncidente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoIncidenteWithIdOnly = await prisma.fotoIncidente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoIncidenteFindManyArgs>(args?: SelectSubset<T, FotoIncidenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoIncidente.
     * @param {FotoIncidenteCreateArgs} args - Arguments to create a FotoIncidente.
     * @example
     * // Create one FotoIncidente
     * const FotoIncidente = await prisma.fotoIncidente.create({
     *   data: {
     *     // ... data to create a FotoIncidente
     *   }
     * })
     * 
     */
    create<T extends FotoIncidenteCreateArgs>(args: SelectSubset<T, FotoIncidenteCreateArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoIncidentes.
     * @param {FotoIncidenteCreateManyArgs} args - Arguments to create many FotoIncidentes.
     * @example
     * // Create many FotoIncidentes
     * const fotoIncidente = await prisma.fotoIncidente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoIncidenteCreateManyArgs>(args?: SelectSubset<T, FotoIncidenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FotoIncidente.
     * @param {FotoIncidenteDeleteArgs} args - Arguments to delete one FotoIncidente.
     * @example
     * // Delete one FotoIncidente
     * const FotoIncidente = await prisma.fotoIncidente.delete({
     *   where: {
     *     // ... filter to delete one FotoIncidente
     *   }
     * })
     * 
     */
    delete<T extends FotoIncidenteDeleteArgs>(args: SelectSubset<T, FotoIncidenteDeleteArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoIncidente.
     * @param {FotoIncidenteUpdateArgs} args - Arguments to update one FotoIncidente.
     * @example
     * // Update one FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoIncidenteUpdateArgs>(args: SelectSubset<T, FotoIncidenteUpdateArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoIncidentes.
     * @param {FotoIncidenteDeleteManyArgs} args - Arguments to filter FotoIncidentes to delete.
     * @example
     * // Delete a few FotoIncidentes
     * const { count } = await prisma.fotoIncidente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoIncidenteDeleteManyArgs>(args?: SelectSubset<T, FotoIncidenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoIncidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoIncidentes
     * const fotoIncidente = await prisma.fotoIncidente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoIncidenteUpdateManyArgs>(args: SelectSubset<T, FotoIncidenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FotoIncidente.
     * @param {FotoIncidenteUpsertArgs} args - Arguments to update or create a FotoIncidente.
     * @example
     * // Update or create a FotoIncidente
     * const fotoIncidente = await prisma.fotoIncidente.upsert({
     *   create: {
     *     // ... data to create a FotoIncidente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoIncidente we want to update
     *   }
     * })
     */
    upsert<T extends FotoIncidenteUpsertArgs>(args: SelectSubset<T, FotoIncidenteUpsertArgs<ExtArgs>>): Prisma__FotoIncidenteClient<$Result.GetResult<Prisma.$FotoIncidentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoIncidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteCountArgs} args - Arguments to filter FotoIncidentes to count.
     * @example
     * // Count the number of FotoIncidentes
     * const count = await prisma.fotoIncidente.count({
     *   where: {
     *     // ... the filter for the FotoIncidentes we want to count
     *   }
     * })
    **/
    count<T extends FotoIncidenteCountArgs>(
      args?: Subset<T, FotoIncidenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoIncidenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoIncidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoIncidenteAggregateArgs>(args: Subset<T, FotoIncidenteAggregateArgs>): Prisma.PrismaPromise<GetFotoIncidenteAggregateType<T>>

    /**
     * Group by FotoIncidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoIncidenteGroupByArgs} args - Group by arguments.
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
      T extends FotoIncidenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoIncidenteGroupByArgs['orderBy'] }
        : { orderBy?: FotoIncidenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoIncidenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoIncidenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoIncidente model
   */
  readonly fields: FotoIncidenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoIncidente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoIncidenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporte<T extends ReporteIncidenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReporteIncidenteDefaultArgs<ExtArgs>>): Prisma__ReporteIncidenteClient<$Result.GetResult<Prisma.$ReporteIncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FotoIncidente model
   */
  interface FotoIncidenteFieldRefs {
    readonly id: FieldRef<"FotoIncidente", 'Int'>
    readonly reporteId: FieldRef<"FotoIncidente", 'Int'>
    readonly url: FieldRef<"FotoIncidente", 'String'>
    readonly createdAt: FieldRef<"FotoIncidente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FotoIncidente findUnique
   */
  export type FotoIncidenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoIncidente to fetch.
     */
    where: FotoIncidenteWhereUniqueInput
  }

  /**
   * FotoIncidente findUniqueOrThrow
   */
  export type FotoIncidenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoIncidente to fetch.
     */
    where: FotoIncidenteWhereUniqueInput
  }

  /**
   * FotoIncidente findFirst
   */
  export type FotoIncidenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoIncidente to fetch.
     */
    where?: FotoIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoIncidentes to fetch.
     */
    orderBy?: FotoIncidenteOrderByWithRelationInput | FotoIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoIncidentes.
     */
    cursor?: FotoIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoIncidentes.
     */
    distinct?: FotoIncidenteScalarFieldEnum | FotoIncidenteScalarFieldEnum[]
  }

  /**
   * FotoIncidente findFirstOrThrow
   */
  export type FotoIncidenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoIncidente to fetch.
     */
    where?: FotoIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoIncidentes to fetch.
     */
    orderBy?: FotoIncidenteOrderByWithRelationInput | FotoIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoIncidentes.
     */
    cursor?: FotoIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoIncidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoIncidentes.
     */
    distinct?: FotoIncidenteScalarFieldEnum | FotoIncidenteScalarFieldEnum[]
  }

  /**
   * FotoIncidente findMany
   */
  export type FotoIncidenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoIncidentes to fetch.
     */
    where?: FotoIncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoIncidentes to fetch.
     */
    orderBy?: FotoIncidenteOrderByWithRelationInput | FotoIncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoIncidentes.
     */
    cursor?: FotoIncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoIncidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoIncidentes.
     */
    skip?: number
    distinct?: FotoIncidenteScalarFieldEnum | FotoIncidenteScalarFieldEnum[]
  }

  /**
   * FotoIncidente create
   */
  export type FotoIncidenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * The data needed to create a FotoIncidente.
     */
    data: XOR<FotoIncidenteCreateInput, FotoIncidenteUncheckedCreateInput>
  }

  /**
   * FotoIncidente createMany
   */
  export type FotoIncidenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoIncidentes.
     */
    data: FotoIncidenteCreateManyInput | FotoIncidenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotoIncidente update
   */
  export type FotoIncidenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * The data needed to update a FotoIncidente.
     */
    data: XOR<FotoIncidenteUpdateInput, FotoIncidenteUncheckedUpdateInput>
    /**
     * Choose, which FotoIncidente to update.
     */
    where: FotoIncidenteWhereUniqueInput
  }

  /**
   * FotoIncidente updateMany
   */
  export type FotoIncidenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoIncidentes.
     */
    data: XOR<FotoIncidenteUpdateManyMutationInput, FotoIncidenteUncheckedUpdateManyInput>
    /**
     * Filter which FotoIncidentes to update
     */
    where?: FotoIncidenteWhereInput
    /**
     * Limit how many FotoIncidentes to update.
     */
    limit?: number
  }

  /**
   * FotoIncidente upsert
   */
  export type FotoIncidenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * The filter to search for the FotoIncidente to update in case it exists.
     */
    where: FotoIncidenteWhereUniqueInput
    /**
     * In case the FotoIncidente found by the `where` argument doesn't exist, create a new FotoIncidente with this data.
     */
    create: XOR<FotoIncidenteCreateInput, FotoIncidenteUncheckedCreateInput>
    /**
     * In case the FotoIncidente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoIncidenteUpdateInput, FotoIncidenteUncheckedUpdateInput>
  }

  /**
   * FotoIncidente delete
   */
  export type FotoIncidenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
    /**
     * Filter which FotoIncidente to delete.
     */
    where: FotoIncidenteWhereUniqueInput
  }

  /**
   * FotoIncidente deleteMany
   */
  export type FotoIncidenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoIncidentes to delete
     */
    where?: FotoIncidenteWhereInput
    /**
     * Limit how many FotoIncidentes to delete.
     */
    limit?: number
  }

  /**
   * FotoIncidente without action
   */
  export type FotoIncidenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoIncidente
     */
    select?: FotoIncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoIncidente
     */
    omit?: FotoIncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncidenteInclude<ExtArgs> | null
  }


  /**
   * Model Patio
   */

  export type AggregatePatio = {
    _count: PatioCountAggregateOutputType | null
    _avg: PatioAvgAggregateOutputType | null
    _sum: PatioSumAggregateOutputType | null
    _min: PatioMinAggregateOutputType | null
    _max: PatioMaxAggregateOutputType | null
  }

  export type PatioAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type PatioSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type PatioMinAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type PatioMaxAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type PatioCountAggregateOutputType = {
    id: number
    userRoleId: number
    _all: number
  }


  export type PatioAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type PatioSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type PatioMinAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type PatioMaxAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type PatioCountAggregateInputType = {
    id?: true
    userRoleId?: true
    _all?: true
  }

  export type PatioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patio to aggregate.
     */
    where?: PatioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patios to fetch.
     */
    orderBy?: PatioOrderByWithRelationInput | PatioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patios
    **/
    _count?: true | PatioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatioMaxAggregateInputType
  }

  export type GetPatioAggregateType<T extends PatioAggregateArgs> = {
        [P in keyof T & keyof AggregatePatio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatio[P]>
      : GetScalarType<T[P], AggregatePatio[P]>
  }




  export type PatioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatioWhereInput
    orderBy?: PatioOrderByWithAggregationInput | PatioOrderByWithAggregationInput[]
    by: PatioScalarFieldEnum[] | PatioScalarFieldEnum
    having?: PatioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatioCountAggregateInputType | true
    _avg?: PatioAvgAggregateInputType
    _sum?: PatioSumAggregateInputType
    _min?: PatioMinAggregateInputType
    _max?: PatioMaxAggregateInputType
  }

  export type PatioGroupByOutputType = {
    id: number
    userRoleId: number
    _count: PatioCountAggregateOutputType | null
    _avg: PatioAvgAggregateOutputType | null
    _sum: PatioSumAggregateOutputType | null
    _min: PatioMinAggregateOutputType | null
    _max: PatioMaxAggregateOutputType | null
  }

  type GetPatioGroupByPayload<T extends PatioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatioGroupByOutputType[P]>
            : GetScalarType<T[P], PatioGroupByOutputType[P]>
        }
      >
    >


  export type PatioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleId?: boolean
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    registrosSalida?: boolean | Patio$registrosSalidaArgs<ExtArgs>
    asignaciones?: boolean | Patio$asignacionesArgs<ExtArgs>
    _count?: boolean | PatioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patio"]>



  export type PatioSelectScalar = {
    id?: boolean
    userRoleId?: boolean
  }

  export type PatioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRoleId", ExtArgs["result"]["patio"]>
  export type PatioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserRoleDefaultArgs<ExtArgs>
    registrosSalida?: boolean | Patio$registrosSalidaArgs<ExtArgs>
    asignaciones?: boolean | Patio$asignacionesArgs<ExtArgs>
    _count?: boolean | PatioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patio"
    objects: {
      user: Prisma.$UserRolePayload<ExtArgs>
      registrosSalida: Prisma.$RegistroSalidaUnidadPayload<ExtArgs>[]
      asignaciones: Prisma.$AsignacionUnidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userRoleId: number
    }, ExtArgs["result"]["patio"]>
    composites: {}
  }

  type PatioGetPayload<S extends boolean | null | undefined | PatioDefaultArgs> = $Result.GetResult<Prisma.$PatioPayload, S>

  type PatioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatioCountAggregateInputType | true
    }

  export interface PatioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patio'], meta: { name: 'Patio' } }
    /**
     * Find zero or one Patio that matches the filter.
     * @param {PatioFindUniqueArgs} args - Arguments to find a Patio
     * @example
     * // Get one Patio
     * const patio = await prisma.patio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatioFindUniqueArgs>(args: SelectSubset<T, PatioFindUniqueArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatioFindUniqueOrThrowArgs} args - Arguments to find a Patio
     * @example
     * // Get one Patio
     * const patio = await prisma.patio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatioFindUniqueOrThrowArgs>(args: SelectSubset<T, PatioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioFindFirstArgs} args - Arguments to find a Patio
     * @example
     * // Get one Patio
     * const patio = await prisma.patio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatioFindFirstArgs>(args?: SelectSubset<T, PatioFindFirstArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioFindFirstOrThrowArgs} args - Arguments to find a Patio
     * @example
     * // Get one Patio
     * const patio = await prisma.patio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatioFindFirstOrThrowArgs>(args?: SelectSubset<T, PatioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patios
     * const patios = await prisma.patio.findMany()
     * 
     * // Get first 10 Patios
     * const patios = await prisma.patio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patioWithIdOnly = await prisma.patio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatioFindManyArgs>(args?: SelectSubset<T, PatioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patio.
     * @param {PatioCreateArgs} args - Arguments to create a Patio.
     * @example
     * // Create one Patio
     * const Patio = await prisma.patio.create({
     *   data: {
     *     // ... data to create a Patio
     *   }
     * })
     * 
     */
    create<T extends PatioCreateArgs>(args: SelectSubset<T, PatioCreateArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patios.
     * @param {PatioCreateManyArgs} args - Arguments to create many Patios.
     * @example
     * // Create many Patios
     * const patio = await prisma.patio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatioCreateManyArgs>(args?: SelectSubset<T, PatioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patio.
     * @param {PatioDeleteArgs} args - Arguments to delete one Patio.
     * @example
     * // Delete one Patio
     * const Patio = await prisma.patio.delete({
     *   where: {
     *     // ... filter to delete one Patio
     *   }
     * })
     * 
     */
    delete<T extends PatioDeleteArgs>(args: SelectSubset<T, PatioDeleteArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patio.
     * @param {PatioUpdateArgs} args - Arguments to update one Patio.
     * @example
     * // Update one Patio
     * const patio = await prisma.patio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatioUpdateArgs>(args: SelectSubset<T, PatioUpdateArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patios.
     * @param {PatioDeleteManyArgs} args - Arguments to filter Patios to delete.
     * @example
     * // Delete a few Patios
     * const { count } = await prisma.patio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatioDeleteManyArgs>(args?: SelectSubset<T, PatioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patios
     * const patio = await prisma.patio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatioUpdateManyArgs>(args: SelectSubset<T, PatioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patio.
     * @param {PatioUpsertArgs} args - Arguments to update or create a Patio.
     * @example
     * // Update or create a Patio
     * const patio = await prisma.patio.upsert({
     *   create: {
     *     // ... data to create a Patio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patio we want to update
     *   }
     * })
     */
    upsert<T extends PatioUpsertArgs>(args: SelectSubset<T, PatioUpsertArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioCountArgs} args - Arguments to filter Patios to count.
     * @example
     * // Count the number of Patios
     * const count = await prisma.patio.count({
     *   where: {
     *     // ... the filter for the Patios we want to count
     *   }
     * })
    **/
    count<T extends PatioCountArgs>(
      args?: Subset<T, PatioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatioAggregateArgs>(args: Subset<T, PatioAggregateArgs>): Prisma.PrismaPromise<GetPatioAggregateType<T>>

    /**
     * Group by Patio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatioGroupByArgs} args - Group by arguments.
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
      T extends PatioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatioGroupByArgs['orderBy'] }
        : { orderBy?: PatioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patio model
   */
  readonly fields: PatioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrosSalida<T extends Patio$registrosSalidaArgs<ExtArgs> = {}>(args?: Subset<T, Patio$registrosSalidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Patio$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Patio$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patio model
   */
  interface PatioFieldRefs {
    readonly id: FieldRef<"Patio", 'Int'>
    readonly userRoleId: FieldRef<"Patio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Patio findUnique
   */
  export type PatioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter, which Patio to fetch.
     */
    where: PatioWhereUniqueInput
  }

  /**
   * Patio findUniqueOrThrow
   */
  export type PatioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter, which Patio to fetch.
     */
    where: PatioWhereUniqueInput
  }

  /**
   * Patio findFirst
   */
  export type PatioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter, which Patio to fetch.
     */
    where?: PatioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patios to fetch.
     */
    orderBy?: PatioOrderByWithRelationInput | PatioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patios.
     */
    cursor?: PatioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patios.
     */
    distinct?: PatioScalarFieldEnum | PatioScalarFieldEnum[]
  }

  /**
   * Patio findFirstOrThrow
   */
  export type PatioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter, which Patio to fetch.
     */
    where?: PatioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patios to fetch.
     */
    orderBy?: PatioOrderByWithRelationInput | PatioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patios.
     */
    cursor?: PatioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patios.
     */
    distinct?: PatioScalarFieldEnum | PatioScalarFieldEnum[]
  }

  /**
   * Patio findMany
   */
  export type PatioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter, which Patios to fetch.
     */
    where?: PatioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patios to fetch.
     */
    orderBy?: PatioOrderByWithRelationInput | PatioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patios.
     */
    cursor?: PatioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patios.
     */
    skip?: number
    distinct?: PatioScalarFieldEnum | PatioScalarFieldEnum[]
  }

  /**
   * Patio create
   */
  export type PatioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * The data needed to create a Patio.
     */
    data: XOR<PatioCreateInput, PatioUncheckedCreateInput>
  }

  /**
   * Patio createMany
   */
  export type PatioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patios.
     */
    data: PatioCreateManyInput | PatioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patio update
   */
  export type PatioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * The data needed to update a Patio.
     */
    data: XOR<PatioUpdateInput, PatioUncheckedUpdateInput>
    /**
     * Choose, which Patio to update.
     */
    where: PatioWhereUniqueInput
  }

  /**
   * Patio updateMany
   */
  export type PatioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patios.
     */
    data: XOR<PatioUpdateManyMutationInput, PatioUncheckedUpdateManyInput>
    /**
     * Filter which Patios to update
     */
    where?: PatioWhereInput
    /**
     * Limit how many Patios to update.
     */
    limit?: number
  }

  /**
   * Patio upsert
   */
  export type PatioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * The filter to search for the Patio to update in case it exists.
     */
    where: PatioWhereUniqueInput
    /**
     * In case the Patio found by the `where` argument doesn't exist, create a new Patio with this data.
     */
    create: XOR<PatioCreateInput, PatioUncheckedCreateInput>
    /**
     * In case the Patio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatioUpdateInput, PatioUncheckedUpdateInput>
  }

  /**
   * Patio delete
   */
  export type PatioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
    /**
     * Filter which Patio to delete.
     */
    where: PatioWhereUniqueInput
  }

  /**
   * Patio deleteMany
   */
  export type PatioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patios to delete
     */
    where?: PatioWhereInput
    /**
     * Limit how many Patios to delete.
     */
    limit?: number
  }

  /**
   * Patio.registrosSalida
   */
  export type Patio$registrosSalidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    where?: RegistroSalidaUnidadWhereInput
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroSalidaUnidadScalarFieldEnum | RegistroSalidaUnidadScalarFieldEnum[]
  }

  /**
   * Patio.asignaciones
   */
  export type Patio$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    where?: AsignacionUnidadWhereInput
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    cursor?: AsignacionUnidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionUnidadScalarFieldEnum | AsignacionUnidadScalarFieldEnum[]
  }

  /**
   * Patio without action
   */
  export type PatioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patio
     */
    select?: PatioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patio
     */
    omit?: PatioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatioInclude<ExtArgs> | null
  }


  /**
   * Model RegistroSalidaUnidad
   */

  export type AggregateRegistroSalidaUnidad = {
    _count: RegistroSalidaUnidadCountAggregateOutputType | null
    _avg: RegistroSalidaUnidadAvgAggregateOutputType | null
    _sum: RegistroSalidaUnidadSumAggregateOutputType | null
    _min: RegistroSalidaUnidadMinAggregateOutputType | null
    _max: RegistroSalidaUnidadMaxAggregateOutputType | null
  }

  export type RegistroSalidaUnidadAvgAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
    vueltas: number | null
    kmInicial: number | null
    kmFinal: number | null
  }

  export type RegistroSalidaUnidadSumAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
    vueltas: number | null
    kmInicial: number | null
    kmFinal: number | null
  }

  export type RegistroSalidaUnidadMinAggregateOutputType = {
    id: number | null
    patioId: number | null
    unidad: string | null
    operadorId: number | null
    fechaSalida: Date | null
    horaInicio: string | null
    vueltas: number | null
    kmInicial: number | null
    kmFinal: number | null
    condiciones: string | null
  }

  export type RegistroSalidaUnidadMaxAggregateOutputType = {
    id: number | null
    patioId: number | null
    unidad: string | null
    operadorId: number | null
    fechaSalida: Date | null
    horaInicio: string | null
    vueltas: number | null
    kmInicial: number | null
    kmFinal: number | null
    condiciones: string | null
  }

  export type RegistroSalidaUnidadCountAggregateOutputType = {
    id: number
    patioId: number
    unidad: number
    operadorId: number
    fechaSalida: number
    horaInicio: number
    vueltas: number
    kmInicial: number
    kmFinal: number
    condiciones: number
    _all: number
  }


  export type RegistroSalidaUnidadAvgAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
    vueltas?: true
    kmInicial?: true
    kmFinal?: true
  }

  export type RegistroSalidaUnidadSumAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
    vueltas?: true
    kmInicial?: true
    kmFinal?: true
  }

  export type RegistroSalidaUnidadMinAggregateInputType = {
    id?: true
    patioId?: true
    unidad?: true
    operadorId?: true
    fechaSalida?: true
    horaInicio?: true
    vueltas?: true
    kmInicial?: true
    kmFinal?: true
    condiciones?: true
  }

  export type RegistroSalidaUnidadMaxAggregateInputType = {
    id?: true
    patioId?: true
    unidad?: true
    operadorId?: true
    fechaSalida?: true
    horaInicio?: true
    vueltas?: true
    kmInicial?: true
    kmFinal?: true
    condiciones?: true
  }

  export type RegistroSalidaUnidadCountAggregateInputType = {
    id?: true
    patioId?: true
    unidad?: true
    operadorId?: true
    fechaSalida?: true
    horaInicio?: true
    vueltas?: true
    kmInicial?: true
    kmFinal?: true
    condiciones?: true
    _all?: true
  }

  export type RegistroSalidaUnidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSalidaUnidad to aggregate.
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSalidaUnidads to fetch.
     */
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSalidaUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSalidaUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroSalidaUnidads
    **/
    _count?: true | RegistroSalidaUnidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroSalidaUnidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroSalidaUnidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroSalidaUnidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroSalidaUnidadMaxAggregateInputType
  }

  export type GetRegistroSalidaUnidadAggregateType<T extends RegistroSalidaUnidadAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroSalidaUnidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroSalidaUnidad[P]>
      : GetScalarType<T[P], AggregateRegistroSalidaUnidad[P]>
  }




  export type RegistroSalidaUnidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSalidaUnidadWhereInput
    orderBy?: RegistroSalidaUnidadOrderByWithAggregationInput | RegistroSalidaUnidadOrderByWithAggregationInput[]
    by: RegistroSalidaUnidadScalarFieldEnum[] | RegistroSalidaUnidadScalarFieldEnum
    having?: RegistroSalidaUnidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroSalidaUnidadCountAggregateInputType | true
    _avg?: RegistroSalidaUnidadAvgAggregateInputType
    _sum?: RegistroSalidaUnidadSumAggregateInputType
    _min?: RegistroSalidaUnidadMinAggregateInputType
    _max?: RegistroSalidaUnidadMaxAggregateInputType
  }

  export type RegistroSalidaUnidadGroupByOutputType = {
    id: number
    patioId: number
    unidad: string
    operadorId: number
    fechaSalida: Date
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal: number | null
    condiciones: string
    _count: RegistroSalidaUnidadCountAggregateOutputType | null
    _avg: RegistroSalidaUnidadAvgAggregateOutputType | null
    _sum: RegistroSalidaUnidadSumAggregateOutputType | null
    _min: RegistroSalidaUnidadMinAggregateOutputType | null
    _max: RegistroSalidaUnidadMaxAggregateOutputType | null
  }

  type GetRegistroSalidaUnidadGroupByPayload<T extends RegistroSalidaUnidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroSalidaUnidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroSalidaUnidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroSalidaUnidadGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroSalidaUnidadGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSalidaUnidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patioId?: boolean
    unidad?: boolean
    operadorId?: boolean
    fechaSalida?: boolean
    horaInicio?: boolean
    vueltas?: boolean
    kmInicial?: boolean
    kmFinal?: boolean
    condiciones?: boolean
    patio?: boolean | PatioDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroSalidaUnidad"]>



  export type RegistroSalidaUnidadSelectScalar = {
    id?: boolean
    patioId?: boolean
    unidad?: boolean
    operadorId?: boolean
    fechaSalida?: boolean
    horaInicio?: boolean
    vueltas?: boolean
    kmInicial?: boolean
    kmFinal?: boolean
    condiciones?: boolean
  }

  export type RegistroSalidaUnidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patioId" | "unidad" | "operadorId" | "fechaSalida" | "horaInicio" | "vueltas" | "kmInicial" | "kmFinal" | "condiciones", ExtArgs["result"]["registroSalidaUnidad"]>
  export type RegistroSalidaUnidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patio?: boolean | PatioDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }

  export type $RegistroSalidaUnidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroSalidaUnidad"
    objects: {
      patio: Prisma.$PatioPayload<ExtArgs>
      operador: Prisma.$OperadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patioId: number
      unidad: string
      operadorId: number
      fechaSalida: Date
      horaInicio: string
      vueltas: number
      kmInicial: number
      kmFinal: number | null
      condiciones: string
    }, ExtArgs["result"]["registroSalidaUnidad"]>
    composites: {}
  }

  type RegistroSalidaUnidadGetPayload<S extends boolean | null | undefined | RegistroSalidaUnidadDefaultArgs> = $Result.GetResult<Prisma.$RegistroSalidaUnidadPayload, S>

  type RegistroSalidaUnidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroSalidaUnidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroSalidaUnidadCountAggregateInputType | true
    }

  export interface RegistroSalidaUnidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroSalidaUnidad'], meta: { name: 'RegistroSalidaUnidad' } }
    /**
     * Find zero or one RegistroSalidaUnidad that matches the filter.
     * @param {RegistroSalidaUnidadFindUniqueArgs} args - Arguments to find a RegistroSalidaUnidad
     * @example
     * // Get one RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroSalidaUnidadFindUniqueArgs>(args: SelectSubset<T, RegistroSalidaUnidadFindUniqueArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroSalidaUnidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroSalidaUnidadFindUniqueOrThrowArgs} args - Arguments to find a RegistroSalidaUnidad
     * @example
     * // Get one RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroSalidaUnidadFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroSalidaUnidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSalidaUnidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadFindFirstArgs} args - Arguments to find a RegistroSalidaUnidad
     * @example
     * // Get one RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroSalidaUnidadFindFirstArgs>(args?: SelectSubset<T, RegistroSalidaUnidadFindFirstArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSalidaUnidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadFindFirstOrThrowArgs} args - Arguments to find a RegistroSalidaUnidad
     * @example
     * // Get one RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroSalidaUnidadFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroSalidaUnidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroSalidaUnidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroSalidaUnidads
     * const registroSalidaUnidads = await prisma.registroSalidaUnidad.findMany()
     * 
     * // Get first 10 RegistroSalidaUnidads
     * const registroSalidaUnidads = await prisma.registroSalidaUnidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroSalidaUnidadWithIdOnly = await prisma.registroSalidaUnidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroSalidaUnidadFindManyArgs>(args?: SelectSubset<T, RegistroSalidaUnidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroSalidaUnidad.
     * @param {RegistroSalidaUnidadCreateArgs} args - Arguments to create a RegistroSalidaUnidad.
     * @example
     * // Create one RegistroSalidaUnidad
     * const RegistroSalidaUnidad = await prisma.registroSalidaUnidad.create({
     *   data: {
     *     // ... data to create a RegistroSalidaUnidad
     *   }
     * })
     * 
     */
    create<T extends RegistroSalidaUnidadCreateArgs>(args: SelectSubset<T, RegistroSalidaUnidadCreateArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroSalidaUnidads.
     * @param {RegistroSalidaUnidadCreateManyArgs} args - Arguments to create many RegistroSalidaUnidads.
     * @example
     * // Create many RegistroSalidaUnidads
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroSalidaUnidadCreateManyArgs>(args?: SelectSubset<T, RegistroSalidaUnidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistroSalidaUnidad.
     * @param {RegistroSalidaUnidadDeleteArgs} args - Arguments to delete one RegistroSalidaUnidad.
     * @example
     * // Delete one RegistroSalidaUnidad
     * const RegistroSalidaUnidad = await prisma.registroSalidaUnidad.delete({
     *   where: {
     *     // ... filter to delete one RegistroSalidaUnidad
     *   }
     * })
     * 
     */
    delete<T extends RegistroSalidaUnidadDeleteArgs>(args: SelectSubset<T, RegistroSalidaUnidadDeleteArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroSalidaUnidad.
     * @param {RegistroSalidaUnidadUpdateArgs} args - Arguments to update one RegistroSalidaUnidad.
     * @example
     * // Update one RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroSalidaUnidadUpdateArgs>(args: SelectSubset<T, RegistroSalidaUnidadUpdateArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroSalidaUnidads.
     * @param {RegistroSalidaUnidadDeleteManyArgs} args - Arguments to filter RegistroSalidaUnidads to delete.
     * @example
     * // Delete a few RegistroSalidaUnidads
     * const { count } = await prisma.registroSalidaUnidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroSalidaUnidadDeleteManyArgs>(args?: SelectSubset<T, RegistroSalidaUnidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroSalidaUnidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroSalidaUnidads
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroSalidaUnidadUpdateManyArgs>(args: SelectSubset<T, RegistroSalidaUnidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroSalidaUnidad.
     * @param {RegistroSalidaUnidadUpsertArgs} args - Arguments to update or create a RegistroSalidaUnidad.
     * @example
     * // Update or create a RegistroSalidaUnidad
     * const registroSalidaUnidad = await prisma.registroSalidaUnidad.upsert({
     *   create: {
     *     // ... data to create a RegistroSalidaUnidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroSalidaUnidad we want to update
     *   }
     * })
     */
    upsert<T extends RegistroSalidaUnidadUpsertArgs>(args: SelectSubset<T, RegistroSalidaUnidadUpsertArgs<ExtArgs>>): Prisma__RegistroSalidaUnidadClient<$Result.GetResult<Prisma.$RegistroSalidaUnidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroSalidaUnidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadCountArgs} args - Arguments to filter RegistroSalidaUnidads to count.
     * @example
     * // Count the number of RegistroSalidaUnidads
     * const count = await prisma.registroSalidaUnidad.count({
     *   where: {
     *     // ... the filter for the RegistroSalidaUnidads we want to count
     *   }
     * })
    **/
    count<T extends RegistroSalidaUnidadCountArgs>(
      args?: Subset<T, RegistroSalidaUnidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroSalidaUnidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroSalidaUnidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroSalidaUnidadAggregateArgs>(args: Subset<T, RegistroSalidaUnidadAggregateArgs>): Prisma.PrismaPromise<GetRegistroSalidaUnidadAggregateType<T>>

    /**
     * Group by RegistroSalidaUnidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSalidaUnidadGroupByArgs} args - Group by arguments.
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
      T extends RegistroSalidaUnidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroSalidaUnidadGroupByArgs['orderBy'] }
        : { orderBy?: RegistroSalidaUnidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroSalidaUnidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroSalidaUnidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroSalidaUnidad model
   */
  readonly fields: RegistroSalidaUnidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroSalidaUnidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroSalidaUnidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patio<T extends PatioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatioDefaultArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operador<T extends OperadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperadorDefaultArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroSalidaUnidad model
   */
  interface RegistroSalidaUnidadFieldRefs {
    readonly id: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly patioId: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly unidad: FieldRef<"RegistroSalidaUnidad", 'String'>
    readonly operadorId: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly fechaSalida: FieldRef<"RegistroSalidaUnidad", 'DateTime'>
    readonly horaInicio: FieldRef<"RegistroSalidaUnidad", 'String'>
    readonly vueltas: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly kmInicial: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly kmFinal: FieldRef<"RegistroSalidaUnidad", 'Int'>
    readonly condiciones: FieldRef<"RegistroSalidaUnidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistroSalidaUnidad findUnique
   */
  export type RegistroSalidaUnidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSalidaUnidad to fetch.
     */
    where: RegistroSalidaUnidadWhereUniqueInput
  }

  /**
   * RegistroSalidaUnidad findUniqueOrThrow
   */
  export type RegistroSalidaUnidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSalidaUnidad to fetch.
     */
    where: RegistroSalidaUnidadWhereUniqueInput
  }

  /**
   * RegistroSalidaUnidad findFirst
   */
  export type RegistroSalidaUnidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSalidaUnidad to fetch.
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSalidaUnidads to fetch.
     */
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSalidaUnidads.
     */
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSalidaUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSalidaUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSalidaUnidads.
     */
    distinct?: RegistroSalidaUnidadScalarFieldEnum | RegistroSalidaUnidadScalarFieldEnum[]
  }

  /**
   * RegistroSalidaUnidad findFirstOrThrow
   */
  export type RegistroSalidaUnidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSalidaUnidad to fetch.
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSalidaUnidads to fetch.
     */
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSalidaUnidads.
     */
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSalidaUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSalidaUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSalidaUnidads.
     */
    distinct?: RegistroSalidaUnidadScalarFieldEnum | RegistroSalidaUnidadScalarFieldEnum[]
  }

  /**
   * RegistroSalidaUnidad findMany
   */
  export type RegistroSalidaUnidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSalidaUnidads to fetch.
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSalidaUnidads to fetch.
     */
    orderBy?: RegistroSalidaUnidadOrderByWithRelationInput | RegistroSalidaUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroSalidaUnidads.
     */
    cursor?: RegistroSalidaUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSalidaUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSalidaUnidads.
     */
    skip?: number
    distinct?: RegistroSalidaUnidadScalarFieldEnum | RegistroSalidaUnidadScalarFieldEnum[]
  }

  /**
   * RegistroSalidaUnidad create
   */
  export type RegistroSalidaUnidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroSalidaUnidad.
     */
    data: XOR<RegistroSalidaUnidadCreateInput, RegistroSalidaUnidadUncheckedCreateInput>
  }

  /**
   * RegistroSalidaUnidad createMany
   */
  export type RegistroSalidaUnidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroSalidaUnidads.
     */
    data: RegistroSalidaUnidadCreateManyInput | RegistroSalidaUnidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroSalidaUnidad update
   */
  export type RegistroSalidaUnidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroSalidaUnidad.
     */
    data: XOR<RegistroSalidaUnidadUpdateInput, RegistroSalidaUnidadUncheckedUpdateInput>
    /**
     * Choose, which RegistroSalidaUnidad to update.
     */
    where: RegistroSalidaUnidadWhereUniqueInput
  }

  /**
   * RegistroSalidaUnidad updateMany
   */
  export type RegistroSalidaUnidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroSalidaUnidads.
     */
    data: XOR<RegistroSalidaUnidadUpdateManyMutationInput, RegistroSalidaUnidadUncheckedUpdateManyInput>
    /**
     * Filter which RegistroSalidaUnidads to update
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * Limit how many RegistroSalidaUnidads to update.
     */
    limit?: number
  }

  /**
   * RegistroSalidaUnidad upsert
   */
  export type RegistroSalidaUnidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroSalidaUnidad to update in case it exists.
     */
    where: RegistroSalidaUnidadWhereUniqueInput
    /**
     * In case the RegistroSalidaUnidad found by the `where` argument doesn't exist, create a new RegistroSalidaUnidad with this data.
     */
    create: XOR<RegistroSalidaUnidadCreateInput, RegistroSalidaUnidadUncheckedCreateInput>
    /**
     * In case the RegistroSalidaUnidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroSalidaUnidadUpdateInput, RegistroSalidaUnidadUncheckedUpdateInput>
  }

  /**
   * RegistroSalidaUnidad delete
   */
  export type RegistroSalidaUnidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
    /**
     * Filter which RegistroSalidaUnidad to delete.
     */
    where: RegistroSalidaUnidadWhereUniqueInput
  }

  /**
   * RegistroSalidaUnidad deleteMany
   */
  export type RegistroSalidaUnidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSalidaUnidads to delete
     */
    where?: RegistroSalidaUnidadWhereInput
    /**
     * Limit how many RegistroSalidaUnidads to delete.
     */
    limit?: number
  }

  /**
   * RegistroSalidaUnidad without action
   */
  export type RegistroSalidaUnidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSalidaUnidad
     */
    select?: RegistroSalidaUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSalidaUnidad
     */
    omit?: RegistroSalidaUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSalidaUnidadInclude<ExtArgs> | null
  }


  /**
   * Model AsignacionUnidad
   */

  export type AggregateAsignacionUnidad = {
    _count: AsignacionUnidadCountAggregateOutputType | null
    _avg: AsignacionUnidadAvgAggregateOutputType | null
    _sum: AsignacionUnidadSumAggregateOutputType | null
    _min: AsignacionUnidadMinAggregateOutputType | null
    _max: AsignacionUnidadMaxAggregateOutputType | null
  }

  export type AsignacionUnidadAvgAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
  }

  export type AsignacionUnidadSumAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
  }

  export type AsignacionUnidadMinAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
    unidad: string | null
    ruta: string | null
    fecha: Date | null
  }

  export type AsignacionUnidadMaxAggregateOutputType = {
    id: number | null
    patioId: number | null
    operadorId: number | null
    unidad: string | null
    ruta: string | null
    fecha: Date | null
  }

  export type AsignacionUnidadCountAggregateOutputType = {
    id: number
    patioId: number
    operadorId: number
    unidad: number
    ruta: number
    fecha: number
    _all: number
  }


  export type AsignacionUnidadAvgAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
  }

  export type AsignacionUnidadSumAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
  }

  export type AsignacionUnidadMinAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
    unidad?: true
    ruta?: true
    fecha?: true
  }

  export type AsignacionUnidadMaxAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
    unidad?: true
    ruta?: true
    fecha?: true
  }

  export type AsignacionUnidadCountAggregateInputType = {
    id?: true
    patioId?: true
    operadorId?: true
    unidad?: true
    ruta?: true
    fecha?: true
    _all?: true
  }

  export type AsignacionUnidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionUnidad to aggregate.
     */
    where?: AsignacionUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionUnidads to fetch.
     */
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignacionUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsignacionUnidads
    **/
    _count?: true | AsignacionUnidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignacionUnidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignacionUnidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignacionUnidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignacionUnidadMaxAggregateInputType
  }

  export type GetAsignacionUnidadAggregateType<T extends AsignacionUnidadAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignacionUnidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignacionUnidad[P]>
      : GetScalarType<T[P], AggregateAsignacionUnidad[P]>
  }




  export type AsignacionUnidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionUnidadWhereInput
    orderBy?: AsignacionUnidadOrderByWithAggregationInput | AsignacionUnidadOrderByWithAggregationInput[]
    by: AsignacionUnidadScalarFieldEnum[] | AsignacionUnidadScalarFieldEnum
    having?: AsignacionUnidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignacionUnidadCountAggregateInputType | true
    _avg?: AsignacionUnidadAvgAggregateInputType
    _sum?: AsignacionUnidadSumAggregateInputType
    _min?: AsignacionUnidadMinAggregateInputType
    _max?: AsignacionUnidadMaxAggregateInputType
  }

  export type AsignacionUnidadGroupByOutputType = {
    id: number
    patioId: number
    operadorId: number
    unidad: string
    ruta: string
    fecha: Date
    _count: AsignacionUnidadCountAggregateOutputType | null
    _avg: AsignacionUnidadAvgAggregateOutputType | null
    _sum: AsignacionUnidadSumAggregateOutputType | null
    _min: AsignacionUnidadMinAggregateOutputType | null
    _max: AsignacionUnidadMaxAggregateOutputType | null
  }

  type GetAsignacionUnidadGroupByPayload<T extends AsignacionUnidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignacionUnidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignacionUnidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignacionUnidadGroupByOutputType[P]>
            : GetScalarType<T[P], AsignacionUnidadGroupByOutputType[P]>
        }
      >
    >


  export type AsignacionUnidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patioId?: boolean
    operadorId?: boolean
    unidad?: boolean
    ruta?: boolean
    fecha?: boolean
    patio?: boolean | PatioDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionUnidad"]>



  export type AsignacionUnidadSelectScalar = {
    id?: boolean
    patioId?: boolean
    operadorId?: boolean
    unidad?: boolean
    ruta?: boolean
    fecha?: boolean
  }

  export type AsignacionUnidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patioId" | "operadorId" | "unidad" | "ruta" | "fecha", ExtArgs["result"]["asignacionUnidad"]>
  export type AsignacionUnidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patio?: boolean | PatioDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }

  export type $AsignacionUnidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsignacionUnidad"
    objects: {
      patio: Prisma.$PatioPayload<ExtArgs>
      operador: Prisma.$OperadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patioId: number
      operadorId: number
      unidad: string
      ruta: string
      fecha: Date
    }, ExtArgs["result"]["asignacionUnidad"]>
    composites: {}
  }

  type AsignacionUnidadGetPayload<S extends boolean | null | undefined | AsignacionUnidadDefaultArgs> = $Result.GetResult<Prisma.$AsignacionUnidadPayload, S>

  type AsignacionUnidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignacionUnidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignacionUnidadCountAggregateInputType | true
    }

  export interface AsignacionUnidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsignacionUnidad'], meta: { name: 'AsignacionUnidad' } }
    /**
     * Find zero or one AsignacionUnidad that matches the filter.
     * @param {AsignacionUnidadFindUniqueArgs} args - Arguments to find a AsignacionUnidad
     * @example
     * // Get one AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignacionUnidadFindUniqueArgs>(args: SelectSubset<T, AsignacionUnidadFindUniqueArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsignacionUnidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignacionUnidadFindUniqueOrThrowArgs} args - Arguments to find a AsignacionUnidad
     * @example
     * // Get one AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignacionUnidadFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignacionUnidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionUnidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadFindFirstArgs} args - Arguments to find a AsignacionUnidad
     * @example
     * // Get one AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignacionUnidadFindFirstArgs>(args?: SelectSubset<T, AsignacionUnidadFindFirstArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionUnidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadFindFirstOrThrowArgs} args - Arguments to find a AsignacionUnidad
     * @example
     * // Get one AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignacionUnidadFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignacionUnidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsignacionUnidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsignacionUnidads
     * const asignacionUnidads = await prisma.asignacionUnidad.findMany()
     * 
     * // Get first 10 AsignacionUnidads
     * const asignacionUnidads = await prisma.asignacionUnidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asignacionUnidadWithIdOnly = await prisma.asignacionUnidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsignacionUnidadFindManyArgs>(args?: SelectSubset<T, AsignacionUnidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsignacionUnidad.
     * @param {AsignacionUnidadCreateArgs} args - Arguments to create a AsignacionUnidad.
     * @example
     * // Create one AsignacionUnidad
     * const AsignacionUnidad = await prisma.asignacionUnidad.create({
     *   data: {
     *     // ... data to create a AsignacionUnidad
     *   }
     * })
     * 
     */
    create<T extends AsignacionUnidadCreateArgs>(args: SelectSubset<T, AsignacionUnidadCreateArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsignacionUnidads.
     * @param {AsignacionUnidadCreateManyArgs} args - Arguments to create many AsignacionUnidads.
     * @example
     * // Create many AsignacionUnidads
     * const asignacionUnidad = await prisma.asignacionUnidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignacionUnidadCreateManyArgs>(args?: SelectSubset<T, AsignacionUnidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AsignacionUnidad.
     * @param {AsignacionUnidadDeleteArgs} args - Arguments to delete one AsignacionUnidad.
     * @example
     * // Delete one AsignacionUnidad
     * const AsignacionUnidad = await prisma.asignacionUnidad.delete({
     *   where: {
     *     // ... filter to delete one AsignacionUnidad
     *   }
     * })
     * 
     */
    delete<T extends AsignacionUnidadDeleteArgs>(args: SelectSubset<T, AsignacionUnidadDeleteArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsignacionUnidad.
     * @param {AsignacionUnidadUpdateArgs} args - Arguments to update one AsignacionUnidad.
     * @example
     * // Update one AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignacionUnidadUpdateArgs>(args: SelectSubset<T, AsignacionUnidadUpdateArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsignacionUnidads.
     * @param {AsignacionUnidadDeleteManyArgs} args - Arguments to filter AsignacionUnidads to delete.
     * @example
     * // Delete a few AsignacionUnidads
     * const { count } = await prisma.asignacionUnidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignacionUnidadDeleteManyArgs>(args?: SelectSubset<T, AsignacionUnidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignacionUnidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsignacionUnidads
     * const asignacionUnidad = await prisma.asignacionUnidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignacionUnidadUpdateManyArgs>(args: SelectSubset<T, AsignacionUnidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AsignacionUnidad.
     * @param {AsignacionUnidadUpsertArgs} args - Arguments to update or create a AsignacionUnidad.
     * @example
     * // Update or create a AsignacionUnidad
     * const asignacionUnidad = await prisma.asignacionUnidad.upsert({
     *   create: {
     *     // ... data to create a AsignacionUnidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsignacionUnidad we want to update
     *   }
     * })
     */
    upsert<T extends AsignacionUnidadUpsertArgs>(args: SelectSubset<T, AsignacionUnidadUpsertArgs<ExtArgs>>): Prisma__AsignacionUnidadClient<$Result.GetResult<Prisma.$AsignacionUnidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsignacionUnidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadCountArgs} args - Arguments to filter AsignacionUnidads to count.
     * @example
     * // Count the number of AsignacionUnidads
     * const count = await prisma.asignacionUnidad.count({
     *   where: {
     *     // ... the filter for the AsignacionUnidads we want to count
     *   }
     * })
    **/
    count<T extends AsignacionUnidadCountArgs>(
      args?: Subset<T, AsignacionUnidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignacionUnidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsignacionUnidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsignacionUnidadAggregateArgs>(args: Subset<T, AsignacionUnidadAggregateArgs>): Prisma.PrismaPromise<GetAsignacionUnidadAggregateType<T>>

    /**
     * Group by AsignacionUnidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUnidadGroupByArgs} args - Group by arguments.
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
      T extends AsignacionUnidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignacionUnidadGroupByArgs['orderBy'] }
        : { orderBy?: AsignacionUnidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsignacionUnidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignacionUnidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsignacionUnidad model
   */
  readonly fields: AsignacionUnidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsignacionUnidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignacionUnidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patio<T extends PatioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatioDefaultArgs<ExtArgs>>): Prisma__PatioClient<$Result.GetResult<Prisma.$PatioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operador<T extends OperadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperadorDefaultArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AsignacionUnidad model
   */
  interface AsignacionUnidadFieldRefs {
    readonly id: FieldRef<"AsignacionUnidad", 'Int'>
    readonly patioId: FieldRef<"AsignacionUnidad", 'Int'>
    readonly operadorId: FieldRef<"AsignacionUnidad", 'Int'>
    readonly unidad: FieldRef<"AsignacionUnidad", 'String'>
    readonly ruta: FieldRef<"AsignacionUnidad", 'String'>
    readonly fecha: FieldRef<"AsignacionUnidad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsignacionUnidad findUnique
   */
  export type AsignacionUnidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionUnidad to fetch.
     */
    where: AsignacionUnidadWhereUniqueInput
  }

  /**
   * AsignacionUnidad findUniqueOrThrow
   */
  export type AsignacionUnidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionUnidad to fetch.
     */
    where: AsignacionUnidadWhereUniqueInput
  }

  /**
   * AsignacionUnidad findFirst
   */
  export type AsignacionUnidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionUnidad to fetch.
     */
    where?: AsignacionUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionUnidads to fetch.
     */
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionUnidads.
     */
    cursor?: AsignacionUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionUnidads.
     */
    distinct?: AsignacionUnidadScalarFieldEnum | AsignacionUnidadScalarFieldEnum[]
  }

  /**
   * AsignacionUnidad findFirstOrThrow
   */
  export type AsignacionUnidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionUnidad to fetch.
     */
    where?: AsignacionUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionUnidads to fetch.
     */
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionUnidads.
     */
    cursor?: AsignacionUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionUnidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionUnidads.
     */
    distinct?: AsignacionUnidadScalarFieldEnum | AsignacionUnidadScalarFieldEnum[]
  }

  /**
   * AsignacionUnidad findMany
   */
  export type AsignacionUnidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionUnidads to fetch.
     */
    where?: AsignacionUnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionUnidads to fetch.
     */
    orderBy?: AsignacionUnidadOrderByWithRelationInput | AsignacionUnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsignacionUnidads.
     */
    cursor?: AsignacionUnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionUnidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionUnidads.
     */
    skip?: number
    distinct?: AsignacionUnidadScalarFieldEnum | AsignacionUnidadScalarFieldEnum[]
  }

  /**
   * AsignacionUnidad create
   */
  export type AsignacionUnidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * The data needed to create a AsignacionUnidad.
     */
    data: XOR<AsignacionUnidadCreateInput, AsignacionUnidadUncheckedCreateInput>
  }

  /**
   * AsignacionUnidad createMany
   */
  export type AsignacionUnidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsignacionUnidads.
     */
    data: AsignacionUnidadCreateManyInput | AsignacionUnidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsignacionUnidad update
   */
  export type AsignacionUnidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * The data needed to update a AsignacionUnidad.
     */
    data: XOR<AsignacionUnidadUpdateInput, AsignacionUnidadUncheckedUpdateInput>
    /**
     * Choose, which AsignacionUnidad to update.
     */
    where: AsignacionUnidadWhereUniqueInput
  }

  /**
   * AsignacionUnidad updateMany
   */
  export type AsignacionUnidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsignacionUnidads.
     */
    data: XOR<AsignacionUnidadUpdateManyMutationInput, AsignacionUnidadUncheckedUpdateManyInput>
    /**
     * Filter which AsignacionUnidads to update
     */
    where?: AsignacionUnidadWhereInput
    /**
     * Limit how many AsignacionUnidads to update.
     */
    limit?: number
  }

  /**
   * AsignacionUnidad upsert
   */
  export type AsignacionUnidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * The filter to search for the AsignacionUnidad to update in case it exists.
     */
    where: AsignacionUnidadWhereUniqueInput
    /**
     * In case the AsignacionUnidad found by the `where` argument doesn't exist, create a new AsignacionUnidad with this data.
     */
    create: XOR<AsignacionUnidadCreateInput, AsignacionUnidadUncheckedCreateInput>
    /**
     * In case the AsignacionUnidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignacionUnidadUpdateInput, AsignacionUnidadUncheckedUpdateInput>
  }

  /**
   * AsignacionUnidad delete
   */
  export type AsignacionUnidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
    /**
     * Filter which AsignacionUnidad to delete.
     */
    where: AsignacionUnidadWhereUniqueInput
  }

  /**
   * AsignacionUnidad deleteMany
   */
  export type AsignacionUnidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionUnidads to delete
     */
    where?: AsignacionUnidadWhereInput
    /**
     * Limit how many AsignacionUnidads to delete.
     */
    limit?: number
  }

  /**
   * AsignacionUnidad without action
   */
  export type AsignacionUnidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionUnidad
     */
    select?: AsignacionUnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionUnidad
     */
    omit?: AsignacionUnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionUnidadInclude<ExtArgs> | null
  }


  /**
   * Model DeviceToken
   */

  export type AggregateDeviceToken = {
    _count: DeviceTokenCountAggregateOutputType | null
    _avg: DeviceTokenAvgAggregateOutputType | null
    _sum: DeviceTokenSumAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  export type DeviceTokenAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type DeviceTokenSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type DeviceTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    userRoleId: number | null
    createdAt: Date | null
  }

  export type DeviceTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userRoleId: number | null
    createdAt: Date | null
  }

  export type DeviceTokenCountAggregateOutputType = {
    id: number
    token: number
    userRoleId: number
    createdAt: number
    _all: number
  }


  export type DeviceTokenAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type DeviceTokenSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type DeviceTokenMinAggregateInputType = {
    id?: true
    token?: true
    userRoleId?: true
    createdAt?: true
  }

  export type DeviceTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userRoleId?: true
    createdAt?: true
  }

  export type DeviceTokenCountAggregateInputType = {
    id?: true
    token?: true
    userRoleId?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceToken to aggregate.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTokens
    **/
    _count?: true | DeviceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type GetDeviceTokenAggregateType<T extends DeviceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceToken[P]>
      : GetScalarType<T[P], AggregateDeviceToken[P]>
  }




  export type DeviceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithAggregationInput | DeviceTokenOrderByWithAggregationInput[]
    by: DeviceTokenScalarFieldEnum[] | DeviceTokenScalarFieldEnum
    having?: DeviceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTokenCountAggregateInputType | true
    _avg?: DeviceTokenAvgAggregateInputType
    _sum?: DeviceTokenSumAggregateInputType
    _min?: DeviceTokenMinAggregateInputType
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type DeviceTokenGroupByOutputType = {
    id: number
    token: string
    userRoleId: number
    createdAt: Date
    _count: DeviceTokenCountAggregateOutputType | null
    _avg: DeviceTokenAvgAggregateOutputType | null
    _sum: DeviceTokenSumAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  type GetDeviceTokenGroupByPayload<T extends DeviceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userRoleId?: boolean
    createdAt?: boolean
    userRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceToken"]>



  export type DeviceTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userRoleId?: boolean
    createdAt?: boolean
  }

  export type DeviceTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userRoleId" | "createdAt", ExtArgs["result"]["deviceToken"]>
  export type DeviceTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $DeviceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceToken"
    objects: {
      userRole: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userRoleId: number
      createdAt: Date
    }, ExtArgs["result"]["deviceToken"]>
    composites: {}
  }

  type DeviceTokenGetPayload<S extends boolean | null | undefined | DeviceTokenDefaultArgs> = $Result.GetResult<Prisma.$DeviceTokenPayload, S>

  type DeviceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceTokenCountAggregateInputType | true
    }

  export interface DeviceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceToken'], meta: { name: 'DeviceToken' } }
    /**
     * Find zero or one DeviceToken that matches the filter.
     * @param {DeviceTokenFindUniqueArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTokenFindUniqueArgs>(args: SelectSubset<T, DeviceTokenFindUniqueArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceTokenFindUniqueOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTokenFindFirstArgs>(args?: SelectSubset<T, DeviceTokenFindFirstArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany()
     * 
     * // Get first 10 DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTokenFindManyArgs>(args?: SelectSubset<T, DeviceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceToken.
     * @param {DeviceTokenCreateArgs} args - Arguments to create a DeviceToken.
     * @example
     * // Create one DeviceToken
     * const DeviceToken = await prisma.deviceToken.create({
     *   data: {
     *     // ... data to create a DeviceToken
     *   }
     * })
     * 
     */
    create<T extends DeviceTokenCreateArgs>(args: SelectSubset<T, DeviceTokenCreateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceTokens.
     * @param {DeviceTokenCreateManyArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTokenCreateManyArgs>(args?: SelectSubset<T, DeviceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeviceToken.
     * @param {DeviceTokenDeleteArgs} args - Arguments to delete one DeviceToken.
     * @example
     * // Delete one DeviceToken
     * const DeviceToken = await prisma.deviceToken.delete({
     *   where: {
     *     // ... filter to delete one DeviceToken
     *   }
     * })
     * 
     */
    delete<T extends DeviceTokenDeleteArgs>(args: SelectSubset<T, DeviceTokenDeleteArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceToken.
     * @param {DeviceTokenUpdateArgs} args - Arguments to update one DeviceToken.
     * @example
     * // Update one DeviceToken
     * const deviceToken = await prisma.deviceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTokenUpdateArgs>(args: SelectSubset<T, DeviceTokenUpdateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceTokens.
     * @param {DeviceTokenDeleteManyArgs} args - Arguments to filter DeviceTokens to delete.
     * @example
     * // Delete a few DeviceTokens
     * const { count } = await prisma.deviceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTokenDeleteManyArgs>(args?: SelectSubset<T, DeviceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTokens
     * const deviceToken = await prisma.deviceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTokenUpdateManyArgs>(args: SelectSubset<T, DeviceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceToken.
     * @param {DeviceTokenUpsertArgs} args - Arguments to update or create a DeviceToken.
     * @example
     * // Update or create a DeviceToken
     * const deviceToken = await prisma.deviceToken.upsert({
     *   create: {
     *     // ... data to create a DeviceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceToken we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTokenUpsertArgs>(args: SelectSubset<T, DeviceTokenUpsertArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenCountArgs} args - Arguments to filter DeviceTokens to count.
     * @example
     * // Count the number of DeviceTokens
     * const count = await prisma.deviceToken.count({
     *   where: {
     *     // ... the filter for the DeviceTokens we want to count
     *   }
     * })
    **/
    count<T extends DeviceTokenCountArgs>(
      args?: Subset<T, DeviceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTokenAggregateArgs>(args: Subset<T, DeviceTokenAggregateArgs>): Prisma.PrismaPromise<GetDeviceTokenAggregateType<T>>

    /**
     * Group by DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenGroupByArgs} args - Group by arguments.
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
      T extends DeviceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTokenGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceToken model
   */
  readonly fields: DeviceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRole<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeviceToken model
   */
  interface DeviceTokenFieldRefs {
    readonly id: FieldRef<"DeviceToken", 'Int'>
    readonly token: FieldRef<"DeviceToken", 'String'>
    readonly userRoleId: FieldRef<"DeviceToken", 'Int'>
    readonly createdAt: FieldRef<"DeviceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceToken findUnique
   */
  export type DeviceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findUniqueOrThrow
   */
  export type DeviceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findFirst
   */
  export type DeviceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findFirstOrThrow
   */
  export type DeviceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findMany
   */
  export type DeviceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTokens to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken create
   */
  export type DeviceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceToken.
     */
    data: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
  }

  /**
   * DeviceToken createMany
   */
  export type DeviceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceToken update
   */
  export type DeviceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceToken.
     */
    data: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
    /**
     * Choose, which DeviceToken to update.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken updateMany
   */
  export type DeviceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTokens.
     */
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTokens to update
     */
    where?: DeviceTokenWhereInput
    /**
     * Limit how many DeviceTokens to update.
     */
    limit?: number
  }

  /**
   * DeviceToken upsert
   */
  export type DeviceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceToken to update in case it exists.
     */
    where: DeviceTokenWhereUniqueInput
    /**
     * In case the DeviceToken found by the `where` argument doesn't exist, create a new DeviceToken with this data.
     */
    create: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
    /**
     * In case the DeviceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
  }

  /**
   * DeviceToken delete
   */
  export type DeviceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter which DeviceToken to delete.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken deleteMany
   */
  export type DeviceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTokens to delete
     */
    where?: DeviceTokenWhereInput
    /**
     * Limit how many DeviceTokens to delete.
     */
    limit?: number
  }

  /**
   * DeviceToken without action
   */
  export type DeviceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
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


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    idFirebase: 'idFirebase',
    role: 'role',
    nombre: 'nombre',
    apellidoPaterno: 'apellidoPaterno',
    apellidoMaterno: 'apellidoMaterno',
    profilePhotoUrl: 'profilePhotoUrl',
    telefono: 'telefono',
    correo: 'correo'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const OperadorScalarFieldEnum: {
    id: 'id',
    userRoleId: 'userRoleId',
    unidadAsignada: 'unidadAsignada',
    rutaAsignada: 'rutaAsignada'
  };

  export type OperadorScalarFieldEnum = (typeof OperadorScalarFieldEnum)[keyof typeof OperadorScalarFieldEnum]


  export const BotonPanicoScalarFieldEnum: {
    id: 'id',
    operadorId: 'operadorId',
    timestamp: 'timestamp',
    motivo: 'motivo',
    atendido: 'atendido',
    latitud: 'latitud',
    longitud: 'longitud'
  };

  export type BotonPanicoScalarFieldEnum = (typeof BotonPanicoScalarFieldEnum)[keyof typeof BotonPanicoScalarFieldEnum]


  export const SupervisorScalarFieldEnum: {
    id: 'id',
    userRoleId: 'userRoleId'
  };

  export type SupervisorScalarFieldEnum = (typeof SupervisorScalarFieldEnum)[keyof typeof SupervisorScalarFieldEnum]


  export const UbicacionSupervisorScalarFieldEnum: {
    id: 'id',
    supervisorId: 'supervisorId',
    timestamp: 'timestamp',
    latitud: 'latitud',
    longitud: 'longitud'
  };

  export type UbicacionSupervisorScalarFieldEnum = (typeof UbicacionSupervisorScalarFieldEnum)[keyof typeof UbicacionSupervisorScalarFieldEnum]


  export const CoordinadorScalarFieldEnum: {
    id: 'id',
    userRoleId: 'userRoleId'
  };

  export type CoordinadorScalarFieldEnum = (typeof CoordinadorScalarFieldEnum)[keyof typeof CoordinadorScalarFieldEnum]


  export const IncidenteAsignadoScalarFieldEnum: {
    id: 'id',
    supervisorId: 'supervisorId',
    fechaAsignacion: 'fechaAsignacion',
    panicId: 'panicId',
    latitud: 'latitud',
    longitud: 'longitud'
  };

  export type IncidenteAsignadoScalarFieldEnum = (typeof IncidenteAsignadoScalarFieldEnum)[keyof typeof IncidenteAsignadoScalarFieldEnum]


  export const ReporteIncidenteScalarFieldEnum: {
    id: 'id',
    supervisorId: 'supervisorId',
    incidenteAsignadoId: 'incidenteAsignadoId',
    fecha: 'fecha',
    estado: 'estado',
    descripcion: 'descripcion',
    ambulancia: 'ambulancia',
    policia: 'policia',
    heridos: 'heridos'
  };

  export type ReporteIncidenteScalarFieldEnum = (typeof ReporteIncidenteScalarFieldEnum)[keyof typeof ReporteIncidenteScalarFieldEnum]


  export const FotoIncidenteScalarFieldEnum: {
    id: 'id',
    reporteId: 'reporteId',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type FotoIncidenteScalarFieldEnum = (typeof FotoIncidenteScalarFieldEnum)[keyof typeof FotoIncidenteScalarFieldEnum]


  export const PatioScalarFieldEnum: {
    id: 'id',
    userRoleId: 'userRoleId'
  };

  export type PatioScalarFieldEnum = (typeof PatioScalarFieldEnum)[keyof typeof PatioScalarFieldEnum]


  export const RegistroSalidaUnidadScalarFieldEnum: {
    id: 'id',
    patioId: 'patioId',
    unidad: 'unidad',
    operadorId: 'operadorId',
    fechaSalida: 'fechaSalida',
    horaInicio: 'horaInicio',
    vueltas: 'vueltas',
    kmInicial: 'kmInicial',
    kmFinal: 'kmFinal',
    condiciones: 'condiciones'
  };

  export type RegistroSalidaUnidadScalarFieldEnum = (typeof RegistroSalidaUnidadScalarFieldEnum)[keyof typeof RegistroSalidaUnidadScalarFieldEnum]


  export const AsignacionUnidadScalarFieldEnum: {
    id: 'id',
    patioId: 'patioId',
    operadorId: 'operadorId',
    unidad: 'unidad',
    ruta: 'ruta',
    fecha: 'fecha'
  };

  export type AsignacionUnidadScalarFieldEnum = (typeof AsignacionUnidadScalarFieldEnum)[keyof typeof AsignacionUnidadScalarFieldEnum]


  export const DeviceTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userRoleId: 'userRoleId',
    createdAt: 'createdAt'
  };

  export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum]


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


  export const UserRoleOrderByRelevanceFieldEnum: {
    idFirebase: 'idFirebase',
    nombre: 'nombre',
    apellidoPaterno: 'apellidoPaterno',
    apellidoMaterno: 'apellidoMaterno',
    profilePhotoUrl: 'profilePhotoUrl',
    telefono: 'telefono',
    correo: 'correo'
  };

  export type UserRoleOrderByRelevanceFieldEnum = (typeof UserRoleOrderByRelevanceFieldEnum)[keyof typeof UserRoleOrderByRelevanceFieldEnum]


  export const OperadorOrderByRelevanceFieldEnum: {
    unidadAsignada: 'unidadAsignada',
    rutaAsignada: 'rutaAsignada'
  };

  export type OperadorOrderByRelevanceFieldEnum = (typeof OperadorOrderByRelevanceFieldEnum)[keyof typeof OperadorOrderByRelevanceFieldEnum]


  export const BotonPanicoOrderByRelevanceFieldEnum: {
    motivo: 'motivo'
  };

  export type BotonPanicoOrderByRelevanceFieldEnum = (typeof BotonPanicoOrderByRelevanceFieldEnum)[keyof typeof BotonPanicoOrderByRelevanceFieldEnum]


  export const ReporteIncidenteOrderByRelevanceFieldEnum: {
    estado: 'estado',
    descripcion: 'descripcion'
  };

  export type ReporteIncidenteOrderByRelevanceFieldEnum = (typeof ReporteIncidenteOrderByRelevanceFieldEnum)[keyof typeof ReporteIncidenteOrderByRelevanceFieldEnum]


  export const FotoIncidenteOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type FotoIncidenteOrderByRelevanceFieldEnum = (typeof FotoIncidenteOrderByRelevanceFieldEnum)[keyof typeof FotoIncidenteOrderByRelevanceFieldEnum]


  export const RegistroSalidaUnidadOrderByRelevanceFieldEnum: {
    unidad: 'unidad',
    horaInicio: 'horaInicio',
    condiciones: 'condiciones'
  };

  export type RegistroSalidaUnidadOrderByRelevanceFieldEnum = (typeof RegistroSalidaUnidadOrderByRelevanceFieldEnum)[keyof typeof RegistroSalidaUnidadOrderByRelevanceFieldEnum]


  export const AsignacionUnidadOrderByRelevanceFieldEnum: {
    unidad: 'unidad',
    ruta: 'ruta'
  };

  export type AsignacionUnidadOrderByRelevanceFieldEnum = (typeof AsignacionUnidadOrderByRelevanceFieldEnum)[keyof typeof AsignacionUnidadOrderByRelevanceFieldEnum]


  export const DeviceTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type DeviceTokenOrderByRelevanceFieldEnum = (typeof DeviceTokenOrderByRelevanceFieldEnum)[keyof typeof DeviceTokenOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    idFirebase?: StringFilter<"UserRole"> | string
    role?: EnumRoleFilter<"UserRole"> | $Enums.Role
    nombre?: StringNullableFilter<"UserRole"> | string | null
    apellidoPaterno?: StringNullableFilter<"UserRole"> | string | null
    apellidoMaterno?: StringNullableFilter<"UserRole"> | string | null
    profilePhotoUrl?: StringNullableFilter<"UserRole"> | string | null
    telefono?: StringNullableFilter<"UserRole"> | string | null
    correo?: StringNullableFilter<"UserRole"> | string | null
    operador?: XOR<OperadorNullableScalarRelationFilter, OperadorWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, SupervisorWhereInput> | null
    patio?: XOR<PatioNullableScalarRelationFilter, PatioWhereInput> | null
    coordinador?: XOR<CoordinadorNullableScalarRelationFilter, CoordinadorWhereInput> | null
    DeviceToken?: DeviceTokenListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    idFirebase?: SortOrder
    role?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidoPaterno?: SortOrderInput | SortOrder
    apellidoMaterno?: SortOrderInput | SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    operador?: OperadorOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
    patio?: PatioOrderByWithRelationInput
    coordinador?: CoordinadorOrderByWithRelationInput
    DeviceToken?: DeviceTokenOrderByRelationAggregateInput
    _relevance?: UserRoleOrderByRelevanceInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idFirebase?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    role?: EnumRoleFilter<"UserRole"> | $Enums.Role
    nombre?: StringNullableFilter<"UserRole"> | string | null
    apellidoPaterno?: StringNullableFilter<"UserRole"> | string | null
    apellidoMaterno?: StringNullableFilter<"UserRole"> | string | null
    profilePhotoUrl?: StringNullableFilter<"UserRole"> | string | null
    telefono?: StringNullableFilter<"UserRole"> | string | null
    correo?: StringNullableFilter<"UserRole"> | string | null
    operador?: XOR<OperadorNullableScalarRelationFilter, OperadorWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, SupervisorWhereInput> | null
    patio?: XOR<PatioNullableScalarRelationFilter, PatioWhereInput> | null
    coordinador?: XOR<CoordinadorNullableScalarRelationFilter, CoordinadorWhereInput> | null
    DeviceToken?: DeviceTokenListRelationFilter
  }, "id" | "idFirebase">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    idFirebase?: SortOrder
    role?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidoPaterno?: SortOrderInput | SortOrder
    apellidoMaterno?: SortOrderInput | SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    idFirebase?: StringWithAggregatesFilter<"UserRole"> | string
    role?: EnumRoleWithAggregatesFilter<"UserRole"> | $Enums.Role
    nombre?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    apellidoPaterno?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    apellidoMaterno?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    correo?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
  }

  export type OperadorWhereInput = {
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    id?: IntFilter<"Operador"> | number
    userRoleId?: IntFilter<"Operador"> | number
    unidadAsignada?: StringNullableFilter<"Operador"> | string | null
    rutaAsignada?: StringNullableFilter<"Operador"> | string | null
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    botonesPanico?: BotonPanicoListRelationFilter
    RegistroSalidaUnidad?: RegistroSalidaUnidadListRelationFilter
    AsignacionUnidad?: AsignacionUnidadListRelationFilter
  }

  export type OperadorOrderByWithRelationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    unidadAsignada?: SortOrderInput | SortOrder
    rutaAsignada?: SortOrderInput | SortOrder
    user?: UserRoleOrderByWithRelationInput
    botonesPanico?: BotonPanicoOrderByRelationAggregateInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadOrderByRelationAggregateInput
    AsignacionUnidad?: AsignacionUnidadOrderByRelationAggregateInput
    _relevance?: OperadorOrderByRelevanceInput
  }

  export type OperadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userRoleId?: number
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    unidadAsignada?: StringNullableFilter<"Operador"> | string | null
    rutaAsignada?: StringNullableFilter<"Operador"> | string | null
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    botonesPanico?: BotonPanicoListRelationFilter
    RegistroSalidaUnidad?: RegistroSalidaUnidadListRelationFilter
    AsignacionUnidad?: AsignacionUnidadListRelationFilter
  }, "id" | "userRoleId">

  export type OperadorOrderByWithAggregationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    unidadAsignada?: SortOrderInput | SortOrder
    rutaAsignada?: SortOrderInput | SortOrder
    _count?: OperadorCountOrderByAggregateInput
    _avg?: OperadorAvgOrderByAggregateInput
    _max?: OperadorMaxOrderByAggregateInput
    _min?: OperadorMinOrderByAggregateInput
    _sum?: OperadorSumOrderByAggregateInput
  }

  export type OperadorScalarWhereWithAggregatesInput = {
    AND?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    OR?: OperadorScalarWhereWithAggregatesInput[]
    NOT?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operador"> | number
    userRoleId?: IntWithAggregatesFilter<"Operador"> | number
    unidadAsignada?: StringNullableWithAggregatesFilter<"Operador"> | string | null
    rutaAsignada?: StringNullableWithAggregatesFilter<"Operador"> | string | null
  }

  export type BotonPanicoWhereInput = {
    AND?: BotonPanicoWhereInput | BotonPanicoWhereInput[]
    OR?: BotonPanicoWhereInput[]
    NOT?: BotonPanicoWhereInput | BotonPanicoWhereInput[]
    id?: IntFilter<"BotonPanico"> | number
    operadorId?: IntFilter<"BotonPanico"> | number
    timestamp?: DateTimeFilter<"BotonPanico"> | Date | string
    motivo?: StringNullableFilter<"BotonPanico"> | string | null
    atendido?: BoolFilter<"BotonPanico"> | boolean
    latitud?: FloatNullableFilter<"BotonPanico"> | number | null
    longitud?: FloatNullableFilter<"BotonPanico"> | number | null
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
    IncidenteAsignado?: IncidenteAsignadoListRelationFilter
  }

  export type BotonPanicoOrderByWithRelationInput = {
    id?: SortOrder
    operadorId?: SortOrder
    timestamp?: SortOrder
    motivo?: SortOrderInput | SortOrder
    atendido?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    operador?: OperadorOrderByWithRelationInput
    IncidenteAsignado?: IncidenteAsignadoOrderByRelationAggregateInput
    _relevance?: BotonPanicoOrderByRelevanceInput
  }

  export type BotonPanicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BotonPanicoWhereInput | BotonPanicoWhereInput[]
    OR?: BotonPanicoWhereInput[]
    NOT?: BotonPanicoWhereInput | BotonPanicoWhereInput[]
    operadorId?: IntFilter<"BotonPanico"> | number
    timestamp?: DateTimeFilter<"BotonPanico"> | Date | string
    motivo?: StringNullableFilter<"BotonPanico"> | string | null
    atendido?: BoolFilter<"BotonPanico"> | boolean
    latitud?: FloatNullableFilter<"BotonPanico"> | number | null
    longitud?: FloatNullableFilter<"BotonPanico"> | number | null
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
    IncidenteAsignado?: IncidenteAsignadoListRelationFilter
  }, "id">

  export type BotonPanicoOrderByWithAggregationInput = {
    id?: SortOrder
    operadorId?: SortOrder
    timestamp?: SortOrder
    motivo?: SortOrderInput | SortOrder
    atendido?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    _count?: BotonPanicoCountOrderByAggregateInput
    _avg?: BotonPanicoAvgOrderByAggregateInput
    _max?: BotonPanicoMaxOrderByAggregateInput
    _min?: BotonPanicoMinOrderByAggregateInput
    _sum?: BotonPanicoSumOrderByAggregateInput
  }

  export type BotonPanicoScalarWhereWithAggregatesInput = {
    AND?: BotonPanicoScalarWhereWithAggregatesInput | BotonPanicoScalarWhereWithAggregatesInput[]
    OR?: BotonPanicoScalarWhereWithAggregatesInput[]
    NOT?: BotonPanicoScalarWhereWithAggregatesInput | BotonPanicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BotonPanico"> | number
    operadorId?: IntWithAggregatesFilter<"BotonPanico"> | number
    timestamp?: DateTimeWithAggregatesFilter<"BotonPanico"> | Date | string
    motivo?: StringNullableWithAggregatesFilter<"BotonPanico"> | string | null
    atendido?: BoolWithAggregatesFilter<"BotonPanico"> | boolean
    latitud?: FloatNullableWithAggregatesFilter<"BotonPanico"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"BotonPanico"> | number | null
  }

  export type SupervisorWhereInput = {
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    id?: IntFilter<"Supervisor"> | number
    userRoleId?: IntFilter<"Supervisor"> | number
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    ubicaciones?: UbicacionSupervisorListRelationFilter
    reportes?: ReporteIncidenteListRelationFilter
    asignaciones?: IncidenteAsignadoListRelationFilter
  }

  export type SupervisorOrderByWithRelationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    user?: UserRoleOrderByWithRelationInput
    ubicaciones?: UbicacionSupervisorOrderByRelationAggregateInput
    reportes?: ReporteIncidenteOrderByRelationAggregateInput
    asignaciones?: IncidenteAsignadoOrderByRelationAggregateInput
  }

  export type SupervisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userRoleId?: number
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    ubicaciones?: UbicacionSupervisorListRelationFilter
    reportes?: ReporteIncidenteListRelationFilter
    asignaciones?: IncidenteAsignadoListRelationFilter
  }, "id" | "userRoleId">

  export type SupervisorOrderByWithAggregationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    _count?: SupervisorCountOrderByAggregateInput
    _avg?: SupervisorAvgOrderByAggregateInput
    _max?: SupervisorMaxOrderByAggregateInput
    _min?: SupervisorMinOrderByAggregateInput
    _sum?: SupervisorSumOrderByAggregateInput
  }

  export type SupervisorScalarWhereWithAggregatesInput = {
    AND?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    OR?: SupervisorScalarWhereWithAggregatesInput[]
    NOT?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supervisor"> | number
    userRoleId?: IntWithAggregatesFilter<"Supervisor"> | number
  }

  export type UbicacionSupervisorWhereInput = {
    AND?: UbicacionSupervisorWhereInput | UbicacionSupervisorWhereInput[]
    OR?: UbicacionSupervisorWhereInput[]
    NOT?: UbicacionSupervisorWhereInput | UbicacionSupervisorWhereInput[]
    id?: IntFilter<"UbicacionSupervisor"> | number
    supervisorId?: IntFilter<"UbicacionSupervisor"> | number
    timestamp?: DateTimeFilter<"UbicacionSupervisor"> | Date | string
    latitud?: FloatFilter<"UbicacionSupervisor"> | number
    longitud?: FloatFilter<"UbicacionSupervisor"> | number
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
  }

  export type UbicacionSupervisorOrderByWithRelationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    timestamp?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    supervisor?: SupervisorOrderByWithRelationInput
  }

  export type UbicacionSupervisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UbicacionSupervisorWhereInput | UbicacionSupervisorWhereInput[]
    OR?: UbicacionSupervisorWhereInput[]
    NOT?: UbicacionSupervisorWhereInput | UbicacionSupervisorWhereInput[]
    supervisorId?: IntFilter<"UbicacionSupervisor"> | number
    timestamp?: DateTimeFilter<"UbicacionSupervisor"> | Date | string
    latitud?: FloatFilter<"UbicacionSupervisor"> | number
    longitud?: FloatFilter<"UbicacionSupervisor"> | number
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
  }, "id">

  export type UbicacionSupervisorOrderByWithAggregationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    timestamp?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    _count?: UbicacionSupervisorCountOrderByAggregateInput
    _avg?: UbicacionSupervisorAvgOrderByAggregateInput
    _max?: UbicacionSupervisorMaxOrderByAggregateInput
    _min?: UbicacionSupervisorMinOrderByAggregateInput
    _sum?: UbicacionSupervisorSumOrderByAggregateInput
  }

  export type UbicacionSupervisorScalarWhereWithAggregatesInput = {
    AND?: UbicacionSupervisorScalarWhereWithAggregatesInput | UbicacionSupervisorScalarWhereWithAggregatesInput[]
    OR?: UbicacionSupervisorScalarWhereWithAggregatesInput[]
    NOT?: UbicacionSupervisorScalarWhereWithAggregatesInput | UbicacionSupervisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UbicacionSupervisor"> | number
    supervisorId?: IntWithAggregatesFilter<"UbicacionSupervisor"> | number
    timestamp?: DateTimeWithAggregatesFilter<"UbicacionSupervisor"> | Date | string
    latitud?: FloatWithAggregatesFilter<"UbicacionSupervisor"> | number
    longitud?: FloatWithAggregatesFilter<"UbicacionSupervisor"> | number
  }

  export type CoordinadorWhereInput = {
    AND?: CoordinadorWhereInput | CoordinadorWhereInput[]
    OR?: CoordinadorWhereInput[]
    NOT?: CoordinadorWhereInput | CoordinadorWhereInput[]
    id?: IntFilter<"Coordinador"> | number
    userRoleId?: IntFilter<"Coordinador"> | number
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type CoordinadorOrderByWithRelationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    user?: UserRoleOrderByWithRelationInput
  }

  export type CoordinadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userRoleId?: number
    AND?: CoordinadorWhereInput | CoordinadorWhereInput[]
    OR?: CoordinadorWhereInput[]
    NOT?: CoordinadorWhereInput | CoordinadorWhereInput[]
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "userRoleId">

  export type CoordinadorOrderByWithAggregationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    _count?: CoordinadorCountOrderByAggregateInput
    _avg?: CoordinadorAvgOrderByAggregateInput
    _max?: CoordinadorMaxOrderByAggregateInput
    _min?: CoordinadorMinOrderByAggregateInput
    _sum?: CoordinadorSumOrderByAggregateInput
  }

  export type CoordinadorScalarWhereWithAggregatesInput = {
    AND?: CoordinadorScalarWhereWithAggregatesInput | CoordinadorScalarWhereWithAggregatesInput[]
    OR?: CoordinadorScalarWhereWithAggregatesInput[]
    NOT?: CoordinadorScalarWhereWithAggregatesInput | CoordinadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coordinador"> | number
    userRoleId?: IntWithAggregatesFilter<"Coordinador"> | number
  }

  export type IncidenteAsignadoWhereInput = {
    AND?: IncidenteAsignadoWhereInput | IncidenteAsignadoWhereInput[]
    OR?: IncidenteAsignadoWhereInput[]
    NOT?: IncidenteAsignadoWhereInput | IncidenteAsignadoWhereInput[]
    id?: IntFilter<"IncidenteAsignado"> | number
    supervisorId?: IntFilter<"IncidenteAsignado"> | number
    fechaAsignacion?: DateTimeFilter<"IncidenteAsignado"> | Date | string
    panicId?: IntFilter<"IncidenteAsignado"> | number
    latitud?: FloatFilter<"IncidenteAsignado"> | number
    longitud?: FloatFilter<"IncidenteAsignado"> | number
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    panic?: XOR<BotonPanicoScalarRelationFilter, BotonPanicoWhereInput>
    reporte?: XOR<ReporteIncidenteNullableScalarRelationFilter, ReporteIncidenteWhereInput> | null
  }

  export type IncidenteAsignadoOrderByWithRelationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    fechaAsignacion?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    supervisor?: SupervisorOrderByWithRelationInput
    panic?: BotonPanicoOrderByWithRelationInput
    reporte?: ReporteIncidenteOrderByWithRelationInput
  }

  export type IncidenteAsignadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidenteAsignadoWhereInput | IncidenteAsignadoWhereInput[]
    OR?: IncidenteAsignadoWhereInput[]
    NOT?: IncidenteAsignadoWhereInput | IncidenteAsignadoWhereInput[]
    supervisorId?: IntFilter<"IncidenteAsignado"> | number
    fechaAsignacion?: DateTimeFilter<"IncidenteAsignado"> | Date | string
    panicId?: IntFilter<"IncidenteAsignado"> | number
    latitud?: FloatFilter<"IncidenteAsignado"> | number
    longitud?: FloatFilter<"IncidenteAsignado"> | number
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    panic?: XOR<BotonPanicoScalarRelationFilter, BotonPanicoWhereInput>
    reporte?: XOR<ReporteIncidenteNullableScalarRelationFilter, ReporteIncidenteWhereInput> | null
  }, "id">

  export type IncidenteAsignadoOrderByWithAggregationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    fechaAsignacion?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    _count?: IncidenteAsignadoCountOrderByAggregateInput
    _avg?: IncidenteAsignadoAvgOrderByAggregateInput
    _max?: IncidenteAsignadoMaxOrderByAggregateInput
    _min?: IncidenteAsignadoMinOrderByAggregateInput
    _sum?: IncidenteAsignadoSumOrderByAggregateInput
  }

  export type IncidenteAsignadoScalarWhereWithAggregatesInput = {
    AND?: IncidenteAsignadoScalarWhereWithAggregatesInput | IncidenteAsignadoScalarWhereWithAggregatesInput[]
    OR?: IncidenteAsignadoScalarWhereWithAggregatesInput[]
    NOT?: IncidenteAsignadoScalarWhereWithAggregatesInput | IncidenteAsignadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidenteAsignado"> | number
    supervisorId?: IntWithAggregatesFilter<"IncidenteAsignado"> | number
    fechaAsignacion?: DateTimeWithAggregatesFilter<"IncidenteAsignado"> | Date | string
    panicId?: IntWithAggregatesFilter<"IncidenteAsignado"> | number
    latitud?: FloatWithAggregatesFilter<"IncidenteAsignado"> | number
    longitud?: FloatWithAggregatesFilter<"IncidenteAsignado"> | number
  }

  export type ReporteIncidenteWhereInput = {
    AND?: ReporteIncidenteWhereInput | ReporteIncidenteWhereInput[]
    OR?: ReporteIncidenteWhereInput[]
    NOT?: ReporteIncidenteWhereInput | ReporteIncidenteWhereInput[]
    id?: IntFilter<"ReporteIncidente"> | number
    supervisorId?: IntFilter<"ReporteIncidente"> | number
    incidenteAsignadoId?: IntFilter<"ReporteIncidente"> | number
    fecha?: DateTimeFilter<"ReporteIncidente"> | Date | string
    estado?: StringNullableFilter<"ReporteIncidente"> | string | null
    descripcion?: StringFilter<"ReporteIncidente"> | string
    ambulancia?: BoolFilter<"ReporteIncidente"> | boolean
    policia?: BoolFilter<"ReporteIncidente"> | boolean
    heridos?: BoolFilter<"ReporteIncidente"> | boolean
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    incidenteAsignado?: XOR<IncidenteAsignadoScalarRelationFilter, IncidenteAsignadoWhereInput>
    fotos?: FotoIncidenteListRelationFilter
  }

  export type ReporteIncidenteOrderByWithRelationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    ambulancia?: SortOrder
    policia?: SortOrder
    heridos?: SortOrder
    supervisor?: SupervisorOrderByWithRelationInput
    incidenteAsignado?: IncidenteAsignadoOrderByWithRelationInput
    fotos?: FotoIncidenteOrderByRelationAggregateInput
    _relevance?: ReporteIncidenteOrderByRelevanceInput
  }

  export type ReporteIncidenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    incidenteAsignadoId?: number
    AND?: ReporteIncidenteWhereInput | ReporteIncidenteWhereInput[]
    OR?: ReporteIncidenteWhereInput[]
    NOT?: ReporteIncidenteWhereInput | ReporteIncidenteWhereInput[]
    supervisorId?: IntFilter<"ReporteIncidente"> | number
    fecha?: DateTimeFilter<"ReporteIncidente"> | Date | string
    estado?: StringNullableFilter<"ReporteIncidente"> | string | null
    descripcion?: StringFilter<"ReporteIncidente"> | string
    ambulancia?: BoolFilter<"ReporteIncidente"> | boolean
    policia?: BoolFilter<"ReporteIncidente"> | boolean
    heridos?: BoolFilter<"ReporteIncidente"> | boolean
    supervisor?: XOR<SupervisorScalarRelationFilter, SupervisorWhereInput>
    incidenteAsignado?: XOR<IncidenteAsignadoScalarRelationFilter, IncidenteAsignadoWhereInput>
    fotos?: FotoIncidenteListRelationFilter
  }, "id" | "incidenteAsignadoId">

  export type ReporteIncidenteOrderByWithAggregationInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    ambulancia?: SortOrder
    policia?: SortOrder
    heridos?: SortOrder
    _count?: ReporteIncidenteCountOrderByAggregateInput
    _avg?: ReporteIncidenteAvgOrderByAggregateInput
    _max?: ReporteIncidenteMaxOrderByAggregateInput
    _min?: ReporteIncidenteMinOrderByAggregateInput
    _sum?: ReporteIncidenteSumOrderByAggregateInput
  }

  export type ReporteIncidenteScalarWhereWithAggregatesInput = {
    AND?: ReporteIncidenteScalarWhereWithAggregatesInput | ReporteIncidenteScalarWhereWithAggregatesInput[]
    OR?: ReporteIncidenteScalarWhereWithAggregatesInput[]
    NOT?: ReporteIncidenteScalarWhereWithAggregatesInput | ReporteIncidenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReporteIncidente"> | number
    supervisorId?: IntWithAggregatesFilter<"ReporteIncidente"> | number
    incidenteAsignadoId?: IntWithAggregatesFilter<"ReporteIncidente"> | number
    fecha?: DateTimeWithAggregatesFilter<"ReporteIncidente"> | Date | string
    estado?: StringNullableWithAggregatesFilter<"ReporteIncidente"> | string | null
    descripcion?: StringWithAggregatesFilter<"ReporteIncidente"> | string
    ambulancia?: BoolWithAggregatesFilter<"ReporteIncidente"> | boolean
    policia?: BoolWithAggregatesFilter<"ReporteIncidente"> | boolean
    heridos?: BoolWithAggregatesFilter<"ReporteIncidente"> | boolean
  }

  export type FotoIncidenteWhereInput = {
    AND?: FotoIncidenteWhereInput | FotoIncidenteWhereInput[]
    OR?: FotoIncidenteWhereInput[]
    NOT?: FotoIncidenteWhereInput | FotoIncidenteWhereInput[]
    id?: IntFilter<"FotoIncidente"> | number
    reporteId?: IntFilter<"FotoIncidente"> | number
    url?: StringFilter<"FotoIncidente"> | string
    createdAt?: DateTimeFilter<"FotoIncidente"> | Date | string
    reporte?: XOR<ReporteIncidenteScalarRelationFilter, ReporteIncidenteWhereInput>
  }

  export type FotoIncidenteOrderByWithRelationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    reporte?: ReporteIncidenteOrderByWithRelationInput
    _relevance?: FotoIncidenteOrderByRelevanceInput
  }

  export type FotoIncidenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoIncidenteWhereInput | FotoIncidenteWhereInput[]
    OR?: FotoIncidenteWhereInput[]
    NOT?: FotoIncidenteWhereInput | FotoIncidenteWhereInput[]
    reporteId?: IntFilter<"FotoIncidente"> | number
    url?: StringFilter<"FotoIncidente"> | string
    createdAt?: DateTimeFilter<"FotoIncidente"> | Date | string
    reporte?: XOR<ReporteIncidenteScalarRelationFilter, ReporteIncidenteWhereInput>
  }, "id">

  export type FotoIncidenteOrderByWithAggregationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: FotoIncidenteCountOrderByAggregateInput
    _avg?: FotoIncidenteAvgOrderByAggregateInput
    _max?: FotoIncidenteMaxOrderByAggregateInput
    _min?: FotoIncidenteMinOrderByAggregateInput
    _sum?: FotoIncidenteSumOrderByAggregateInput
  }

  export type FotoIncidenteScalarWhereWithAggregatesInput = {
    AND?: FotoIncidenteScalarWhereWithAggregatesInput | FotoIncidenteScalarWhereWithAggregatesInput[]
    OR?: FotoIncidenteScalarWhereWithAggregatesInput[]
    NOT?: FotoIncidenteScalarWhereWithAggregatesInput | FotoIncidenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FotoIncidente"> | number
    reporteId?: IntWithAggregatesFilter<"FotoIncidente"> | number
    url?: StringWithAggregatesFilter<"FotoIncidente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FotoIncidente"> | Date | string
  }

  export type PatioWhereInput = {
    AND?: PatioWhereInput | PatioWhereInput[]
    OR?: PatioWhereInput[]
    NOT?: PatioWhereInput | PatioWhereInput[]
    id?: IntFilter<"Patio"> | number
    userRoleId?: IntFilter<"Patio"> | number
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    registrosSalida?: RegistroSalidaUnidadListRelationFilter
    asignaciones?: AsignacionUnidadListRelationFilter
  }

  export type PatioOrderByWithRelationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    user?: UserRoleOrderByWithRelationInput
    registrosSalida?: RegistroSalidaUnidadOrderByRelationAggregateInput
    asignaciones?: AsignacionUnidadOrderByRelationAggregateInput
  }

  export type PatioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userRoleId?: number
    AND?: PatioWhereInput | PatioWhereInput[]
    OR?: PatioWhereInput[]
    NOT?: PatioWhereInput | PatioWhereInput[]
    user?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
    registrosSalida?: RegistroSalidaUnidadListRelationFilter
    asignaciones?: AsignacionUnidadListRelationFilter
  }, "id" | "userRoleId">

  export type PatioOrderByWithAggregationInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    _count?: PatioCountOrderByAggregateInput
    _avg?: PatioAvgOrderByAggregateInput
    _max?: PatioMaxOrderByAggregateInput
    _min?: PatioMinOrderByAggregateInput
    _sum?: PatioSumOrderByAggregateInput
  }

  export type PatioScalarWhereWithAggregatesInput = {
    AND?: PatioScalarWhereWithAggregatesInput | PatioScalarWhereWithAggregatesInput[]
    OR?: PatioScalarWhereWithAggregatesInput[]
    NOT?: PatioScalarWhereWithAggregatesInput | PatioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patio"> | number
    userRoleId?: IntWithAggregatesFilter<"Patio"> | number
  }

  export type RegistroSalidaUnidadWhereInput = {
    AND?: RegistroSalidaUnidadWhereInput | RegistroSalidaUnidadWhereInput[]
    OR?: RegistroSalidaUnidadWhereInput[]
    NOT?: RegistroSalidaUnidadWhereInput | RegistroSalidaUnidadWhereInput[]
    id?: IntFilter<"RegistroSalidaUnidad"> | number
    patioId?: IntFilter<"RegistroSalidaUnidad"> | number
    unidad?: StringFilter<"RegistroSalidaUnidad"> | string
    operadorId?: IntFilter<"RegistroSalidaUnidad"> | number
    fechaSalida?: DateTimeFilter<"RegistroSalidaUnidad"> | Date | string
    horaInicio?: StringFilter<"RegistroSalidaUnidad"> | string
    vueltas?: IntFilter<"RegistroSalidaUnidad"> | number
    kmInicial?: IntFilter<"RegistroSalidaUnidad"> | number
    kmFinal?: IntNullableFilter<"RegistroSalidaUnidad"> | number | null
    condiciones?: StringFilter<"RegistroSalidaUnidad"> | string
    patio?: XOR<PatioScalarRelationFilter, PatioWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }

  export type RegistroSalidaUnidadOrderByWithRelationInput = {
    id?: SortOrder
    patioId?: SortOrder
    unidad?: SortOrder
    operadorId?: SortOrder
    fechaSalida?: SortOrder
    horaInicio?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrderInput | SortOrder
    condiciones?: SortOrder
    patio?: PatioOrderByWithRelationInput
    operador?: OperadorOrderByWithRelationInput
    _relevance?: RegistroSalidaUnidadOrderByRelevanceInput
  }

  export type RegistroSalidaUnidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistroSalidaUnidadWhereInput | RegistroSalidaUnidadWhereInput[]
    OR?: RegistroSalidaUnidadWhereInput[]
    NOT?: RegistroSalidaUnidadWhereInput | RegistroSalidaUnidadWhereInput[]
    patioId?: IntFilter<"RegistroSalidaUnidad"> | number
    unidad?: StringFilter<"RegistroSalidaUnidad"> | string
    operadorId?: IntFilter<"RegistroSalidaUnidad"> | number
    fechaSalida?: DateTimeFilter<"RegistroSalidaUnidad"> | Date | string
    horaInicio?: StringFilter<"RegistroSalidaUnidad"> | string
    vueltas?: IntFilter<"RegistroSalidaUnidad"> | number
    kmInicial?: IntFilter<"RegistroSalidaUnidad"> | number
    kmFinal?: IntNullableFilter<"RegistroSalidaUnidad"> | number | null
    condiciones?: StringFilter<"RegistroSalidaUnidad"> | string
    patio?: XOR<PatioScalarRelationFilter, PatioWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }, "id">

  export type RegistroSalidaUnidadOrderByWithAggregationInput = {
    id?: SortOrder
    patioId?: SortOrder
    unidad?: SortOrder
    operadorId?: SortOrder
    fechaSalida?: SortOrder
    horaInicio?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrderInput | SortOrder
    condiciones?: SortOrder
    _count?: RegistroSalidaUnidadCountOrderByAggregateInput
    _avg?: RegistroSalidaUnidadAvgOrderByAggregateInput
    _max?: RegistroSalidaUnidadMaxOrderByAggregateInput
    _min?: RegistroSalidaUnidadMinOrderByAggregateInput
    _sum?: RegistroSalidaUnidadSumOrderByAggregateInput
  }

  export type RegistroSalidaUnidadScalarWhereWithAggregatesInput = {
    AND?: RegistroSalidaUnidadScalarWhereWithAggregatesInput | RegistroSalidaUnidadScalarWhereWithAggregatesInput[]
    OR?: RegistroSalidaUnidadScalarWhereWithAggregatesInput[]
    NOT?: RegistroSalidaUnidadScalarWhereWithAggregatesInput | RegistroSalidaUnidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegistroSalidaUnidad"> | number
    patioId?: IntWithAggregatesFilter<"RegistroSalidaUnidad"> | number
    unidad?: StringWithAggregatesFilter<"RegistroSalidaUnidad"> | string
    operadorId?: IntWithAggregatesFilter<"RegistroSalidaUnidad"> | number
    fechaSalida?: DateTimeWithAggregatesFilter<"RegistroSalidaUnidad"> | Date | string
    horaInicio?: StringWithAggregatesFilter<"RegistroSalidaUnidad"> | string
    vueltas?: IntWithAggregatesFilter<"RegistroSalidaUnidad"> | number
    kmInicial?: IntWithAggregatesFilter<"RegistroSalidaUnidad"> | number
    kmFinal?: IntNullableWithAggregatesFilter<"RegistroSalidaUnidad"> | number | null
    condiciones?: StringWithAggregatesFilter<"RegistroSalidaUnidad"> | string
  }

  export type AsignacionUnidadWhereInput = {
    AND?: AsignacionUnidadWhereInput | AsignacionUnidadWhereInput[]
    OR?: AsignacionUnidadWhereInput[]
    NOT?: AsignacionUnidadWhereInput | AsignacionUnidadWhereInput[]
    id?: IntFilter<"AsignacionUnidad"> | number
    patioId?: IntFilter<"AsignacionUnidad"> | number
    operadorId?: IntFilter<"AsignacionUnidad"> | number
    unidad?: StringFilter<"AsignacionUnidad"> | string
    ruta?: StringFilter<"AsignacionUnidad"> | string
    fecha?: DateTimeFilter<"AsignacionUnidad"> | Date | string
    patio?: XOR<PatioScalarRelationFilter, PatioWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }

  export type AsignacionUnidadOrderByWithRelationInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    unidad?: SortOrder
    ruta?: SortOrder
    fecha?: SortOrder
    patio?: PatioOrderByWithRelationInput
    operador?: OperadorOrderByWithRelationInput
    _relevance?: AsignacionUnidadOrderByRelevanceInput
  }

  export type AsignacionUnidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsignacionUnidadWhereInput | AsignacionUnidadWhereInput[]
    OR?: AsignacionUnidadWhereInput[]
    NOT?: AsignacionUnidadWhereInput | AsignacionUnidadWhereInput[]
    patioId?: IntFilter<"AsignacionUnidad"> | number
    operadorId?: IntFilter<"AsignacionUnidad"> | number
    unidad?: StringFilter<"AsignacionUnidad"> | string
    ruta?: StringFilter<"AsignacionUnidad"> | string
    fecha?: DateTimeFilter<"AsignacionUnidad"> | Date | string
    patio?: XOR<PatioScalarRelationFilter, PatioWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }, "id">

  export type AsignacionUnidadOrderByWithAggregationInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    unidad?: SortOrder
    ruta?: SortOrder
    fecha?: SortOrder
    _count?: AsignacionUnidadCountOrderByAggregateInput
    _avg?: AsignacionUnidadAvgOrderByAggregateInput
    _max?: AsignacionUnidadMaxOrderByAggregateInput
    _min?: AsignacionUnidadMinOrderByAggregateInput
    _sum?: AsignacionUnidadSumOrderByAggregateInput
  }

  export type AsignacionUnidadScalarWhereWithAggregatesInput = {
    AND?: AsignacionUnidadScalarWhereWithAggregatesInput | AsignacionUnidadScalarWhereWithAggregatesInput[]
    OR?: AsignacionUnidadScalarWhereWithAggregatesInput[]
    NOT?: AsignacionUnidadScalarWhereWithAggregatesInput | AsignacionUnidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AsignacionUnidad"> | number
    patioId?: IntWithAggregatesFilter<"AsignacionUnidad"> | number
    operadorId?: IntWithAggregatesFilter<"AsignacionUnidad"> | number
    unidad?: StringWithAggregatesFilter<"AsignacionUnidad"> | string
    ruta?: StringWithAggregatesFilter<"AsignacionUnidad"> | string
    fecha?: DateTimeWithAggregatesFilter<"AsignacionUnidad"> | Date | string
  }

  export type DeviceTokenWhereInput = {
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    id?: IntFilter<"DeviceToken"> | number
    token?: StringFilter<"DeviceToken"> | string
    userRoleId?: IntFilter<"DeviceToken"> | number
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    userRole?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type DeviceTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userRoleId?: SortOrder
    createdAt?: SortOrder
    userRole?: UserRoleOrderByWithRelationInput
    _relevance?: DeviceTokenOrderByRelevanceInput
  }

  export type DeviceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    userRoleId?: IntFilter<"DeviceToken"> | number
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    userRole?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "token">

  export type DeviceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userRoleId?: SortOrder
    createdAt?: SortOrder
    _count?: DeviceTokenCountOrderByAggregateInput
    _avg?: DeviceTokenAvgOrderByAggregateInput
    _max?: DeviceTokenMaxOrderByAggregateInput
    _min?: DeviceTokenMinOrderByAggregateInput
    _sum?: DeviceTokenSumOrderByAggregateInput
  }

  export type DeviceTokenScalarWhereWithAggregatesInput = {
    AND?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    OR?: DeviceTokenScalarWhereWithAggregatesInput[]
    NOT?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceToken"> | number
    token?: StringWithAggregatesFilter<"DeviceToken"> | string
    userRoleId?: IntWithAggregatesFilter<"DeviceToken"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
  }

  export type UserRoleCreateInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorCreateNestedOneWithoutUserInput
    supervisor?: SupervisorCreateNestedOneWithoutUserInput
    patio?: PatioCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorUncheckedCreateNestedOneWithoutUserInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUserInput
    patio?: PatioUncheckedCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorUncheckedCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUpdateInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUpdateOneWithoutUserNestedInput
    patio?: PatioUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUncheckedUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUserNestedInput
    patio?: PatioUncheckedUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUncheckedUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
  }

  export type UserRoleUpdateManyMutationInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperadorCreateInput = {
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    user: UserRoleCreateNestedOneWithoutOperadorInput
    botonesPanico?: BotonPanicoCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateInput = {
    id?: number
    userRoleId: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    botonesPanico?: BotonPanicoUncheckedCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUpdateInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserRoleUpdateOneRequiredWithoutOperadorNestedInput
    botonesPanico?: BotonPanicoUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    botonesPanico?: BotonPanicoUncheckedUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorCreateManyInput = {
    id?: number
    userRoleId: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
  }

  export type OperadorUpdateManyMutationInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BotonPanicoCreateInput = {
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
    operador: OperadorCreateNestedOneWithoutBotonesPanicoInput
    IncidenteAsignado?: IncidenteAsignadoCreateNestedManyWithoutPanicInput
  }

  export type BotonPanicoUncheckedCreateInput = {
    id?: number
    operadorId: number
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
    IncidenteAsignado?: IncidenteAsignadoUncheckedCreateNestedManyWithoutPanicInput
  }

  export type BotonPanicoUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    operador?: OperadorUpdateOneRequiredWithoutBotonesPanicoNestedInput
    IncidenteAsignado?: IncidenteAsignadoUpdateManyWithoutPanicNestedInput
  }

  export type BotonPanicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    IncidenteAsignado?: IncidenteAsignadoUncheckedUpdateManyWithoutPanicNestedInput
  }

  export type BotonPanicoCreateManyInput = {
    id?: number
    operadorId: number
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
  }

  export type BotonPanicoUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BotonPanicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SupervisorCreateInput = {
    user: UserRoleCreateNestedOneWithoutSupervisorInput
    ubicaciones?: UbicacionSupervisorCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateInput = {
    id?: number
    userRoleId: number
    ubicaciones?: UbicacionSupervisorUncheckedCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteUncheckedCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUpdateInput = {
    user?: UserRoleUpdateOneRequiredWithoutSupervisorNestedInput
    ubicaciones?: UbicacionSupervisorUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    ubicaciones?: UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUncheckedUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorCreateManyInput = {
    id?: number
    userRoleId: number
  }

  export type SupervisorUpdateManyMutationInput = {

  }

  export type SupervisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorCreateInput = {
    timestamp?: Date | string
    latitud: number
    longitud: number
    supervisor: SupervisorCreateNestedOneWithoutUbicacionesInput
  }

  export type UbicacionSupervisorUncheckedCreateInput = {
    id?: number
    supervisorId: number
    timestamp?: Date | string
    latitud: number
    longitud: number
  }

  export type UbicacionSupervisorUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    supervisor?: SupervisorUpdateOneRequiredWithoutUbicacionesNestedInput
  }

  export type UbicacionSupervisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorCreateManyInput = {
    id?: number
    supervisorId: number
    timestamp?: Date | string
    latitud: number
    longitud: number
  }

  export type UbicacionSupervisorUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type CoordinadorCreateInput = {
    user: UserRoleCreateNestedOneWithoutCoordinadorInput
  }

  export type CoordinadorUncheckedCreateInput = {
    id?: number
    userRoleId: number
  }

  export type CoordinadorUpdateInput = {
    user?: UserRoleUpdateOneRequiredWithoutCoordinadorNestedInput
  }

  export type CoordinadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type CoordinadorCreateManyInput = {
    id?: number
    userRoleId: number
  }

  export type CoordinadorUpdateManyMutationInput = {

  }

  export type CoordinadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type IncidenteAsignadoCreateInput = {
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
    supervisor: SupervisorCreateNestedOneWithoutAsignacionesInput
    panic: BotonPanicoCreateNestedOneWithoutIncidenteAsignadoInput
    reporte?: ReporteIncidenteCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoUncheckedCreateInput = {
    id?: number
    supervisorId: number
    fechaAsignacion?: Date | string
    panicId: number
    latitud: number
    longitud: number
    reporte?: ReporteIncidenteUncheckedCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoUpdateInput = {
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    supervisor?: SupervisorUpdateOneRequiredWithoutAsignacionesNestedInput
    panic?: BotonPanicoUpdateOneRequiredWithoutIncidenteAsignadoNestedInput
    reporte?: ReporteIncidenteUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    panicId?: IntFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    reporte?: ReporteIncidenteUncheckedUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoCreateManyInput = {
    id?: number
    supervisorId: number
    fechaAsignacion?: Date | string
    panicId: number
    latitud: number
    longitud: number
  }

  export type IncidenteAsignadoUpdateManyMutationInput = {
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type IncidenteAsignadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    panicId?: IntFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type ReporteIncidenteCreateInput = {
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    supervisor: SupervisorCreateNestedOneWithoutReportesInput
    incidenteAsignado: IncidenteAsignadoCreateNestedOneWithoutReporteInput
    fotos?: FotoIncidenteCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteUncheckedCreateInput = {
    id?: number
    supervisorId: number
    incidenteAsignadoId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    fotos?: FotoIncidenteUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    supervisor?: SupervisorUpdateOneRequiredWithoutReportesNestedInput
    incidenteAsignado?: IncidenteAsignadoUpdateOneRequiredWithoutReporteNestedInput
    fotos?: FotoIncidenteUpdateManyWithoutReporteNestedInput
  }

  export type ReporteIncidenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    incidenteAsignadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    fotos?: FotoIncidenteUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteIncidenteCreateManyInput = {
    id?: number
    supervisorId: number
    incidenteAsignadoId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
  }

  export type ReporteIncidenteUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReporteIncidenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    incidenteAsignadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotoIncidenteCreateInput = {
    url: string
    createdAt?: Date | string
    reporte: ReporteIncidenteCreateNestedOneWithoutFotosInput
  }

  export type FotoIncidenteUncheckedCreateInput = {
    id?: number
    reporteId: number
    url: string
    createdAt?: Date | string
  }

  export type FotoIncidenteUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporte?: ReporteIncidenteUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoIncidenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoIncidenteCreateManyInput = {
    id?: number
    reporteId: number
    url: string
    createdAt?: Date | string
  }

  export type FotoIncidenteUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoIncidenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatioCreateInput = {
    user: UserRoleCreateNestedOneWithoutPatioInput
    registrosSalida?: RegistroSalidaUnidadCreateNestedManyWithoutPatioInput
    asignaciones?: AsignacionUnidadCreateNestedManyWithoutPatioInput
  }

  export type PatioUncheckedCreateInput = {
    id?: number
    userRoleId: number
    registrosSalida?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutPatioInput
    asignaciones?: AsignacionUnidadUncheckedCreateNestedManyWithoutPatioInput
  }

  export type PatioUpdateInput = {
    user?: UserRoleUpdateOneRequiredWithoutPatioNestedInput
    registrosSalida?: RegistroSalidaUnidadUpdateManyWithoutPatioNestedInput
    asignaciones?: AsignacionUnidadUpdateManyWithoutPatioNestedInput
  }

  export type PatioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    registrosSalida?: RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioNestedInput
    asignaciones?: AsignacionUnidadUncheckedUpdateManyWithoutPatioNestedInput
  }

  export type PatioCreateManyInput = {
    id?: number
    userRoleId: number
  }

  export type PatioUpdateManyMutationInput = {

  }

  export type PatioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroSalidaUnidadCreateInput = {
    unidad: string
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
    patio: PatioCreateNestedOneWithoutRegistrosSalidaInput
    operador: OperadorCreateNestedOneWithoutRegistroSalidaUnidadInput
  }

  export type RegistroSalidaUnidadUncheckedCreateInput = {
    id?: number
    patioId: number
    unidad: string
    operadorId: number
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type RegistroSalidaUnidadUpdateInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
    patio?: PatioUpdateOneRequiredWithoutRegistrosSalidaNestedInput
    operador?: OperadorUpdateOneRequiredWithoutRegistroSalidaUnidadNestedInput
  }

  export type RegistroSalidaUnidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    operadorId?: IntFieldUpdateOperationsInput | number
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroSalidaUnidadCreateManyInput = {
    id?: number
    patioId: number
    unidad: string
    operadorId: number
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type RegistroSalidaUnidadUpdateManyMutationInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroSalidaUnidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    operadorId?: IntFieldUpdateOperationsInput | number
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionUnidadCreateInput = {
    unidad: string
    ruta: string
    fecha?: Date | string
    patio: PatioCreateNestedOneWithoutAsignacionesInput
    operador: OperadorCreateNestedOneWithoutAsignacionUnidadInput
  }

  export type AsignacionUnidadUncheckedCreateInput = {
    id?: number
    patioId: number
    operadorId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type AsignacionUnidadUpdateInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    patio?: PatioUpdateOneRequiredWithoutAsignacionesNestedInput
    operador?: OperadorUpdateOneRequiredWithoutAsignacionUnidadNestedInput
  }

  export type AsignacionUnidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionUnidadCreateManyInput = {
    id?: number
    patioId: number
    operadorId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type AsignacionUnidadUpdateManyMutationInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionUnidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateInput = {
    token: string
    createdAt?: Date | string
    userRole: UserRoleCreateNestedOneWithoutDeviceTokenInput
  }

  export type DeviceTokenUncheckedCreateInput = {
    id?: number
    token: string
    userRoleId: number
    createdAt?: Date | string
  }

  export type DeviceTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: UserRoleUpdateOneRequiredWithoutDeviceTokenNestedInput
  }

  export type DeviceTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateManyInput = {
    id?: number
    token: string
    userRoleId: number
    createdAt?: Date | string
  }

  export type DeviceTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type OperadorNullableScalarRelationFilter = {
    is?: OperadorWhereInput | null
    isNot?: OperadorWhereInput | null
  }

  export type SupervisorNullableScalarRelationFilter = {
    is?: SupervisorWhereInput | null
    isNot?: SupervisorWhereInput | null
  }

  export type PatioNullableScalarRelationFilter = {
    is?: PatioWhereInput | null
    isNot?: PatioWhereInput | null
  }

  export type CoordinadorNullableScalarRelationFilter = {
    is?: CoordinadorWhereInput | null
    isNot?: CoordinadorWhereInput | null
  }

  export type DeviceTokenListRelationFilter = {
    every?: DeviceTokenWhereInput
    some?: DeviceTokenWhereInput
    none?: DeviceTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelevanceInput = {
    fields: UserRoleOrderByRelevanceFieldEnum | UserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    idFirebase?: SortOrder
    role?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    profilePhotoUrl?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    idFirebase?: SortOrder
    role?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    profilePhotoUrl?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    idFirebase?: SortOrder
    role?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    profilePhotoUrl?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type BotonPanicoListRelationFilter = {
    every?: BotonPanicoWhereInput
    some?: BotonPanicoWhereInput
    none?: BotonPanicoWhereInput
  }

  export type RegistroSalidaUnidadListRelationFilter = {
    every?: RegistroSalidaUnidadWhereInput
    some?: RegistroSalidaUnidadWhereInput
    none?: RegistroSalidaUnidadWhereInput
  }

  export type AsignacionUnidadListRelationFilter = {
    every?: AsignacionUnidadWhereInput
    some?: AsignacionUnidadWhereInput
    none?: AsignacionUnidadWhereInput
  }

  export type BotonPanicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroSalidaUnidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsignacionUnidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperadorOrderByRelevanceInput = {
    fields: OperadorOrderByRelevanceFieldEnum | OperadorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OperadorCountOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    unidadAsignada?: SortOrder
    rutaAsignada?: SortOrder
  }

  export type OperadorAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type OperadorMaxOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    unidadAsignada?: SortOrder
    rutaAsignada?: SortOrder
  }

  export type OperadorMinOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
    unidadAsignada?: SortOrder
    rutaAsignada?: SortOrder
  }

  export type OperadorSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OperadorScalarRelationFilter = {
    is?: OperadorWhereInput
    isNot?: OperadorWhereInput
  }

  export type IncidenteAsignadoListRelationFilter = {
    every?: IncidenteAsignadoWhereInput
    some?: IncidenteAsignadoWhereInput
    none?: IncidenteAsignadoWhereInput
  }

  export type IncidenteAsignadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BotonPanicoOrderByRelevanceInput = {
    fields: BotonPanicoOrderByRelevanceFieldEnum | BotonPanicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BotonPanicoCountOrderByAggregateInput = {
    id?: SortOrder
    operadorId?: SortOrder
    timestamp?: SortOrder
    motivo?: SortOrder
    atendido?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type BotonPanicoAvgOrderByAggregateInput = {
    id?: SortOrder
    operadorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type BotonPanicoMaxOrderByAggregateInput = {
    id?: SortOrder
    operadorId?: SortOrder
    timestamp?: SortOrder
    motivo?: SortOrder
    atendido?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type BotonPanicoMinOrderByAggregateInput = {
    id?: SortOrder
    operadorId?: SortOrder
    timestamp?: SortOrder
    motivo?: SortOrder
    atendido?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type BotonPanicoSumOrderByAggregateInput = {
    id?: SortOrder
    operadorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UbicacionSupervisorListRelationFilter = {
    every?: UbicacionSupervisorWhereInput
    some?: UbicacionSupervisorWhereInput
    none?: UbicacionSupervisorWhereInput
  }

  export type ReporteIncidenteListRelationFilter = {
    every?: ReporteIncidenteWhereInput
    some?: ReporteIncidenteWhereInput
    none?: ReporteIncidenteWhereInput
  }

  export type UbicacionSupervisorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteIncidenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisorCountOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type SupervisorAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type SupervisorMaxOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type SupervisorMinOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type SupervisorSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SupervisorScalarRelationFilter = {
    is?: SupervisorWhereInput
    isNot?: SupervisorWhereInput
  }

  export type UbicacionSupervisorCountOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    timestamp?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionSupervisorAvgOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionSupervisorMaxOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    timestamp?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionSupervisorMinOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    timestamp?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionSupervisorSumOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CoordinadorCountOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type CoordinadorAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type CoordinadorMaxOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type CoordinadorMinOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type CoordinadorSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type BotonPanicoScalarRelationFilter = {
    is?: BotonPanicoWhereInput
    isNot?: BotonPanicoWhereInput
  }

  export type ReporteIncidenteNullableScalarRelationFilter = {
    is?: ReporteIncidenteWhereInput | null
    isNot?: ReporteIncidenteWhereInput | null
  }

  export type IncidenteAsignadoCountOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    fechaAsignacion?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IncidenteAsignadoAvgOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IncidenteAsignadoMaxOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    fechaAsignacion?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IncidenteAsignadoMinOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    fechaAsignacion?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IncidenteAsignadoSumOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    panicId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IncidenteAsignadoScalarRelationFilter = {
    is?: IncidenteAsignadoWhereInput
    isNot?: IncidenteAsignadoWhereInput
  }

  export type FotoIncidenteListRelationFilter = {
    every?: FotoIncidenteWhereInput
    some?: FotoIncidenteWhereInput
    none?: FotoIncidenteWhereInput
  }

  export type FotoIncidenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteIncidenteOrderByRelevanceInput = {
    fields: ReporteIncidenteOrderByRelevanceFieldEnum | ReporteIncidenteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReporteIncidenteCountOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    ambulancia?: SortOrder
    policia?: SortOrder
    heridos?: SortOrder
  }

  export type ReporteIncidenteAvgOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
  }

  export type ReporteIncidenteMaxOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    ambulancia?: SortOrder
    policia?: SortOrder
    heridos?: SortOrder
  }

  export type ReporteIncidenteMinOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    descripcion?: SortOrder
    ambulancia?: SortOrder
    policia?: SortOrder
    heridos?: SortOrder
  }

  export type ReporteIncidenteSumOrderByAggregateInput = {
    id?: SortOrder
    supervisorId?: SortOrder
    incidenteAsignadoId?: SortOrder
  }

  export type ReporteIncidenteScalarRelationFilter = {
    is?: ReporteIncidenteWhereInput
    isNot?: ReporteIncidenteWhereInput
  }

  export type FotoIncidenteOrderByRelevanceInput = {
    fields: FotoIncidenteOrderByRelevanceFieldEnum | FotoIncidenteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FotoIncidenteCountOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoIncidenteAvgOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
  }

  export type FotoIncidenteMaxOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoIncidenteMinOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoIncidenteSumOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
  }

  export type PatioCountOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type PatioAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type PatioMaxOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type PatioMinOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type PatioSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PatioScalarRelationFilter = {
    is?: PatioWhereInput
    isNot?: PatioWhereInput
  }

  export type RegistroSalidaUnidadOrderByRelevanceInput = {
    fields: RegistroSalidaUnidadOrderByRelevanceFieldEnum | RegistroSalidaUnidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegistroSalidaUnidadCountOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    unidad?: SortOrder
    operadorId?: SortOrder
    fechaSalida?: SortOrder
    horaInicio?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrder
    condiciones?: SortOrder
  }

  export type RegistroSalidaUnidadAvgOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrder
  }

  export type RegistroSalidaUnidadMaxOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    unidad?: SortOrder
    operadorId?: SortOrder
    fechaSalida?: SortOrder
    horaInicio?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrder
    condiciones?: SortOrder
  }

  export type RegistroSalidaUnidadMinOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    unidad?: SortOrder
    operadorId?: SortOrder
    fechaSalida?: SortOrder
    horaInicio?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrder
    condiciones?: SortOrder
  }

  export type RegistroSalidaUnidadSumOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    vueltas?: SortOrder
    kmInicial?: SortOrder
    kmFinal?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AsignacionUnidadOrderByRelevanceInput = {
    fields: AsignacionUnidadOrderByRelevanceFieldEnum | AsignacionUnidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AsignacionUnidadCountOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    unidad?: SortOrder
    ruta?: SortOrder
    fecha?: SortOrder
  }

  export type AsignacionUnidadAvgOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
  }

  export type AsignacionUnidadMaxOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    unidad?: SortOrder
    ruta?: SortOrder
    fecha?: SortOrder
  }

  export type AsignacionUnidadMinOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
    unidad?: SortOrder
    ruta?: SortOrder
    fecha?: SortOrder
  }

  export type AsignacionUnidadSumOrderByAggregateInput = {
    id?: SortOrder
    patioId?: SortOrder
    operadorId?: SortOrder
  }

  export type DeviceTokenOrderByRelevanceInput = {
    fields: DeviceTokenOrderByRelevanceFieldEnum | DeviceTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeviceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userRoleId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type DeviceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userRoleId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userRoleId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type OperadorCreateNestedOneWithoutUserInput = {
    create?: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutUserInput
    connect?: OperadorWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutUserInput = {
    create?: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUserInput
    connect?: SupervisorWhereUniqueInput
  }

  export type PatioCreateNestedOneWithoutUserInput = {
    create?: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatioCreateOrConnectWithoutUserInput
    connect?: PatioWhereUniqueInput
  }

  export type CoordinadorCreateNestedOneWithoutUserInput = {
    create?: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinadorCreateOrConnectWithoutUserInput
    connect?: CoordinadorWhereUniqueInput
  }

  export type DeviceTokenCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput> | DeviceTokenCreateWithoutUserRoleInput[] | DeviceTokenUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserRoleInput | DeviceTokenCreateOrConnectWithoutUserRoleInput[]
    createMany?: DeviceTokenCreateManyUserRoleInputEnvelope
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
  }

  export type OperadorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutUserInput
    connect?: OperadorWhereUniqueInput
  }

  export type SupervisorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUserInput
    connect?: SupervisorWhereUniqueInput
  }

  export type PatioUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatioCreateOrConnectWithoutUserInput
    connect?: PatioWhereUniqueInput
  }

  export type CoordinadorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinadorCreateOrConnectWithoutUserInput
    connect?: CoordinadorWhereUniqueInput
  }

  export type DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput> | DeviceTokenCreateWithoutUserRoleInput[] | DeviceTokenUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserRoleInput | DeviceTokenCreateOrConnectWithoutUserRoleInput[]
    createMany?: DeviceTokenCreateManyUserRoleInputEnvelope
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OperadorUpdateOneWithoutUserNestedInput = {
    create?: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutUserInput
    upsert?: OperadorUpsertWithoutUserInput
    disconnect?: OperadorWhereInput | boolean
    delete?: OperadorWhereInput | boolean
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutUserInput, OperadorUpdateWithoutUserInput>, OperadorUncheckedUpdateWithoutUserInput>
  }

  export type SupervisorUpdateOneWithoutUserNestedInput = {
    create?: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUserInput
    upsert?: SupervisorUpsertWithoutUserInput
    disconnect?: SupervisorWhereInput | boolean
    delete?: SupervisorWhereInput | boolean
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutUserInput, SupervisorUpdateWithoutUserInput>, SupervisorUncheckedUpdateWithoutUserInput>
  }

  export type PatioUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatioCreateOrConnectWithoutUserInput
    upsert?: PatioUpsertWithoutUserInput
    disconnect?: PatioWhereInput | boolean
    delete?: PatioWhereInput | boolean
    connect?: PatioWhereUniqueInput
    update?: XOR<XOR<PatioUpdateToOneWithWhereWithoutUserInput, PatioUpdateWithoutUserInput>, PatioUncheckedUpdateWithoutUserInput>
  }

  export type CoordinadorUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinadorCreateOrConnectWithoutUserInput
    upsert?: CoordinadorUpsertWithoutUserInput
    disconnect?: CoordinadorWhereInput | boolean
    delete?: CoordinadorWhereInput | boolean
    connect?: CoordinadorWhereUniqueInput
    update?: XOR<XOR<CoordinadorUpdateToOneWithWhereWithoutUserInput, CoordinadorUpdateWithoutUserInput>, CoordinadorUncheckedUpdateWithoutUserInput>
  }

  export type DeviceTokenUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput> | DeviceTokenCreateWithoutUserRoleInput[] | DeviceTokenUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserRoleInput | DeviceTokenCreateOrConnectWithoutUserRoleInput[]
    upsert?: DeviceTokenUpsertWithWhereUniqueWithoutUserRoleInput | DeviceTokenUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: DeviceTokenCreateManyUserRoleInputEnvelope
    set?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    disconnect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    delete?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    update?: DeviceTokenUpdateWithWhereUniqueWithoutUserRoleInput | DeviceTokenUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: DeviceTokenUpdateManyWithWhereWithoutUserRoleInput | DeviceTokenUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OperadorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutUserInput
    upsert?: OperadorUpsertWithoutUserInput
    disconnect?: OperadorWhereInput | boolean
    delete?: OperadorWhereInput | boolean
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutUserInput, OperadorUpdateWithoutUserInput>, OperadorUncheckedUpdateWithoutUserInput>
  }

  export type SupervisorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUserInput
    upsert?: SupervisorUpsertWithoutUserInput
    disconnect?: SupervisorWhereInput | boolean
    delete?: SupervisorWhereInput | boolean
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutUserInput, SupervisorUpdateWithoutUserInput>, SupervisorUncheckedUpdateWithoutUserInput>
  }

  export type PatioUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatioCreateOrConnectWithoutUserInput
    upsert?: PatioUpsertWithoutUserInput
    disconnect?: PatioWhereInput | boolean
    delete?: PatioWhereInput | boolean
    connect?: PatioWhereUniqueInput
    update?: XOR<XOR<PatioUpdateToOneWithWhereWithoutUserInput, PatioUpdateWithoutUserInput>, PatioUncheckedUpdateWithoutUserInput>
  }

  export type CoordinadorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinadorCreateOrConnectWithoutUserInput
    upsert?: CoordinadorUpsertWithoutUserInput
    disconnect?: CoordinadorWhereInput | boolean
    delete?: CoordinadorWhereInput | boolean
    connect?: CoordinadorWhereUniqueInput
    update?: XOR<XOR<CoordinadorUpdateToOneWithWhereWithoutUserInput, CoordinadorUpdateWithoutUserInput>, CoordinadorUncheckedUpdateWithoutUserInput>
  }

  export type DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput> | DeviceTokenCreateWithoutUserRoleInput[] | DeviceTokenUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserRoleInput | DeviceTokenCreateOrConnectWithoutUserRoleInput[]
    upsert?: DeviceTokenUpsertWithWhereUniqueWithoutUserRoleInput | DeviceTokenUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: DeviceTokenCreateManyUserRoleInputEnvelope
    set?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    disconnect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    delete?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    update?: DeviceTokenUpdateWithWhereUniqueWithoutUserRoleInput | DeviceTokenUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: DeviceTokenUpdateManyWithWhereWithoutUserRoleInput | DeviceTokenUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
  }

  export type UserRoleCreateNestedOneWithoutOperadorInput = {
    create?: XOR<UserRoleCreateWithoutOperadorInput, UserRoleUncheckedCreateWithoutOperadorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutOperadorInput
    connect?: UserRoleWhereUniqueInput
  }

  export type BotonPanicoCreateNestedManyWithoutOperadorInput = {
    create?: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput> | BotonPanicoCreateWithoutOperadorInput[] | BotonPanicoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutOperadorInput | BotonPanicoCreateOrConnectWithoutOperadorInput[]
    createMany?: BotonPanicoCreateManyOperadorInputEnvelope
    connect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
  }

  export type RegistroSalidaUnidadCreateNestedManyWithoutOperadorInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput> | RegistroSalidaUnidadCreateWithoutOperadorInput[] | RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput | RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput[]
    createMany?: RegistroSalidaUnidadCreateManyOperadorInputEnvelope
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
  }

  export type AsignacionUnidadCreateNestedManyWithoutOperadorInput = {
    create?: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput> | AsignacionUnidadCreateWithoutOperadorInput[] | AsignacionUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutOperadorInput | AsignacionUnidadCreateOrConnectWithoutOperadorInput[]
    createMany?: AsignacionUnidadCreateManyOperadorInputEnvelope
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
  }

  export type BotonPanicoUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput> | BotonPanicoCreateWithoutOperadorInput[] | BotonPanicoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutOperadorInput | BotonPanicoCreateOrConnectWithoutOperadorInput[]
    createMany?: BotonPanicoCreateManyOperadorInputEnvelope
    connect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
  }

  export type RegistroSalidaUnidadUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput> | RegistroSalidaUnidadCreateWithoutOperadorInput[] | RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput | RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput[]
    createMany?: RegistroSalidaUnidadCreateManyOperadorInputEnvelope
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
  }

  export type AsignacionUnidadUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput> | AsignacionUnidadCreateWithoutOperadorInput[] | AsignacionUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutOperadorInput | AsignacionUnidadCreateOrConnectWithoutOperadorInput[]
    createMany?: AsignacionUnidadCreateManyOperadorInputEnvelope
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
  }

  export type UserRoleUpdateOneRequiredWithoutOperadorNestedInput = {
    create?: XOR<UserRoleCreateWithoutOperadorInput, UserRoleUncheckedCreateWithoutOperadorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutOperadorInput
    upsert?: UserRoleUpsertWithoutOperadorInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutOperadorInput, UserRoleUpdateWithoutOperadorInput>, UserRoleUncheckedUpdateWithoutOperadorInput>
  }

  export type BotonPanicoUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput> | BotonPanicoCreateWithoutOperadorInput[] | BotonPanicoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutOperadorInput | BotonPanicoCreateOrConnectWithoutOperadorInput[]
    upsert?: BotonPanicoUpsertWithWhereUniqueWithoutOperadorInput | BotonPanicoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: BotonPanicoCreateManyOperadorInputEnvelope
    set?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    disconnect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    delete?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    connect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    update?: BotonPanicoUpdateWithWhereUniqueWithoutOperadorInput | BotonPanicoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: BotonPanicoUpdateManyWithWhereWithoutOperadorInput | BotonPanicoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: BotonPanicoScalarWhereInput | BotonPanicoScalarWhereInput[]
  }

  export type RegistroSalidaUnidadUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput> | RegistroSalidaUnidadCreateWithoutOperadorInput[] | RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput | RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput[]
    upsert?: RegistroSalidaUnidadUpsertWithWhereUniqueWithoutOperadorInput | RegistroSalidaUnidadUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: RegistroSalidaUnidadCreateManyOperadorInputEnvelope
    set?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    disconnect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    delete?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    update?: RegistroSalidaUnidadUpdateWithWhereUniqueWithoutOperadorInput | RegistroSalidaUnidadUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: RegistroSalidaUnidadUpdateManyWithWhereWithoutOperadorInput | RegistroSalidaUnidadUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
  }

  export type AsignacionUnidadUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput> | AsignacionUnidadCreateWithoutOperadorInput[] | AsignacionUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutOperadorInput | AsignacionUnidadCreateOrConnectWithoutOperadorInput[]
    upsert?: AsignacionUnidadUpsertWithWhereUniqueWithoutOperadorInput | AsignacionUnidadUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: AsignacionUnidadCreateManyOperadorInputEnvelope
    set?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    disconnect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    delete?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    update?: AsignacionUnidadUpdateWithWhereUniqueWithoutOperadorInput | AsignacionUnidadUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: AsignacionUnidadUpdateManyWithWhereWithoutOperadorInput | AsignacionUnidadUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
  }

  export type BotonPanicoUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput> | BotonPanicoCreateWithoutOperadorInput[] | BotonPanicoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutOperadorInput | BotonPanicoCreateOrConnectWithoutOperadorInput[]
    upsert?: BotonPanicoUpsertWithWhereUniqueWithoutOperadorInput | BotonPanicoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: BotonPanicoCreateManyOperadorInputEnvelope
    set?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    disconnect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    delete?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    connect?: BotonPanicoWhereUniqueInput | BotonPanicoWhereUniqueInput[]
    update?: BotonPanicoUpdateWithWhereUniqueWithoutOperadorInput | BotonPanicoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: BotonPanicoUpdateManyWithWhereWithoutOperadorInput | BotonPanicoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: BotonPanicoScalarWhereInput | BotonPanicoScalarWhereInput[]
  }

  export type RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput> | RegistroSalidaUnidadCreateWithoutOperadorInput[] | RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput | RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput[]
    upsert?: RegistroSalidaUnidadUpsertWithWhereUniqueWithoutOperadorInput | RegistroSalidaUnidadUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: RegistroSalidaUnidadCreateManyOperadorInputEnvelope
    set?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    disconnect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    delete?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    update?: RegistroSalidaUnidadUpdateWithWhereUniqueWithoutOperadorInput | RegistroSalidaUnidadUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: RegistroSalidaUnidadUpdateManyWithWhereWithoutOperadorInput | RegistroSalidaUnidadUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
  }

  export type AsignacionUnidadUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput> | AsignacionUnidadCreateWithoutOperadorInput[] | AsignacionUnidadUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutOperadorInput | AsignacionUnidadCreateOrConnectWithoutOperadorInput[]
    upsert?: AsignacionUnidadUpsertWithWhereUniqueWithoutOperadorInput | AsignacionUnidadUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: AsignacionUnidadCreateManyOperadorInputEnvelope
    set?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    disconnect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    delete?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    update?: AsignacionUnidadUpdateWithWhereUniqueWithoutOperadorInput | AsignacionUnidadUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: AsignacionUnidadUpdateManyWithWhereWithoutOperadorInput | AsignacionUnidadUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
  }

  export type OperadorCreateNestedOneWithoutBotonesPanicoInput = {
    create?: XOR<OperadorCreateWithoutBotonesPanicoInput, OperadorUncheckedCreateWithoutBotonesPanicoInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutBotonesPanicoInput
    connect?: OperadorWhereUniqueInput
  }

  export type IncidenteAsignadoCreateNestedManyWithoutPanicInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput> | IncidenteAsignadoCreateWithoutPanicInput[] | IncidenteAsignadoUncheckedCreateWithoutPanicInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutPanicInput | IncidenteAsignadoCreateOrConnectWithoutPanicInput[]
    createMany?: IncidenteAsignadoCreateManyPanicInputEnvelope
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
  }

  export type IncidenteAsignadoUncheckedCreateNestedManyWithoutPanicInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput> | IncidenteAsignadoCreateWithoutPanicInput[] | IncidenteAsignadoUncheckedCreateWithoutPanicInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutPanicInput | IncidenteAsignadoCreateOrConnectWithoutPanicInput[]
    createMany?: IncidenteAsignadoCreateManyPanicInputEnvelope
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OperadorUpdateOneRequiredWithoutBotonesPanicoNestedInput = {
    create?: XOR<OperadorCreateWithoutBotonesPanicoInput, OperadorUncheckedCreateWithoutBotonesPanicoInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutBotonesPanicoInput
    upsert?: OperadorUpsertWithoutBotonesPanicoInput
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutBotonesPanicoInput, OperadorUpdateWithoutBotonesPanicoInput>, OperadorUncheckedUpdateWithoutBotonesPanicoInput>
  }

  export type IncidenteAsignadoUpdateManyWithoutPanicNestedInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput> | IncidenteAsignadoCreateWithoutPanicInput[] | IncidenteAsignadoUncheckedCreateWithoutPanicInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutPanicInput | IncidenteAsignadoCreateOrConnectWithoutPanicInput[]
    upsert?: IncidenteAsignadoUpsertWithWhereUniqueWithoutPanicInput | IncidenteAsignadoUpsertWithWhereUniqueWithoutPanicInput[]
    createMany?: IncidenteAsignadoCreateManyPanicInputEnvelope
    set?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    disconnect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    delete?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    update?: IncidenteAsignadoUpdateWithWhereUniqueWithoutPanicInput | IncidenteAsignadoUpdateWithWhereUniqueWithoutPanicInput[]
    updateMany?: IncidenteAsignadoUpdateManyWithWhereWithoutPanicInput | IncidenteAsignadoUpdateManyWithWhereWithoutPanicInput[]
    deleteMany?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
  }

  export type IncidenteAsignadoUncheckedUpdateManyWithoutPanicNestedInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput> | IncidenteAsignadoCreateWithoutPanicInput[] | IncidenteAsignadoUncheckedCreateWithoutPanicInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutPanicInput | IncidenteAsignadoCreateOrConnectWithoutPanicInput[]
    upsert?: IncidenteAsignadoUpsertWithWhereUniqueWithoutPanicInput | IncidenteAsignadoUpsertWithWhereUniqueWithoutPanicInput[]
    createMany?: IncidenteAsignadoCreateManyPanicInputEnvelope
    set?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    disconnect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    delete?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    update?: IncidenteAsignadoUpdateWithWhereUniqueWithoutPanicInput | IncidenteAsignadoUpdateWithWhereUniqueWithoutPanicInput[]
    updateMany?: IncidenteAsignadoUpdateManyWithWhereWithoutPanicInput | IncidenteAsignadoUpdateManyWithWhereWithoutPanicInput[]
    deleteMany?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
  }

  export type UserRoleCreateNestedOneWithoutSupervisorInput = {
    create?: XOR<UserRoleCreateWithoutSupervisorInput, UserRoleUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutSupervisorInput
    connect?: UserRoleWhereUniqueInput
  }

  export type UbicacionSupervisorCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput> | UbicacionSupervisorCreateWithoutSupervisorInput[] | UbicacionSupervisorUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UbicacionSupervisorCreateOrConnectWithoutSupervisorInput | UbicacionSupervisorCreateOrConnectWithoutSupervisorInput[]
    createMany?: UbicacionSupervisorCreateManySupervisorInputEnvelope
    connect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
  }

  export type ReporteIncidenteCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput> | ReporteIncidenteCreateWithoutSupervisorInput[] | ReporteIncidenteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutSupervisorInput | ReporteIncidenteCreateOrConnectWithoutSupervisorInput[]
    createMany?: ReporteIncidenteCreateManySupervisorInputEnvelope
    connect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
  }

  export type IncidenteAsignadoCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput> | IncidenteAsignadoCreateWithoutSupervisorInput[] | IncidenteAsignadoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutSupervisorInput | IncidenteAsignadoCreateOrConnectWithoutSupervisorInput[]
    createMany?: IncidenteAsignadoCreateManySupervisorInputEnvelope
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
  }

  export type UbicacionSupervisorUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput> | UbicacionSupervisorCreateWithoutSupervisorInput[] | UbicacionSupervisorUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UbicacionSupervisorCreateOrConnectWithoutSupervisorInput | UbicacionSupervisorCreateOrConnectWithoutSupervisorInput[]
    createMany?: UbicacionSupervisorCreateManySupervisorInputEnvelope
    connect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
  }

  export type ReporteIncidenteUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput> | ReporteIncidenteCreateWithoutSupervisorInput[] | ReporteIncidenteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutSupervisorInput | ReporteIncidenteCreateOrConnectWithoutSupervisorInput[]
    createMany?: ReporteIncidenteCreateManySupervisorInputEnvelope
    connect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
  }

  export type IncidenteAsignadoUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput> | IncidenteAsignadoCreateWithoutSupervisorInput[] | IncidenteAsignadoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutSupervisorInput | IncidenteAsignadoCreateOrConnectWithoutSupervisorInput[]
    createMany?: IncidenteAsignadoCreateManySupervisorInputEnvelope
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
  }

  export type UserRoleUpdateOneRequiredWithoutSupervisorNestedInput = {
    create?: XOR<UserRoleCreateWithoutSupervisorInput, UserRoleUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutSupervisorInput
    upsert?: UserRoleUpsertWithoutSupervisorInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutSupervisorInput, UserRoleUpdateWithoutSupervisorInput>, UserRoleUncheckedUpdateWithoutSupervisorInput>
  }

  export type UbicacionSupervisorUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput> | UbicacionSupervisorCreateWithoutSupervisorInput[] | UbicacionSupervisorUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UbicacionSupervisorCreateOrConnectWithoutSupervisorInput | UbicacionSupervisorCreateOrConnectWithoutSupervisorInput[]
    upsert?: UbicacionSupervisorUpsertWithWhereUniqueWithoutSupervisorInput | UbicacionSupervisorUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: UbicacionSupervisorCreateManySupervisorInputEnvelope
    set?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    disconnect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    delete?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    connect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    update?: UbicacionSupervisorUpdateWithWhereUniqueWithoutSupervisorInput | UbicacionSupervisorUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: UbicacionSupervisorUpdateManyWithWhereWithoutSupervisorInput | UbicacionSupervisorUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: UbicacionSupervisorScalarWhereInput | UbicacionSupervisorScalarWhereInput[]
  }

  export type ReporteIncidenteUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput> | ReporteIncidenteCreateWithoutSupervisorInput[] | ReporteIncidenteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutSupervisorInput | ReporteIncidenteCreateOrConnectWithoutSupervisorInput[]
    upsert?: ReporteIncidenteUpsertWithWhereUniqueWithoutSupervisorInput | ReporteIncidenteUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ReporteIncidenteCreateManySupervisorInputEnvelope
    set?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    disconnect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    delete?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    connect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    update?: ReporteIncidenteUpdateWithWhereUniqueWithoutSupervisorInput | ReporteIncidenteUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ReporteIncidenteUpdateManyWithWhereWithoutSupervisorInput | ReporteIncidenteUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ReporteIncidenteScalarWhereInput | ReporteIncidenteScalarWhereInput[]
  }

  export type IncidenteAsignadoUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput> | IncidenteAsignadoCreateWithoutSupervisorInput[] | IncidenteAsignadoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutSupervisorInput | IncidenteAsignadoCreateOrConnectWithoutSupervisorInput[]
    upsert?: IncidenteAsignadoUpsertWithWhereUniqueWithoutSupervisorInput | IncidenteAsignadoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: IncidenteAsignadoCreateManySupervisorInputEnvelope
    set?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    disconnect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    delete?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    update?: IncidenteAsignadoUpdateWithWhereUniqueWithoutSupervisorInput | IncidenteAsignadoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: IncidenteAsignadoUpdateManyWithWhereWithoutSupervisorInput | IncidenteAsignadoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
  }

  export type UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput> | UbicacionSupervisorCreateWithoutSupervisorInput[] | UbicacionSupervisorUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UbicacionSupervisorCreateOrConnectWithoutSupervisorInput | UbicacionSupervisorCreateOrConnectWithoutSupervisorInput[]
    upsert?: UbicacionSupervisorUpsertWithWhereUniqueWithoutSupervisorInput | UbicacionSupervisorUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: UbicacionSupervisorCreateManySupervisorInputEnvelope
    set?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    disconnect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    delete?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    connect?: UbicacionSupervisorWhereUniqueInput | UbicacionSupervisorWhereUniqueInput[]
    update?: UbicacionSupervisorUpdateWithWhereUniqueWithoutSupervisorInput | UbicacionSupervisorUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: UbicacionSupervisorUpdateManyWithWhereWithoutSupervisorInput | UbicacionSupervisorUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: UbicacionSupervisorScalarWhereInput | UbicacionSupervisorScalarWhereInput[]
  }

  export type ReporteIncidenteUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput> | ReporteIncidenteCreateWithoutSupervisorInput[] | ReporteIncidenteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutSupervisorInput | ReporteIncidenteCreateOrConnectWithoutSupervisorInput[]
    upsert?: ReporteIncidenteUpsertWithWhereUniqueWithoutSupervisorInput | ReporteIncidenteUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ReporteIncidenteCreateManySupervisorInputEnvelope
    set?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    disconnect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    delete?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    connect?: ReporteIncidenteWhereUniqueInput | ReporteIncidenteWhereUniqueInput[]
    update?: ReporteIncidenteUpdateWithWhereUniqueWithoutSupervisorInput | ReporteIncidenteUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ReporteIncidenteUpdateManyWithWhereWithoutSupervisorInput | ReporteIncidenteUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ReporteIncidenteScalarWhereInput | ReporteIncidenteScalarWhereInput[]
  }

  export type IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput> | IncidenteAsignadoCreateWithoutSupervisorInput[] | IncidenteAsignadoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutSupervisorInput | IncidenteAsignadoCreateOrConnectWithoutSupervisorInput[]
    upsert?: IncidenteAsignadoUpsertWithWhereUniqueWithoutSupervisorInput | IncidenteAsignadoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: IncidenteAsignadoCreateManySupervisorInputEnvelope
    set?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    disconnect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    delete?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    connect?: IncidenteAsignadoWhereUniqueInput | IncidenteAsignadoWhereUniqueInput[]
    update?: IncidenteAsignadoUpdateWithWhereUniqueWithoutSupervisorInput | IncidenteAsignadoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: IncidenteAsignadoUpdateManyWithWhereWithoutSupervisorInput | IncidenteAsignadoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
  }

  export type SupervisorCreateNestedOneWithoutUbicacionesInput = {
    create?: XOR<SupervisorCreateWithoutUbicacionesInput, SupervisorUncheckedCreateWithoutUbicacionesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUbicacionesInput
    connect?: SupervisorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupervisorUpdateOneRequiredWithoutUbicacionesNestedInput = {
    create?: XOR<SupervisorCreateWithoutUbicacionesInput, SupervisorUncheckedCreateWithoutUbicacionesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutUbicacionesInput
    upsert?: SupervisorUpsertWithoutUbicacionesInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutUbicacionesInput, SupervisorUpdateWithoutUbicacionesInput>, SupervisorUncheckedUpdateWithoutUbicacionesInput>
  }

  export type UserRoleCreateNestedOneWithoutCoordinadorInput = {
    create?: XOR<UserRoleCreateWithoutCoordinadorInput, UserRoleUncheckedCreateWithoutCoordinadorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutCoordinadorInput
    connect?: UserRoleWhereUniqueInput
  }

  export type UserRoleUpdateOneRequiredWithoutCoordinadorNestedInput = {
    create?: XOR<UserRoleCreateWithoutCoordinadorInput, UserRoleUncheckedCreateWithoutCoordinadorInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutCoordinadorInput
    upsert?: UserRoleUpsertWithoutCoordinadorInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutCoordinadorInput, UserRoleUpdateWithoutCoordinadorInput>, UserRoleUncheckedUpdateWithoutCoordinadorInput>
  }

  export type SupervisorCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<SupervisorCreateWithoutAsignacionesInput, SupervisorUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutAsignacionesInput
    connect?: SupervisorWhereUniqueInput
  }

  export type BotonPanicoCreateNestedOneWithoutIncidenteAsignadoInput = {
    create?: XOR<BotonPanicoCreateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutIncidenteAsignadoInput
    connect?: BotonPanicoWhereUniqueInput
  }

  export type ReporteIncidenteCreateNestedOneWithoutIncidenteAsignadoInput = {
    create?: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutIncidenteAsignadoInput
    connect?: ReporteIncidenteWhereUniqueInput
  }

  export type ReporteIncidenteUncheckedCreateNestedOneWithoutIncidenteAsignadoInput = {
    create?: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutIncidenteAsignadoInput
    connect?: ReporteIncidenteWhereUniqueInput
  }

  export type SupervisorUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<SupervisorCreateWithoutAsignacionesInput, SupervisorUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutAsignacionesInput
    upsert?: SupervisorUpsertWithoutAsignacionesInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutAsignacionesInput, SupervisorUpdateWithoutAsignacionesInput>, SupervisorUncheckedUpdateWithoutAsignacionesInput>
  }

  export type BotonPanicoUpdateOneRequiredWithoutIncidenteAsignadoNestedInput = {
    create?: XOR<BotonPanicoCreateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: BotonPanicoCreateOrConnectWithoutIncidenteAsignadoInput
    upsert?: BotonPanicoUpsertWithoutIncidenteAsignadoInput
    connect?: BotonPanicoWhereUniqueInput
    update?: XOR<XOR<BotonPanicoUpdateToOneWithWhereWithoutIncidenteAsignadoInput, BotonPanicoUpdateWithoutIncidenteAsignadoInput>, BotonPanicoUncheckedUpdateWithoutIncidenteAsignadoInput>
  }

  export type ReporteIncidenteUpdateOneWithoutIncidenteAsignadoNestedInput = {
    create?: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutIncidenteAsignadoInput
    upsert?: ReporteIncidenteUpsertWithoutIncidenteAsignadoInput
    disconnect?: ReporteIncidenteWhereInput | boolean
    delete?: ReporteIncidenteWhereInput | boolean
    connect?: ReporteIncidenteWhereUniqueInput
    update?: XOR<XOR<ReporteIncidenteUpdateToOneWithWhereWithoutIncidenteAsignadoInput, ReporteIncidenteUpdateWithoutIncidenteAsignadoInput>, ReporteIncidenteUncheckedUpdateWithoutIncidenteAsignadoInput>
  }

  export type ReporteIncidenteUncheckedUpdateOneWithoutIncidenteAsignadoNestedInput = {
    create?: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutIncidenteAsignadoInput
    upsert?: ReporteIncidenteUpsertWithoutIncidenteAsignadoInput
    disconnect?: ReporteIncidenteWhereInput | boolean
    delete?: ReporteIncidenteWhereInput | boolean
    connect?: ReporteIncidenteWhereUniqueInput
    update?: XOR<XOR<ReporteIncidenteUpdateToOneWithWhereWithoutIncidenteAsignadoInput, ReporteIncidenteUpdateWithoutIncidenteAsignadoInput>, ReporteIncidenteUncheckedUpdateWithoutIncidenteAsignadoInput>
  }

  export type SupervisorCreateNestedOneWithoutReportesInput = {
    create?: XOR<SupervisorCreateWithoutReportesInput, SupervisorUncheckedCreateWithoutReportesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutReportesInput
    connect?: SupervisorWhereUniqueInput
  }

  export type IncidenteAsignadoCreateNestedOneWithoutReporteInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutReporteInput, IncidenteAsignadoUncheckedCreateWithoutReporteInput>
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutReporteInput
    connect?: IncidenteAsignadoWhereUniqueInput
  }

  export type FotoIncidenteCreateNestedManyWithoutReporteInput = {
    create?: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput> | FotoIncidenteCreateWithoutReporteInput[] | FotoIncidenteUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: FotoIncidenteCreateOrConnectWithoutReporteInput | FotoIncidenteCreateOrConnectWithoutReporteInput[]
    createMany?: FotoIncidenteCreateManyReporteInputEnvelope
    connect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
  }

  export type FotoIncidenteUncheckedCreateNestedManyWithoutReporteInput = {
    create?: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput> | FotoIncidenteCreateWithoutReporteInput[] | FotoIncidenteUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: FotoIncidenteCreateOrConnectWithoutReporteInput | FotoIncidenteCreateOrConnectWithoutReporteInput[]
    createMany?: FotoIncidenteCreateManyReporteInputEnvelope
    connect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
  }

  export type SupervisorUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<SupervisorCreateWithoutReportesInput, SupervisorUncheckedCreateWithoutReportesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutReportesInput
    upsert?: SupervisorUpsertWithoutReportesInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutReportesInput, SupervisorUpdateWithoutReportesInput>, SupervisorUncheckedUpdateWithoutReportesInput>
  }

  export type IncidenteAsignadoUpdateOneRequiredWithoutReporteNestedInput = {
    create?: XOR<IncidenteAsignadoCreateWithoutReporteInput, IncidenteAsignadoUncheckedCreateWithoutReporteInput>
    connectOrCreate?: IncidenteAsignadoCreateOrConnectWithoutReporteInput
    upsert?: IncidenteAsignadoUpsertWithoutReporteInput
    connect?: IncidenteAsignadoWhereUniqueInput
    update?: XOR<XOR<IncidenteAsignadoUpdateToOneWithWhereWithoutReporteInput, IncidenteAsignadoUpdateWithoutReporteInput>, IncidenteAsignadoUncheckedUpdateWithoutReporteInput>
  }

  export type FotoIncidenteUpdateManyWithoutReporteNestedInput = {
    create?: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput> | FotoIncidenteCreateWithoutReporteInput[] | FotoIncidenteUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: FotoIncidenteCreateOrConnectWithoutReporteInput | FotoIncidenteCreateOrConnectWithoutReporteInput[]
    upsert?: FotoIncidenteUpsertWithWhereUniqueWithoutReporteInput | FotoIncidenteUpsertWithWhereUniqueWithoutReporteInput[]
    createMany?: FotoIncidenteCreateManyReporteInputEnvelope
    set?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    disconnect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    delete?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    connect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    update?: FotoIncidenteUpdateWithWhereUniqueWithoutReporteInput | FotoIncidenteUpdateWithWhereUniqueWithoutReporteInput[]
    updateMany?: FotoIncidenteUpdateManyWithWhereWithoutReporteInput | FotoIncidenteUpdateManyWithWhereWithoutReporteInput[]
    deleteMany?: FotoIncidenteScalarWhereInput | FotoIncidenteScalarWhereInput[]
  }

  export type FotoIncidenteUncheckedUpdateManyWithoutReporteNestedInput = {
    create?: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput> | FotoIncidenteCreateWithoutReporteInput[] | FotoIncidenteUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: FotoIncidenteCreateOrConnectWithoutReporteInput | FotoIncidenteCreateOrConnectWithoutReporteInput[]
    upsert?: FotoIncidenteUpsertWithWhereUniqueWithoutReporteInput | FotoIncidenteUpsertWithWhereUniqueWithoutReporteInput[]
    createMany?: FotoIncidenteCreateManyReporteInputEnvelope
    set?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    disconnect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    delete?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    connect?: FotoIncidenteWhereUniqueInput | FotoIncidenteWhereUniqueInput[]
    update?: FotoIncidenteUpdateWithWhereUniqueWithoutReporteInput | FotoIncidenteUpdateWithWhereUniqueWithoutReporteInput[]
    updateMany?: FotoIncidenteUpdateManyWithWhereWithoutReporteInput | FotoIncidenteUpdateManyWithWhereWithoutReporteInput[]
    deleteMany?: FotoIncidenteScalarWhereInput | FotoIncidenteScalarWhereInput[]
  }

  export type ReporteIncidenteCreateNestedOneWithoutFotosInput = {
    create?: XOR<ReporteIncidenteCreateWithoutFotosInput, ReporteIncidenteUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutFotosInput
    connect?: ReporteIncidenteWhereUniqueInput
  }

  export type ReporteIncidenteUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<ReporteIncidenteCreateWithoutFotosInput, ReporteIncidenteUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ReporteIncidenteCreateOrConnectWithoutFotosInput
    upsert?: ReporteIncidenteUpsertWithoutFotosInput
    connect?: ReporteIncidenteWhereUniqueInput
    update?: XOR<XOR<ReporteIncidenteUpdateToOneWithWhereWithoutFotosInput, ReporteIncidenteUpdateWithoutFotosInput>, ReporteIncidenteUncheckedUpdateWithoutFotosInput>
  }

  export type UserRoleCreateNestedOneWithoutPatioInput = {
    create?: XOR<UserRoleCreateWithoutPatioInput, UserRoleUncheckedCreateWithoutPatioInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutPatioInput
    connect?: UserRoleWhereUniqueInput
  }

  export type RegistroSalidaUnidadCreateNestedManyWithoutPatioInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput> | RegistroSalidaUnidadCreateWithoutPatioInput[] | RegistroSalidaUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutPatioInput | RegistroSalidaUnidadCreateOrConnectWithoutPatioInput[]
    createMany?: RegistroSalidaUnidadCreateManyPatioInputEnvelope
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
  }

  export type AsignacionUnidadCreateNestedManyWithoutPatioInput = {
    create?: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput> | AsignacionUnidadCreateWithoutPatioInput[] | AsignacionUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutPatioInput | AsignacionUnidadCreateOrConnectWithoutPatioInput[]
    createMany?: AsignacionUnidadCreateManyPatioInputEnvelope
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
  }

  export type RegistroSalidaUnidadUncheckedCreateNestedManyWithoutPatioInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput> | RegistroSalidaUnidadCreateWithoutPatioInput[] | RegistroSalidaUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutPatioInput | RegistroSalidaUnidadCreateOrConnectWithoutPatioInput[]
    createMany?: RegistroSalidaUnidadCreateManyPatioInputEnvelope
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
  }

  export type AsignacionUnidadUncheckedCreateNestedManyWithoutPatioInput = {
    create?: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput> | AsignacionUnidadCreateWithoutPatioInput[] | AsignacionUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutPatioInput | AsignacionUnidadCreateOrConnectWithoutPatioInput[]
    createMany?: AsignacionUnidadCreateManyPatioInputEnvelope
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
  }

  export type UserRoleUpdateOneRequiredWithoutPatioNestedInput = {
    create?: XOR<UserRoleCreateWithoutPatioInput, UserRoleUncheckedCreateWithoutPatioInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutPatioInput
    upsert?: UserRoleUpsertWithoutPatioInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutPatioInput, UserRoleUpdateWithoutPatioInput>, UserRoleUncheckedUpdateWithoutPatioInput>
  }

  export type RegistroSalidaUnidadUpdateManyWithoutPatioNestedInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput> | RegistroSalidaUnidadCreateWithoutPatioInput[] | RegistroSalidaUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutPatioInput | RegistroSalidaUnidadCreateOrConnectWithoutPatioInput[]
    upsert?: RegistroSalidaUnidadUpsertWithWhereUniqueWithoutPatioInput | RegistroSalidaUnidadUpsertWithWhereUniqueWithoutPatioInput[]
    createMany?: RegistroSalidaUnidadCreateManyPatioInputEnvelope
    set?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    disconnect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    delete?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    update?: RegistroSalidaUnidadUpdateWithWhereUniqueWithoutPatioInput | RegistroSalidaUnidadUpdateWithWhereUniqueWithoutPatioInput[]
    updateMany?: RegistroSalidaUnidadUpdateManyWithWhereWithoutPatioInput | RegistroSalidaUnidadUpdateManyWithWhereWithoutPatioInput[]
    deleteMany?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
  }

  export type AsignacionUnidadUpdateManyWithoutPatioNestedInput = {
    create?: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput> | AsignacionUnidadCreateWithoutPatioInput[] | AsignacionUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutPatioInput | AsignacionUnidadCreateOrConnectWithoutPatioInput[]
    upsert?: AsignacionUnidadUpsertWithWhereUniqueWithoutPatioInput | AsignacionUnidadUpsertWithWhereUniqueWithoutPatioInput[]
    createMany?: AsignacionUnidadCreateManyPatioInputEnvelope
    set?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    disconnect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    delete?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    update?: AsignacionUnidadUpdateWithWhereUniqueWithoutPatioInput | AsignacionUnidadUpdateWithWhereUniqueWithoutPatioInput[]
    updateMany?: AsignacionUnidadUpdateManyWithWhereWithoutPatioInput | AsignacionUnidadUpdateManyWithWhereWithoutPatioInput[]
    deleteMany?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
  }

  export type RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioNestedInput = {
    create?: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput> | RegistroSalidaUnidadCreateWithoutPatioInput[] | RegistroSalidaUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: RegistroSalidaUnidadCreateOrConnectWithoutPatioInput | RegistroSalidaUnidadCreateOrConnectWithoutPatioInput[]
    upsert?: RegistroSalidaUnidadUpsertWithWhereUniqueWithoutPatioInput | RegistroSalidaUnidadUpsertWithWhereUniqueWithoutPatioInput[]
    createMany?: RegistroSalidaUnidadCreateManyPatioInputEnvelope
    set?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    disconnect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    delete?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    connect?: RegistroSalidaUnidadWhereUniqueInput | RegistroSalidaUnidadWhereUniqueInput[]
    update?: RegistroSalidaUnidadUpdateWithWhereUniqueWithoutPatioInput | RegistroSalidaUnidadUpdateWithWhereUniqueWithoutPatioInput[]
    updateMany?: RegistroSalidaUnidadUpdateManyWithWhereWithoutPatioInput | RegistroSalidaUnidadUpdateManyWithWhereWithoutPatioInput[]
    deleteMany?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
  }

  export type AsignacionUnidadUncheckedUpdateManyWithoutPatioNestedInput = {
    create?: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput> | AsignacionUnidadCreateWithoutPatioInput[] | AsignacionUnidadUncheckedCreateWithoutPatioInput[]
    connectOrCreate?: AsignacionUnidadCreateOrConnectWithoutPatioInput | AsignacionUnidadCreateOrConnectWithoutPatioInput[]
    upsert?: AsignacionUnidadUpsertWithWhereUniqueWithoutPatioInput | AsignacionUnidadUpsertWithWhereUniqueWithoutPatioInput[]
    createMany?: AsignacionUnidadCreateManyPatioInputEnvelope
    set?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    disconnect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    delete?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    connect?: AsignacionUnidadWhereUniqueInput | AsignacionUnidadWhereUniqueInput[]
    update?: AsignacionUnidadUpdateWithWhereUniqueWithoutPatioInput | AsignacionUnidadUpdateWithWhereUniqueWithoutPatioInput[]
    updateMany?: AsignacionUnidadUpdateManyWithWhereWithoutPatioInput | AsignacionUnidadUpdateManyWithWhereWithoutPatioInput[]
    deleteMany?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
  }

  export type PatioCreateNestedOneWithoutRegistrosSalidaInput = {
    create?: XOR<PatioCreateWithoutRegistrosSalidaInput, PatioUncheckedCreateWithoutRegistrosSalidaInput>
    connectOrCreate?: PatioCreateOrConnectWithoutRegistrosSalidaInput
    connect?: PatioWhereUniqueInput
  }

  export type OperadorCreateNestedOneWithoutRegistroSalidaUnidadInput = {
    create?: XOR<OperadorCreateWithoutRegistroSalidaUnidadInput, OperadorUncheckedCreateWithoutRegistroSalidaUnidadInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutRegistroSalidaUnidadInput
    connect?: OperadorWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatioUpdateOneRequiredWithoutRegistrosSalidaNestedInput = {
    create?: XOR<PatioCreateWithoutRegistrosSalidaInput, PatioUncheckedCreateWithoutRegistrosSalidaInput>
    connectOrCreate?: PatioCreateOrConnectWithoutRegistrosSalidaInput
    upsert?: PatioUpsertWithoutRegistrosSalidaInput
    connect?: PatioWhereUniqueInput
    update?: XOR<XOR<PatioUpdateToOneWithWhereWithoutRegistrosSalidaInput, PatioUpdateWithoutRegistrosSalidaInput>, PatioUncheckedUpdateWithoutRegistrosSalidaInput>
  }

  export type OperadorUpdateOneRequiredWithoutRegistroSalidaUnidadNestedInput = {
    create?: XOR<OperadorCreateWithoutRegistroSalidaUnidadInput, OperadorUncheckedCreateWithoutRegistroSalidaUnidadInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutRegistroSalidaUnidadInput
    upsert?: OperadorUpsertWithoutRegistroSalidaUnidadInput
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutRegistroSalidaUnidadInput, OperadorUpdateWithoutRegistroSalidaUnidadInput>, OperadorUncheckedUpdateWithoutRegistroSalidaUnidadInput>
  }

  export type PatioCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<PatioCreateWithoutAsignacionesInput, PatioUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: PatioCreateOrConnectWithoutAsignacionesInput
    connect?: PatioWhereUniqueInput
  }

  export type OperadorCreateNestedOneWithoutAsignacionUnidadInput = {
    create?: XOR<OperadorCreateWithoutAsignacionUnidadInput, OperadorUncheckedCreateWithoutAsignacionUnidadInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutAsignacionUnidadInput
    connect?: OperadorWhereUniqueInput
  }

  export type PatioUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<PatioCreateWithoutAsignacionesInput, PatioUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: PatioCreateOrConnectWithoutAsignacionesInput
    upsert?: PatioUpsertWithoutAsignacionesInput
    connect?: PatioWhereUniqueInput
    update?: XOR<XOR<PatioUpdateToOneWithWhereWithoutAsignacionesInput, PatioUpdateWithoutAsignacionesInput>, PatioUncheckedUpdateWithoutAsignacionesInput>
  }

  export type OperadorUpdateOneRequiredWithoutAsignacionUnidadNestedInput = {
    create?: XOR<OperadorCreateWithoutAsignacionUnidadInput, OperadorUncheckedCreateWithoutAsignacionUnidadInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutAsignacionUnidadInput
    upsert?: OperadorUpsertWithoutAsignacionUnidadInput
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutAsignacionUnidadInput, OperadorUpdateWithoutAsignacionUnidadInput>, OperadorUncheckedUpdateWithoutAsignacionUnidadInput>
  }

  export type UserRoleCreateNestedOneWithoutDeviceTokenInput = {
    create?: XOR<UserRoleCreateWithoutDeviceTokenInput, UserRoleUncheckedCreateWithoutDeviceTokenInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutDeviceTokenInput
    connect?: UserRoleWhereUniqueInput
  }

  export type UserRoleUpdateOneRequiredWithoutDeviceTokenNestedInput = {
    create?: XOR<UserRoleCreateWithoutDeviceTokenInput, UserRoleUncheckedCreateWithoutDeviceTokenInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutDeviceTokenInput
    upsert?: UserRoleUpsertWithoutDeviceTokenInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutDeviceTokenInput, UserRoleUpdateWithoutDeviceTokenInput>, UserRoleUncheckedUpdateWithoutDeviceTokenInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OperadorCreateWithoutUserInput = {
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    botonesPanico?: BotonPanicoCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateWithoutUserInput = {
    id?: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    botonesPanico?: BotonPanicoUncheckedCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorCreateOrConnectWithoutUserInput = {
    where: OperadorWhereUniqueInput
    create: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
  }

  export type SupervisorCreateWithoutUserInput = {
    ubicaciones?: UbicacionSupervisorCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutUserInput = {
    id?: number
    ubicaciones?: UbicacionSupervisorUncheckedCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteUncheckedCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutUserInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
  }

  export type PatioCreateWithoutUserInput = {
    registrosSalida?: RegistroSalidaUnidadCreateNestedManyWithoutPatioInput
    asignaciones?: AsignacionUnidadCreateNestedManyWithoutPatioInput
  }

  export type PatioUncheckedCreateWithoutUserInput = {
    id?: number
    registrosSalida?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutPatioInput
    asignaciones?: AsignacionUnidadUncheckedCreateNestedManyWithoutPatioInput
  }

  export type PatioCreateOrConnectWithoutUserInput = {
    where: PatioWhereUniqueInput
    create: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
  }

  export type CoordinadorCreateWithoutUserInput = {

  }

  export type CoordinadorUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type CoordinadorCreateOrConnectWithoutUserInput = {
    where: CoordinadorWhereUniqueInput
    create: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
  }

  export type DeviceTokenCreateWithoutUserRoleInput = {
    token: string
    createdAt?: Date | string
  }

  export type DeviceTokenUncheckedCreateWithoutUserRoleInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type DeviceTokenCreateOrConnectWithoutUserRoleInput = {
    where: DeviceTokenWhereUniqueInput
    create: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput>
  }

  export type DeviceTokenCreateManyUserRoleInputEnvelope = {
    data: DeviceTokenCreateManyUserRoleInput | DeviceTokenCreateManyUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type OperadorUpsertWithoutUserInput = {
    update: XOR<OperadorUpdateWithoutUserInput, OperadorUncheckedUpdateWithoutUserInput>
    create: XOR<OperadorCreateWithoutUserInput, OperadorUncheckedCreateWithoutUserInput>
    where?: OperadorWhereInput
  }

  export type OperadorUpdateToOneWithWhereWithoutUserInput = {
    where?: OperadorWhereInput
    data: XOR<OperadorUpdateWithoutUserInput, OperadorUncheckedUpdateWithoutUserInput>
  }

  export type OperadorUpdateWithoutUserInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    botonesPanico?: BotonPanicoUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    botonesPanico?: BotonPanicoUncheckedUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type SupervisorUpsertWithoutUserInput = {
    update: XOR<SupervisorUpdateWithoutUserInput, SupervisorUncheckedUpdateWithoutUserInput>
    create: XOR<SupervisorCreateWithoutUserInput, SupervisorUncheckedCreateWithoutUserInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutUserInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutUserInput, SupervisorUncheckedUpdateWithoutUserInput>
  }

  export type SupervisorUpdateWithoutUserInput = {
    ubicaciones?: UbicacionSupervisorUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ubicaciones?: UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUncheckedUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type PatioUpsertWithoutUserInput = {
    update: XOR<PatioUpdateWithoutUserInput, PatioUncheckedUpdateWithoutUserInput>
    create: XOR<PatioCreateWithoutUserInput, PatioUncheckedCreateWithoutUserInput>
    where?: PatioWhereInput
  }

  export type PatioUpdateToOneWithWhereWithoutUserInput = {
    where?: PatioWhereInput
    data: XOR<PatioUpdateWithoutUserInput, PatioUncheckedUpdateWithoutUserInput>
  }

  export type PatioUpdateWithoutUserInput = {
    registrosSalida?: RegistroSalidaUnidadUpdateManyWithoutPatioNestedInput
    asignaciones?: AsignacionUnidadUpdateManyWithoutPatioNestedInput
  }

  export type PatioUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrosSalida?: RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioNestedInput
    asignaciones?: AsignacionUnidadUncheckedUpdateManyWithoutPatioNestedInput
  }

  export type CoordinadorUpsertWithoutUserInput = {
    update: XOR<CoordinadorUpdateWithoutUserInput, CoordinadorUncheckedUpdateWithoutUserInput>
    create: XOR<CoordinadorCreateWithoutUserInput, CoordinadorUncheckedCreateWithoutUserInput>
    where?: CoordinadorWhereInput
  }

  export type CoordinadorUpdateToOneWithWhereWithoutUserInput = {
    where?: CoordinadorWhereInput
    data: XOR<CoordinadorUpdateWithoutUserInput, CoordinadorUncheckedUpdateWithoutUserInput>
  }

  export type CoordinadorUpdateWithoutUserInput = {

  }

  export type CoordinadorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTokenUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: DeviceTokenWhereUniqueInput
    update: XOR<DeviceTokenUpdateWithoutUserRoleInput, DeviceTokenUncheckedUpdateWithoutUserRoleInput>
    create: XOR<DeviceTokenCreateWithoutUserRoleInput, DeviceTokenUncheckedCreateWithoutUserRoleInput>
  }

  export type DeviceTokenUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: DeviceTokenWhereUniqueInput
    data: XOR<DeviceTokenUpdateWithoutUserRoleInput, DeviceTokenUncheckedUpdateWithoutUserRoleInput>
  }

  export type DeviceTokenUpdateManyWithWhereWithoutUserRoleInput = {
    where: DeviceTokenScalarWhereInput
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type DeviceTokenScalarWhereInput = {
    AND?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
    OR?: DeviceTokenScalarWhereInput[]
    NOT?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
    id?: IntFilter<"DeviceToken"> | number
    token?: StringFilter<"DeviceToken"> | string
    userRoleId?: IntFilter<"DeviceToken"> | number
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
  }

  export type UserRoleCreateWithoutOperadorInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    supervisor?: SupervisorCreateNestedOneWithoutUserInput
    patio?: PatioCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutOperadorInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUserInput
    patio?: PatioUncheckedCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorUncheckedCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleCreateOrConnectWithoutOperadorInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutOperadorInput, UserRoleUncheckedCreateWithoutOperadorInput>
  }

  export type BotonPanicoCreateWithoutOperadorInput = {
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
    IncidenteAsignado?: IncidenteAsignadoCreateNestedManyWithoutPanicInput
  }

  export type BotonPanicoUncheckedCreateWithoutOperadorInput = {
    id?: number
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
    IncidenteAsignado?: IncidenteAsignadoUncheckedCreateNestedManyWithoutPanicInput
  }

  export type BotonPanicoCreateOrConnectWithoutOperadorInput = {
    where: BotonPanicoWhereUniqueInput
    create: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput>
  }

  export type BotonPanicoCreateManyOperadorInputEnvelope = {
    data: BotonPanicoCreateManyOperadorInput | BotonPanicoCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type RegistroSalidaUnidadCreateWithoutOperadorInput = {
    unidad: string
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
    patio: PatioCreateNestedOneWithoutRegistrosSalidaInput
  }

  export type RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput = {
    id?: number
    patioId: number
    unidad: string
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type RegistroSalidaUnidadCreateOrConnectWithoutOperadorInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    create: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput>
  }

  export type RegistroSalidaUnidadCreateManyOperadorInputEnvelope = {
    data: RegistroSalidaUnidadCreateManyOperadorInput | RegistroSalidaUnidadCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type AsignacionUnidadCreateWithoutOperadorInput = {
    unidad: string
    ruta: string
    fecha?: Date | string
    patio: PatioCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionUnidadUncheckedCreateWithoutOperadorInput = {
    id?: number
    patioId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type AsignacionUnidadCreateOrConnectWithoutOperadorInput = {
    where: AsignacionUnidadWhereUniqueInput
    create: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput>
  }

  export type AsignacionUnidadCreateManyOperadorInputEnvelope = {
    data: AsignacionUnidadCreateManyOperadorInput | AsignacionUnidadCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithoutOperadorInput = {
    update: XOR<UserRoleUpdateWithoutOperadorInput, UserRoleUncheckedUpdateWithoutOperadorInput>
    create: XOR<UserRoleCreateWithoutOperadorInput, UserRoleUncheckedCreateWithoutOperadorInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutOperadorInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutOperadorInput, UserRoleUncheckedUpdateWithoutOperadorInput>
  }

  export type UserRoleUpdateWithoutOperadorInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor?: SupervisorUpdateOneWithoutUserNestedInput
    patio?: PatioUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor?: SupervisorUncheckedUpdateOneWithoutUserNestedInput
    patio?: PatioUncheckedUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUncheckedUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type BotonPanicoUpsertWithWhereUniqueWithoutOperadorInput = {
    where: BotonPanicoWhereUniqueInput
    update: XOR<BotonPanicoUpdateWithoutOperadorInput, BotonPanicoUncheckedUpdateWithoutOperadorInput>
    create: XOR<BotonPanicoCreateWithoutOperadorInput, BotonPanicoUncheckedCreateWithoutOperadorInput>
  }

  export type BotonPanicoUpdateWithWhereUniqueWithoutOperadorInput = {
    where: BotonPanicoWhereUniqueInput
    data: XOR<BotonPanicoUpdateWithoutOperadorInput, BotonPanicoUncheckedUpdateWithoutOperadorInput>
  }

  export type BotonPanicoUpdateManyWithWhereWithoutOperadorInput = {
    where: BotonPanicoScalarWhereInput
    data: XOR<BotonPanicoUpdateManyMutationInput, BotonPanicoUncheckedUpdateManyWithoutOperadorInput>
  }

  export type BotonPanicoScalarWhereInput = {
    AND?: BotonPanicoScalarWhereInput | BotonPanicoScalarWhereInput[]
    OR?: BotonPanicoScalarWhereInput[]
    NOT?: BotonPanicoScalarWhereInput | BotonPanicoScalarWhereInput[]
    id?: IntFilter<"BotonPanico"> | number
    operadorId?: IntFilter<"BotonPanico"> | number
    timestamp?: DateTimeFilter<"BotonPanico"> | Date | string
    motivo?: StringNullableFilter<"BotonPanico"> | string | null
    atendido?: BoolFilter<"BotonPanico"> | boolean
    latitud?: FloatNullableFilter<"BotonPanico"> | number | null
    longitud?: FloatNullableFilter<"BotonPanico"> | number | null
  }

  export type RegistroSalidaUnidadUpsertWithWhereUniqueWithoutOperadorInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    update: XOR<RegistroSalidaUnidadUpdateWithoutOperadorInput, RegistroSalidaUnidadUncheckedUpdateWithoutOperadorInput>
    create: XOR<RegistroSalidaUnidadCreateWithoutOperadorInput, RegistroSalidaUnidadUncheckedCreateWithoutOperadorInput>
  }

  export type RegistroSalidaUnidadUpdateWithWhereUniqueWithoutOperadorInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    data: XOR<RegistroSalidaUnidadUpdateWithoutOperadorInput, RegistroSalidaUnidadUncheckedUpdateWithoutOperadorInput>
  }

  export type RegistroSalidaUnidadUpdateManyWithWhereWithoutOperadorInput = {
    where: RegistroSalidaUnidadScalarWhereInput
    data: XOR<RegistroSalidaUnidadUpdateManyMutationInput, RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorInput>
  }

  export type RegistroSalidaUnidadScalarWhereInput = {
    AND?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
    OR?: RegistroSalidaUnidadScalarWhereInput[]
    NOT?: RegistroSalidaUnidadScalarWhereInput | RegistroSalidaUnidadScalarWhereInput[]
    id?: IntFilter<"RegistroSalidaUnidad"> | number
    patioId?: IntFilter<"RegistroSalidaUnidad"> | number
    unidad?: StringFilter<"RegistroSalidaUnidad"> | string
    operadorId?: IntFilter<"RegistroSalidaUnidad"> | number
    fechaSalida?: DateTimeFilter<"RegistroSalidaUnidad"> | Date | string
    horaInicio?: StringFilter<"RegistroSalidaUnidad"> | string
    vueltas?: IntFilter<"RegistroSalidaUnidad"> | number
    kmInicial?: IntFilter<"RegistroSalidaUnidad"> | number
    kmFinal?: IntNullableFilter<"RegistroSalidaUnidad"> | number | null
    condiciones?: StringFilter<"RegistroSalidaUnidad"> | string
  }

  export type AsignacionUnidadUpsertWithWhereUniqueWithoutOperadorInput = {
    where: AsignacionUnidadWhereUniqueInput
    update: XOR<AsignacionUnidadUpdateWithoutOperadorInput, AsignacionUnidadUncheckedUpdateWithoutOperadorInput>
    create: XOR<AsignacionUnidadCreateWithoutOperadorInput, AsignacionUnidadUncheckedCreateWithoutOperadorInput>
  }

  export type AsignacionUnidadUpdateWithWhereUniqueWithoutOperadorInput = {
    where: AsignacionUnidadWhereUniqueInput
    data: XOR<AsignacionUnidadUpdateWithoutOperadorInput, AsignacionUnidadUncheckedUpdateWithoutOperadorInput>
  }

  export type AsignacionUnidadUpdateManyWithWhereWithoutOperadorInput = {
    where: AsignacionUnidadScalarWhereInput
    data: XOR<AsignacionUnidadUpdateManyMutationInput, AsignacionUnidadUncheckedUpdateManyWithoutOperadorInput>
  }

  export type AsignacionUnidadScalarWhereInput = {
    AND?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
    OR?: AsignacionUnidadScalarWhereInput[]
    NOT?: AsignacionUnidadScalarWhereInput | AsignacionUnidadScalarWhereInput[]
    id?: IntFilter<"AsignacionUnidad"> | number
    patioId?: IntFilter<"AsignacionUnidad"> | number
    operadorId?: IntFilter<"AsignacionUnidad"> | number
    unidad?: StringFilter<"AsignacionUnidad"> | string
    ruta?: StringFilter<"AsignacionUnidad"> | string
    fecha?: DateTimeFilter<"AsignacionUnidad"> | Date | string
  }

  export type OperadorCreateWithoutBotonesPanicoInput = {
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    user: UserRoleCreateNestedOneWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateWithoutBotonesPanicoInput = {
    id?: number
    userRoleId: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorCreateOrConnectWithoutBotonesPanicoInput = {
    where: OperadorWhereUniqueInput
    create: XOR<OperadorCreateWithoutBotonesPanicoInput, OperadorUncheckedCreateWithoutBotonesPanicoInput>
  }

  export type IncidenteAsignadoCreateWithoutPanicInput = {
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
    supervisor: SupervisorCreateNestedOneWithoutAsignacionesInput
    reporte?: ReporteIncidenteCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoUncheckedCreateWithoutPanicInput = {
    id?: number
    supervisorId: number
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
    reporte?: ReporteIncidenteUncheckedCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoCreateOrConnectWithoutPanicInput = {
    where: IncidenteAsignadoWhereUniqueInput
    create: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput>
  }

  export type IncidenteAsignadoCreateManyPanicInputEnvelope = {
    data: IncidenteAsignadoCreateManyPanicInput | IncidenteAsignadoCreateManyPanicInput[]
    skipDuplicates?: boolean
  }

  export type OperadorUpsertWithoutBotonesPanicoInput = {
    update: XOR<OperadorUpdateWithoutBotonesPanicoInput, OperadorUncheckedUpdateWithoutBotonesPanicoInput>
    create: XOR<OperadorCreateWithoutBotonesPanicoInput, OperadorUncheckedCreateWithoutBotonesPanicoInput>
    where?: OperadorWhereInput
  }

  export type OperadorUpdateToOneWithWhereWithoutBotonesPanicoInput = {
    where?: OperadorWhereInput
    data: XOR<OperadorUpdateWithoutBotonesPanicoInput, OperadorUncheckedUpdateWithoutBotonesPanicoInput>
  }

  export type OperadorUpdateWithoutBotonesPanicoInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserRoleUpdateOneRequiredWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateWithoutBotonesPanicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type IncidenteAsignadoUpsertWithWhereUniqueWithoutPanicInput = {
    where: IncidenteAsignadoWhereUniqueInput
    update: XOR<IncidenteAsignadoUpdateWithoutPanicInput, IncidenteAsignadoUncheckedUpdateWithoutPanicInput>
    create: XOR<IncidenteAsignadoCreateWithoutPanicInput, IncidenteAsignadoUncheckedCreateWithoutPanicInput>
  }

  export type IncidenteAsignadoUpdateWithWhereUniqueWithoutPanicInput = {
    where: IncidenteAsignadoWhereUniqueInput
    data: XOR<IncidenteAsignadoUpdateWithoutPanicInput, IncidenteAsignadoUncheckedUpdateWithoutPanicInput>
  }

  export type IncidenteAsignadoUpdateManyWithWhereWithoutPanicInput = {
    where: IncidenteAsignadoScalarWhereInput
    data: XOR<IncidenteAsignadoUpdateManyMutationInput, IncidenteAsignadoUncheckedUpdateManyWithoutPanicInput>
  }

  export type IncidenteAsignadoScalarWhereInput = {
    AND?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
    OR?: IncidenteAsignadoScalarWhereInput[]
    NOT?: IncidenteAsignadoScalarWhereInput | IncidenteAsignadoScalarWhereInput[]
    id?: IntFilter<"IncidenteAsignado"> | number
    supervisorId?: IntFilter<"IncidenteAsignado"> | number
    fechaAsignacion?: DateTimeFilter<"IncidenteAsignado"> | Date | string
    panicId?: IntFilter<"IncidenteAsignado"> | number
    latitud?: FloatFilter<"IncidenteAsignado"> | number
    longitud?: FloatFilter<"IncidenteAsignado"> | number
  }

  export type UserRoleCreateWithoutSupervisorInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorCreateNestedOneWithoutUserInput
    patio?: PatioCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutSupervisorInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorUncheckedCreateNestedOneWithoutUserInput
    patio?: PatioUncheckedCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorUncheckedCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleCreateOrConnectWithoutSupervisorInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutSupervisorInput, UserRoleUncheckedCreateWithoutSupervisorInput>
  }

  export type UbicacionSupervisorCreateWithoutSupervisorInput = {
    timestamp?: Date | string
    latitud: number
    longitud: number
  }

  export type UbicacionSupervisorUncheckedCreateWithoutSupervisorInput = {
    id?: number
    timestamp?: Date | string
    latitud: number
    longitud: number
  }

  export type UbicacionSupervisorCreateOrConnectWithoutSupervisorInput = {
    where: UbicacionSupervisorWhereUniqueInput
    create: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput>
  }

  export type UbicacionSupervisorCreateManySupervisorInputEnvelope = {
    data: UbicacionSupervisorCreateManySupervisorInput | UbicacionSupervisorCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type ReporteIncidenteCreateWithoutSupervisorInput = {
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    incidenteAsignado: IncidenteAsignadoCreateNestedOneWithoutReporteInput
    fotos?: FotoIncidenteCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteUncheckedCreateWithoutSupervisorInput = {
    id?: number
    incidenteAsignadoId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    fotos?: FotoIncidenteUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteCreateOrConnectWithoutSupervisorInput = {
    where: ReporteIncidenteWhereUniqueInput
    create: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput>
  }

  export type ReporteIncidenteCreateManySupervisorInputEnvelope = {
    data: ReporteIncidenteCreateManySupervisorInput | ReporteIncidenteCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type IncidenteAsignadoCreateWithoutSupervisorInput = {
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
    panic: BotonPanicoCreateNestedOneWithoutIncidenteAsignadoInput
    reporte?: ReporteIncidenteCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoUncheckedCreateWithoutSupervisorInput = {
    id?: number
    fechaAsignacion?: Date | string
    panicId: number
    latitud: number
    longitud: number
    reporte?: ReporteIncidenteUncheckedCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoCreateOrConnectWithoutSupervisorInput = {
    where: IncidenteAsignadoWhereUniqueInput
    create: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput>
  }

  export type IncidenteAsignadoCreateManySupervisorInputEnvelope = {
    data: IncidenteAsignadoCreateManySupervisorInput | IncidenteAsignadoCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithoutSupervisorInput = {
    update: XOR<UserRoleUpdateWithoutSupervisorInput, UserRoleUncheckedUpdateWithoutSupervisorInput>
    create: XOR<UserRoleCreateWithoutSupervisorInput, UserRoleUncheckedCreateWithoutSupervisorInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutSupervisorInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutSupervisorInput, UserRoleUncheckedUpdateWithoutSupervisorInput>
  }

  export type UserRoleUpdateWithoutSupervisorInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUpdateOneWithoutUserNestedInput
    patio?: PatioUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUncheckedUpdateOneWithoutUserNestedInput
    patio?: PatioUncheckedUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUncheckedUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type UbicacionSupervisorUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: UbicacionSupervisorWhereUniqueInput
    update: XOR<UbicacionSupervisorUpdateWithoutSupervisorInput, UbicacionSupervisorUncheckedUpdateWithoutSupervisorInput>
    create: XOR<UbicacionSupervisorCreateWithoutSupervisorInput, UbicacionSupervisorUncheckedCreateWithoutSupervisorInput>
  }

  export type UbicacionSupervisorUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: UbicacionSupervisorWhereUniqueInput
    data: XOR<UbicacionSupervisorUpdateWithoutSupervisorInput, UbicacionSupervisorUncheckedUpdateWithoutSupervisorInput>
  }

  export type UbicacionSupervisorUpdateManyWithWhereWithoutSupervisorInput = {
    where: UbicacionSupervisorScalarWhereInput
    data: XOR<UbicacionSupervisorUpdateManyMutationInput, UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type UbicacionSupervisorScalarWhereInput = {
    AND?: UbicacionSupervisorScalarWhereInput | UbicacionSupervisorScalarWhereInput[]
    OR?: UbicacionSupervisorScalarWhereInput[]
    NOT?: UbicacionSupervisorScalarWhereInput | UbicacionSupervisorScalarWhereInput[]
    id?: IntFilter<"UbicacionSupervisor"> | number
    supervisorId?: IntFilter<"UbicacionSupervisor"> | number
    timestamp?: DateTimeFilter<"UbicacionSupervisor"> | Date | string
    latitud?: FloatFilter<"UbicacionSupervisor"> | number
    longitud?: FloatFilter<"UbicacionSupervisor"> | number
  }

  export type ReporteIncidenteUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: ReporteIncidenteWhereUniqueInput
    update: XOR<ReporteIncidenteUpdateWithoutSupervisorInput, ReporteIncidenteUncheckedUpdateWithoutSupervisorInput>
    create: XOR<ReporteIncidenteCreateWithoutSupervisorInput, ReporteIncidenteUncheckedCreateWithoutSupervisorInput>
  }

  export type ReporteIncidenteUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: ReporteIncidenteWhereUniqueInput
    data: XOR<ReporteIncidenteUpdateWithoutSupervisorInput, ReporteIncidenteUncheckedUpdateWithoutSupervisorInput>
  }

  export type ReporteIncidenteUpdateManyWithWhereWithoutSupervisorInput = {
    where: ReporteIncidenteScalarWhereInput
    data: XOR<ReporteIncidenteUpdateManyMutationInput, ReporteIncidenteUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type ReporteIncidenteScalarWhereInput = {
    AND?: ReporteIncidenteScalarWhereInput | ReporteIncidenteScalarWhereInput[]
    OR?: ReporteIncidenteScalarWhereInput[]
    NOT?: ReporteIncidenteScalarWhereInput | ReporteIncidenteScalarWhereInput[]
    id?: IntFilter<"ReporteIncidente"> | number
    supervisorId?: IntFilter<"ReporteIncidente"> | number
    incidenteAsignadoId?: IntFilter<"ReporteIncidente"> | number
    fecha?: DateTimeFilter<"ReporteIncidente"> | Date | string
    estado?: StringNullableFilter<"ReporteIncidente"> | string | null
    descripcion?: StringFilter<"ReporteIncidente"> | string
    ambulancia?: BoolFilter<"ReporteIncidente"> | boolean
    policia?: BoolFilter<"ReporteIncidente"> | boolean
    heridos?: BoolFilter<"ReporteIncidente"> | boolean
  }

  export type IncidenteAsignadoUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: IncidenteAsignadoWhereUniqueInput
    update: XOR<IncidenteAsignadoUpdateWithoutSupervisorInput, IncidenteAsignadoUncheckedUpdateWithoutSupervisorInput>
    create: XOR<IncidenteAsignadoCreateWithoutSupervisorInput, IncidenteAsignadoUncheckedCreateWithoutSupervisorInput>
  }

  export type IncidenteAsignadoUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: IncidenteAsignadoWhereUniqueInput
    data: XOR<IncidenteAsignadoUpdateWithoutSupervisorInput, IncidenteAsignadoUncheckedUpdateWithoutSupervisorInput>
  }

  export type IncidenteAsignadoUpdateManyWithWhereWithoutSupervisorInput = {
    where: IncidenteAsignadoScalarWhereInput
    data: XOR<IncidenteAsignadoUpdateManyMutationInput, IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type SupervisorCreateWithoutUbicacionesInput = {
    user: UserRoleCreateNestedOneWithoutSupervisorInput
    reportes?: ReporteIncidenteCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutUbicacionesInput = {
    id?: number
    userRoleId: number
    reportes?: ReporteIncidenteUncheckedCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutUbicacionesInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutUbicacionesInput, SupervisorUncheckedCreateWithoutUbicacionesInput>
  }

  export type SupervisorUpsertWithoutUbicacionesInput = {
    update: XOR<SupervisorUpdateWithoutUbicacionesInput, SupervisorUncheckedUpdateWithoutUbicacionesInput>
    create: XOR<SupervisorCreateWithoutUbicacionesInput, SupervisorUncheckedCreateWithoutUbicacionesInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutUbicacionesInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutUbicacionesInput, SupervisorUncheckedUpdateWithoutUbicacionesInput>
  }

  export type SupervisorUpdateWithoutUbicacionesInput = {
    user?: UserRoleUpdateOneRequiredWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutUbicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    reportes?: ReporteIncidenteUncheckedUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UserRoleCreateWithoutCoordinadorInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorCreateNestedOneWithoutUserInput
    supervisor?: SupervisorCreateNestedOneWithoutUserInput
    patio?: PatioCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutCoordinadorInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorUncheckedCreateNestedOneWithoutUserInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUserInput
    patio?: PatioUncheckedCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleCreateOrConnectWithoutCoordinadorInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutCoordinadorInput, UserRoleUncheckedCreateWithoutCoordinadorInput>
  }

  export type UserRoleUpsertWithoutCoordinadorInput = {
    update: XOR<UserRoleUpdateWithoutCoordinadorInput, UserRoleUncheckedUpdateWithoutCoordinadorInput>
    create: XOR<UserRoleCreateWithoutCoordinadorInput, UserRoleUncheckedCreateWithoutCoordinadorInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutCoordinadorInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutCoordinadorInput, UserRoleUncheckedUpdateWithoutCoordinadorInput>
  }

  export type UserRoleUpdateWithoutCoordinadorInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUpdateOneWithoutUserNestedInput
    patio?: PatioUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutCoordinadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUncheckedUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUserNestedInput
    patio?: PatioUncheckedUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type SupervisorCreateWithoutAsignacionesInput = {
    user: UserRoleCreateNestedOneWithoutSupervisorInput
    ubicaciones?: UbicacionSupervisorCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutAsignacionesInput = {
    id?: number
    userRoleId: number
    ubicaciones?: UbicacionSupervisorUncheckedCreateNestedManyWithoutSupervisorInput
    reportes?: ReporteIncidenteUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutAsignacionesInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutAsignacionesInput, SupervisorUncheckedCreateWithoutAsignacionesInput>
  }

  export type BotonPanicoCreateWithoutIncidenteAsignadoInput = {
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
    operador: OperadorCreateNestedOneWithoutBotonesPanicoInput
  }

  export type BotonPanicoUncheckedCreateWithoutIncidenteAsignadoInput = {
    id?: number
    operadorId: number
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
  }

  export type BotonPanicoCreateOrConnectWithoutIncidenteAsignadoInput = {
    where: BotonPanicoWhereUniqueInput
    create: XOR<BotonPanicoCreateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedCreateWithoutIncidenteAsignadoInput>
  }

  export type ReporteIncidenteCreateWithoutIncidenteAsignadoInput = {
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    supervisor: SupervisorCreateNestedOneWithoutReportesInput
    fotos?: FotoIncidenteCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput = {
    id?: number
    supervisorId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    fotos?: FotoIncidenteUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteIncidenteCreateOrConnectWithoutIncidenteAsignadoInput = {
    where: ReporteIncidenteWhereUniqueInput
    create: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
  }

  export type SupervisorUpsertWithoutAsignacionesInput = {
    update: XOR<SupervisorUpdateWithoutAsignacionesInput, SupervisorUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<SupervisorCreateWithoutAsignacionesInput, SupervisorUncheckedCreateWithoutAsignacionesInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutAsignacionesInput, SupervisorUncheckedUpdateWithoutAsignacionesInput>
  }

  export type SupervisorUpdateWithoutAsignacionesInput = {
    user?: UserRoleUpdateOneRequiredWithoutSupervisorNestedInput
    ubicaciones?: UbicacionSupervisorUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutAsignacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    ubicaciones?: UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorNestedInput
    reportes?: ReporteIncidenteUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type BotonPanicoUpsertWithoutIncidenteAsignadoInput = {
    update: XOR<BotonPanicoUpdateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedUpdateWithoutIncidenteAsignadoInput>
    create: XOR<BotonPanicoCreateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedCreateWithoutIncidenteAsignadoInput>
    where?: BotonPanicoWhereInput
  }

  export type BotonPanicoUpdateToOneWithWhereWithoutIncidenteAsignadoInput = {
    where?: BotonPanicoWhereInput
    data: XOR<BotonPanicoUpdateWithoutIncidenteAsignadoInput, BotonPanicoUncheckedUpdateWithoutIncidenteAsignadoInput>
  }

  export type BotonPanicoUpdateWithoutIncidenteAsignadoInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    operador?: OperadorUpdateOneRequiredWithoutBotonesPanicoNestedInput
  }

  export type BotonPanicoUncheckedUpdateWithoutIncidenteAsignadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReporteIncidenteUpsertWithoutIncidenteAsignadoInput = {
    update: XOR<ReporteIncidenteUpdateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedUpdateWithoutIncidenteAsignadoInput>
    create: XOR<ReporteIncidenteCreateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedCreateWithoutIncidenteAsignadoInput>
    where?: ReporteIncidenteWhereInput
  }

  export type ReporteIncidenteUpdateToOneWithWhereWithoutIncidenteAsignadoInput = {
    where?: ReporteIncidenteWhereInput
    data: XOR<ReporteIncidenteUpdateWithoutIncidenteAsignadoInput, ReporteIncidenteUncheckedUpdateWithoutIncidenteAsignadoInput>
  }

  export type ReporteIncidenteUpdateWithoutIncidenteAsignadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    supervisor?: SupervisorUpdateOneRequiredWithoutReportesNestedInput
    fotos?: FotoIncidenteUpdateManyWithoutReporteNestedInput
  }

  export type ReporteIncidenteUncheckedUpdateWithoutIncidenteAsignadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    fotos?: FotoIncidenteUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type SupervisorCreateWithoutReportesInput = {
    user: UserRoleCreateNestedOneWithoutSupervisorInput
    ubicaciones?: UbicacionSupervisorCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutReportesInput = {
    id?: number
    userRoleId: number
    ubicaciones?: UbicacionSupervisorUncheckedCreateNestedManyWithoutSupervisorInput
    asignaciones?: IncidenteAsignadoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutReportesInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutReportesInput, SupervisorUncheckedCreateWithoutReportesInput>
  }

  export type IncidenteAsignadoCreateWithoutReporteInput = {
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
    supervisor: SupervisorCreateNestedOneWithoutAsignacionesInput
    panic: BotonPanicoCreateNestedOneWithoutIncidenteAsignadoInput
  }

  export type IncidenteAsignadoUncheckedCreateWithoutReporteInput = {
    id?: number
    supervisorId: number
    fechaAsignacion?: Date | string
    panicId: number
    latitud: number
    longitud: number
  }

  export type IncidenteAsignadoCreateOrConnectWithoutReporteInput = {
    where: IncidenteAsignadoWhereUniqueInput
    create: XOR<IncidenteAsignadoCreateWithoutReporteInput, IncidenteAsignadoUncheckedCreateWithoutReporteInput>
  }

  export type FotoIncidenteCreateWithoutReporteInput = {
    url: string
    createdAt?: Date | string
  }

  export type FotoIncidenteUncheckedCreateWithoutReporteInput = {
    id?: number
    url: string
    createdAt?: Date | string
  }

  export type FotoIncidenteCreateOrConnectWithoutReporteInput = {
    where: FotoIncidenteWhereUniqueInput
    create: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput>
  }

  export type FotoIncidenteCreateManyReporteInputEnvelope = {
    data: FotoIncidenteCreateManyReporteInput | FotoIncidenteCreateManyReporteInput[]
    skipDuplicates?: boolean
  }

  export type SupervisorUpsertWithoutReportesInput = {
    update: XOR<SupervisorUpdateWithoutReportesInput, SupervisorUncheckedUpdateWithoutReportesInput>
    create: XOR<SupervisorCreateWithoutReportesInput, SupervisorUncheckedCreateWithoutReportesInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutReportesInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutReportesInput, SupervisorUncheckedUpdateWithoutReportesInput>
  }

  export type SupervisorUpdateWithoutReportesInput = {
    user?: UserRoleUpdateOneRequiredWithoutSupervisorNestedInput
    ubicaciones?: UbicacionSupervisorUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutReportesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    ubicaciones?: UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorNestedInput
    asignaciones?: IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type IncidenteAsignadoUpsertWithoutReporteInput = {
    update: XOR<IncidenteAsignadoUpdateWithoutReporteInput, IncidenteAsignadoUncheckedUpdateWithoutReporteInput>
    create: XOR<IncidenteAsignadoCreateWithoutReporteInput, IncidenteAsignadoUncheckedCreateWithoutReporteInput>
    where?: IncidenteAsignadoWhereInput
  }

  export type IncidenteAsignadoUpdateToOneWithWhereWithoutReporteInput = {
    where?: IncidenteAsignadoWhereInput
    data: XOR<IncidenteAsignadoUpdateWithoutReporteInput, IncidenteAsignadoUncheckedUpdateWithoutReporteInput>
  }

  export type IncidenteAsignadoUpdateWithoutReporteInput = {
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    supervisor?: SupervisorUpdateOneRequiredWithoutAsignacionesNestedInput
    panic?: BotonPanicoUpdateOneRequiredWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    panicId?: IntFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type FotoIncidenteUpsertWithWhereUniqueWithoutReporteInput = {
    where: FotoIncidenteWhereUniqueInput
    update: XOR<FotoIncidenteUpdateWithoutReporteInput, FotoIncidenteUncheckedUpdateWithoutReporteInput>
    create: XOR<FotoIncidenteCreateWithoutReporteInput, FotoIncidenteUncheckedCreateWithoutReporteInput>
  }

  export type FotoIncidenteUpdateWithWhereUniqueWithoutReporteInput = {
    where: FotoIncidenteWhereUniqueInput
    data: XOR<FotoIncidenteUpdateWithoutReporteInput, FotoIncidenteUncheckedUpdateWithoutReporteInput>
  }

  export type FotoIncidenteUpdateManyWithWhereWithoutReporteInput = {
    where: FotoIncidenteScalarWhereInput
    data: XOR<FotoIncidenteUpdateManyMutationInput, FotoIncidenteUncheckedUpdateManyWithoutReporteInput>
  }

  export type FotoIncidenteScalarWhereInput = {
    AND?: FotoIncidenteScalarWhereInput | FotoIncidenteScalarWhereInput[]
    OR?: FotoIncidenteScalarWhereInput[]
    NOT?: FotoIncidenteScalarWhereInput | FotoIncidenteScalarWhereInput[]
    id?: IntFilter<"FotoIncidente"> | number
    reporteId?: IntFilter<"FotoIncidente"> | number
    url?: StringFilter<"FotoIncidente"> | string
    createdAt?: DateTimeFilter<"FotoIncidente"> | Date | string
  }

  export type ReporteIncidenteCreateWithoutFotosInput = {
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
    supervisor: SupervisorCreateNestedOneWithoutReportesInput
    incidenteAsignado: IncidenteAsignadoCreateNestedOneWithoutReporteInput
  }

  export type ReporteIncidenteUncheckedCreateWithoutFotosInput = {
    id?: number
    supervisorId: number
    incidenteAsignadoId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
  }

  export type ReporteIncidenteCreateOrConnectWithoutFotosInput = {
    where: ReporteIncidenteWhereUniqueInput
    create: XOR<ReporteIncidenteCreateWithoutFotosInput, ReporteIncidenteUncheckedCreateWithoutFotosInput>
  }

  export type ReporteIncidenteUpsertWithoutFotosInput = {
    update: XOR<ReporteIncidenteUpdateWithoutFotosInput, ReporteIncidenteUncheckedUpdateWithoutFotosInput>
    create: XOR<ReporteIncidenteCreateWithoutFotosInput, ReporteIncidenteUncheckedCreateWithoutFotosInput>
    where?: ReporteIncidenteWhereInput
  }

  export type ReporteIncidenteUpdateToOneWithWhereWithoutFotosInput = {
    where?: ReporteIncidenteWhereInput
    data: XOR<ReporteIncidenteUpdateWithoutFotosInput, ReporteIncidenteUncheckedUpdateWithoutFotosInput>
  }

  export type ReporteIncidenteUpdateWithoutFotosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    supervisor?: SupervisorUpdateOneRequiredWithoutReportesNestedInput
    incidenteAsignado?: IncidenteAsignadoUpdateOneRequiredWithoutReporteNestedInput
  }

  export type ReporteIncidenteUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    incidenteAsignadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRoleCreateWithoutPatioInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorCreateNestedOneWithoutUserInput
    supervisor?: SupervisorCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutPatioInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorUncheckedCreateNestedOneWithoutUserInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorUncheckedCreateNestedOneWithoutUserInput
    DeviceToken?: DeviceTokenUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleCreateOrConnectWithoutPatioInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutPatioInput, UserRoleUncheckedCreateWithoutPatioInput>
  }

  export type RegistroSalidaUnidadCreateWithoutPatioInput = {
    unidad: string
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
    operador: OperadorCreateNestedOneWithoutRegistroSalidaUnidadInput
  }

  export type RegistroSalidaUnidadUncheckedCreateWithoutPatioInput = {
    id?: number
    unidad: string
    operadorId: number
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type RegistroSalidaUnidadCreateOrConnectWithoutPatioInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    create: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput>
  }

  export type RegistroSalidaUnidadCreateManyPatioInputEnvelope = {
    data: RegistroSalidaUnidadCreateManyPatioInput | RegistroSalidaUnidadCreateManyPatioInput[]
    skipDuplicates?: boolean
  }

  export type AsignacionUnidadCreateWithoutPatioInput = {
    unidad: string
    ruta: string
    fecha?: Date | string
    operador: OperadorCreateNestedOneWithoutAsignacionUnidadInput
  }

  export type AsignacionUnidadUncheckedCreateWithoutPatioInput = {
    id?: number
    operadorId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type AsignacionUnidadCreateOrConnectWithoutPatioInput = {
    where: AsignacionUnidadWhereUniqueInput
    create: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput>
  }

  export type AsignacionUnidadCreateManyPatioInputEnvelope = {
    data: AsignacionUnidadCreateManyPatioInput | AsignacionUnidadCreateManyPatioInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithoutPatioInput = {
    update: XOR<UserRoleUpdateWithoutPatioInput, UserRoleUncheckedUpdateWithoutPatioInput>
    create: XOR<UserRoleCreateWithoutPatioInput, UserRoleUncheckedCreateWithoutPatioInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutPatioInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutPatioInput, UserRoleUncheckedUpdateWithoutPatioInput>
  }

  export type UserRoleUpdateWithoutPatioInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutPatioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUncheckedUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUncheckedUpdateOneWithoutUserNestedInput
    DeviceToken?: DeviceTokenUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type RegistroSalidaUnidadUpsertWithWhereUniqueWithoutPatioInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    update: XOR<RegistroSalidaUnidadUpdateWithoutPatioInput, RegistroSalidaUnidadUncheckedUpdateWithoutPatioInput>
    create: XOR<RegistroSalidaUnidadCreateWithoutPatioInput, RegistroSalidaUnidadUncheckedCreateWithoutPatioInput>
  }

  export type RegistroSalidaUnidadUpdateWithWhereUniqueWithoutPatioInput = {
    where: RegistroSalidaUnidadWhereUniqueInput
    data: XOR<RegistroSalidaUnidadUpdateWithoutPatioInput, RegistroSalidaUnidadUncheckedUpdateWithoutPatioInput>
  }

  export type RegistroSalidaUnidadUpdateManyWithWhereWithoutPatioInput = {
    where: RegistroSalidaUnidadScalarWhereInput
    data: XOR<RegistroSalidaUnidadUpdateManyMutationInput, RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioInput>
  }

  export type AsignacionUnidadUpsertWithWhereUniqueWithoutPatioInput = {
    where: AsignacionUnidadWhereUniqueInput
    update: XOR<AsignacionUnidadUpdateWithoutPatioInput, AsignacionUnidadUncheckedUpdateWithoutPatioInput>
    create: XOR<AsignacionUnidadCreateWithoutPatioInput, AsignacionUnidadUncheckedCreateWithoutPatioInput>
  }

  export type AsignacionUnidadUpdateWithWhereUniqueWithoutPatioInput = {
    where: AsignacionUnidadWhereUniqueInput
    data: XOR<AsignacionUnidadUpdateWithoutPatioInput, AsignacionUnidadUncheckedUpdateWithoutPatioInput>
  }

  export type AsignacionUnidadUpdateManyWithWhereWithoutPatioInput = {
    where: AsignacionUnidadScalarWhereInput
    data: XOR<AsignacionUnidadUpdateManyMutationInput, AsignacionUnidadUncheckedUpdateManyWithoutPatioInput>
  }

  export type PatioCreateWithoutRegistrosSalidaInput = {
    user: UserRoleCreateNestedOneWithoutPatioInput
    asignaciones?: AsignacionUnidadCreateNestedManyWithoutPatioInput
  }

  export type PatioUncheckedCreateWithoutRegistrosSalidaInput = {
    id?: number
    userRoleId: number
    asignaciones?: AsignacionUnidadUncheckedCreateNestedManyWithoutPatioInput
  }

  export type PatioCreateOrConnectWithoutRegistrosSalidaInput = {
    where: PatioWhereUniqueInput
    create: XOR<PatioCreateWithoutRegistrosSalidaInput, PatioUncheckedCreateWithoutRegistrosSalidaInput>
  }

  export type OperadorCreateWithoutRegistroSalidaUnidadInput = {
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    user: UserRoleCreateNestedOneWithoutOperadorInput
    botonesPanico?: BotonPanicoCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateWithoutRegistroSalidaUnidadInput = {
    id?: number
    userRoleId: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    botonesPanico?: BotonPanicoUncheckedCreateNestedManyWithoutOperadorInput
    AsignacionUnidad?: AsignacionUnidadUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorCreateOrConnectWithoutRegistroSalidaUnidadInput = {
    where: OperadorWhereUniqueInput
    create: XOR<OperadorCreateWithoutRegistroSalidaUnidadInput, OperadorUncheckedCreateWithoutRegistroSalidaUnidadInput>
  }

  export type PatioUpsertWithoutRegistrosSalidaInput = {
    update: XOR<PatioUpdateWithoutRegistrosSalidaInput, PatioUncheckedUpdateWithoutRegistrosSalidaInput>
    create: XOR<PatioCreateWithoutRegistrosSalidaInput, PatioUncheckedCreateWithoutRegistrosSalidaInput>
    where?: PatioWhereInput
  }

  export type PatioUpdateToOneWithWhereWithoutRegistrosSalidaInput = {
    where?: PatioWhereInput
    data: XOR<PatioUpdateWithoutRegistrosSalidaInput, PatioUncheckedUpdateWithoutRegistrosSalidaInput>
  }

  export type PatioUpdateWithoutRegistrosSalidaInput = {
    user?: UserRoleUpdateOneRequiredWithoutPatioNestedInput
    asignaciones?: AsignacionUnidadUpdateManyWithoutPatioNestedInput
  }

  export type PatioUncheckedUpdateWithoutRegistrosSalidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    asignaciones?: AsignacionUnidadUncheckedUpdateManyWithoutPatioNestedInput
  }

  export type OperadorUpsertWithoutRegistroSalidaUnidadInput = {
    update: XOR<OperadorUpdateWithoutRegistroSalidaUnidadInput, OperadorUncheckedUpdateWithoutRegistroSalidaUnidadInput>
    create: XOR<OperadorCreateWithoutRegistroSalidaUnidadInput, OperadorUncheckedCreateWithoutRegistroSalidaUnidadInput>
    where?: OperadorWhereInput
  }

  export type OperadorUpdateToOneWithWhereWithoutRegistroSalidaUnidadInput = {
    where?: OperadorWhereInput
    data: XOR<OperadorUpdateWithoutRegistroSalidaUnidadInput, OperadorUncheckedUpdateWithoutRegistroSalidaUnidadInput>
  }

  export type OperadorUpdateWithoutRegistroSalidaUnidadInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserRoleUpdateOneRequiredWithoutOperadorNestedInput
    botonesPanico?: BotonPanicoUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateWithoutRegistroSalidaUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    botonesPanico?: BotonPanicoUncheckedUpdateManyWithoutOperadorNestedInput
    AsignacionUnidad?: AsignacionUnidadUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type PatioCreateWithoutAsignacionesInput = {
    user: UserRoleCreateNestedOneWithoutPatioInput
    registrosSalida?: RegistroSalidaUnidadCreateNestedManyWithoutPatioInput
  }

  export type PatioUncheckedCreateWithoutAsignacionesInput = {
    id?: number
    userRoleId: number
    registrosSalida?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutPatioInput
  }

  export type PatioCreateOrConnectWithoutAsignacionesInput = {
    where: PatioWhereUniqueInput
    create: XOR<PatioCreateWithoutAsignacionesInput, PatioUncheckedCreateWithoutAsignacionesInput>
  }

  export type OperadorCreateWithoutAsignacionUnidadInput = {
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    user: UserRoleCreateNestedOneWithoutOperadorInput
    botonesPanico?: BotonPanicoCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateWithoutAsignacionUnidadInput = {
    id?: number
    userRoleId: number
    unidadAsignada?: string | null
    rutaAsignada?: string | null
    botonesPanico?: BotonPanicoUncheckedCreateNestedManyWithoutOperadorInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorCreateOrConnectWithoutAsignacionUnidadInput = {
    where: OperadorWhereUniqueInput
    create: XOR<OperadorCreateWithoutAsignacionUnidadInput, OperadorUncheckedCreateWithoutAsignacionUnidadInput>
  }

  export type PatioUpsertWithoutAsignacionesInput = {
    update: XOR<PatioUpdateWithoutAsignacionesInput, PatioUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<PatioCreateWithoutAsignacionesInput, PatioUncheckedCreateWithoutAsignacionesInput>
    where?: PatioWhereInput
  }

  export type PatioUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: PatioWhereInput
    data: XOR<PatioUpdateWithoutAsignacionesInput, PatioUncheckedUpdateWithoutAsignacionesInput>
  }

  export type PatioUpdateWithoutAsignacionesInput = {
    user?: UserRoleUpdateOneRequiredWithoutPatioNestedInput
    registrosSalida?: RegistroSalidaUnidadUpdateManyWithoutPatioNestedInput
  }

  export type PatioUncheckedUpdateWithoutAsignacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    registrosSalida?: RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioNestedInput
  }

  export type OperadorUpsertWithoutAsignacionUnidadInput = {
    update: XOR<OperadorUpdateWithoutAsignacionUnidadInput, OperadorUncheckedUpdateWithoutAsignacionUnidadInput>
    create: XOR<OperadorCreateWithoutAsignacionUnidadInput, OperadorUncheckedCreateWithoutAsignacionUnidadInput>
    where?: OperadorWhereInput
  }

  export type OperadorUpdateToOneWithWhereWithoutAsignacionUnidadInput = {
    where?: OperadorWhereInput
    data: XOR<OperadorUpdateWithoutAsignacionUnidadInput, OperadorUncheckedUpdateWithoutAsignacionUnidadInput>
  }

  export type OperadorUpdateWithoutAsignacionUnidadInput = {
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserRoleUpdateOneRequiredWithoutOperadorNestedInput
    botonesPanico?: BotonPanicoUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateWithoutAsignacionUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
    unidadAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    rutaAsignada?: NullableStringFieldUpdateOperationsInput | string | null
    botonesPanico?: BotonPanicoUncheckedUpdateManyWithoutOperadorNestedInput
    RegistroSalidaUnidad?: RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type UserRoleCreateWithoutDeviceTokenInput = {
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorCreateNestedOneWithoutUserInput
    supervisor?: SupervisorCreateNestedOneWithoutUserInput
    patio?: PatioCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorCreateNestedOneWithoutUserInput
  }

  export type UserRoleUncheckedCreateWithoutDeviceTokenInput = {
    id?: number
    idFirebase: string
    role: $Enums.Role
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    profilePhotoUrl?: string | null
    telefono?: string | null
    correo?: string | null
    operador?: OperadorUncheckedCreateNestedOneWithoutUserInput
    supervisor?: SupervisorUncheckedCreateNestedOneWithoutUserInput
    patio?: PatioUncheckedCreateNestedOneWithoutUserInput
    coordinador?: CoordinadorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserRoleCreateOrConnectWithoutDeviceTokenInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutDeviceTokenInput, UserRoleUncheckedCreateWithoutDeviceTokenInput>
  }

  export type UserRoleUpsertWithoutDeviceTokenInput = {
    update: XOR<UserRoleUpdateWithoutDeviceTokenInput, UserRoleUncheckedUpdateWithoutDeviceTokenInput>
    create: XOR<UserRoleCreateWithoutDeviceTokenInput, UserRoleUncheckedCreateWithoutDeviceTokenInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutDeviceTokenInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutDeviceTokenInput, UserRoleUncheckedUpdateWithoutDeviceTokenInput>
  }

  export type UserRoleUpdateWithoutDeviceTokenInput = {
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUpdateOneWithoutUserNestedInput
    patio?: PatioUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUpdateOneWithoutUserNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutDeviceTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    idFirebase?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: OperadorUncheckedUpdateOneWithoutUserNestedInput
    supervisor?: SupervisorUncheckedUpdateOneWithoutUserNestedInput
    patio?: PatioUncheckedUpdateOneWithoutUserNestedInput
    coordinador?: CoordinadorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeviceTokenCreateManyUserRoleInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type DeviceTokenUpdateWithoutUserRoleInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotonPanicoCreateManyOperadorInput = {
    id?: number
    timestamp?: Date | string
    motivo?: string | null
    atendido?: boolean
    latitud?: number | null
    longitud?: number | null
  }

  export type RegistroSalidaUnidadCreateManyOperadorInput = {
    id?: number
    patioId: number
    unidad: string
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type AsignacionUnidadCreateManyOperadorInput = {
    id?: number
    patioId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type BotonPanicoUpdateWithoutOperadorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    IncidenteAsignado?: IncidenteAsignadoUpdateManyWithoutPanicNestedInput
  }

  export type BotonPanicoUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    IncidenteAsignado?: IncidenteAsignadoUncheckedUpdateManyWithoutPanicNestedInput
  }

  export type BotonPanicoUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RegistroSalidaUnidadUpdateWithoutOperadorInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
    patio?: PatioUpdateOneRequiredWithoutRegistrosSalidaNestedInput
  }

  export type RegistroSalidaUnidadUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroSalidaUnidadUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionUnidadUpdateWithoutOperadorInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    patio?: PatioUpdateOneRequiredWithoutAsignacionesNestedInput
  }

  export type AsignacionUnidadUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionUnidadUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patioId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidenteAsignadoCreateManyPanicInput = {
    id?: number
    supervisorId: number
    fechaAsignacion?: Date | string
    latitud: number
    longitud: number
  }

  export type IncidenteAsignadoUpdateWithoutPanicInput = {
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    supervisor?: SupervisorUpdateOneRequiredWithoutAsignacionesNestedInput
    reporte?: ReporteIncidenteUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateWithoutPanicInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    reporte?: ReporteIncidenteUncheckedUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateManyWithoutPanicInput = {
    id?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorCreateManySupervisorInput = {
    id?: number
    timestamp?: Date | string
    latitud: number
    longitud: number
  }

  export type ReporteIncidenteCreateManySupervisorInput = {
    id?: number
    incidenteAsignadoId: number
    fecha?: Date | string
    estado?: string | null
    descripcion: string
    ambulancia?: boolean
    policia?: boolean
    heridos: boolean
  }

  export type IncidenteAsignadoCreateManySupervisorInput = {
    id?: number
    fechaAsignacion?: Date | string
    panicId: number
    latitud: number
    longitud: number
  }

  export type UbicacionSupervisorUpdateWithoutSupervisorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type UbicacionSupervisorUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type ReporteIncidenteUpdateWithoutSupervisorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    incidenteAsignado?: IncidenteAsignadoUpdateOneRequiredWithoutReporteNestedInput
    fotos?: FotoIncidenteUpdateManyWithoutReporteNestedInput
  }

  export type ReporteIncidenteUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidenteAsignadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
    fotos?: FotoIncidenteUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteIncidenteUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidenteAsignadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: StringFieldUpdateOperationsInput | string
    ambulancia?: BoolFieldUpdateOperationsInput | boolean
    policia?: BoolFieldUpdateOperationsInput | boolean
    heridos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidenteAsignadoUpdateWithoutSupervisorInput = {
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    panic?: BotonPanicoUpdateOneRequiredWithoutIncidenteAsignadoNestedInput
    reporte?: ReporteIncidenteUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    panicId?: IntFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    reporte?: ReporteIncidenteUncheckedUpdateOneWithoutIncidenteAsignadoNestedInput
  }

  export type IncidenteAsignadoUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaAsignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    panicId?: IntFieldUpdateOperationsInput | number
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type FotoIncidenteCreateManyReporteInput = {
    id?: number
    url: string
    createdAt?: Date | string
  }

  export type FotoIncidenteUpdateWithoutReporteInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoIncidenteUncheckedUpdateWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoIncidenteUncheckedUpdateManyWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroSalidaUnidadCreateManyPatioInput = {
    id?: number
    unidad: string
    operadorId: number
    fechaSalida: Date | string
    horaInicio: string
    vueltas: number
    kmInicial: number
    kmFinal?: number | null
    condiciones: string
  }

  export type AsignacionUnidadCreateManyPatioInput = {
    id?: number
    operadorId: number
    unidad: string
    ruta: string
    fecha?: Date | string
  }

  export type RegistroSalidaUnidadUpdateWithoutPatioInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
    operador?: OperadorUpdateOneRequiredWithoutRegistroSalidaUnidadNestedInput
  }

  export type RegistroSalidaUnidadUncheckedUpdateWithoutPatioInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    operadorId?: IntFieldUpdateOperationsInput | number
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroSalidaUnidadUncheckedUpdateManyWithoutPatioInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    operadorId?: IntFieldUpdateOperationsInput | number
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    vueltas?: IntFieldUpdateOperationsInput | number
    kmInicial?: IntFieldUpdateOperationsInput | number
    kmFinal?: NullableIntFieldUpdateOperationsInput | number | null
    condiciones?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionUnidadUpdateWithoutPatioInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    operador?: OperadorUpdateOneRequiredWithoutAsignacionUnidadNestedInput
  }

  export type AsignacionUnidadUncheckedUpdateWithoutPatioInput = {
    id?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionUnidadUncheckedUpdateManyWithoutPatioInput = {
    id?: IntFieldUpdateOperationsInput | number
    operadorId?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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