// Type definitions for elfjs-loader v2.0
// Project: https://www.elfjs.org/
// Definitions by: Wu Hu <https://github.com/kind-n>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6


import * as Elf from "elfjs";

declare module "elfjs" {

    export const Compiler: CompilerMethodMap;

    export function config (options: Options): void;
    export function require (modname: string): Elf.Promise<any>;
    export function set (modname: string, value: any): void;

    export function atob (value: string): string;
    export function btoa (value: string): string;

    export function evlq (value: number[]): string;
    export function dvlq (value: string): number[];

    interface Options {
        maps?: object;
        shims?: string[];
        baseURL?: string;
        routing?: (url: string) => string;
        defaultExtension?: string;
    }
    interface Provide {
        dirname?: string;
        depends?: string[];
        trustor?: any;
        exports?: any;
    }
    interface CompilerMethod {
        (value: string, filename: string, rawname?: string): Provide | Elf.Promise<Provide>;
    }
    interface CompilerMethodMap {
        [extension: string]: CompilerMethod;
    }
}

export = Elf;