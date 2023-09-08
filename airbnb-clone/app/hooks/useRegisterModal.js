import  { create } from  'zustand';
// Custom Hooks 
const useRegisterModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

  export default useRegisterModal;

