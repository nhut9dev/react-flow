import { useEffect } from 'react';
import { useNodesState } from 'reactflow';
import { create } from 'zustand';
import { convertNodesData } from '../utils';
import processList from '../ValueChains/constants/processList';

const useChartStore = create((set, get) => ({
	nodes: [],
	setNodes: null,
	onNodesChange: null,
	initSetNodes: ({ nodes, setNodes, onNodesChange }) =>
		set({ nodes, setNodes, onNodesChange })
}));

const useChart = () => {
	const { nodes, setNodes, onNodesChange, initSetNodes } = useChartStore();

	const [nodesState, setNodesState, onNodesStateChange] = useNodesState(
		convertNodesData(processList)
	);

	useEffect(() => {
		if (
			!nodes?.length &&
			setNodes === null &&
			onNodesChange === null &&
			nodesState?.length
		) {
			initSetNodes({
				nodes: nodesState,
				setNodes: setNodesState,
				onNodesChange: onNodesStateChange
			});
		}
	}, [
		initSetNodes,
		nodes,
		nodesState,
		onNodesChange,
		onNodesStateChange,
		setNodes,
		setNodesState
	]);
	return {
		nodes,
		setNodes,
		onNodesChange,
		initSetNodes,

		nodesState,
		setNodesState,
		onNodesStateChange
	};
};

export default useChart;
