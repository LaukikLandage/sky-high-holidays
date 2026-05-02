export interface ItineraryItem {
    day: number;
    title: string;
    content: string;
}
export interface Destination {
    id: string;
    name: string;
    slug: string;
    location: string;
    duration: string;
    price: string;
    image: string;
    gallery: string[];
    overview: string;
    highlights: string[];
    itinerary: ItineraryItem[];
    inclusions: string[];
    exclusions: string[];
    cancellationPolicy: string[];
    paymentPolicy: string[];
    terms: string;
    type: 'international' | 'domestic';
}
interface DestinationState {
    destinations: Destination[];
    addDestination: (destination: Destination) => void;
    updateDestination: (id: string, destination: Partial<Destination>) => void;
    deleteDestination: (id: string) => void;
    getDestinationBySlug: (slug: string) => Destination | undefined;
}
export declare const useDestinationStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<DestinationState>, "setState" | "persist"> & {
    setState(partial: DestinationState | Partial<DestinationState> | ((state: DestinationState) => DestinationState | Partial<DestinationState>), replace?: false | undefined): unknown;
    setState(state: DestinationState | ((state: DestinationState) => DestinationState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<DestinationState, DestinationState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: DestinationState) => void) => () => void;
        onFinishHydration: (fn: (state: DestinationState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<DestinationState, DestinationState, unknown>>;
    };
}>;
export {};
