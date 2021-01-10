/**
 * 业务异常
 */

export interface BusinessError extends Error {
    status: number;
}

export function throwError(msg: string, status: number = 1) {
    const e = new Error(msg) as BusinessError;
    e.status = status;
    throw e;
}
