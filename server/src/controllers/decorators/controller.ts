import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './metadataKeys';

export function controller(routePrefix: string){
  //gonna be constructor function as apposed to applying to a method or property which will refer to prototype instead
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

      if(path){
        router[method](`${routePrefix}${path}`, ...middlewares,  routeHandler)
      }
    }
  }
}