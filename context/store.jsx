import create from 'zustand';

const useStore = create((set) => {
  return {
    introTime: 0.5,
    intro: true,
    toggleIntro: () => set((state) => ({ intro: !state.intro })),
  };
});

export default useStore;
