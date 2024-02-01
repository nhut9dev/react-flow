import { Handle, Position } from 'reactflow';
import styles from './ProcessNodeLayout.module.scss';

const ProcessNodeLayout = ({ data }) => {
	return (
		<div className={styles.processNodeLayoutWrapper}>
			<div className={styles['processNodeLayout']}>
				<div>{data?.label}</div>

				<Handle
					id="targetProcess"
					type="target"
					position={Position.Left}
					style={{ opacity: 0, left: 0 }}
					onConnect={(params) => console.log('handle onConnect', params)}
					isConnectable={false}
				/>
			</div>
		</div>
	);
};

export default ProcessNodeLayout;
