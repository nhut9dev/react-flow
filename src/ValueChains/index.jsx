import { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import processList from './constants/processList';
import { convertEdgesData, convertNodesData } from '../utils';
import { edgeTypes, nodeTypes } from './constants/react-flow';
import { useNodeStore } from '../hooks/useStores';

const ValueChains = () => {
	const { selectedNode, setSelectedNode } = useNodeStore();

	const [nodes, setNodes, onNodesChange] = useNodesState(
		convertNodesData(processList)
	);
	const [edges, setEdges, onEdgesChange] = useEdgesState(
		convertEdgesData(processList)
	);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<>
			<ReactFlow
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onNodeDragStart={(node1, node2, node3, node4) =>
					console.log(node1, node2, node3, node4)
				}
				onNodeDragStop={(node1, node2, node3, node4) =>
					console.log(node1, node2, node3, node4)
				}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onEdgeClick={() => {
					if (selectedNode) {
						setSelectedNode(null);
					}
				}}
				onPaneClick={() => {
					if (selectedNode) {
						setSelectedNode(null);
					}
				}}
			/>
		</>
	);
};

export default ValueChains;
