import { Handle } from 'reactflow';
import styles from './ProcessNodeLayout.module.scss';

const ProcessNodeLayout = ({ data }) => {
	return (
		<div className={styles.processNodeLayoutWrapper}>
			<div className={styles['processNodeLayout']}>
				<Handle
					type="target"
					position="left"
					style={{ opacity: 0, left: 0 }}
					onConnect={(params) => console.log('handle onConnect', params)}
					isConnectable={false}
				/>
				<div>{data?.label}</div>
				<Handle
					type="source"
					position="right"
					style={{ opacity: 0, right: -20 }}
					isConnectable={false}
				/>
			</div>
		</div>
	);
};

export default ProcessNodeLayout;
