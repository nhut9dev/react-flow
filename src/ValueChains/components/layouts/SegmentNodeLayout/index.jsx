import { Handle, Position } from 'reactflow';
import styles from './SegmentNodeLayout.module.scss';
import FirstSegment from './first-segment.svg?react';
import Segment from './segment.svg?react';
import { layoutConstant } from '../../../constants/react-flow';
import NodeToolbar from '../../NodeToolbar';
import { useNodeStore } from '../../../../hooks/useStores';

const SegmentNodeLayout = ({ data }) => {
	const { selectedNode } = useNodeStore();

	return (
		<div
			className={styles.segmentNodeLayoutWrapper}
			style={
				data.originData.type === 'subSegment'
					? { width: layoutConstant.subSegment.width }
					: {}
			}
		>
			<div
				className={styles.segmentNodeLayout}
				style={
					data.originData.type === 'subSegment'
						? { width: layoutConstant.subSegment.width }
						: {}
				}
			>
				{data?.isFirst ? (
					<FirstSegment
						style={{ height: '100%', width: '100%' }}
						fill={
							data?.style?.backgroundColor
								? data?.style?.backgroundColor
								: '#ffffff'
						}
					/>
				) : (
					<Segment
						style={{ height: '100%', width: '100%' }}
						fill={
							data?.style?.backgroundColor
								? data?.style?.backgroundColor
								: '#ffffff'
						}
					/>
				)}
				<div
					className={styles.content}
					style={{ color: data?.style?.color || '#272727' }}
				>
					{data?.label}
				</div>

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
						<Handle
							id="targetSegmentOutChain"
							type="target"
							position={Position.Top}
							style={{ opacity: 0, top: 0, left: 90 }}
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
			<NodeToolbar
				width={
					data.originData.type === 'subSegment'
						? layoutConstant.subSegment.width
						: 170
				}
				open={data?.originData.id === selectedNode?.id}
				node={data}
			/>
		</div>
	);
};

export default SegmentNodeLayout;
