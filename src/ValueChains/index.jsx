import { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import processList from './constants/processList';
import { convertEdgesData, convertNodesData } from '../utils';
import { edgeTypes, nodeTypes } from './constants/react-flow';
import { useNodeStore } from '../hooks/useStores';
import { Button } from 'antd';

const ValueChains = () => {
	const { selectedNode, onChangeSelectedNode } = useNodeStore();
	console.log('🚀 ~ ValueChains ~ selectedNode:', selectedNode);

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
			<div>
				<Button onClick={() => console.log(nodes)}>Log nodes</Button>
				<Button
					onClick={() => {
						setNodes((nodes) => {
							return nodes.map((node) => ({
								...node,
								data: {
									...node.data,
									style: node?.data?.style
										? {
												backgroundColor: '#E86071'
										  }
										: {}
								},
								style: { backgroundColor: '#E86071' }
							}));
						});
					}}
				>
					Update nodes
				</Button>
			</div>
			<ReactFlow
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onNodeClick={(_, node) => {
					onChangeSelectedNode(node, setNodes);
				}}
				onEdgeClick={() => {
					if (selectedNode) {
						onChangeSelectedNode(null, setNodes);
					}
				}}
				onPaneClick={() => {
					if (selectedNode) {
						onChangeSelectedNode(null, setNodes);
					}
				}}
			/>
		</>
	);
};

export default ValueChains;
