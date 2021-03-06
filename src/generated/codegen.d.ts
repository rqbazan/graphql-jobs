import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type City = {
  __typename?: 'City'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  country: Country
  type: Scalars['String']
  jobs?: Maybe<Array<Job>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type CityJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum CityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CityWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  country?: Maybe<CountryWhereInput>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Scalars['String']>>
  type_not_in?: Maybe<Array<Scalars['String']>>
  type_lt?: Maybe<Scalars['String']>
  type_lte?: Maybe<Scalars['String']>
  type_gt?: Maybe<Scalars['String']>
  type_gte?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<CityWhereInput>>
  OR?: Maybe<Array<CityWhereInput>>
  NOT?: Maybe<Array<CityWhereInput>>
}

export type Commitment = {
  __typename?: 'Commitment'
  id: Scalars['ID']
  title: Scalars['String']
  slug: Scalars['String']
  jobs?: Maybe<Array<Job>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type CommitmentJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type CommitmentWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  title_lt?: Maybe<Scalars['String']>
  title_lte?: Maybe<Scalars['String']>
  title_gt?: Maybe<Scalars['String']>
  title_gte?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  title_starts_with?: Maybe<Scalars['String']>
  title_not_starts_with?: Maybe<Scalars['String']>
  title_ends_with?: Maybe<Scalars['String']>
  title_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<CommitmentWhereInput>>
  OR?: Maybe<Array<CommitmentWhereInput>>
  NOT?: Maybe<Array<CommitmentWhereInput>>
}

export type Company = {
  __typename?: 'Company'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  websiteUrl: Scalars['String']
  logoUrl?: Maybe<Scalars['String']>
  jobs?: Maybe<Array<Job>>
  twitter?: Maybe<Scalars['String']>
  emailed?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type CompanyJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type CompanyWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
  websiteUrl_not?: Maybe<Scalars['String']>
  websiteUrl_in?: Maybe<Array<Scalars['String']>>
  websiteUrl_not_in?: Maybe<Array<Scalars['String']>>
  websiteUrl_lt?: Maybe<Scalars['String']>
  websiteUrl_lte?: Maybe<Scalars['String']>
  websiteUrl_gt?: Maybe<Scalars['String']>
  websiteUrl_gte?: Maybe<Scalars['String']>
  websiteUrl_contains?: Maybe<Scalars['String']>
  websiteUrl_not_contains?: Maybe<Scalars['String']>
  websiteUrl_starts_with?: Maybe<Scalars['String']>
  websiteUrl_not_starts_with?: Maybe<Scalars['String']>
  websiteUrl_ends_with?: Maybe<Scalars['String']>
  websiteUrl_not_ends_with?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
  logoUrl_not?: Maybe<Scalars['String']>
  logoUrl_in?: Maybe<Array<Scalars['String']>>
  logoUrl_not_in?: Maybe<Array<Scalars['String']>>
  logoUrl_lt?: Maybe<Scalars['String']>
  logoUrl_lte?: Maybe<Scalars['String']>
  logoUrl_gt?: Maybe<Scalars['String']>
  logoUrl_gte?: Maybe<Scalars['String']>
  logoUrl_contains?: Maybe<Scalars['String']>
  logoUrl_not_contains?: Maybe<Scalars['String']>
  logoUrl_starts_with?: Maybe<Scalars['String']>
  logoUrl_not_starts_with?: Maybe<Scalars['String']>
  logoUrl_ends_with?: Maybe<Scalars['String']>
  logoUrl_not_ends_with?: Maybe<Scalars['String']>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  twitter?: Maybe<Scalars['String']>
  twitter_not?: Maybe<Scalars['String']>
  twitter_in?: Maybe<Array<Scalars['String']>>
  twitter_not_in?: Maybe<Array<Scalars['String']>>
  twitter_lt?: Maybe<Scalars['String']>
  twitter_lte?: Maybe<Scalars['String']>
  twitter_gt?: Maybe<Scalars['String']>
  twitter_gte?: Maybe<Scalars['String']>
  twitter_contains?: Maybe<Scalars['String']>
  twitter_not_contains?: Maybe<Scalars['String']>
  twitter_starts_with?: Maybe<Scalars['String']>
  twitter_not_starts_with?: Maybe<Scalars['String']>
  twitter_ends_with?: Maybe<Scalars['String']>
  twitter_not_ends_with?: Maybe<Scalars['String']>
  emailed?: Maybe<Scalars['Boolean']>
  emailed_not?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<CompanyWhereInput>>
  OR?: Maybe<Array<CompanyWhereInput>>
  NOT?: Maybe<Array<CompanyWhereInput>>
}

