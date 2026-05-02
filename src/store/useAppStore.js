import { create } from 'zustand';
export const useAppStore = create((set) => ({
    activeFilter: 'all',
    setActiveFilter: (filter) => set({ activeFilter: filter }),
    isMenuOpen: false,
    setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
    promoBannerVisible: true,
    setPromoBannerVisible: (isVisible) => set({ promoBannerVisible: isVisible }),
}));
