import { useCallback } from 'react';
import ReactFlow, {
	MarkerType,
	addEdge,
	useEdgesState,
	useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import processList from './constants/processList';
import { convertEdgesData, convertNodesData } from '../utils';
import { edgeTypes, nodeTypes } from './constants/react-flow';

const nodesData = Array(10)
	.fill()
	.reduce((prev, cur, index) => {
		return [
			...prev,
			{
				id: `${index + 1}`,
				type: index === 0 || index === 5 ? 'process' : 'segment',
				position: {
					x:
						prev.length === 0 || index === 5
							? 200
							: (prev.length === 1 || index === 6 ? 40 : 0) +
							  (prev?.[prev.length - 1]?.position.x || 0) +
							  210,
					y: 100 + (index > 4 ? 300 : 0)
				},
				dragHandle: '.custom-drag-handle',
				data: {
					label: index + 1,
					isFirst: index === 1 || index === 6,
					isEnd: index === 4 || index === 9
				}
			}
		];
	}, []);

const initialEdges = [
	{
		id: 'e1-2',
		source: '5',
		target: '6',
		markerEnd: {
			type: MarkerType.ArrowClosed,
			width: 14,
			height: 14,
			color: '#FF0072'
		},
		style: {
			strokeWidth: 2,
			stroke: '#FF0072'
		},

		type: 'arrowEdge'
	}
];

const ValueChains = () => {
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

	console.log('🚀 ~ ValueChains ~ nodes:', edges);

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
			/>
		</>
	);
};

export default ValueChains;