export type Country = {
  __typename?: 'Country'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  type: Scalars['String']
  isoCode?: Maybe<Scalars['String']>
  cities?: Maybe<Array<City>>
  jobs?: Maybe<Array<Job>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type CountryCitiesArgs = {
  where?: Maybe<CityWhereInput>
  orderBy?: Maybe<CityOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type CountryJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum CountryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  IsoCodeAsc = 'isoCode_ASC',
  IsoCodeDesc = 'isoCode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CountryWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Scalars['String']>>
  type_not_in?: Maybe<Array<Scalars['String']>>
  type_lt?: Maybe<Scalars['String']>
  type_lte?: Maybe<Scalars['String']>
  type_gt?: Maybe<Scalars['String']>
  type_gte?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  isoCode?: Maybe<Scalars['String']>
  isoCode_not?: Maybe<Scalars['String']>
  isoCode_in?: Maybe<Array<Scalars['String']>>
  isoCode_not_in?: Maybe<Array<Scalars['String']>>
  isoCode_lt?: Maybe<Scalars['String']>
  isoCode_lte?: Maybe<Scalars['String']>
  isoCode_gt?: Maybe<Scalars['String']>
  isoCode_gte?: Maybe<Scalars['String']>
  isoCode_contains?: Maybe<Scalars['String']>
  isoCode_not_contains?: Maybe<Scalars['String']>
  isoCode_starts_with?: Maybe<Scalars['String']>
  isoCode_not_starts_with?: Maybe<Scalars['String']>
  isoCode_ends_with?: Maybe<Scalars['String']>
  isoCode_not_ends_with?: Maybe<Scalars['String']>
  cities_every?: Maybe<CityWhereInput>
  cities_some?: Maybe<CityWhereInput>
  cities_none?: Maybe<CityWhereInput>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<CountryWhereInput>>
  OR?: Maybe<Array<CountryWhereInput>>
  NOT?: Maybe<Array<CountryWhereInput>>
}

export type Job = {
  __typename?: 'Job'
  id: Scalars['ID']
  title: Scalars['String']
  slug: Scalars['String']
  commitment: Commitment
  cities?: Maybe<Array<City>>
  countries?: Maybe<Array<Country>>
  remotes?: Maybe<Array<Remote>>
  description?: Maybe<Scalars['String']>
  applyUrl?: Maybe<Scalars['String']>
  company?: Maybe<Company>
  tags?: Maybe<Array<Tag>>
  isPublished?: Maybe<Scalars['Boolean']>
  isFeatured?: Maybe<Scalars['Boolean']>
  locationNames?: Maybe<Scalars['String']>
  userEmail?: Maybe<Scalars['String']>
  postedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type JobCitiesArgs = {
  where?: Maybe<CityWhereInput>
  orderBy?: Maybe<CityOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type JobCountriesArgs = {
  where?: Maybe<CountryWhereInput>
  orderBy?: Maybe<CountryOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type JobRemotesArgs = {
  where?: Maybe<RemoteWhereInput>
  orderBy?: Maybe<RemoteOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type JobTagsArgs = {
  where?: Maybe<TagWhereInput>
  orderBy?: Maybe<TagOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type JobInput = {
  companySlug: Scalars['String']
  jobSlug: Scalars['String']
}

export enum JobOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ApplyUrlAsc = 'applyUrl_ASC',
  ApplyUrlDesc = 'applyUrl_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  LocationNamesAsc = 'locationNames_ASC',
  LocationNamesDesc = 'locationNames_DESC',
  UserEmailAsc = 'userEmail_ASC',
  UserEmailDesc = 'userEmail_DESC',
  PostedAtAsc = 'postedAt_ASC',
  PostedAtDesc = 'postedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type JobsInput = {
  type?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type JobWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  title_lt?: Maybe<Scalars['String']>
  title_lte?: Maybe<Scalars['String']>
  title_gt?: Maybe<Scalars['String']>
  title_gte?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  title_starts_with?: Maybe<Scalars['String']>
  title_not_starts_with?: Maybe<Scalars['String']>
  title_ends_with?: Maybe<Scalars['String']>
  title_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  commitment?: Maybe<CommitmentWhereInput>
  cities_every?: Maybe<CityWhereInput>
  cities_some?: Maybe<CityWhereInput>
  cities_none?: Maybe<CityWhereInput>
  countries_every?: Maybe<CountryWhereInput>
  countries_some?: Maybe<CountryWhereInput>
  countries_none?: Maybe<CountryWhereInput>
  remotes_every?: Maybe<RemoteWhereInput>
  remotes_some?: Maybe<RemoteWhereInput>
  remotes_none?: Maybe<RemoteWhereInput>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  description_lt?: Maybe<Scalars['String']>
  description_lte?: Maybe<Scalars['String']>
  description_gt?: Maybe<Scalars['String']>
  description_gte?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_starts_with?: Maybe<Scalars['String']>
  description_not_starts_with?: Maybe<Scalars['String']>
  description_ends_with?: Maybe<Scalars['String']>
  description_not_ends_with?: Maybe<Scalars['String']>
  applyUrl?: Maybe<Scalars['String']>
  applyUrl_not?: Maybe<Scalars['String']>
  applyUrl_in?: Maybe<Array<Scalars['String']>>
  applyUrl_not_in?: Maybe<Array<Scalars['String']>>
  applyUrl_lt?: Maybe<Scalars['String']>
  applyUrl_lte?: Maybe<Scalars['String']>
  applyUrl_gt?: Maybe<Scalars['String']>
  applyUrl_gte?: Maybe<Scalars['String']>
  applyUrl_contains?: Maybe<Scalars['String']>
  applyUrl_not_contains?: Maybe<Scalars['String']>
  applyUrl_starts_with?: Maybe<Scalars['String']>
  applyUrl_not_starts_with?: Maybe<Scalars['String']>
  applyUrl_ends_with?: Maybe<Scalars['String']>
  applyUrl_not_ends_with?: Maybe<Scalars['String']>
  company?: Maybe<CompanyWhereInput>
  tags_every?: Maybe<TagWhereInput>
  tags_some?: Maybe<TagWhereInput>
  tags_none?: Maybe<TagWhereInput>
  isPublished?: Maybe<Scalars['Boolean']>
  isPublished_not?: Maybe<Scalars['Boolean']>
  isFeatured?: Maybe<Scalars['Boolean']>
  isFeatured_not?: Maybe<Scalars['Boolean']>
  locationNames?: Maybe<Scalars['String']>
  locationNames_not?: Maybe<Scalars['String']>
  locationNames_in?: Maybe<Array<Scalars['String']>>
  locationNames_not_in?: Maybe<Array<Scalars['String']>>
  locationNames_lt?: Maybe<Scalars['String']>
  locationNames_lte?: Maybe<Scalars['String']>
  locationNames_gt?: Maybe<Scalars['String']>
  locationNames_gte?: Maybe<Scalars['String']>
  locationNames_contains?: Maybe<Scalars['String']>
  locationNames_not_contains?: Maybe<Scalars['String']>
  locationNames_starts_with?: Maybe<Scalars['String']>
  locationNames_not_starts_with?: Maybe<Scalars['String']>
  locationNames_ends_with?: Maybe<Scalars['String']>
  locationNames_not_ends_with?: Maybe<Scalars['String']>
  userEmail?: Maybe<Scalars['String']>
  userEmail_not?: Maybe<Scalars['String']>
  userEmail_in?: Maybe<Array<Scalars['String']>>
  userEmail_not_in?: Maybe<Array<Scalars['String']>>
  userEmail_lt?: Maybe<Scalars['String']>
  userEmail_lte?: Maybe<Scalars['String']>
  userEmail_gt?: Maybe<Scalars['String']>
  userEmail_gte?: Maybe<Scalars['String']>
  userEmail_contains?: Maybe<Scalars['String']>
  userEmail_not_contains?: Maybe<Scalars['String']>
  userEmail_starts_with?: Maybe<Scalars['String']>
  userEmail_not_starts_with?: Maybe<Scalars['String']>
  userEmail_ends_with?: Maybe<Scalars['String']>
  userEmail_not_ends_with?: Maybe<Scalars['String']>
  postedAt?: Maybe<Scalars['DateTime']>
  postedAt_not?: Maybe<Scalars['DateTime']>
  postedAt_in?: Maybe<Array<Scalars['DateTime']>>
  postedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  postedAt_lt?: Maybe<Scalars['DateTime']>
  postedAt_lte?: Maybe<Scalars['DateTime']>
  postedAt_gt?: Maybe<Scalars['DateTime']>
  postedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<JobWhereInput>>
  OR?: Maybe<Array<JobWhereInput>>
  NOT?: Maybe<Array<JobWhereInput>>
}

export type Location = {
  __typename?: 'Location'
  id: Scalars['ID']
  slug: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
}

export type LocationInput = {
  slug: Scalars['String']
}

export type LocationsInput = {
  value: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  postJob: Job
  setSearchArgs: Scalars['Boolean']
  subscribe: User
  updateCompany: Company
  updateJob: Job
}

export type MutationPostJobArgs = {
  input: PostJobInput
}

export type MutationSetSearchArgsArgs = {
  input: SearchArgsInput
}

export type MutationSubscribeArgs = {
  input: SubscribeInput
}

export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput
  adminSecret: Scalars['String']
}

export type MutationUpdateJobArgs = {
  input: UpdateJobInput
  adminSecret: Scalars['String']
}

export type PostJobInput = {
  title: Scalars['String']
  commitmentId: Scalars['ID']
  companyName: Scalars['String']
  locationNames: Scalars['String']
  userEmail: Scalars['String']
  description: Scalars['String']
  applyUrl: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  cities: Array<City>
  city: City
  commitments: Array<Commitment>
  companies: Array<Company>
  countries: Array<Country>
  country: Country
  getSearchArgs: SearchArgs
  job: Job
  jobs: Array<Job>
  locations: Array<Location>
  remote: Remote
  remotes: Array<Remote>
  searchJobs?: Maybe<Array<Maybe<Job>>>
}

export type QueryCityArgs = {
  input: LocationInput
}

export type QueryCountryArgs = {
  input: LocationInput
}

export type QueryJobArgs = {
  input: JobInput
}

export type QueryJobsArgs = {
  input?: Maybe<JobsInput>
}

export type QueryLocationsArgs = {
  input: LocationsInput
}

export type QueryRemoteArgs = {
  input: LocationInput
}

export type QuerySearchJobsArgs = {
  input: SearchArgsInput
}

export type Remote = {
  __typename?: 'Remote'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  type: Scalars['String']
  jobs?: Maybe<Array<Job>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type RemoteJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum RemoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RemoteWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Scalars['String']>>
  type_not_in?: Maybe<Array<Scalars['String']>>
  type_lt?: Maybe<Scalars['String']>
  type_lte?: Maybe<Scalars['String']>
  type_gt?: Maybe<Scalars['String']>
  type_gte?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<RemoteWhereInput>>
  OR?: Maybe<Array<RemoteWhereInput>>
  NOT?: Maybe<Array<RemoteWhereInput>>
}

export type SearchArgs = {
  __typename?: 'SearchArgs'
  term: Scalars['String']
  countrySlug: Scalars['String']
  companySlug: Scalars['String']
  orderByCreatedAt: Scalars['Boolean']
}

export type SearchArgsInput = {
  term?: Maybe<Scalars['String']>
  countrySlug?: Maybe<Scalars['String']>
  companySlug?: Maybe<Scalars['String']>
  orderByCreatedAt?: Maybe<Scalars['Boolean']>
}

export type SubscribeInput = {
  name: Scalars['String']
  email: Scalars['String']
}

export type Tag = {
  __typename?: 'Tag'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  jobs?: Maybe<Array<Job>>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type TagJobsArgs = {
  where?: Maybe<JobWhereInput>
  orderBy?: Maybe<JobOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TagWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  jobs_every?: Maybe<JobWhereInput>
  jobs_some?: Maybe<JobWhereInput>
  jobs_none?: Maybe<JobWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  AND?: Maybe<Array<TagWhereInput>>
  OR?: Maybe<Array<TagWhereInput>>
  NOT?: Maybe<Array<TagWhereInput>>
}

export type UpdateCompanyInput = {
  id: Scalars['ID']
  logoUrl: Scalars['String']
}

export type UpdateJobInput = {
  id: Scalars['ID']
  description: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  subscribe: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type JobPreviewFragment = { __typename?: 'Job' } & Pick<
  Job,
  'id' | 'slug' | 'title'
> & {
    commitment: { __typename?: 'Commitment' } & Pick<Commitment, 'id' | 'title'>
    cities: Maybe<Array<{ __typename?: 'City' } & Pick<City, 'id' | 'name'>>>
    company: Maybe<
      { __typename?: 'Company' } & Pick<
        Company,
        'id' | 'slug' | 'name' | 'logoUrl'
      >
    >
  }

export type JobFragment = { __typename?: 'Job' } & Pick<
  Job,
  'id' | 'title' | 'description' | 'applyUrl'
> & {
    company: Maybe<
      { __typename?: 'Company' } & Pick<
        Company,
        'id' | 'slug' | 'name' | 'logoUrl'
      >
    >
    tags: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name'>>>
  }

export type SetSearchArgsMutationVariables = {
  input: SearchArgsInput
}

export type SetSearchArgsMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'setSearchArgs'
>

export type CompanyJobsQueryVariables = {
  where: JobWhereInput
  orderBy?: Maybe<JobOrderByInput>
}

export type CompanyJobsQuery = { __typename?: 'Query' } & {
  companies: Array<
    { __typename?: 'Company' } & Pick<Company, 'id' | 'slug'> & {
        jobs: Maybe<Array<{ __typename?: 'Job' } & JobPreviewFragment>>
      }
  >
}

export type CountryJobsQueryVariables = {
  where: JobWhereInput
  orderBy?: Maybe<JobOrderByInput>
  countrySlug: Scalars['String']
}

export type CountryJobsQuery = { __typename?: 'Query' } & {
  country: { __typename?: 'Country' } & Pick<Country, 'id' | 'name'> & {
      jobs: Maybe<Array<{ __typename?: 'Job' } & JobPreviewFragment>>
    }
}

export type SearchArgsQueryVariables = {}

export type SearchArgsQuery = { __typename?: 'Query' } & {
  searchArgs: { __typename?: 'SearchArgs' } & Pick<
    SearchArgs,
    'term' | 'countrySlug' | 'companySlug' | 'orderByCreatedAt'
  >
}

export type JobQueryVariables = {
  companySlug: Scalars['String']
  jobSlug: Scalars['String']
}

export type JobQuery = { __typename?: 'Query' } & {
  job: { __typename?: 'Job' } & JobFragment
}

export type RefDataQueryVariables = {}

export type RefDataQuery = { __typename?: 'Query' } & {
  countries: Array<
    { __typename?: 'Country' } & Pick<Country, 'id' | 'name' | 'slug'>
  >
  companies: Array<
    { __typename?: 'Company' } & Pick<Company, 'id' | 'name' | 'slug'>
  >
}

export type RemoteJobsQueryVariables = {
  where: JobWhereInput
  orderBy?: Maybe<JobOrderByInput>
}

export type RemoteJobsQuery = { __typename?: 'Query' } & {
  remotes: Array<
    { __typename?: 'Remote' } & Pick<Remote, 'id'> & {
        jobs: Maybe<Array<{ __typename?: 'Job' } & JobPreviewFragment>>
      }
  >
}

export type JobsQueryVariables = {
  input: SearchArgsInput
}

export type JobsQuery = { __typename?: 'Query' } & {
  jobs: Maybe<Array<Maybe<{ __typename?: 'Job' } & JobPreviewFragment>>>
}

export const JobPreviewFragmentDoc = gql`
  fragment jobPreview on Job {
    id
    slug
    title
    commitment {
      id
      title
    }
    cities {
      id
      name
    }
    company {
      id
      slug
      name
      logoUrl
    }
  }
`
export const JobFragmentDoc = gql`
  fragment job on Job {
    id
    title
    description
    applyUrl
    company {
      id
      slug
      name
      logoUrl
    }
    tags {
      id
      name
    }
  }
`
export const SetSearchArgsDocument = gql`
  mutation SetSearchArgs($input: SearchArgsInput!) {
    setSearchArgs(input: $input) @client
  }
`
export type SetSearchArgsMutationFn = ApolloReactCommon.MutationFunction<
  SetSearchArgsMutation,
  SetSearchArgsMutationVariables
>

/**
 * __useSetSearchArgsMutation__
 *
 * To run a mutation, you first call `useSetSearchArgsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetSearchArgsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setSearchArgsMutation, { data, loading, error }] = useSetSearchArgsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetSearchArgsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetSearchArgsMutation,
    SetSearchArgsMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SetSearchArgsMutation,
    SetSearchArgsMutationVariables
  >(SetSearchArgsDocument, baseOptions)
}
export type SetSearchArgsMutationHookResult = ReturnType<
  typeof useSetSearchArgsMutation
>
export type SetSearchArgsMutationResult = ApolloReactCommon.MutationResult<
  SetSearchArgsMutation
>
export type SetSearchArgsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetSearchArgsMutation,
  SetSearchArgsMutationVariables
>
export const CompanyJobsDocument = gql`
  query CompanyJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    companies {
      id
      slug
      jobs(where: $where, orderBy: $orderBy) {
        ...jobPreview
      }
    }
  }
  ${JobPreviewFragmentDoc}
`

/**
 * __useCompanyJobsQuery__
 *
 * To run a query within a React component, call `useCompanyJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyJobsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCompanyJobsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CompanyJobsQuery,
    CompanyJobsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CompanyJobsQuery, CompanyJobsQueryVariables>(
    CompanyJobsDocument,
    baseOptions
  )
}
export function useCompanyJobsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CompanyJobsQuery,
    CompanyJobsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CompanyJobsQuery,
    CompanyJobsQueryVariables
  >(CompanyJobsDocument, baseOptions)
}
export type CompanyJobsQueryHookResult = ReturnType<typeof useCompanyJobsQuery>
export type CompanyJobsLazyQueryHookResult = ReturnType<
  typeof useCompanyJobsLazyQuery
>
export type CompanyJobsQueryResult = ApolloReactCommon.QueryResult<
  CompanyJobsQuery,
  CompanyJobsQueryVariables
>
export const CountryJobsDocument = gql`
  query CountryJobs(
    $where: JobWhereInput!
    $orderBy: JobOrderByInput
    $countrySlug: String!
  ) {
    country(input: { slug: $countrySlug }) {
      id
      name
      jobs(where: $where, orderBy: $orderBy) {
        ...jobPreview
      }
    }
  }
  ${JobPreviewFragmentDoc}
`

/**
 * __useCountryJobsQuery__
 *
 * To run a query within a React component, call `useCountryJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryJobsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      countrySlug: // value for 'countrySlug'
 *   },
 * });
 */
export function useCountryJobsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CountryJobsQuery,
    CountryJobsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CountryJobsQuery, CountryJobsQueryVariables>(
    CountryJobsDocument,
    baseOptions
  )
}
export function useCountryJobsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CountryJobsQuery,
    CountryJobsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CountryJobsQuery,
    CountryJobsQueryVariables
  >(CountryJobsDocument, baseOptions)
}
export type CountryJobsQueryHookResult = ReturnType<typeof useCountryJobsQuery>
export type CountryJobsLazyQueryHookResult = ReturnType<
  typeof useCountryJobsLazyQuery
>
export type CountryJobsQueryResult = ApolloReactCommon.QueryResult<
  CountryJobsQuery,
  CountryJobsQueryVariables
>
export const SearchArgsDocument = gql`
  query SearchArgs {
    searchArgs: getSearchArgs @client {
      term
      countrySlug
      companySlug
      orderByCreatedAt
    }
  }
`

/**
 * __useSearchArgsQuery__
 *
 * To run a query within a React component, call `useSearchArgsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArgsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArgsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchArgsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SearchArgsQuery,
    SearchArgsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<SearchArgsQuery, SearchArgsQueryVariables>(
    SearchArgsDocument,
    baseOptions
  )
}
export function useSearchArgsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SearchArgsQuery,
    SearchArgsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    SearchArgsQuery,
    SearchArgsQueryVariables
  >(SearchArgsDocument, baseOptions)
}
export type SearchArgsQueryHookResult = ReturnType<typeof useSearchArgsQuery>
export type SearchArgsLazyQueryHookResult = ReturnType<
  typeof useSearchArgsLazyQuery
>
export type SearchArgsQueryResult = ApolloReactCommon.QueryResult<
  SearchArgsQuery,
  SearchArgsQueryVariables
>
export const JobDocument = gql`
  query Job($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      ...job
    }
  }
  ${JobFragmentDoc}
`

/**
 * __useJobQuery__
 *
 * To run a query within a React component, call `useJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQuery({
 *   variables: {
 *      companySlug: // value for 'companySlug'
 *      jobSlug: // value for 'jobSlug'
 *   },
 * });
 */
export function useJobQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<JobQuery, JobQueryVariables>
) {
  return ApolloReactHooks.useQuery<JobQuery, JobQueryVariables>(
    JobDocument,
    baseOptions
  )
}
export function useJobLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    JobQuery,
    JobQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<JobQuery, JobQueryVariables>(
    JobDocument,
    baseOptions
  )
}
export type JobQueryHookResult = ReturnType<typeof useJobQuery>
export type JobLazyQueryHookResult = ReturnType<typeof useJobLazyQuery>
export type JobQueryResult = ApolloReactCommon.QueryResult<
  JobQuery,
  JobQueryVariables
>
export const RefDataDocument = gql`
  query RefData {
    countries {
      id
      name
      slug
    }
    companies {
      id
      name
      slug
    }
  }
`

/**
 * __useRefDataQuery__
 *
 * To run a query within a React component, call `useRefDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefDataQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    RefDataQuery,
    RefDataQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<RefDataQuery, RefDataQueryVariables>(
    RefDataDocument,
    baseOptions
  )
}
export function useRefDataLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    RefDataQuery,
    RefDataQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<RefDataQuery, RefDataQueryVariables>(
    RefDataDocument,
    baseOptions
  )
}
export type RefDataQueryHookResult = ReturnType<typeof useRefDataQuery>
export type RefDataLazyQueryHookResult = ReturnType<typeof useRefDataLazyQuery>
export type RefDataQueryResult = ApolloReactCommon.QueryResult<
  RefDataQuery,
  RefDataQueryVariables
>
export const RemoteJobsDocument = gql`
  query RemoteJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    remotes {
      id
      jobs(where: $where, orderBy: $orderBy) {
        ...jobPreview
      }
    }
  }
  ${JobPreviewFragmentDoc}
`

/**
 * __useRemoteJobsQuery__
 *
 * To run a query within a React component, call `useRemoteJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoteJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoteJobsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useRemoteJobsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    RemoteJobsQuery,
    RemoteJobsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<RemoteJobsQuery, RemoteJobsQueryVariables>(
    RemoteJobsDocument,
    baseOptions
  )
}
export function useRemoteJobsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    RemoteJobsQuery,
    RemoteJobsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    RemoteJobsQuery,
    RemoteJobsQueryVariables
  >(RemoteJobsDocument, baseOptions)
}
export type RemoteJobsQueryHookResult = ReturnType<typeof useRemoteJobsQuery>
export type RemoteJobsLazyQueryHookResult = ReturnType<
  typeof useRemoteJobsLazyQuery
>
export type RemoteJobsQueryResult = ApolloReactCommon.QueryResult<
  RemoteJobsQuery,
  RemoteJobsQueryVariables
>
export const JobsDocument = gql`
  query Jobs($input: SearchArgsInput!) {
    jobs: searchJobs(input: $input) @client {
      ...jobPreview
    }
  }
  ${JobPreviewFragmentDoc}
`

/**
 * __useJobsQuery__
 *
 * To run a query within a React component, call `useJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJobsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<JobsQuery, JobsQueryVariables>
) {
  return ApolloReactHooks.useQuery<JobsQuery, JobsQueryVariables>(
    JobsDocument,
    baseOptions
  )
}
export function useJobsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    JobsQuery,
    JobsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<JobsQuery, JobsQueryVariables>(
    JobsDocument,
    baseOptions
  )
}
export type JobsQueryHookResult = ReturnType<typeof useJobsQuery>
export type JobsLazyQueryHookResult = ReturnType<typeof useJobsLazyQuery>
export type JobsQueryResult = ApolloReactCommon.QueryResult<
  JobsQuery,
  JobsQueryVariables
>
