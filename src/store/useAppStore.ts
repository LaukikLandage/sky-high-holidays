import { create } from 'zustand';

interface AppState {
  activeFilter: 'all' | 'international' | 'domestic';
  setActiveFilter: (filter: 'all' | 'international' | 'domestic') => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  promoBannerVisible: boolean;
  setPromoBannerVisible: (isVisible: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeFilter: 'all',
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  promoBannerVisible: true,
  setPromoBannerVisible: (isVisible) => set({ promoBannerVisible: isVisible }),
}));
