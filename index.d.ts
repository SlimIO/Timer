/// <reference types="node" />
/// <reference types="@types/node" />

declare namespace Timer {
    type fn = (...any) => void;

    export function setInterval(fn: fn, delayMs: number, ...params: any[]): number;
    export function setTimeout(fn: fn, delayMs: number, ...params: any[]): number;
    export function clearTimer(id: number): number;
}

export as namespace Timer;
export = Timer;
