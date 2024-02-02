import { Handle, Position } from 'reactflow';
import styles from './ProcessNodeLayout.module.scss';
import NodeToolbar from '../../NodeToolbar';
import { useNodeStore } from '../../../../hooks/useStores';

const ProcessNodeLayout = ({ data }) => {
	const { selectedNode, setSelectedNode } = useNodeStore();

	return (
		<div
			className={styles.processNodeLayoutWrapper}
			onClick={() => setSelectedNode(data.originData)}
		>
			<div className={styles['processNodeLayout']}>
				<div>{data?.label}</div>

				<Handle
					id="targetProcess"
					type="target"
					position={Position.Left}
					style={{ opacity: 0, left: 0 }}
					isConnectable={false}
				/>
			</div>
			<NodeToolbar
				width={170}
				open={data?.originData.id === selectedNode?.id}
			/>
		</div>
	);
};

export default ProcessNodeLayout;
