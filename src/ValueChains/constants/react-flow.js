import ProcessEdge from '../components/layouts/ProcessEdge';
import ProcessEgde from '../components/layouts/ProcessEdge';
import ProcessNodeLayout from '../components/layouts/ProcessNodeLayout';
import SegmentNodeLayout from '../components/layouts/SegmentNodeLayout';

export const layoutConstant = {
	subSegment: {
		width: 170
	}
};

const nodeLayout = {
	width: 230,
	height: 70
};
const edgeLayout = {};

const nodeTypes = {
	segment: SegmentNodeLayout,
	process: ProcessNodeLayout
};

const edgeTypes = {
	processEdge: ProcessEdge
};

export { nodeLayout, edgeLayout, nodeTypes, edgeTypes };
