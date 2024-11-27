import { Logger } from '@nestjs/common';

export function LogExecutionTime(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const startTime = Date.now();
      const result = await originalMethod.apply(this, args);
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      Logger.log(
        `Method ${propertyKey} execution time: ${executionTime}ms`,
        target.constructor.name,
      );
      return result;
    };
    return descriptor;
  };
}

// export function LogExecutionTime(): MethodDecorator {
//   console.log('entrou');

//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = async function (...args: any[]) {
//       const startTime = Date.now();

//       try {
//         const result = await originalMethod.apply(this, args);
//         const endTime = Date.now();
//         const executionTime = endTime - startTime;
//         Logger.log(
//           `Method ${propertyKey} execution time: ${executionTime}ms`,
//           target.constructor.name,
//         );
//         return result;
//       } catch (error) {
//         const endTime = Date.now();
//         const executionTime = endTime - startTime;
//         Logger.log(
//           `Method ${propertyKey} execution failed after ${executionTime}ms`,
//           target.constructor.name,
//         );
//         throw error;
//       }
//     };
//     return descriptor;
//   };
// }
