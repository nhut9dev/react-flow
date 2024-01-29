import { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import SegmentNodeLayout from './components/layouts/SegmentNodeLayout';
import ProcessNodeLayout from './components/layouts/ProcessNodeLayout';

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
				data: {
					label: index + 1,
					isFirst: index === 1 || index === 6,
					isEnd: index === 4 || index === 9
				}
			}
		];
	}, []);
// .map((_, index) => {
// 	return {
// 		id: `${index + 1}`,
// 		type: index === 0 || index === 5 ? 'process' : 'segment',
// 		position: {
// 			x: ((index % 5) + 1) * 210 + (index === 1 || index === 5 ? 50 : 0),
// 			y: 100 + (index > 4 ? 300 : 0)
// 		},
// 		data: {
// 			label: index + 1,
// 			isFirst: index === 1 || index === 6,
// 			isEnd: index === 4 || index === 9
// 		}
// 	};
// });

const initialEdges = [
	{
		id: 'e1-2',
		source: '5',
		target: '6',

		type: 'smoothstep'
	}
];

const nodeTypes = {
	segment: SegmentNodeLayout,
	process: ProcessNodeLayout
};

const ValueChains = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(nodesData);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<>
			<div>
				<button
					onClick={() => {
						console.log(nodes);
					}}
				>
					nodes
				</button>
			</div>
			<ReactFlow
				nodeTypes={nodeTypes}
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
