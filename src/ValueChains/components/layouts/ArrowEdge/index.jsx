import React from 'react';
import {
	BaseEdge,
	EdgeLabelRenderer,
	getBezierPath,
	getSmoothStepPath,
	useReactFlow
} from 'reactflow';

const CustomEdge = ({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	style = {},
	markerEnd
}) => {
	const { setEdges } = useReactFlow();
	const [edgePath, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
		centerX: targetX - 50,
		centerY: targetY - 50
	});
	console.log('🚀 ~ edgePath:', edgePath);

	return (
		<>
			<BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
			<EdgeLabelRenderer>
				<div
					style={{
						position: 'absolute',
						transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
						fontSize: 12,
						// everything inside EdgeLabelRenderer has no pointer events by default
						// if you have an interactive element, set pointer-events: all
						pointerEvents: 'all'
					}}
					className="nodrag nopan"
				></div>
			</EdgeLabelRenderer>
		</>
	);
};

export default CustomEdge;
