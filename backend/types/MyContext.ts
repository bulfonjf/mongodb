import { Request as ExpressRequest } from 'express';
import { PassportContext  } from 'graphql-passport';
import { MyUser } from './MyUser';
import { BaseContext } from '@apollo/server/src/externalTypes/context';

export interface MyContext extends PassportContext<MyUser, ExpressRequest>, BaseContext{}

//export interface ProjectSubscriptionContext extends PassportSubscriptionContext<MyUser, ExpressRequest>{}