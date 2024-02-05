import { create } from 'zustand';

const useNodeStore = create((set, get) => ({
	selectedNode: null,
	onChangeSelectedNode: (newNode, setNodes) => {
		const { selectedNode } = get();
		if (newNode?.id === selectedNode?.id)
			return set({ selectedNode: { ...newNode, zIndex: 2 } });

		setNodes((nodes) =>
			nodes.map((node) => {
				if (node.id === selectedNode?.id) {
					return { ...node, zIndex: 1 };
				} else if (node.id === newNode?.id) {
					return { ...node, zIndex: 2 };
				}
				return node;
			})
		);

		return set({ selectedNode: { ...newNode, zIndex: 2 } });
	}
}));

export { useNodeStore };
