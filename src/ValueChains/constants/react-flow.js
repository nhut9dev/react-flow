import ProcessEdge from '../components/layouts/ProcessEdge';
import ProcessEgde from '../components/layouts/ProcessEdge';
import ProcessNodeLayout from '../components/layouts/ProcessNodeLayout';
import SegmentNodeLayout from '../components/layouts/SegmentNodeLayout';

const nodeLayout = {
	width: 200,
	height: 60
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
