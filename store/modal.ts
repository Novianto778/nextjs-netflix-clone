import { DocumentData } from 'firebase/firestore';
import create from 'zustand';
import { Movie } from '../typing';

interface ModalState {
  modal: boolean;
  movie: Movie | DocumentData | null;
  setCurrentMovie: (movie: Movie | DocumentData | null) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: false,
  movie: null,
  setCurrentMovie: (movie: Movie | DocumentData | null) => set({ movie }),
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}));
