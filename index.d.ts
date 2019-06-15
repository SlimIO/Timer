declare namespace Timer {
    type fn = (...any) => void;

    export function setInterval(fn: fn, delayMs: number, ...params: any[]): number;
    export function clearInterval(id: number): number;
}

export as namespace Timer;
export = Timer;
