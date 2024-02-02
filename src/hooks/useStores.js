import { create } from 'zustand';

const useNodeStore = create((set) => ({
	selectedNode: null,
	setSelectedNode: (selectedNode) => set({ selectedNode })
}));

export { useNodeStore };
