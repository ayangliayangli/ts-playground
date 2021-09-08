interface ISubject {
    on: (event: string, observer: IObserver) => void;
    once?: (event: string, observer: IObserver) => void;
    off?: (event: string, observer: IObserver) => void;
    fire?: (playload: any) => void
}

interface IObserver {
    update: (payload: any) => void;
}

class MySubject implements ISubject {
    private observers: Map<string, IObserver[]>;

    public on(event: string, observer: IObserver) {
        const isExist = this.observers.has(event)
        if (isExist) {
            const items = this.observers.get(event);
            this.observers.set(event, [...items, observer])
        } else {
            this.observers.set(event, [observer])
        }
    }

    
}