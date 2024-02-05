import { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import processList from './constants/processList';
import { convertEdgesData } from '../utils';
import { edgeTypes, nodeTypes } from './constants/react-flow';
import { useNodeStore } from '../hooks/useStores';
import { Button } from 'antd';
import useChart from '../hooks/useChart';

const ValueChains = () => {
	const { selectedNode, onChangeSelectedNode } = useNodeStore();

	const { nodesState, setNodes, setNodesState, onNodesChange } = useChart();

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
				<Button onClick={() => console.log(nodesState)}>Log nodes</Button>
				<Button onClick={() => console.log(selectedNode)}>
					Log Selected node
				</Button>
				<Button
					onClick={() => {
						setNodesState((nodes) => {
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
				nodes={nodesState}
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
			></ReactFlow>
		</>
	);
};

export default ValueChains;
