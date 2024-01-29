import { Handle } from 'reactflow';
import styles from './SegmentNodeLayout.module.scss';

const SegmentNodeLayout = ({ data }) => {
	return (
		<div className={styles.segmentNodeLayoutWrapper}>
			<div
				className={
					styles[data?.isFirst ? 'firstSegmentNodeLayout' : 'segmentNodeLayout']
				}
			>
				{!data?.isFirst && <div className={styles.triangleAfter} />}
				<div className={styles.triangleBefore} />

				<Handle
					type="target"
					position="left"
					style={{ opacity: 0, left: 0 }}
					onConnect={(params) => console.log('handle onConnect', params)}
					isConnectable={data?.isConnectable}
				/>
				<div>{data?.label}</div>
				<Handle
					type="source"
					position="right"
					style={{ opacity: 0, right: -20 }}
					isConnectable={data?.isConnectable}
				/>
			</div>
		</div>
	);
};

export default SegmentNodeLayout;
