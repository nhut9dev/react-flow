import { MarkerType } from 'reactflow';
import {
	layoutConstant,
	nodeLayout
} from '../ValueChains/constants/react-flow';

const checkTypeNode = (type) => {
	switch (type) {
		case 'subSegment':
			return 'segment';
		default:
			return type;
	}
};

const checkTargetInChain = (segments, subs) => {
	const targetId = subs[subs.length - 1].nextId;
	return !targetId || segments.map((item) => item.id).includes(targetId);
};

const inChainLength = 2;
const inChainRange = 2;
const outChainRange = 2;
const outTargetIndex = 1;

const inChain = 1;
const outChain = 10;

const subSegmentChainLength = (segments, subSegments) => {
	const hasTargetNode = subSegments?.[subSegments.length - 1]?.nextId;
	const targetNode = subSegments?.[subSegments.length - 1]?.nextNode;

	const isTargetInChain =
		!hasTargetNode || segments.map((item) => item.id).includes(hasTargetNode);

	const prevNode = segments.find((item) => item.id === subSegments?.[0].prevId);
	const chainsLength = subSegments.length * inChainLength;

	if (isTargetInChain) {
		if (hasTargetNode) {
			return (
				inChain *
				((targetNode.index - prevNode.index) * inChainRange + chainsLength)
			);
		}
		return chainsLength + prevNode.index;
	} else {
		return (
			outChain *
			((targetNode.index * outTargetIndex - prevNode.index) * outChainRange +
				chainsLength)
		);
	}
};

const convertNodesData = (nodes) => {
	let x = 0;
	let y = 0;
	let subX = 0;
	let subY = 0;
	if (!Array.isArray(nodes)) {
		return null;
	}

	const resultNodes = nodes.map((proc) => {
		if (!subY) {
			y += nodeLayout.height * 3;
		} else y += subY;
		subY = 0;
		subX = 0;
		x = 0;

		const process = {
			id: proc.id,
			zIndex: 1,
			type: checkTypeNode(proc.type),
			position: {
				x: x,
				y: y
			},
			dragHandle: '.custom-drag-handle',
			data: {
				label: proc.name,
				originData: proc,
				style: {
					backgroundColor: proc.backgroundColor,
					color: proc.textColor
				}
			},
			originData: proc,
			style: {
				backgroundColor: proc.backgroundColor,
				color: proc.textColor
			}
		};

		if (proc?.segmentList?.length) {
			const segmentList = proc.segmentList.map((seg, idx) => {
				x += nodeLayout.width + (idx === 0 ? 50 : 0);
				const segment = {
					id: seg.id,
					zIndex: 1,
					type: checkTypeNode(seg.type),
					position: {
						x: x,
						y: y
					},
					dragHandle: '.custom-drag-handle',
					data: {
						label: seg.name,
						originData: seg,
						isFirst: idx === 0,
						isEnd: idx === proc.segmentList.length - 1,
						style: {
							backgroundColor: seg.backgroundColor,
							color: seg.textColor
						}
					},
					originData: seg,
					style: {
						backgroundColor: seg.backgroundColor,
						color: seg.textColor
					}
				};

				return segment;
			});

			if (proc?.subSegmentChains?.length) {
				subY = y;
				const subSegmentChains = proc.subSegmentChains
					.map((item) => ({
						...item,
						level: subSegmentChainLength(
							proc.segmentList,
							item.nodes,
							proc.subSegmentChains
						)
					}))
					.sort((a, b) => a.level - b.level);

				const subChains = subSegmentChains.map((item) => {
					subY += nodeLayout.height * 1.6;
					return item.nodes.map((sub, idx) => {
						subX = idx
							? subX + layoutConstant.subSegment.width
							: segmentList.find((segment) => segment.id === sub.prevId)
									.position.x + 130;
						return {
							id: sub.id,
							zIndex: 1,
							type: checkTypeNode(sub.type),
							position: {
								x: subX,
								y: subY
							},
							dragHandle: '.custom-drag-handle',
							data: {
								label: sub.name,
								originData: sub,
								isFirst: idx === 0,
								isEnd: item.nodes.length === 1 || idx !== 0,
								data: {},
								style: {
									backgroundColor: sub.backgroundColor,
									color: sub.textColor
								}
							},
							originData: sub,
							style: {
								backgroundColor: sub.backgroundColor,
								color: sub.textColor
							}
						};
					});
				});

				return [process, ...segmentList, ...subChains.flat(2)];
			}

			return [process, ...segmentList];
		}

		return process;
	});

	return resultNodes.flat(Infinity);
};

const segmentHandle = {
	sourceSegment: 'sourceSegment',
	targetSegment: 'targetSegment',
	targetSegmentOutChain: 'targetSegmentOutChain',
	sourceProcess: 'sourceProcess'
};

const convertEdgesData = (nodes) => {
	const processEdges = nodes
		.map((item, index) => {
			if (nodes.length && index === nodes.length - 1) {
				return null;
			}

			return {
				id: `${item?.id}-${nodes[index + 1]?.id}`,
				zIndex: 1,
				source: item.segmentList[item.segmentList.length - 1]?.id,
				target: nodes[index + 1].id,
				sourceHandle: 'sourceProcess',
				targetHandle: 'targetProcess',
				markerEnd: {
					type: MarkerType.ArrowClosed,
					width: 20,
					height: 20,
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

	const subEdges = nodes
		?.filter((item) => item?.subSegmentChains?.length)
		?.map((node) => {
			return node.subSegmentChains?.map((item) => {
				return item.nodes
					.filter(
						(sub, idx) =>
							idx === 0 ||
							(idx === item.nodes.length - 1 && sub.nextId !== null)
					)
					.map((sub, idx) => {
						const resultSub = {
							id: `${idx === 0 ? sub.prevId + '-' : ''}${sub.id}${
								idx !== 0 ? '-' + sub.nextId : ''
							}`,
							zIndex: 1,
							source: idx === 0 ? sub.prevId : sub.id,
							target: idx !== 0 ? sub.nextId : sub.id,
							sourceHandle: segmentHandle.sourceSegment,
							targetHandle: checkTargetInChain(node.segmentList, item.nodes)
								? segmentHandle.targetSegment
								: segmentHandle.targetSegmentOutChain,
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
						if (item.nodes.length < 2 && !!sub.nextId) {
							return [
								resultSub,
								{
									id: `${sub.id}$-{sub.nextId}`,
									zIndex: 1,
									source: sub.id,
									target: sub.nextId,
									sourceHandle: segmentHandle.sourceSegment,
									targetHandle: checkTargetInChain(node.segmentList, item.nodes)
										? segmentHandle.targetSegment
										: segmentHandle.targetSegmentOutChain,
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
								}
							];
						}
						return resultSub;
					});
			});
		});

	return [...processEdges, ...subEdges.flat(Infinity)];
};

export { convertNodesData, convertEdgesData };
