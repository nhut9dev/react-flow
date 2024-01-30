import { MarkerType } from 'reactflow';
import { nodeLayout } from '../ValueChains/constants/react-flow';

const convertNodesData = (nodes, xIndex = 1, YIndex = 1, type = 'process') => {
	let x = xIndex;
	let y = YIndex;

	return nodes.reduce((prev, cur) => {
		const result = {
			id: cur.id,
			type: cur.type,
			position: {
				x: nodeLayout.width * x + (type === 'segment' ? 50 : 0),
				y: nodeLayout.height * 3 * y
			},
			dragHandle: '.custom-drag-handle',
			data: {
				label: cur.name
			}
		};

		if (type === 'process') {
			y = y + 1;
			x = 1;
		}

		if (type === 'segment') {
			x = x + 1;
		}

		if (type === 'process' && cur.segmentList.length) {
			return [
				...prev,
				result,
				...convertNodesData(cur.segmentList, x + 1, y - 1, 'segment')
			];
		}

		return [...prev, result];
	}, []);
};

const convertEdgesData = (nodes) => {
	return nodes
		.map((item, index) => {
			if (nodes.length && index === nodes.length - 1) {
				return null;
			}

			return {
				id: `${item?.id}-${nodes[index + 1]?.id}`,
				source: item.segmentList[item.segmentList.length - 1]?.id,
				target: nodes[index + 1].id,
				markerEnd: {
					type: MarkerType.ArrowClosed,
					width: 14,
					height: 14,
					color: '#FF0072'
				},
				style: {
					strokeWidth: 2,
					stroke: '#FF0072'
				},

				type: 'processEdge'
			};
		})
		.filter((item) => !!item);
};

export { convertNodesData, convertEdgesData };
