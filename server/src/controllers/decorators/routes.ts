import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// so that we have the same argument signature in using any decorator
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: Methods) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const put = routeBinder(Methods.PUT);
export const post = routeBinder(Methods.POST);
export const patch = routeBinder(Methods.PATCH);
export const del = routeBinder(Methods.DELETE);
