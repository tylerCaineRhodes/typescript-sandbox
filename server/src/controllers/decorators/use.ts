import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

//we use factory decorators anytime we want our decorator to take an argument
export function use(newMiddleware: RequestHandler){
  return function(target: any, key: string, desc: PropertyDescriptor) { 
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, newMiddleware], target, key)
  };
}