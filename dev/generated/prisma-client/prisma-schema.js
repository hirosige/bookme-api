module.exports = {
        typeDefs: /* GraphQL */ `type Advantage {
  id: ID!
  name: String!
  iconName: String!
  icon: AdvantageIcon
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AdvantageConnection {
  pageInfo: PageInfo!
  edges: [AdvantageEdge]!
  aggregate: AggregateAdvantage!
}

input AdvantageCreateInput {
  name: String!
  iconName: String!
  icon: AdvantageIconCreateOneWithoutAdvantageInput
  hotels: HotelCreateManyWithoutAdvantagesInput
}

input AdvantageCreateManyWithoutHotelsInput {
  create: [AdvantageCreateWithoutHotelsInput!]
  connect: [AdvantageWhereUniqueInput!]
}

input AdvantageCreateOneWithoutIconInput {
  create: AdvantageCreateWithoutIconInput
  connect: AdvantageWhereUniqueInput
}

input AdvantageCreateWithoutHotelsInput {
  name: String!
  iconName: String!
  icon: AdvantageIconCreateOneWithoutAdvantageInput
}

input AdvantageCreateWithoutIconInput {
  name: String!
  iconName: String!
  hotels: HotelCreateManyWithoutAdvantagesInput
}

type AdvantageEdge {
  node: Advantage!
  cursor: String!
}

type AdvantageIcon {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  advantage: Advantage
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AdvantageIconConnection {
  pageInfo: PageInfo!
  edges: [AdvantageIconEdge]!
  aggregate: AggregateAdvantageIcon!
}

input AdvantageIconCreateInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  advantage: AdvantageCreateOneWithoutIconInput
}

input AdvantageIconCreateOneWithoutAdvantageInput {
  create: AdvantageIconCreateWithoutAdvantageInput
  connect: AdvantageIconWhereUniqueInput
}

input AdvantageIconCreateWithoutAdvantageInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
}

type AdvantageIconEdge {
  node: AdvantageIcon!
  cursor: String!
}

enum AdvantageIconOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  mimeType_ASC
  mimeType_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdvantageIconPreviousValues {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AdvantageIconSubscriptionPayload {
  mutation: MutationType!
  node: AdvantageIcon
  updatedFields: [String!]
  previousValues: AdvantageIconPreviousValues
}

input AdvantageIconSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdvantageIconWhereInput
  AND: [AdvantageIconSubscriptionWhereInput!]
  OR: [AdvantageIconSubscriptionWhereInput!]
  NOT: [AdvantageIconSubscriptionWhereInput!]
}

input AdvantageIconUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  advantage: AdvantageUpdateOneWithoutIconInput
}

input AdvantageIconUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input AdvantageIconUpdateOneWithoutAdvantageInput {
  create: AdvantageIconCreateWithoutAdvantageInput
  update: AdvantageIconUpdateWithoutAdvantageDataInput
  upsert: AdvantageIconUpsertWithoutAdvantageInput
  delete: Boolean
  disconnect: Boolean
  connect: AdvantageIconWhereUniqueInput
}

input AdvantageIconUpdateWithoutAdvantageDataInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input AdvantageIconUpsertWithoutAdvantageInput {
  update: AdvantageIconUpdateWithoutAdvantageDataInput!
  create: AdvantageIconCreateWithoutAdvantageInput!
}

input AdvantageIconWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  mimeType: String
  mimeType_not: String
  mimeType_in: [String!]
  mimeType_not_in: [String!]
  mimeType_lt: String
  mimeType_lte: String
  mimeType_gt: String
  mimeType_gte: String
  mimeType_contains: String
  mimeType_not_contains: String
  mimeType_starts_with: String
  mimeType_not_starts_with: String
  mimeType_ends_with: String
  mimeType_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  advantage: AdvantageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AdvantageIconWhereInput!]
  OR: [AdvantageIconWhereInput!]
  NOT: [AdvantageIconWhereInput!]
}

input AdvantageIconWhereUniqueInput {
  id: ID
}

enum AdvantageOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  iconName_ASC
  iconName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdvantagePreviousValues {
  id: ID!
  name: String!
  iconName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AdvantageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  iconName: String
  iconName_not: String
  iconName_in: [String!]
  iconName_not_in: [String!]
  iconName_lt: String
  iconName_lte: String
  iconName_gt: String
  iconName_gte: String
  iconName_contains: String
  iconName_not_contains: String
  iconName_starts_with: String
  iconName_not_starts_with: String
  iconName_ends_with: String
  iconName_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AdvantageScalarWhereInput!]
  OR: [AdvantageScalarWhereInput!]
  NOT: [AdvantageScalarWhereInput!]
}

type AdvantageSubscriptionPayload {
  mutation: MutationType!
  node: Advantage
  updatedFields: [String!]
  previousValues: AdvantagePreviousValues
}

input AdvantageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdvantageWhereInput
  AND: [AdvantageSubscriptionWhereInput!]
  OR: [AdvantageSubscriptionWhereInput!]
  NOT: [AdvantageSubscriptionWhereInput!]
}

input AdvantageUpdateInput {
  name: String
  iconName: String
  icon: AdvantageIconUpdateOneWithoutAdvantageInput
  hotels: HotelUpdateManyWithoutAdvantagesInput
}

input AdvantageUpdateManyDataInput {
  name: String
  iconName: String
}

input AdvantageUpdateManyMutationInput {
  name: String
  iconName: String
}

input AdvantageUpdateManyWithoutHotelsInput {
  create: [AdvantageCreateWithoutHotelsInput!]
  delete: [AdvantageWhereUniqueInput!]
  connect: [AdvantageWhereUniqueInput!]
  disconnect: [AdvantageWhereUniqueInput!]
  update: [AdvantageUpdateWithWhereUniqueWithoutHotelsInput!]
  upsert: [AdvantageUpsertWithWhereUniqueWithoutHotelsInput!]
  deleteMany: [AdvantageScalarWhereInput!]
  updateMany: [AdvantageUpdateManyWithWhereNestedInput!]
}

input AdvantageUpdateManyWithWhereNestedInput {
  where: AdvantageScalarWhereInput!
  data: AdvantageUpdateManyDataInput!
}

input AdvantageUpdateOneWithoutIconInput {
  create: AdvantageCreateWithoutIconInput
  update: AdvantageUpdateWithoutIconDataInput
  upsert: AdvantageUpsertWithoutIconInput
  delete: Boolean
  disconnect: Boolean
  connect: AdvantageWhereUniqueInput
}

input AdvantageUpdateWithoutHotelsDataInput {
  name: String
  iconName: String
  icon: AdvantageIconUpdateOneWithoutAdvantageInput
}

input AdvantageUpdateWithoutIconDataInput {
  name: String
  iconName: String
  hotels: HotelUpdateManyWithoutAdvantagesInput
}

input AdvantageUpdateWithWhereUniqueWithoutHotelsInput {
  where: AdvantageWhereUniqueInput!
  data: AdvantageUpdateWithoutHotelsDataInput!
}

input AdvantageUpsertWithoutIconInput {
  update: AdvantageUpdateWithoutIconDataInput!
  create: AdvantageCreateWithoutIconInput!
}

input AdvantageUpsertWithWhereUniqueWithoutHotelsInput {
  where: AdvantageWhereUniqueInput!
  update: AdvantageUpdateWithoutHotelsDataInput!
  create: AdvantageCreateWithoutHotelsInput!
}

input AdvantageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  iconName: String
  iconName_not: String
  iconName_in: [String!]
  iconName_not_in: [String!]
  iconName_lt: String
  iconName_lte: String
  iconName_gt: String
  iconName_gte: String
  iconName_contains: String
  iconName_not_contains: String
  iconName_starts_with: String
  iconName_not_starts_with: String
  iconName_ends_with: String
  iconName_not_ends_with: String
  icon: AdvantageIconWhereInput
  hotels_every: HotelWhereInput
  hotels_some: HotelWhereInput
  hotels_none: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AdvantageWhereInput!]
  OR: [AdvantageWhereInput!]
  NOT: [AdvantageWhereInput!]
}

input AdvantageWhereUniqueInput {
  id: ID
  name: String
}

type AggregateAdvantage {
  count: Int!
}

type AggregateAdvantageIcon {
  count: Int!
}

type AggregateArea {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateContact {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateFavorite {
  count: Int!
}

type AggregateHotel {
  count: Int!
}

type AggregateHotelPhoto {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregatePostCategory {
  count: Int!
}

type AggregatePostHero {
  count: Int!
}

type AggregatePostPhotos {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateRoomPhoto {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserPhoto {
  count: Int!
}

type Area {
  id: ID!
  name: String!
  code: String!
  slug: String!
  country: Country!
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AreaConnection {
  pageInfo: PageInfo!
  edges: [AreaEdge]!
  aggregate: AggregateArea!
}

input AreaCreateInput {
  name: String!
  code: String!
  slug: String!
  country: CountryCreateOneWithoutAreasInput!
  hotels: HotelCreateManyWithoutAreaInput
}

input AreaCreateManyWithoutCountryInput {
  create: [AreaCreateWithoutCountryInput!]
  connect: [AreaWhereUniqueInput!]
}

input AreaCreateOneWithoutHotelsInput {
  create: AreaCreateWithoutHotelsInput
  connect: AreaWhereUniqueInput
}

input AreaCreateWithoutCountryInput {
  name: String!
  code: String!
  slug: String!
  hotels: HotelCreateManyWithoutAreaInput
}

input AreaCreateWithoutHotelsInput {
  name: String!
  code: String!
  slug: String!
  country: CountryCreateOneWithoutAreasInput!
}

type AreaEdge {
  node: Area!
  cursor: String!
}

enum AreaOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AreaPreviousValues {
  id: ID!
  name: String!
  code: String!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AreaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AreaScalarWhereInput!]
  OR: [AreaScalarWhereInput!]
  NOT: [AreaScalarWhereInput!]
}

type AreaSubscriptionPayload {
  mutation: MutationType!
  node: Area
  updatedFields: [String!]
  previousValues: AreaPreviousValues
}

input AreaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AreaWhereInput
  AND: [AreaSubscriptionWhereInput!]
  OR: [AreaSubscriptionWhereInput!]
  NOT: [AreaSubscriptionWhereInput!]
}

input AreaUpdateInput {
  name: String
  code: String
  slug: String
  country: CountryUpdateOneRequiredWithoutAreasInput
  hotels: HotelUpdateManyWithoutAreaInput
}

input AreaUpdateManyDataInput {
  name: String
  code: String
  slug: String
}

input AreaUpdateManyMutationInput {
  name: String
  code: String
  slug: String
}

input AreaUpdateManyWithoutCountryInput {
  create: [AreaCreateWithoutCountryInput!]
  delete: [AreaWhereUniqueInput!]
  connect: [AreaWhereUniqueInput!]
  disconnect: [AreaWhereUniqueInput!]
  update: [AreaUpdateWithWhereUniqueWithoutCountryInput!]
  upsert: [AreaUpsertWithWhereUniqueWithoutCountryInput!]
  deleteMany: [AreaScalarWhereInput!]
  updateMany: [AreaUpdateManyWithWhereNestedInput!]
}

input AreaUpdateManyWithWhereNestedInput {
  where: AreaScalarWhereInput!
  data: AreaUpdateManyDataInput!
}

input AreaUpdateOneRequiredWithoutHotelsInput {
  create: AreaCreateWithoutHotelsInput
  update: AreaUpdateWithoutHotelsDataInput
  upsert: AreaUpsertWithoutHotelsInput
  connect: AreaWhereUniqueInput
}

input AreaUpdateWithoutCountryDataInput {
  name: String
  code: String
  slug: String
  hotels: HotelUpdateManyWithoutAreaInput
}

input AreaUpdateWithoutHotelsDataInput {
  name: String
  code: String
  slug: String
  country: CountryUpdateOneRequiredWithoutAreasInput
}

input AreaUpdateWithWhereUniqueWithoutCountryInput {
  where: AreaWhereUniqueInput!
  data: AreaUpdateWithoutCountryDataInput!
}

input AreaUpsertWithoutHotelsInput {
  update: AreaUpdateWithoutHotelsDataInput!
  create: AreaCreateWithoutHotelsInput!
}

input AreaUpsertWithWhereUniqueWithoutCountryInput {
  where: AreaWhereUniqueInput!
  update: AreaUpdateWithoutCountryDataInput!
  create: AreaCreateWithoutCountryInput!
}

input AreaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  country: CountryWhereInput
  hotels_every: HotelWhereInput
  hotels_some: HotelWhereInput
  hotels_none: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AreaWhereInput!]
  OR: [AreaWhereInput!]
  NOT: [AreaWhereInput!]
}

input AreaWhereUniqueInput {
  id: ID
  name: String
  code: String
  slug: String
}

type BatchPayload {
  count: Long!
}

type Booking {
  id: ID!
  isPaid: Boolean!
  isConfirmed: Boolean!
  checkIn: DateTime!
  checkOut: DateTime!
  qty: Int!
  nights: Int!
  totalAmount: Int!
  hotel: Hotel!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BookingConnection {
  pageInfo: PageInfo!
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime!
  checkOut: DateTime!
  qty: Int!
  nights: Int!
  totalAmount: Int!
  hotel: HotelCreateOneWithoutBookingsInput!
  user: UserCreateOneWithoutBookingsInput!
}

input BookingCreateManyWithoutHotelInput {
  create: [BookingCreateWithoutHotelInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateManyWithoutUserInput {
  create: [BookingCreateWithoutUserInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateWithoutHotelInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime!
  checkOut: DateTime!
  qty: Int!
  nights: Int!
  totalAmount: Int!
  user: UserCreateOneWithoutBookingsInput!
}

input BookingCreateWithoutUserInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime!
  checkOut: DateTime!
  qty: Int!
  nights: Int!
  totalAmount: Int!
  hotel: HotelCreateOneWithoutBookingsInput!
}

type BookingEdge {
  node: Booking!
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  isPaid_ASC
  isPaid_DESC
  isConfirmed_ASC
  isConfirmed_DESC
  checkIn_ASC
  checkIn_DESC
  checkOut_ASC
  checkOut_DESC
  qty_ASC
  qty_DESC
  nights_ASC
  nights_DESC
  totalAmount_ASC
  totalAmount_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookingPreviousValues {
  id: ID!
  isPaid: Boolean!
  isConfirmed: Boolean!
  checkIn: DateTime!
  checkOut: DateTime!
  qty: Int!
  nights: Int!
  totalAmount: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BookingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isPaid: Boolean
  isPaid_not: Boolean
  isConfirmed: Boolean
  isConfirmed_not: Boolean
  checkIn: DateTime
  checkIn_not: DateTime
  checkIn_in: [DateTime!]
  checkIn_not_in: [DateTime!]
  checkIn_lt: DateTime
  checkIn_lte: DateTime
  checkIn_gt: DateTime
  checkIn_gte: DateTime
  checkOut: DateTime
  checkOut_not: DateTime
  checkOut_in: [DateTime!]
  checkOut_not_in: [DateTime!]
  checkOut_lt: DateTime
  checkOut_lte: DateTime
  checkOut_gt: DateTime
  checkOut_gte: DateTime
  qty: Int
  qty_not: Int
  qty_in: [Int!]
  qty_not_in: [Int!]
  qty_lt: Int
  qty_lte: Int
  qty_gt: Int
  qty_gte: Int
  nights: Int
  nights_not: Int
  nights_in: [Int!]
  nights_not_in: [Int!]
  nights_lt: Int
  nights_lte: Int
  nights_gt: Int
  nights_gte: Int
  totalAmount: Int
  totalAmount_not: Int
  totalAmount_in: [Int!]
  totalAmount_not_in: [Int!]
  totalAmount_lt: Int
  totalAmount_lte: Int
  totalAmount_gt: Int
  totalAmount_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BookingScalarWhereInput!]
  OR: [BookingScalarWhereInput!]
  NOT: [BookingScalarWhereInput!]
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
  AND: [BookingSubscriptionWhereInput!]
  OR: [BookingSubscriptionWhereInput!]
  NOT: [BookingSubscriptionWhereInput!]
}

input BookingUpdateInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime
  checkOut: DateTime
  qty: Int
  nights: Int
  totalAmount: Int
  hotel: HotelUpdateOneRequiredWithoutBookingsInput
  user: UserUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateManyDataInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime
  checkOut: DateTime
  qty: Int
  nights: Int
  totalAmount: Int
}

input BookingUpdateManyMutationInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime
  checkOut: DateTime
  qty: Int
  nights: Int
  totalAmount: Int
}

input BookingUpdateManyWithoutHotelInput {
  create: [BookingCreateWithoutHotelInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutHotelInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutHotelInput!]
  deleteMany: [BookingScalarWhereInput!]
  updateMany: [BookingUpdateManyWithWhereNestedInput!]
}

input BookingUpdateManyWithoutUserInput {
  create: [BookingCreateWithoutUserInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [BookingScalarWhereInput!]
  updateMany: [BookingUpdateManyWithWhereNestedInput!]
}

input BookingUpdateManyWithWhereNestedInput {
  where: BookingScalarWhereInput!
  data: BookingUpdateManyDataInput!
}

input BookingUpdateWithoutHotelDataInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime
  checkOut: DateTime
  qty: Int
  nights: Int
  totalAmount: Int
  user: UserUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateWithoutUserDataInput {
  isPaid: Boolean
  isConfirmed: Boolean
  checkIn: DateTime
  checkOut: DateTime
  qty: Int
  nights: Int
  totalAmount: Int
  hotel: HotelUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateWithWhereUniqueWithoutHotelInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutHotelDataInput!
}

input BookingUpdateWithWhereUniqueWithoutUserInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutUserDataInput!
}

input BookingUpsertWithWhereUniqueWithoutHotelInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutHotelDataInput!
  create: BookingCreateWithoutHotelInput!
}

input BookingUpsertWithWhereUniqueWithoutUserInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutUserDataInput!
  create: BookingCreateWithoutUserInput!
}

input BookingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isPaid: Boolean
  isPaid_not: Boolean
  isConfirmed: Boolean
  isConfirmed_not: Boolean
  checkIn: DateTime
  checkIn_not: DateTime
  checkIn_in: [DateTime!]
  checkIn_not_in: [DateTime!]
  checkIn_lt: DateTime
  checkIn_lte: DateTime
  checkIn_gt: DateTime
  checkIn_gte: DateTime
  checkOut: DateTime
  checkOut_not: DateTime
  checkOut_in: [DateTime!]
  checkOut_not_in: [DateTime!]
  checkOut_lt: DateTime
  checkOut_lte: DateTime
  checkOut_gt: DateTime
  checkOut_gte: DateTime
  qty: Int
  qty_not: Int
  qty_in: [Int!]
  qty_not_in: [Int!]
  qty_lt: Int
  qty_lte: Int
  qty_gt: Int
  qty_gte: Int
  nights: Int
  nights_not: Int
  nights_in: [Int!]
  nights_not_in: [Int!]
  nights_lt: Int
  nights_lte: Int
  nights_gt: Int
  nights_gte: Int
  totalAmount: Int
  totalAmount_not: Int
  totalAmount_in: [Int!]
  totalAmount_not_in: [Int!]
  totalAmount_lt: Int
  totalAmount_lte: Int
  totalAmount_gt: Int
  totalAmount_gte: Int
  hotel: HotelWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BookingWhereInput!]
  OR: [BookingWhereInput!]
  NOT: [BookingWhereInput!]
}

input BookingWhereUniqueInput {
  id: ID
}

type Contact {
  id: ID!
  name: String!
  email: String!
  tel: String!
  title: String!
  reference: String
  description: String!
  isReplied: Boolean!
  replyMessage: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ContactConnection {
  pageInfo: PageInfo!
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  name: String!
  email: String!
  tel: String!
  title: String!
  reference: String
  description: String!
  isReplied: Boolean
  replyMessage: String
}

type ContactEdge {
  node: Contact!
  cursor: String!
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  tel_ASC
  tel_DESC
  title_ASC
  title_DESC
  reference_ASC
  reference_DESC
  description_ASC
  description_DESC
  isReplied_ASC
  isReplied_DESC
  replyMessage_ASC
  replyMessage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContactPreviousValues {
  id: ID!
  name: String!
  email: String!
  tel: String!
  title: String!
  reference: String
  description: String!
  isReplied: Boolean!
  replyMessage: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
  AND: [ContactSubscriptionWhereInput!]
  OR: [ContactSubscriptionWhereInput!]
  NOT: [ContactSubscriptionWhereInput!]
}

input ContactUpdateInput {
  name: String
  email: String
  tel: String
  title: String
  reference: String
  description: String
  isReplied: Boolean
  replyMessage: String
}

input ContactUpdateManyMutationInput {
  name: String
  email: String
  tel: String
  title: String
  reference: String
  description: String
  isReplied: Boolean
  replyMessage: String
}

input ContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  tel: String
  tel_not: String
  tel_in: [String!]
  tel_not_in: [String!]
  tel_lt: String
  tel_lte: String
  tel_gt: String
  tel_gte: String
  tel_contains: String
  tel_not_contains: String
  tel_starts_with: String
  tel_not_starts_with: String
  tel_ends_with: String
  tel_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  reference: String
  reference_not: String
  reference_in: [String!]
  reference_not_in: [String!]
  reference_lt: String
  reference_lte: String
  reference_gt: String
  reference_gte: String
  reference_contains: String
  reference_not_contains: String
  reference_starts_with: String
  reference_not_starts_with: String
  reference_ends_with: String
  reference_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  isReplied: Boolean
  isReplied_not: Boolean
  replyMessage: String
  replyMessage_not: String
  replyMessage_in: [String!]
  replyMessage_not_in: [String!]
  replyMessage_lt: String
  replyMessage_lte: String
  replyMessage_gt: String
  replyMessage_gte: String
  replyMessage_contains: String
  replyMessage_not_contains: String
  replyMessage_starts_with: String
  replyMessage_not_starts_with: String
  replyMessage_ends_with: String
  replyMessage_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ContactWhereInput!]
  OR: [ContactWhereInput!]
  NOT: [ContactWhereInput!]
}

input ContactWhereUniqueInput {
  id: ID
}

type Country {
  id: ID!
  name: String!
  code: String!
  slug: String!
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area!]
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CountryConnection {
  pageInfo: PageInfo!
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  name: String!
  code: String!
  slug: String!
  areas: AreaCreateManyWithoutCountryInput
  hotels: HotelCreateManyWithoutCountryInput
}

input CountryCreateOneWithoutAreasInput {
  create: CountryCreateWithoutAreasInput
  connect: CountryWhereUniqueInput
}

input CountryCreateOneWithoutHotelsInput {
  create: CountryCreateWithoutHotelsInput
  connect: CountryWhereUniqueInput
}

input CountryCreateWithoutAreasInput {
  name: String!
  code: String!
  slug: String!
  hotels: HotelCreateManyWithoutCountryInput
}

input CountryCreateWithoutHotelsInput {
  name: String!
  code: String!
  slug: String!
  areas: AreaCreateManyWithoutCountryInput
}

type CountryEdge {
  node: Country!
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CountryPreviousValues {
  id: ID!
  name: String!
  code: String!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
  AND: [CountrySubscriptionWhereInput!]
  OR: [CountrySubscriptionWhereInput!]
  NOT: [CountrySubscriptionWhereInput!]
}

input CountryUpdateInput {
  name: String
  code: String
  slug: String
  areas: AreaUpdateManyWithoutCountryInput
  hotels: HotelUpdateManyWithoutCountryInput
}

input CountryUpdateManyMutationInput {
  name: String
  code: String
  slug: String
}

input CountryUpdateOneRequiredWithoutAreasInput {
  create: CountryCreateWithoutAreasInput
  update: CountryUpdateWithoutAreasDataInput
  upsert: CountryUpsertWithoutAreasInput
  connect: CountryWhereUniqueInput
}

input CountryUpdateOneRequiredWithoutHotelsInput {
  create: CountryCreateWithoutHotelsInput
  update: CountryUpdateWithoutHotelsDataInput
  upsert: CountryUpsertWithoutHotelsInput
  connect: CountryWhereUniqueInput
}

input CountryUpdateWithoutAreasDataInput {
  name: String
  code: String
  slug: String
  hotels: HotelUpdateManyWithoutCountryInput
}

input CountryUpdateWithoutHotelsDataInput {
  name: String
  code: String
  slug: String
  areas: AreaUpdateManyWithoutCountryInput
}

input CountryUpsertWithoutAreasInput {
  update: CountryUpdateWithoutAreasDataInput!
  create: CountryCreateWithoutAreasInput!
}

input CountryUpsertWithoutHotelsInput {
  update: CountryUpdateWithoutHotelsDataInput!
  create: CountryCreateWithoutHotelsInput!
}

input CountryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  areas_every: AreaWhereInput
  areas_some: AreaWhereInput
  areas_none: AreaWhereInput
  hotels_every: HotelWhereInput
  hotels_some: HotelWhereInput
  hotels_none: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CountryWhereInput!]
  OR: [CountryWhereInput!]
  NOT: [CountryWhereInput!]
}

input CountryWhereUniqueInput {
  id: ID
  name: String
  code: String
  slug: String
}

scalar DateTime

type Favorite {
  id: ID!
  user: User!
  hotels: Hotel!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type FavoriteConnection {
  pageInfo: PageInfo!
  edges: [FavoriteEdge]!
  aggregate: AggregateFavorite!
}

input FavoriteCreateInput {
  user: UserCreateOneWithoutFavoritesInput!
  hotels: HotelCreateOneWithoutFavoritesInput!
}

input FavoriteCreateManyWithoutHotelsInput {
  create: [FavoriteCreateWithoutHotelsInput!]
  connect: [FavoriteWhereUniqueInput!]
}

input FavoriteCreateManyWithoutUserInput {
  create: [FavoriteCreateWithoutUserInput!]
  connect: [FavoriteWhereUniqueInput!]
}

input FavoriteCreateWithoutHotelsInput {
  user: UserCreateOneWithoutFavoritesInput!
}

input FavoriteCreateWithoutUserInput {
  hotels: HotelCreateOneWithoutFavoritesInput!
}

type FavoriteEdge {
  node: Favorite!
  cursor: String!
}

enum FavoriteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FavoritePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input FavoriteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [FavoriteScalarWhereInput!]
  OR: [FavoriteScalarWhereInput!]
  NOT: [FavoriteScalarWhereInput!]
}

type FavoriteSubscriptionPayload {
  mutation: MutationType!
  node: Favorite
  updatedFields: [String!]
  previousValues: FavoritePreviousValues
}

input FavoriteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FavoriteWhereInput
  AND: [FavoriteSubscriptionWhereInput!]
  OR: [FavoriteSubscriptionWhereInput!]
  NOT: [FavoriteSubscriptionWhereInput!]
}

input FavoriteUpdateInput {
  user: UserUpdateOneRequiredWithoutFavoritesInput
  hotels: HotelUpdateOneRequiredWithoutFavoritesInput
}

input FavoriteUpdateManyWithoutHotelsInput {
  create: [FavoriteCreateWithoutHotelsInput!]
  delete: [FavoriteWhereUniqueInput!]
  connect: [FavoriteWhereUniqueInput!]
  disconnect: [FavoriteWhereUniqueInput!]
  update: [FavoriteUpdateWithWhereUniqueWithoutHotelsInput!]
  upsert: [FavoriteUpsertWithWhereUniqueWithoutHotelsInput!]
  deleteMany: [FavoriteScalarWhereInput!]
}

input FavoriteUpdateManyWithoutUserInput {
  create: [FavoriteCreateWithoutUserInput!]
  delete: [FavoriteWhereUniqueInput!]
  connect: [FavoriteWhereUniqueInput!]
  disconnect: [FavoriteWhereUniqueInput!]
  update: [FavoriteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [FavoriteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [FavoriteScalarWhereInput!]
}

input FavoriteUpdateWithoutHotelsDataInput {
  user: UserUpdateOneRequiredWithoutFavoritesInput
}

input FavoriteUpdateWithoutUserDataInput {
  hotels: HotelUpdateOneRequiredWithoutFavoritesInput
}

input FavoriteUpdateWithWhereUniqueWithoutHotelsInput {
  where: FavoriteWhereUniqueInput!
  data: FavoriteUpdateWithoutHotelsDataInput!
}

input FavoriteUpdateWithWhereUniqueWithoutUserInput {
  where: FavoriteWhereUniqueInput!
  data: FavoriteUpdateWithoutUserDataInput!
}

input FavoriteUpsertWithWhereUniqueWithoutHotelsInput {
  where: FavoriteWhereUniqueInput!
  update: FavoriteUpdateWithoutHotelsDataInput!
  create: FavoriteCreateWithoutHotelsInput!
}

input FavoriteUpsertWithWhereUniqueWithoutUserInput {
  where: FavoriteWhereUniqueInput!
  update: FavoriteUpdateWithoutUserDataInput!
  create: FavoriteCreateWithoutUserInput!
}

input FavoriteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  hotels: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [FavoriteWhereInput!]
  OR: [FavoriteWhereInput!]
  NOT: [FavoriteWhereInput!]
}

input FavoriteWhereUniqueInput {
  id: ID
}

type Hotel {
  id: ID!
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean!
  country: Country!
  area: Area!
  photos: HotelPhoto
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  favorites(where: FavoriteWhereInput, orderBy: FavoriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Favorite!]
  advantages(where: AdvantageWhereInput, orderBy: AdvantageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Advantage!]
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HotelConnection {
  pageInfo: PageInfo!
  edges: [HotelEdge]!
  aggregate: AggregateHotel!
}

input HotelCreateInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateManyWithoutAdvantagesInput {
  create: [HotelCreateWithoutAdvantagesInput!]
  connect: [HotelWhereUniqueInput!]
}

input HotelCreateManyWithoutAreaInput {
  create: [HotelCreateWithoutAreaInput!]
  connect: [HotelWhereUniqueInput!]
}

input HotelCreateManyWithoutCountryInput {
  create: [HotelCreateWithoutCountryInput!]
  connect: [HotelWhereUniqueInput!]
}

input HotelCreateOneWithoutBookingsInput {
  create: HotelCreateWithoutBookingsInput
  connect: HotelWhereUniqueInput
}

input HotelCreateOneWithoutFavoritesInput {
  create: HotelCreateWithoutFavoritesInput
  connect: HotelWhereUniqueInput
}

input HotelCreateOneWithoutPhotosInput {
  create: HotelCreateWithoutPhotosInput
  connect: HotelWhereUniqueInput
}

input HotelCreateOneWithoutReviewsInput {
  create: HotelCreateWithoutReviewsInput
  connect: HotelWhereUniqueInput
}

input HotelCreateOneWithoutRoomsInput {
  create: HotelCreateWithoutRoomsInput
  connect: HotelWhereUniqueInput
}

input HotelCreateWithoutAdvantagesInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutAreaInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutBookingsInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutCountryInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutFavoritesInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutPhotosInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

input HotelCreateWithoutReviewsInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  rooms: RoomCreateManyWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
}

input HotelCreateWithoutRoomsInput {
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean
  country: CountryCreateOneWithoutHotelsInput!
  area: AreaCreateOneWithoutHotelsInput!
  photos: HotelPhotoCreateOneWithoutHotelInput
  favorites: FavoriteCreateManyWithoutHotelsInput
  advantages: AdvantageCreateManyWithoutHotelsInput
  bookings: BookingCreateManyWithoutHotelInput
  reviews: ReviewCreateManyWithoutHotelInput
}

type HotelEdge {
  node: Hotel!
  cursor: String!
}

enum HotelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  appliances_ASC
  appliances_DESC
  tel_ASC
  tel_DESC
  fax_ASC
  fax_DESC
  email_ASC
  email_DESC
  isPublished_ASC
  isPublished_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HotelPhoto {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  hotel: Hotel
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HotelPhotoConnection {
  pageInfo: PageInfo!
  edges: [HotelPhotoEdge]!
  aggregate: AggregateHotelPhoto!
}

input HotelPhotoCreateInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  hotel: HotelCreateOneWithoutPhotosInput
}

input HotelPhotoCreateOneWithoutHotelInput {
  create: HotelPhotoCreateWithoutHotelInput
  connect: HotelPhotoWhereUniqueInput
}

input HotelPhotoCreateWithoutHotelInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
}

type HotelPhotoEdge {
  node: HotelPhoto!
  cursor: String!
}

enum HotelPhotoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  count_ASC
  count_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HotelPhotoPreviousValues {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HotelPhotoSubscriptionPayload {
  mutation: MutationType!
  node: HotelPhoto
  updatedFields: [String!]
  previousValues: HotelPhotoPreviousValues
}

input HotelPhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HotelPhotoWhereInput
  AND: [HotelPhotoSubscriptionWhereInput!]
  OR: [HotelPhotoSubscriptionWhereInput!]
  NOT: [HotelPhotoSubscriptionWhereInput!]
}

input HotelPhotoUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  hotel: HotelUpdateOneWithoutPhotosInput
}

input HotelPhotoUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input HotelPhotoUpdateOneWithoutHotelInput {
  create: HotelPhotoCreateWithoutHotelInput
  update: HotelPhotoUpdateWithoutHotelDataInput
  upsert: HotelPhotoUpsertWithoutHotelInput
  delete: Boolean
  disconnect: Boolean
  connect: HotelPhotoWhereUniqueInput
}

input HotelPhotoUpdateWithoutHotelDataInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input HotelPhotoUpsertWithoutHotelInput {
  update: HotelPhotoUpdateWithoutHotelDataInput!
  create: HotelPhotoCreateWithoutHotelInput!
}

input HotelPhotoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  hotel: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [HotelPhotoWhereInput!]
  OR: [HotelPhotoWhereInput!]
  NOT: [HotelPhotoWhereInput!]
}

input HotelPhotoWhereUniqueInput {
  id: ID
}

type HotelPreviousValues {
  id: ID!
  name: String!
  address: String!
  latitude: Float
  longitude: Float
  appliances: String!
  tel: String!
  fax: String
  email: String!
  isPublished: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input HotelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  appliances: String
  appliances_not: String
  appliances_in: [String!]
  appliances_not_in: [String!]
  appliances_lt: String
  appliances_lte: String
  appliances_gt: String
  appliances_gte: String
  appliances_contains: String
  appliances_not_contains: String
  appliances_starts_with: String
  appliances_not_starts_with: String
  appliances_ends_with: String
  appliances_not_ends_with: String
  tel: String
  tel_not: String
  tel_in: [String!]
  tel_not_in: [String!]
  tel_lt: String
  tel_lte: String
  tel_gt: String
  tel_gte: String
  tel_contains: String
  tel_not_contains: String
  tel_starts_with: String
  tel_not_starts_with: String
  tel_ends_with: String
  tel_not_ends_with: String
  fax: String
  fax_not: String
  fax_in: [String!]
  fax_not_in: [String!]
  fax_lt: String
  fax_lte: String
  fax_gt: String
  fax_gte: String
  fax_contains: String
  fax_not_contains: String
  fax_starts_with: String
  fax_not_starts_with: String
  fax_ends_with: String
  fax_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [HotelScalarWhereInput!]
  OR: [HotelScalarWhereInput!]
  NOT: [HotelScalarWhereInput!]
}

type HotelSubscriptionPayload {
  mutation: MutationType!
  node: Hotel
  updatedFields: [String!]
  previousValues: HotelPreviousValues
}

input HotelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HotelWhereInput
  AND: [HotelSubscriptionWhereInput!]
  OR: [HotelSubscriptionWhereInput!]
  NOT: [HotelSubscriptionWhereInput!]
}

input HotelUpdateInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateManyDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
}

input HotelUpdateManyMutationInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
}

input HotelUpdateManyWithoutAdvantagesInput {
  create: [HotelCreateWithoutAdvantagesInput!]
  delete: [HotelWhereUniqueInput!]
  connect: [HotelWhereUniqueInput!]
  disconnect: [HotelWhereUniqueInput!]
  update: [HotelUpdateWithWhereUniqueWithoutAdvantagesInput!]
  upsert: [HotelUpsertWithWhereUniqueWithoutAdvantagesInput!]
  deleteMany: [HotelScalarWhereInput!]
  updateMany: [HotelUpdateManyWithWhereNestedInput!]
}

input HotelUpdateManyWithoutAreaInput {
  create: [HotelCreateWithoutAreaInput!]
  delete: [HotelWhereUniqueInput!]
  connect: [HotelWhereUniqueInput!]
  disconnect: [HotelWhereUniqueInput!]
  update: [HotelUpdateWithWhereUniqueWithoutAreaInput!]
  upsert: [HotelUpsertWithWhereUniqueWithoutAreaInput!]
  deleteMany: [HotelScalarWhereInput!]
  updateMany: [HotelUpdateManyWithWhereNestedInput!]
}

input HotelUpdateManyWithoutCountryInput {
  create: [HotelCreateWithoutCountryInput!]
  delete: [HotelWhereUniqueInput!]
  connect: [HotelWhereUniqueInput!]
  disconnect: [HotelWhereUniqueInput!]
  update: [HotelUpdateWithWhereUniqueWithoutCountryInput!]
  upsert: [HotelUpsertWithWhereUniqueWithoutCountryInput!]
  deleteMany: [HotelScalarWhereInput!]
  updateMany: [HotelUpdateManyWithWhereNestedInput!]
}

input HotelUpdateManyWithWhereNestedInput {
  where: HotelScalarWhereInput!
  data: HotelUpdateManyDataInput!
}

input HotelUpdateOneRequiredWithoutBookingsInput {
  create: HotelCreateWithoutBookingsInput
  update: HotelUpdateWithoutBookingsDataInput
  upsert: HotelUpsertWithoutBookingsInput
  connect: HotelWhereUniqueInput
}

input HotelUpdateOneRequiredWithoutFavoritesInput {
  create: HotelCreateWithoutFavoritesInput
  update: HotelUpdateWithoutFavoritesDataInput
  upsert: HotelUpsertWithoutFavoritesInput
  connect: HotelWhereUniqueInput
}

input HotelUpdateOneRequiredWithoutReviewsInput {
  create: HotelCreateWithoutReviewsInput
  update: HotelUpdateWithoutReviewsDataInput
  upsert: HotelUpsertWithoutReviewsInput
  connect: HotelWhereUniqueInput
}

input HotelUpdateOneRequiredWithoutRoomsInput {
  create: HotelCreateWithoutRoomsInput
  update: HotelUpdateWithoutRoomsDataInput
  upsert: HotelUpsertWithoutRoomsInput
  connect: HotelWhereUniqueInput
}

input HotelUpdateOneWithoutPhotosInput {
  create: HotelCreateWithoutPhotosInput
  update: HotelUpdateWithoutPhotosDataInput
  upsert: HotelUpsertWithoutPhotosInput
  delete: Boolean
  disconnect: Boolean
  connect: HotelWhereUniqueInput
}

input HotelUpdateWithoutAdvantagesDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutAreaDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutBookingsDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutCountryDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutFavoritesDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutPhotosDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutReviewsDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  rooms: RoomUpdateManyWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
}

input HotelUpdateWithoutRoomsDataInput {
  name: String
  address: String
  latitude: Float
  longitude: Float
  appliances: String
  tel: String
  fax: String
  email: String
  isPublished: Boolean
  country: CountryUpdateOneRequiredWithoutHotelsInput
  area: AreaUpdateOneRequiredWithoutHotelsInput
  photos: HotelPhotoUpdateOneWithoutHotelInput
  favorites: FavoriteUpdateManyWithoutHotelsInput
  advantages: AdvantageUpdateManyWithoutHotelsInput
  bookings: BookingUpdateManyWithoutHotelInput
  reviews: ReviewUpdateManyWithoutHotelInput
}

input HotelUpdateWithWhereUniqueWithoutAdvantagesInput {
  where: HotelWhereUniqueInput!
  data: HotelUpdateWithoutAdvantagesDataInput!
}

input HotelUpdateWithWhereUniqueWithoutAreaInput {
  where: HotelWhereUniqueInput!
  data: HotelUpdateWithoutAreaDataInput!
}

input HotelUpdateWithWhereUniqueWithoutCountryInput {
  where: HotelWhereUniqueInput!
  data: HotelUpdateWithoutCountryDataInput!
}

input HotelUpsertWithoutBookingsInput {
  update: HotelUpdateWithoutBookingsDataInput!
  create: HotelCreateWithoutBookingsInput!
}

input HotelUpsertWithoutFavoritesInput {
  update: HotelUpdateWithoutFavoritesDataInput!
  create: HotelCreateWithoutFavoritesInput!
}

input HotelUpsertWithoutPhotosInput {
  update: HotelUpdateWithoutPhotosDataInput!
  create: HotelCreateWithoutPhotosInput!
}

input HotelUpsertWithoutReviewsInput {
  update: HotelUpdateWithoutReviewsDataInput!
  create: HotelCreateWithoutReviewsInput!
}

input HotelUpsertWithoutRoomsInput {
  update: HotelUpdateWithoutRoomsDataInput!
  create: HotelCreateWithoutRoomsInput!
}

input HotelUpsertWithWhereUniqueWithoutAdvantagesInput {
  where: HotelWhereUniqueInput!
  update: HotelUpdateWithoutAdvantagesDataInput!
  create: HotelCreateWithoutAdvantagesInput!
}

input HotelUpsertWithWhereUniqueWithoutAreaInput {
  where: HotelWhereUniqueInput!
  update: HotelUpdateWithoutAreaDataInput!
  create: HotelCreateWithoutAreaInput!
}

input HotelUpsertWithWhereUniqueWithoutCountryInput {
  where: HotelWhereUniqueInput!
  update: HotelUpdateWithoutCountryDataInput!
  create: HotelCreateWithoutCountryInput!
}

input HotelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  appliances: String
  appliances_not: String
  appliances_in: [String!]
  appliances_not_in: [String!]
  appliances_lt: String
  appliances_lte: String
  appliances_gt: String
  appliances_gte: String
  appliances_contains: String
  appliances_not_contains: String
  appliances_starts_with: String
  appliances_not_starts_with: String
  appliances_ends_with: String
  appliances_not_ends_with: String
  tel: String
  tel_not: String
  tel_in: [String!]
  tel_not_in: [String!]
  tel_lt: String
  tel_lte: String
  tel_gt: String
  tel_gte: String
  tel_contains: String
  tel_not_contains: String
  tel_starts_with: String
  tel_not_starts_with: String
  tel_ends_with: String
  tel_not_ends_with: String
  fax: String
  fax_not: String
  fax_in: [String!]
  fax_not_in: [String!]
  fax_lt: String
  fax_lte: String
  fax_gt: String
  fax_gte: String
  fax_contains: String
  fax_not_contains: String
  fax_starts_with: String
  fax_not_starts_with: String
  fax_ends_with: String
  fax_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  country: CountryWhereInput
  area: AreaWhereInput
  photos: HotelPhotoWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  favorites_every: FavoriteWhereInput
  favorites_some: FavoriteWhereInput
  favorites_none: FavoriteWhereInput
  advantages_every: AdvantageWhereInput
  advantages_some: AdvantageWhereInput
  advantages_none: AdvantageWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [HotelWhereInput!]
  OR: [HotelWhereInput!]
  NOT: [HotelWhereInput!]
}

input HotelWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createAdvantage(data: AdvantageCreateInput!): Advantage!
  updateAdvantage(data: AdvantageUpdateInput!, where: AdvantageWhereUniqueInput!): Advantage
  updateManyAdvantages(data: AdvantageUpdateManyMutationInput!, where: AdvantageWhereInput): BatchPayload!
  upsertAdvantage(where: AdvantageWhereUniqueInput!, create: AdvantageCreateInput!, update: AdvantageUpdateInput!): Advantage!
  deleteAdvantage(where: AdvantageWhereUniqueInput!): Advantage
  deleteManyAdvantages(where: AdvantageWhereInput): BatchPayload!
  createAdvantageIcon(data: AdvantageIconCreateInput!): AdvantageIcon!
  updateAdvantageIcon(data: AdvantageIconUpdateInput!, where: AdvantageIconWhereUniqueInput!): AdvantageIcon
  updateManyAdvantageIcons(data: AdvantageIconUpdateManyMutationInput!, where: AdvantageIconWhereInput): BatchPayload!
  upsertAdvantageIcon(where: AdvantageIconWhereUniqueInput!, create: AdvantageIconCreateInput!, update: AdvantageIconUpdateInput!): AdvantageIcon!
  deleteAdvantageIcon(where: AdvantageIconWhereUniqueInput!): AdvantageIcon
  deleteManyAdvantageIcons(where: AdvantageIconWhereInput): BatchPayload!
  createArea(data: AreaCreateInput!): Area!
  updateArea(data: AreaUpdateInput!, where: AreaWhereUniqueInput!): Area
  updateManyAreas(data: AreaUpdateManyMutationInput!, where: AreaWhereInput): BatchPayload!
  upsertArea(where: AreaWhereUniqueInput!, create: AreaCreateInput!, update: AreaUpdateInput!): Area!
  deleteArea(where: AreaWhereUniqueInput!): Area
  deleteManyAreas(where: AreaWhereInput): BatchPayload!
  createBooking(data: BookingCreateInput!): Booking!
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateManyBookings(data: BookingUpdateManyMutationInput!, where: BookingWhereInput): BatchPayload!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  createContact(data: ContactCreateInput!): Contact!
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateManyContacts(data: ContactUpdateManyMutationInput!, where: ContactWhereInput): BatchPayload!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
  createCountry(data: CountryCreateInput!): Country!
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateManyCountries(data: CountryUpdateManyMutationInput!, where: CountryWhereInput): BatchPayload!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  createFavorite(data: FavoriteCreateInput!): Favorite!
  updateFavorite(data: FavoriteUpdateInput!, where: FavoriteWhereUniqueInput!): Favorite
  upsertFavorite(where: FavoriteWhereUniqueInput!, create: FavoriteCreateInput!, update: FavoriteUpdateInput!): Favorite!
  deleteFavorite(where: FavoriteWhereUniqueInput!): Favorite
  deleteManyFavorites(where: FavoriteWhereInput): BatchPayload!
  createHotel(data: HotelCreateInput!): Hotel!
  updateHotel(data: HotelUpdateInput!, where: HotelWhereUniqueInput!): Hotel
  updateManyHotels(data: HotelUpdateManyMutationInput!, where: HotelWhereInput): BatchPayload!
  upsertHotel(where: HotelWhereUniqueInput!, create: HotelCreateInput!, update: HotelUpdateInput!): Hotel!
  deleteHotel(where: HotelWhereUniqueInput!): Hotel
  deleteManyHotels(where: HotelWhereInput): BatchPayload!
  createHotelPhoto(data: HotelPhotoCreateInput!): HotelPhoto!
  updateHotelPhoto(data: HotelPhotoUpdateInput!, where: HotelPhotoWhereUniqueInput!): HotelPhoto
  updateManyHotelPhotos(data: HotelPhotoUpdateManyMutationInput!, where: HotelPhotoWhereInput): BatchPayload!
  upsertHotelPhoto(where: HotelPhotoWhereUniqueInput!, create: HotelPhotoCreateInput!, update: HotelPhotoUpdateInput!): HotelPhoto!
  deleteHotelPhoto(where: HotelPhotoWhereUniqueInput!): HotelPhoto
  deleteManyHotelPhotos(where: HotelPhotoWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createPostCategory(data: PostCategoryCreateInput!): PostCategory!
  updatePostCategory(data: PostCategoryUpdateInput!, where: PostCategoryWhereUniqueInput!): PostCategory
  updateManyPostCategories(data: PostCategoryUpdateManyMutationInput!, where: PostCategoryWhereInput): BatchPayload!
  upsertPostCategory(where: PostCategoryWhereUniqueInput!, create: PostCategoryCreateInput!, update: PostCategoryUpdateInput!): PostCategory!
  deletePostCategory(where: PostCategoryWhereUniqueInput!): PostCategory
  deleteManyPostCategories(where: PostCategoryWhereInput): BatchPayload!
  createPostHero(data: PostHeroCreateInput!): PostHero!
  updatePostHero(data: PostHeroUpdateInput!, where: PostHeroWhereUniqueInput!): PostHero
  updateManyPostHeroes(data: PostHeroUpdateManyMutationInput!, where: PostHeroWhereInput): BatchPayload!
  upsertPostHero(where: PostHeroWhereUniqueInput!, create: PostHeroCreateInput!, update: PostHeroUpdateInput!): PostHero!
  deletePostHero(where: PostHeroWhereUniqueInput!): PostHero
  deleteManyPostHeroes(where: PostHeroWhereInput): BatchPayload!
  createPostPhotos(data: PostPhotosCreateInput!): PostPhotos!
  updatePostPhotos(data: PostPhotosUpdateInput!, where: PostPhotosWhereUniqueInput!): PostPhotos
  updateManyPostPhotoses(data: PostPhotosUpdateManyMutationInput!, where: PostPhotosWhereInput): BatchPayload!
  upsertPostPhotos(where: PostPhotosWhereUniqueInput!, create: PostPhotosCreateInput!, update: PostPhotosUpdateInput!): PostPhotos!
  deletePostPhotos(where: PostPhotosWhereUniqueInput!): PostPhotos
  deleteManyPostPhotoses(where: PostPhotosWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createRoom(data: RoomCreateInput!): Room!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateManyRooms(data: RoomUpdateManyMutationInput!, where: RoomWhereInput): BatchPayload!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  createRoomPhoto(data: RoomPhotoCreateInput!): RoomPhoto!
  updateRoomPhoto(data: RoomPhotoUpdateInput!, where: RoomPhotoWhereUniqueInput!): RoomPhoto
  updateManyRoomPhotos(data: RoomPhotoUpdateManyMutationInput!, where: RoomPhotoWhereInput): BatchPayload!
  upsertRoomPhoto(where: RoomPhotoWhereUniqueInput!, create: RoomPhotoCreateInput!, update: RoomPhotoUpdateInput!): RoomPhoto!
  deleteRoomPhoto(where: RoomPhotoWhereUniqueInput!): RoomPhoto
  deleteManyRoomPhotos(where: RoomPhotoWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserPhoto(data: UserPhotoCreateInput!): UserPhoto!
  updateUserPhoto(data: UserPhotoUpdateInput!, where: UserPhotoWhereUniqueInput!): UserPhoto
  updateManyUserPhotos(data: UserPhotoUpdateManyMutationInput!, where: UserPhotoWhereInput): BatchPayload!
  upsertUserPhoto(where: UserPhotoWhereUniqueInput!, create: UserPhotoCreateInput!, update: UserPhotoUpdateInput!): UserPhoto!
  deleteUserPhoto(where: UserPhotoWhereUniqueInput!): UserPhoto
  deleteManyUserPhotos(where: UserPhotoWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  mdContents: String!
  author: User!
  category: PostCategory
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  hero: PostHero
  photos: PostPhotos
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostCategory {
  id: ID!
  name: String!
  isRoot: Boolean!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  children(where: PostCategoryWhereInput, orderBy: PostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostCategory!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostCategoryConnection {
  pageInfo: PageInfo!
  edges: [PostCategoryEdge]!
  aggregate: AggregatePostCategory!
}

input PostCategoryCreateInput {
  name: String!
  isRoot: Boolean!
  posts: PostCreateManyWithoutCategoryInput
  children: PostCategoryCreateManyInput
}

input PostCategoryCreateManyInput {
  create: [PostCategoryCreateInput!]
  connect: [PostCategoryWhereUniqueInput!]
}

input PostCategoryCreateOneWithoutPostsInput {
  create: PostCategoryCreateWithoutPostsInput
  connect: PostCategoryWhereUniqueInput
}

input PostCategoryCreateWithoutPostsInput {
  name: String!
  isRoot: Boolean!
  children: PostCategoryCreateManyInput
}

type PostCategoryEdge {
  node: PostCategory!
  cursor: String!
}

enum PostCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  isRoot_ASC
  isRoot_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostCategoryPreviousValues {
  id: ID!
  name: String!
  isRoot: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostCategoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isRoot: Boolean
  isRoot_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostCategoryScalarWhereInput!]
  OR: [PostCategoryScalarWhereInput!]
  NOT: [PostCategoryScalarWhereInput!]
}

type PostCategorySubscriptionPayload {
  mutation: MutationType!
  node: PostCategory
  updatedFields: [String!]
  previousValues: PostCategoryPreviousValues
}

input PostCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostCategoryWhereInput
  AND: [PostCategorySubscriptionWhereInput!]
  OR: [PostCategorySubscriptionWhereInput!]
  NOT: [PostCategorySubscriptionWhereInput!]
}

input PostCategoryUpdateDataInput {
  name: String
  isRoot: Boolean
  posts: PostUpdateManyWithoutCategoryInput
  children: PostCategoryUpdateManyInput
}

input PostCategoryUpdateInput {
  name: String
  isRoot: Boolean
  posts: PostUpdateManyWithoutCategoryInput
  children: PostCategoryUpdateManyInput
}

input PostCategoryUpdateManyDataInput {
  name: String
  isRoot: Boolean
}

input PostCategoryUpdateManyInput {
  create: [PostCategoryCreateInput!]
  update: [PostCategoryUpdateWithWhereUniqueNestedInput!]
  upsert: [PostCategoryUpsertWithWhereUniqueNestedInput!]
  delete: [PostCategoryWhereUniqueInput!]
  connect: [PostCategoryWhereUniqueInput!]
  disconnect: [PostCategoryWhereUniqueInput!]
  deleteMany: [PostCategoryScalarWhereInput!]
  updateMany: [PostCategoryUpdateManyWithWhereNestedInput!]
}

input PostCategoryUpdateManyMutationInput {
  name: String
  isRoot: Boolean
}

input PostCategoryUpdateManyWithWhereNestedInput {
  where: PostCategoryScalarWhereInput!
  data: PostCategoryUpdateManyDataInput!
}

input PostCategoryUpdateOneWithoutPostsInput {
  create: PostCategoryCreateWithoutPostsInput
  update: PostCategoryUpdateWithoutPostsDataInput
  upsert: PostCategoryUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: PostCategoryWhereUniqueInput
}

input PostCategoryUpdateWithoutPostsDataInput {
  name: String
  isRoot: Boolean
  children: PostCategoryUpdateManyInput
}

input PostCategoryUpdateWithWhereUniqueNestedInput {
  where: PostCategoryWhereUniqueInput!
  data: PostCategoryUpdateDataInput!
}

input PostCategoryUpsertWithoutPostsInput {
  update: PostCategoryUpdateWithoutPostsDataInput!
  create: PostCategoryCreateWithoutPostsInput!
}

input PostCategoryUpsertWithWhereUniqueNestedInput {
  where: PostCategoryWhereUniqueInput!
  update: PostCategoryUpdateDataInput!
  create: PostCategoryCreateInput!
}

input PostCategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isRoot: Boolean
  isRoot_not: Boolean
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  children_every: PostCategoryWhereInput
  children_some: PostCategoryWhereInput
  children_none: PostCategoryWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostCategoryWhereInput!]
  OR: [PostCategoryWhereInput!]
  NOT: [PostCategoryWhereInput!]
}

input PostCategoryWhereUniqueInput {
  id: ID
  name: String
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  mdContents: String!
  author: UserCreateOneWithoutPostsInput!
  category: PostCategoryCreateOneWithoutPostsInput
  tags: TagCreateManyWithoutPostsInput
  hero: PostHeroCreateOneWithoutPostInput
  photos: PostPhotosCreateOneWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutCategoryInput {
  create: [PostCreateWithoutCategoryInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutTagsInput {
  create: [PostCreateWithoutTagsInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutHeroInput {
  create: PostCreateWithoutHeroInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutPhotosInput {
  create: PostCreateWithoutPhotosInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  title: String!
  mdContents: String!
  category: PostCategoryCreateOneWithoutPostsInput
  tags: TagCreateManyWithoutPostsInput
  hero: PostHeroCreateOneWithoutPostInput
  photos: PostPhotosCreateOneWithoutPostInput
}

input PostCreateWithoutCategoryInput {
  title: String!
  mdContents: String!
  author: UserCreateOneWithoutPostsInput!
  tags: TagCreateManyWithoutPostsInput
  hero: PostHeroCreateOneWithoutPostInput
  photos: PostPhotosCreateOneWithoutPostInput
}

input PostCreateWithoutHeroInput {
  title: String!
  mdContents: String!
  author: UserCreateOneWithoutPostsInput!
  category: PostCategoryCreateOneWithoutPostsInput
  tags: TagCreateManyWithoutPostsInput
  photos: PostPhotosCreateOneWithoutPostInput
}

input PostCreateWithoutPhotosInput {
  title: String!
  mdContents: String!
  author: UserCreateOneWithoutPostsInput!
  category: PostCategoryCreateOneWithoutPostsInput
  tags: TagCreateManyWithoutPostsInput
  hero: PostHeroCreateOneWithoutPostInput
}

input PostCreateWithoutTagsInput {
  title: String!
  mdContents: String!
  author: UserCreateOneWithoutPostsInput!
  category: PostCategoryCreateOneWithoutPostsInput
  hero: PostHeroCreateOneWithoutPostInput
  photos: PostPhotosCreateOneWithoutPostInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PostHero {
  id: ID!
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  post: Post
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostHeroConnection {
  pageInfo: PageInfo!
  edges: [PostHeroEdge]!
  aggregate: AggregatePostHero!
}

input PostHeroCreateInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  post: PostCreateOneWithoutHeroInput
}

input PostHeroCreateOneWithoutPostInput {
  create: PostHeroCreateWithoutPostInput
  connect: PostHeroWhereUniqueInput
}

input PostHeroCreateWithoutPostInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

type PostHeroEdge {
  node: PostHero!
  cursor: String!
}

enum PostHeroOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  mimeType_ASC
  mimeType_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostHeroPreviousValues {
  id: ID!
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostHeroSubscriptionPayload {
  mutation: MutationType!
  node: PostHero
  updatedFields: [String!]
  previousValues: PostHeroPreviousValues
}

input PostHeroSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostHeroWhereInput
  AND: [PostHeroSubscriptionWhereInput!]
  OR: [PostHeroSubscriptionWhereInput!]
  NOT: [PostHeroSubscriptionWhereInput!]
}

input PostHeroUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  post: PostUpdateOneWithoutHeroInput
}

input PostHeroUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input PostHeroUpdateOneWithoutPostInput {
  create: PostHeroCreateWithoutPostInput
  update: PostHeroUpdateWithoutPostDataInput
  upsert: PostHeroUpsertWithoutPostInput
  delete: Boolean
  disconnect: Boolean
  connect: PostHeroWhereUniqueInput
}

input PostHeroUpdateWithoutPostDataInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input PostHeroUpsertWithoutPostInput {
  update: PostHeroUpdateWithoutPostDataInput!
  create: PostHeroCreateWithoutPostInput!
}

input PostHeroWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  mimeType: String
  mimeType_not: String
  mimeType_in: [String!]
  mimeType_not_in: [String!]
  mimeType_lt: String
  mimeType_lte: String
  mimeType_gt: String
  mimeType_gte: String
  mimeType_contains: String
  mimeType_not_contains: String
  mimeType_starts_with: String
  mimeType_not_starts_with: String
  mimeType_ends_with: String
  mimeType_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  post: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostHeroWhereInput!]
  OR: [PostHeroWhereInput!]
  NOT: [PostHeroWhereInput!]
}

input PostHeroWhereUniqueInput {
  id: ID
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  mdContents_ASC
  mdContents_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPhotos {
  id: ID!
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  post: Post
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostPhotosConnection {
  pageInfo: PageInfo!
  edges: [PostPhotosEdge]!
  aggregate: AggregatePostPhotos!
}

input PostPhotosCreateInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  post: PostCreateOneWithoutPhotosInput
}

input PostPhotosCreateOneWithoutPostInput {
  create: PostPhotosCreateWithoutPostInput
  connect: PostPhotosWhereUniqueInput
}

input PostPhotosCreateWithoutPostInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

type PostPhotosEdge {
  node: PostPhotos!
  cursor: String!
}

enum PostPhotosOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  count_ASC
  count_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPhotosPreviousValues {
  id: ID!
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostPhotosSubscriptionPayload {
  mutation: MutationType!
  node: PostPhotos
  updatedFields: [String!]
  previousValues: PostPhotosPreviousValues
}

input PostPhotosSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostPhotosWhereInput
  AND: [PostPhotosSubscriptionWhereInput!]
  OR: [PostPhotosSubscriptionWhereInput!]
  NOT: [PostPhotosSubscriptionWhereInput!]
}

input PostPhotosUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  post: PostUpdateOneWithoutPhotosInput
}

input PostPhotosUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input PostPhotosUpdateOneWithoutPostInput {
  create: PostPhotosCreateWithoutPostInput
  update: PostPhotosUpdateWithoutPostDataInput
  upsert: PostPhotosUpsertWithoutPostInput
  delete: Boolean
  disconnect: Boolean
  connect: PostPhotosWhereUniqueInput
}

input PostPhotosUpdateWithoutPostDataInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input PostPhotosUpsertWithoutPostInput {
  update: PostPhotosUpdateWithoutPostDataInput!
  create: PostPhotosCreateWithoutPostInput!
}

input PostPhotosWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  post: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostPhotosWhereInput!]
  OR: [PostPhotosWhereInput!]
  NOT: [PostPhotosWhereInput!]
}

input PostPhotosWhereUniqueInput {
  id: ID
}

type PostPreviousValues {
  id: ID!
  title: String!
  mdContents: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  mdContents: String
  mdContents_not: String
  mdContents_in: [String!]
  mdContents_not_in: [String!]
  mdContents_lt: String
  mdContents_lte: String
  mdContents_gt: String
  mdContents_gte: String
  mdContents_contains: String
  mdContents_not_contains: String
  mdContents_starts_with: String
  mdContents_not_starts_with: String
  mdContents_ends_with: String
  mdContents_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  mdContents: String
  author: UserUpdateOneRequiredWithoutPostsInput
  category: PostCategoryUpdateOneWithoutPostsInput
  tags: TagUpdateManyWithoutPostsInput
  hero: PostHeroUpdateOneWithoutPostInput
  photos: PostPhotosUpdateOneWithoutPostInput
}

input PostUpdateManyDataInput {
  title: String
  mdContents: String
}

input PostUpdateManyMutationInput {
  title: String
  mdContents: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutCategoryInput {
  create: [PostCreateWithoutCategoryInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCategoryInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutTagsInput {
  create: [PostCreateWithoutTagsInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneWithoutHeroInput {
  create: PostCreateWithoutHeroInput
  update: PostUpdateWithoutHeroDataInput
  upsert: PostUpsertWithoutHeroInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateOneWithoutPhotosInput {
  create: PostCreateWithoutPhotosInput
  update: PostUpdateWithoutPhotosDataInput
  upsert: PostUpsertWithoutPhotosInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  mdContents: String
  category: PostCategoryUpdateOneWithoutPostsInput
  tags: TagUpdateManyWithoutPostsInput
  hero: PostHeroUpdateOneWithoutPostInput
  photos: PostPhotosUpdateOneWithoutPostInput
}

input PostUpdateWithoutCategoryDataInput {
  title: String
  mdContents: String
  author: UserUpdateOneRequiredWithoutPostsInput
  tags: TagUpdateManyWithoutPostsInput
  hero: PostHeroUpdateOneWithoutPostInput
  photos: PostPhotosUpdateOneWithoutPostInput
}

input PostUpdateWithoutHeroDataInput {
  title: String
  mdContents: String
  author: UserUpdateOneRequiredWithoutPostsInput
  category: PostCategoryUpdateOneWithoutPostsInput
  tags: TagUpdateManyWithoutPostsInput
  photos: PostPhotosUpdateOneWithoutPostInput
}

input PostUpdateWithoutPhotosDataInput {
  title: String
  mdContents: String
  author: UserUpdateOneRequiredWithoutPostsInput
  category: PostCategoryUpdateOneWithoutPostsInput
  tags: TagUpdateManyWithoutPostsInput
  hero: PostHeroUpdateOneWithoutPostInput
}

input PostUpdateWithoutTagsDataInput {
  title: String
  mdContents: String
  author: UserUpdateOneRequiredWithoutPostsInput
  category: PostCategoryUpdateOneWithoutPostsInput
  hero: PostHeroUpdateOneWithoutPostInput
  photos: PostPhotosUpdateOneWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutCategoryInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCategoryDataInput!
}

input PostUpdateWithWhereUniqueWithoutTagsInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutTagsDataInput!
}

input PostUpsertWithoutHeroInput {
  update: PostUpdateWithoutHeroDataInput!
  create: PostCreateWithoutHeroInput!
}

input PostUpsertWithoutPhotosInput {
  update: PostUpdateWithoutPhotosDataInput!
  create: PostCreateWithoutPhotosInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutCategoryInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCategoryDataInput!
  create: PostCreateWithoutCategoryInput!
}

input PostUpsertWithWhereUniqueWithoutTagsInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutTagsDataInput!
  create: PostCreateWithoutTagsInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  mdContents: String
  mdContents_not: String
  mdContents_in: [String!]
  mdContents_not_in: [String!]
  mdContents_lt: String
  mdContents_lte: String
  mdContents_gt: String
  mdContents_gte: String
  mdContents_contains: String
  mdContents_not_contains: String
  mdContents_starts_with: String
  mdContents_not_starts_with: String
  mdContents_ends_with: String
  mdContents_not_ends_with: String
  author: UserWhereInput
  category: PostCategoryWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  hero: PostHeroWhereInput
  photos: PostPhotosWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
  title: String
}

type Profile {
  id: ID!
  firstName: String
  lastName: String
  passportNo: String!
  address: String
  tel: String
  subscriptionEmail: String
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  firstName: String
  lastName: String
  passportNo: String!
  address: String
  tel: String
  subscriptionEmail: String
  user: UserCreateOneWithoutProfileInput!
}

input ProfileCreateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutUserInput {
  firstName: String
  lastName: String
  passportNo: String!
  address: String
  tel: String
  subscriptionEmail: String
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  passportNo_ASC
  passportNo_DESC
  address_ASC
  address_DESC
  tel_ASC
  tel_DESC
  subscriptionEmail_ASC
  subscriptionEmail_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  firstName: String
  lastName: String
  passportNo: String!
  address: String
  tel: String
  subscriptionEmail: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  firstName: String
  lastName: String
  passportNo: String
  address: String
  tel: String
  subscriptionEmail: String
  user: UserUpdateOneRequiredWithoutProfileInput
}

input ProfileUpdateManyMutationInput {
  firstName: String
  lastName: String
  passportNo: String
  address: String
  tel: String
  subscriptionEmail: String
}

input ProfileUpdateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  update: ProfileUpdateWithoutUserDataInput
  upsert: ProfileUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutUserDataInput {
  firstName: String
  lastName: String
  passportNo: String
  address: String
  tel: String
  subscriptionEmail: String
}

input ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput!
  create: ProfileCreateWithoutUserInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  passportNo: String
  passportNo_not: String
  passportNo_in: [String!]
  passportNo_not_in: [String!]
  passportNo_lt: String
  passportNo_lte: String
  passportNo_gt: String
  passportNo_gte: String
  passportNo_contains: String
  passportNo_not_contains: String
  passportNo_starts_with: String
  passportNo_not_starts_with: String
  passportNo_ends_with: String
  passportNo_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  tel: String
  tel_not: String
  tel_in: [String!]
  tel_not_in: [String!]
  tel_lt: String
  tel_lte: String
  tel_gt: String
  tel_gte: String
  tel_contains: String
  tel_not_contains: String
  tel_starts_with: String
  tel_not_starts_with: String
  tel_ends_with: String
  tel_not_ends_with: String
  subscriptionEmail: String
  subscriptionEmail_not: String
  subscriptionEmail_in: [String!]
  subscriptionEmail_not_in: [String!]
  subscriptionEmail_lt: String
  subscriptionEmail_lte: String
  subscriptionEmail_gt: String
  subscriptionEmail_gte: String
  subscriptionEmail_contains: String
  subscriptionEmail_not_contains: String
  subscriptionEmail_starts_with: String
  subscriptionEmail_not_starts_with: String
  subscriptionEmail_ends_with: String
  subscriptionEmail_not_ends_with: String
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  advantage(where: AdvantageWhereUniqueInput!): Advantage
  advantages(where: AdvantageWhereInput, orderBy: AdvantageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Advantage]!
  advantagesConnection(where: AdvantageWhereInput, orderBy: AdvantageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdvantageConnection!
  advantageIcon(where: AdvantageIconWhereUniqueInput!): AdvantageIcon
  advantageIcons(where: AdvantageIconWhereInput, orderBy: AdvantageIconOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AdvantageIcon]!
  advantageIconsConnection(where: AdvantageIconWhereInput, orderBy: AdvantageIconOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdvantageIconConnection!
  area(where: AreaWhereUniqueInput!): Area
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area]!
  areasConnection(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AreaConnection!
  booking(where: BookingWhereUniqueInput!): Booking
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  contact(where: ContactWhereUniqueInput!): Contact
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  country(where: CountryWhereUniqueInput!): Country
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  favorite(where: FavoriteWhereUniqueInput!): Favorite
  favorites(where: FavoriteWhereInput, orderBy: FavoriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Favorite]!
  favoritesConnection(where: FavoriteWhereInput, orderBy: FavoriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FavoriteConnection!
  hotel(where: HotelWhereUniqueInput!): Hotel
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel]!
  hotelsConnection(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HotelConnection!
  hotelPhoto(where: HotelPhotoWhereUniqueInput!): HotelPhoto
  hotelPhotos(where: HotelPhotoWhereInput, orderBy: HotelPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HotelPhoto]!
  hotelPhotosConnection(where: HotelPhotoWhereInput, orderBy: HotelPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HotelPhotoConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  postCategory(where: PostCategoryWhereUniqueInput!): PostCategory
  postCategories(where: PostCategoryWhereInput, orderBy: PostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostCategory]!
  postCategoriesConnection(where: PostCategoryWhereInput, orderBy: PostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostCategoryConnection!
  postHero(where: PostHeroWhereUniqueInput!): PostHero
  postHeroes(where: PostHeroWhereInput, orderBy: PostHeroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostHero]!
  postHeroesConnection(where: PostHeroWhereInput, orderBy: PostHeroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostHeroConnection!
  postPhotos(where: PostPhotosWhereUniqueInput!): PostPhotos
  postPhotoses(where: PostPhotosWhereInput, orderBy: PostPhotosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostPhotos]!
  postPhotosesConnection(where: PostPhotosWhereInput, orderBy: PostPhotosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostPhotosConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  room(where: RoomWhereUniqueInput!): Room
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  roomPhoto(where: RoomPhotoWhereUniqueInput!): RoomPhoto
  roomPhotos(where: RoomPhotoWhereInput, orderBy: RoomPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RoomPhoto]!
  roomPhotosConnection(where: RoomPhotoWhereInput, orderBy: RoomPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomPhotoConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userPhoto(where: UserPhotoWhereUniqueInput!): UserPhoto
  userPhotos(where: UserPhotoWhereInput, orderBy: UserPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserPhoto]!
  userPhotosConnection(where: UserPhotoWhereInput, orderBy: UserPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserPhotoConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  rating: Float!
  description: String!
  hotel: Hotel!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  rating: Float!
  description: String!
  hotel: HotelCreateOneWithoutReviewsInput!
  user: UserCreateOneWithoutReviewsInput!
}

input ReviewCreateManyWithoutHotelInput {
  create: [ReviewCreateWithoutHotelInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutUserInput {
  create: [ReviewCreateWithoutUserInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutHotelInput {
  rating: Float!
  description: String!
  user: UserCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutUserInput {
  rating: Float!
  description: String!
  hotel: HotelCreateOneWithoutReviewsInput!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  rating: Float!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  rating: Float
  description: String
  hotel: HotelUpdateOneRequiredWithoutReviewsInput
  user: UserUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateManyDataInput {
  rating: Float
  description: String
}

input ReviewUpdateManyMutationInput {
  rating: Float
  description: String
}

input ReviewUpdateManyWithoutHotelInput {
  create: [ReviewCreateWithoutHotelInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutHotelInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutHotelInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutUserInput {
  create: [ReviewCreateWithoutUserInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutHotelDataInput {
  rating: Float
  description: String
  user: UserUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithoutUserDataInput {
  rating: Float
  description: String
  hotel: HotelUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutHotelInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutHotelDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutUserDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutHotelInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutHotelDataInput!
  create: ReviewCreateWithoutHotelInput!
}

input ReviewUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutUserDataInput!
  create: ReviewCreateWithoutUserInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  hotel: HotelWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

enum ROLE {
  ADMIN
  STAFF
  USER
}

type Room {
  id: ID!
  name: String!
  roomType: ROOM_TYPE
  price: Float
  people: Int
  photos(where: RoomPhotoWhereInput, orderBy: RoomPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RoomPhoto!]
  hotel: Hotel!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum ROOM_TYPE {
  SUPERIOR
  DELUXE
  FAMILY
  PREMIUM
}

type RoomConnection {
  pageInfo: PageInfo!
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  name: String!
  roomType: ROOM_TYPE
  price: Float
  people: Int
  photos: RoomPhotoCreateManyWithoutRoomInput
  hotel: HotelCreateOneWithoutRoomsInput!
}

input RoomCreateManyWithoutHotelInput {
  create: [RoomCreateWithoutHotelInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateOneWithoutPhotosInput {
  create: RoomCreateWithoutPhotosInput
  connect: RoomWhereUniqueInput
}

input RoomCreateWithoutHotelInput {
  name: String!
  roomType: ROOM_TYPE
  price: Float
  people: Int
  photos: RoomPhotoCreateManyWithoutRoomInput
}

input RoomCreateWithoutPhotosInput {
  name: String!
  roomType: ROOM_TYPE
  price: Float
  people: Int
  hotel: HotelCreateOneWithoutRoomsInput!
}

type RoomEdge {
  node: Room!
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  roomType_ASC
  roomType_DESC
  price_ASC
  price_DESC
  people_ASC
  people_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoomPhoto {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  room: Room!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoomPhotoConnection {
  pageInfo: PageInfo!
  edges: [RoomPhotoEdge]!
  aggregate: AggregateRoomPhoto!
}

input RoomPhotoCreateInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  room: RoomCreateOneWithoutPhotosInput!
}

input RoomPhotoCreateManyWithoutRoomInput {
  create: [RoomPhotoCreateWithoutRoomInput!]
  connect: [RoomPhotoWhereUniqueInput!]
}

input RoomPhotoCreateWithoutRoomInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
}

type RoomPhotoEdge {
  node: RoomPhoto!
  cursor: String!
}

enum RoomPhotoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  count_ASC
  count_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoomPhotoPreviousValues {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  count: Int!
  isImage: Boolean!
  isStored: Boolean!
  size: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RoomPhotoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomPhotoScalarWhereInput!]
  OR: [RoomPhotoScalarWhereInput!]
  NOT: [RoomPhotoScalarWhereInput!]
}

type RoomPhotoSubscriptionPayload {
  mutation: MutationType!
  node: RoomPhoto
  updatedFields: [String!]
  previousValues: RoomPhotoPreviousValues
}

input RoomPhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomPhotoWhereInput
  AND: [RoomPhotoSubscriptionWhereInput!]
  OR: [RoomPhotoSubscriptionWhereInput!]
  NOT: [RoomPhotoSubscriptionWhereInput!]
}

input RoomPhotoUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
  room: RoomUpdateOneRequiredWithoutPhotosInput
}

input RoomPhotoUpdateManyDataInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input RoomPhotoUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input RoomPhotoUpdateManyWithoutRoomInput {
  create: [RoomPhotoCreateWithoutRoomInput!]
  delete: [RoomPhotoWhereUniqueInput!]
  connect: [RoomPhotoWhereUniqueInput!]
  disconnect: [RoomPhotoWhereUniqueInput!]
  update: [RoomPhotoUpdateWithWhereUniqueWithoutRoomInput!]
  upsert: [RoomPhotoUpsertWithWhereUniqueWithoutRoomInput!]
  deleteMany: [RoomPhotoScalarWhereInput!]
  updateMany: [RoomPhotoUpdateManyWithWhereNestedInput!]
}

input RoomPhotoUpdateManyWithWhereNestedInput {
  where: RoomPhotoScalarWhereInput!
  data: RoomPhotoUpdateManyDataInput!
}

input RoomPhotoUpdateWithoutRoomDataInput {
  name: String
  cdnUrl: String
  uuid: String
  count: Int
  isImage: Boolean
  isStored: Boolean
  size: Int
}

input RoomPhotoUpdateWithWhereUniqueWithoutRoomInput {
  where: RoomPhotoWhereUniqueInput!
  data: RoomPhotoUpdateWithoutRoomDataInput!
}

input RoomPhotoUpsertWithWhereUniqueWithoutRoomInput {
  where: RoomPhotoWhereUniqueInput!
  update: RoomPhotoUpdateWithoutRoomDataInput!
  create: RoomPhotoCreateWithoutRoomInput!
}

input RoomPhotoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  room: RoomWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomPhotoWhereInput!]
  OR: [RoomPhotoWhereInput!]
  NOT: [RoomPhotoWhereInput!]
}

input RoomPhotoWhereUniqueInput {
  id: ID
}

type RoomPreviousValues {
  id: ID!
  name: String!
  roomType: ROOM_TYPE
  price: Float
  people: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RoomScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  roomType: ROOM_TYPE
  roomType_not: ROOM_TYPE
  roomType_in: [ROOM_TYPE!]
  roomType_not_in: [ROOM_TYPE!]
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  people: Int
  people_not: Int
  people_in: [Int!]
  people_not_in: [Int!]
  people_lt: Int
  people_lte: Int
  people_gt: Int
  people_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomScalarWhereInput!]
  OR: [RoomScalarWhereInput!]
  NOT: [RoomScalarWhereInput!]
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
  AND: [RoomSubscriptionWhereInput!]
  OR: [RoomSubscriptionWhereInput!]
  NOT: [RoomSubscriptionWhereInput!]
}

input RoomUpdateInput {
  name: String
  roomType: ROOM_TYPE
  price: Float
  people: Int
  photos: RoomPhotoUpdateManyWithoutRoomInput
  hotel: HotelUpdateOneRequiredWithoutRoomsInput
}

input RoomUpdateManyDataInput {
  name: String
  roomType: ROOM_TYPE
  price: Float
  people: Int
}

input RoomUpdateManyMutationInput {
  name: String
  roomType: ROOM_TYPE
  price: Float
  people: Int
}

input RoomUpdateManyWithoutHotelInput {
  create: [RoomCreateWithoutHotelInput!]
  delete: [RoomWhereUniqueInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutHotelInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutHotelInput!]
  deleteMany: [RoomScalarWhereInput!]
  updateMany: [RoomUpdateManyWithWhereNestedInput!]
}

input RoomUpdateManyWithWhereNestedInput {
  where: RoomScalarWhereInput!
  data: RoomUpdateManyDataInput!
}

input RoomUpdateOneRequiredWithoutPhotosInput {
  create: RoomCreateWithoutPhotosInput
  update: RoomUpdateWithoutPhotosDataInput
  upsert: RoomUpsertWithoutPhotosInput
  connect: RoomWhereUniqueInput
}

input RoomUpdateWithoutHotelDataInput {
  name: String
  roomType: ROOM_TYPE
  price: Float
  people: Int
  photos: RoomPhotoUpdateManyWithoutRoomInput
}

input RoomUpdateWithoutPhotosDataInput {
  name: String
  roomType: ROOM_TYPE
  price: Float
  people: Int
  hotel: HotelUpdateOneRequiredWithoutRoomsInput
}

input RoomUpdateWithWhereUniqueWithoutHotelInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutHotelDataInput!
}

input RoomUpsertWithoutPhotosInput {
  update: RoomUpdateWithoutPhotosDataInput!
  create: RoomCreateWithoutPhotosInput!
}

input RoomUpsertWithWhereUniqueWithoutHotelInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutHotelDataInput!
  create: RoomCreateWithoutHotelInput!
}

input RoomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  roomType: ROOM_TYPE
  roomType_not: ROOM_TYPE
  roomType_in: [ROOM_TYPE!]
  roomType_not_in: [ROOM_TYPE!]
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  people: Int
  people_not: Int
  people_in: [Int!]
  people_not_in: [Int!]
  people_lt: Int
  people_lte: Int
  people_gt: Int
  people_gte: Int
  photos_every: RoomPhotoWhereInput
  photos_some: RoomPhotoWhereInput
  photos_none: RoomPhotoWhereInput
  hotel: HotelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomWhereInput!]
  OR: [RoomWhereInput!]
  NOT: [RoomWhereInput!]
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  advantage(where: AdvantageSubscriptionWhereInput): AdvantageSubscriptionPayload
  advantageIcon(where: AdvantageIconSubscriptionWhereInput): AdvantageIconSubscriptionPayload
  area(where: AreaSubscriptionWhereInput): AreaSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  favorite(where: FavoriteSubscriptionWhereInput): FavoriteSubscriptionPayload
  hotel(where: HotelSubscriptionWhereInput): HotelSubscriptionPayload
  hotelPhoto(where: HotelPhotoSubscriptionWhereInput): HotelPhotoSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  postCategory(where: PostCategorySubscriptionWhereInput): PostCategorySubscriptionPayload
  postHero(where: PostHeroSubscriptionWhereInput): PostHeroSubscriptionPayload
  postPhotos(where: PostPhotosSubscriptionWhereInput): PostPhotosSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  roomPhoto(where: RoomPhotoSubscriptionWhereInput): RoomPhotoSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userPhoto(where: UserPhotoSubscriptionWhereInput): UserPhotoSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  color: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  color: String
  posts: PostCreateManyWithoutTagsInput
}

input TagCreateManyWithoutPostsInput {
  create: [TagCreateWithoutPostsInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutPostsInput {
  name: String!
  color: String
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  color: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  color: String
  posts: PostUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
  color: String
}

input TagUpdateManyMutationInput {
  name: String
  color: String
}

input TagUpdateManyWithoutPostsInput {
  create: [TagCreateWithoutPostsInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutPostsInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutPostsInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutPostsDataInput {
  name: String
  color: String
}

input TagUpdateWithWhereUniqueWithoutPostsInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutPostsDataInput!
}

input TagUpsertWithWhereUniqueWithoutPostsInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutPostsDataInput!
  create: TagCreateWithoutPostsInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  name: String
}

type User {
  id: ID!
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhoto
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  profile: Profile
  favorites(where: FavoriteWhereInput, orderBy: FavoriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Favorite!]
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
  profile: ProfileCreateOneWithoutUserInput
  favorites: FavoriteCreateManyWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateOneWithoutAvatarInput {
  create: UserCreateWithoutAvatarInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFavoritesInput {
  create: UserCreateWithoutFavoritesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAvatarInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  posts: PostCreateManyWithoutAuthorInput
  profile: ProfileCreateOneWithoutUserInput
  favorites: FavoriteCreateManyWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutBookingsInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
  profile: ProfileCreateOneWithoutUserInput
  favorites: FavoriteCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutFavoritesInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
  profile: ProfileCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  profile: ProfileCreateOneWithoutUserInput
  favorites: FavoriteCreateManyWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutProfileInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
  favorites: FavoriteCreateManyWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
  reviews: ReviewCreateManyWithoutUserInput
}

input UserCreateWithoutReviewsInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoCreateOneWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
  profile: ProfileCreateOneWithoutUserInput
  favorites: FavoriteCreateManyWithoutUserInput
  bookings: BookingCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  auth0UserId_ASC
  auth0UserId_DESC
  omiseCustomerId_ASC
  omiseCustomerId_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPhoto {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserPhotoConnection {
  pageInfo: PageInfo!
  edges: [UserPhotoEdge]!
  aggregate: AggregateUserPhoto!
}

input UserPhotoCreateInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  user: UserCreateOneWithoutAvatarInput!
}

input UserPhotoCreateOneWithoutUserInput {
  create: UserPhotoCreateWithoutUserInput
  connect: UserPhotoWhereUniqueInput
}

input UserPhotoCreateWithoutUserInput {
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
}

type UserPhotoEdge {
  node: UserPhoto!
  cursor: String!
}

enum UserPhotoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cdnUrl_ASC
  cdnUrl_DESC
  uuid_ASC
  uuid_DESC
  isImage_ASC
  isImage_DESC
  isStored_ASC
  isStored_DESC
  mimeType_ASC
  mimeType_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPhotoPreviousValues {
  id: ID!
  name: String!
  cdnUrl: String!
  uuid: String!
  isImage: Boolean!
  isStored: Boolean!
  mimeType: String!
  size: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserPhotoSubscriptionPayload {
  mutation: MutationType!
  node: UserPhoto
  updatedFields: [String!]
  previousValues: UserPhotoPreviousValues
}

input UserPhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserPhotoWhereInput
  AND: [UserPhotoSubscriptionWhereInput!]
  OR: [UserPhotoSubscriptionWhereInput!]
  NOT: [UserPhotoSubscriptionWhereInput!]
}

input UserPhotoUpdateInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
  user: UserUpdateOneRequiredWithoutAvatarInput
}

input UserPhotoUpdateManyMutationInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input UserPhotoUpdateOneWithoutUserInput {
  create: UserPhotoCreateWithoutUserInput
  update: UserPhotoUpdateWithoutUserDataInput
  upsert: UserPhotoUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: UserPhotoWhereUniqueInput
}

input UserPhotoUpdateWithoutUserDataInput {
  name: String
  cdnUrl: String
  uuid: String
  isImage: Boolean
  isStored: Boolean
  mimeType: String
  size: Int
}

input UserPhotoUpsertWithoutUserInput {
  update: UserPhotoUpdateWithoutUserDataInput!
  create: UserPhotoCreateWithoutUserInput!
}

input UserPhotoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cdnUrl: String
  cdnUrl_not: String
  cdnUrl_in: [String!]
  cdnUrl_not_in: [String!]
  cdnUrl_lt: String
  cdnUrl_lte: String
  cdnUrl_gt: String
  cdnUrl_gte: String
  cdnUrl_contains: String
  cdnUrl_not_contains: String
  cdnUrl_starts_with: String
  cdnUrl_not_starts_with: String
  cdnUrl_ends_with: String
  cdnUrl_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  isImage: Boolean
  isImage_not: Boolean
  isStored: Boolean
  isStored_not: Boolean
  mimeType: String
  mimeType_not: String
  mimeType_in: [String!]
  mimeType_not_in: [String!]
  mimeType_lt: String
  mimeType_lte: String
  mimeType_gt: String
  mimeType_gte: String
  mimeType_contains: String
  mimeType_not_contains: String
  mimeType_starts_with: String
  mimeType_not_starts_with: String
  mimeType_ends_with: String
  mimeType_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserPhotoWhereInput!]
  OR: [UserPhotoWhereInput!]
  NOT: [UserPhotoWhereInput!]
}

input UserPhotoWhereUniqueInput {
  id: ID
}

type UserPreviousValues {
  id: ID!
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
  profile: ProfileUpdateOneWithoutUserInput
  favorites: FavoriteUpdateManyWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
}

input UserUpdateOneRequiredWithoutAvatarInput {
  create: UserCreateWithoutAvatarInput
  update: UserUpdateWithoutAvatarDataInput
  upsert: UserUpsertWithoutAvatarInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutFavoritesInput {
  create: UserCreateWithoutFavoritesInput
  update: UserUpdateWithoutFavoritesDataInput
  upsert: UserUpsertWithoutFavoritesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAvatarDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  posts: PostUpdateManyWithoutAuthorInput
  profile: ProfileUpdateOneWithoutUserInput
  favorites: FavoriteUpdateManyWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutBookingsDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
  profile: ProfileUpdateOneWithoutUserInput
  favorites: FavoriteUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutFavoritesDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
  profile: ProfileUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  profile: ProfileUpdateOneWithoutUserInput
  favorites: FavoriteUpdateManyWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutProfileDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
  favorites: FavoriteUpdateManyWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
  reviews: ReviewUpdateManyWithoutUserInput
}

input UserUpdateWithoutReviewsDataInput {
  email: String
  auth0UserId: String
  omiseCustomerId: String
  role: ROLE
  avatar: UserPhotoUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
  profile: ProfileUpdateOneWithoutUserInput
  favorites: FavoriteUpdateManyWithoutUserInput
  bookings: BookingUpdateManyWithoutUserInput
}

input UserUpsertWithoutAvatarInput {
  update: UserUpdateWithoutAvatarDataInput!
  create: UserCreateWithoutAvatarInput!
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserUpsertWithoutFavoritesInput {
  update: UserUpdateWithoutFavoritesDataInput!
  create: UserCreateWithoutFavoritesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  auth0UserId: String
  auth0UserId_not: String
  auth0UserId_in: [String!]
  auth0UserId_not_in: [String!]
  auth0UserId_lt: String
  auth0UserId_lte: String
  auth0UserId_gt: String
  auth0UserId_gte: String
  auth0UserId_contains: String
  auth0UserId_not_contains: String
  auth0UserId_starts_with: String
  auth0UserId_not_starts_with: String
  auth0UserId_ends_with: String
  auth0UserId_not_ends_with: String
  omiseCustomerId: String
  omiseCustomerId_not: String
  omiseCustomerId_in: [String!]
  omiseCustomerId_not_in: [String!]
  omiseCustomerId_lt: String
  omiseCustomerId_lte: String
  omiseCustomerId_gt: String
  omiseCustomerId_gte: String
  omiseCustomerId_contains: String
  omiseCustomerId_not_contains: String
  omiseCustomerId_starts_with: String
  omiseCustomerId_not_starts_with: String
  omiseCustomerId_ends_with: String
  omiseCustomerId_not_ends_with: String
  role: ROLE
  role_not: ROLE
  role_in: [ROLE!]
  role_not_in: [ROLE!]
  avatar: UserPhotoWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  profile: ProfileWhereInput
  favorites_every: FavoriteWhereInput
  favorites_some: FavoriteWhereInput
  favorites_none: FavoriteWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  auth0UserId: String
  omiseCustomerId: String
}
`
      }
    