import { Handle, Position } from 'reactflow';
import styles from './SegmentNodeLayout.module.scss';
import FirstSegment from './first-segment.svg?react';
import Segment from './segment.svg?react';
import { layoutConstant, nodeTypes } from '../../../constants/react-flow';

const SegmentNodeLayout = ({ data }) => {
	console.log('🚀 ~ SegmentNodeLayout ~ data:', data);
	return (
		<div
			className={styles.segmentNodeLayout}
			style={
				data.originData.type === 'subSegment'
					? { width: layoutConstant.subSegment.width }
					: {}
			}
		>
			{data?.isFirst ? (
				<FirstSegment style={{ height: '100%', width: '100%' }} />
			) : (
				<Segment style={{ height: '100%', width: '100%' }} />
			)}
			<div className={styles.content}>{data?.label}</div>

			{/* Segment */}
			{data.originData.type === 'segment' && (
				<>
					<Handle
						id="sourceSegment"
						type="source"
						position={Position.Bottom}
						style={{ opacity: 0, bottom: 0, left: 110 }}
						isConnectable={false}
					/>
					<Handle
						id="targetSegment"
						type="target"
						position={Position.Bottom}
						style={{ opacity: 0, bottom: 0, left: 90 }}
						isConnectable={false}
					/>
				</>
			)}
			{data.isEnd && data.originData.type === 'segment' && (
				<Handle
					id="sourceProcess"
					type="source"
					position={Position.Right}
					style={{ opacity: 0, right: 0 }}
					isConnectable={false}
				/>
			)}

			{/* Sub */}
			{data.isFirst && data.originData.type === 'subSegment' && (
				<Handle
					id="targetSegment"
					type="target"
					position={Position.Left}
					style={{ opacity: 0, left: 0 }}
					isConnectable={false}
				/>
			)}
			{data.isEnd && data.originData.type === 'subSegment' && (
				<Handle
					id="sourceSegment"
					type="source"
					position={Position.Right}
					style={{ opacity: 0, right: 0 }}
					isConnectable={false}
				/>
			)}
		</div>
	);
};

export default SegmentNodeLayout;
