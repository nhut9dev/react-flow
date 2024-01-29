import { Handle } from 'reactflow';
import styles from './SegmentNodeLayout.module.scss';
import FirstSegment from './first-segment.svg?react';
import Segment from './segment.svg?react';

const SegmentNodeLayout = ({ data }) => {
	return (
		<div className={styles.segmentNodeLayout}>
			{data?.isFirst ? (
				<FirstSegment style={{ height: '100%', width: '100%' }} />
			) : (
				<Segment style={{ height: '100%', width: '100%' }} />
			)}
			<Handle
				type="target"
				position="left"
				style={{ opacity: 0, left: 0 }}
				onConnect={(params) => console.log('handle onConnect', params)}
				isConnectable={false}
			/>
			<div className={styles.content}>{data?.label}</div>
			<Handle
				type="source"
				position="right"
				style={{ opacity: 0, right: 0 }}
				isConnectable={false}
			/>
		</div>
	);
};

export default SegmentNodeLayout;
