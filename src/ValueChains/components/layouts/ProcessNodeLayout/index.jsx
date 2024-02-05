import { Handle, Position } from 'reactflow';
import styles from './ProcessNodeLayout.module.scss';
import NodeToolbar from '../../NodeToolbar';
import { useNodeStore } from '../../../../hooks/useStores';

const ProcessNodeLayout = ({ data }) => {
	const { selectedNode } = useNodeStore();

	return (
		<div
			className={styles.processNodeLayoutWrapper}
			onMouseEnter={(e) => {
				e.stopPropagation();
			}}
			style={data?.style ? data?.style : {}}
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
