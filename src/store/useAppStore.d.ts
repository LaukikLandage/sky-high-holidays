interface AppState {
    activeFilter: 'all' | 'international' | 'domestic';
    setActiveFilter: (filter: 'all' | 'international' | 'domestic') => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    promoBannerVisible: boolean;
    setPromoBannerVisible: (isVisible: boolean) => void;
}
export declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppState>>;
export {};
