const subSegmentList = (id) => {
	return [
		{
			id: `sub-segment-${id}-1`,
			name: `Phân đoạn nhánh ${id}-1`,
			prevId: `segment-${id}-1`,
			nextId: `sub-segment-${id}-2`
		},
		{
			id: `sub-segment-${id}-2`,
			name: `Phân đoạn nhánh ${id}-2`,
			prevId: `sub-segment-${id}-1`,
			nextId: `segment-${id}-4`
		},

		{
			id: `sub-segment-${id}-3`,
			name: `Phân đoạn nhánh ${id}-3`,
			prevId: `segment-${id}-4`,
			nextId: `sub-segment-${id}-4`
		},
		{
			id: `sub-segment-${id}-4`,
			name: `Phân đoạn nhánh ${id}-1`,
			prevId: `sub-segment-${id}-3`,
			nextId: null
		}
	];
};

const segmentList = (id) => {
	return [
		{
			id: `segment-${id}-1`,
			name: `Phân đoạn ${id}-1`,
			prevId: null,
			nextId: `segment-${id}-2`,
			type: 'segment'
		},
		{
			id: `segment-${id}-2`,
			name: `Phân đoạn ${id}-2`,
			prevId: `segment-${id}-1`,
			nextId: `segment-${id}-3`,
			type: 'segment'
		},
		{
			id: `segment-${id}-3`,
			name: `Phân đoạn ${id}-3`,
			prevId: `segment-${id}-2`,
			nextId: `segment-${id}-4`,
			type: 'segment'
		},
		{
			id: `segment-${id}-4`,
			name: `Phân đoạn ${id}-4`,
			prevId: `segment-${id}-3`,
			nextId: `segment-${id}-5`,
			type: 'segment'
		},
		{
			id: `segment-${id}-5`,
			name: `Phân đoạn ${id}-5`,
			prevId: `segment-${id}-4`,
			nextId: `segment-${id}-6`,
			type: 'segment'
		},
		{
			id: `segment-${id}-6`,
			name: `Phân đoạn ${id}-6`,
			prevId: `segment-${id}-5`,
			nextId: `segment-${id}-7`,
			type: 'segment'
		},
		{
			id: `segment-${id}-7`,
			name: `Phân đoạn ${id}-7`,
			prevId: `segment-${id}-6`,
			nextId: null,
			type: 'segment'
		}
	];
};

const processList = [
	{
		id: 'process-1',
		name: 'Tiến trình 1',
		segmentList: segmentList(1),
		subSegmentList: subSegmentList(1),
		type: 'process',
		color: 'a'
	},
	{
		id: 'process-2',
		name: 'Tiến trình 2',
		segmentList: segmentList(2),
		type: 'process',
		color: 'b'
	},
	{
		id: 'process-3',
		name: 'Tiến trình 3',
		segmentList: segmentList(3),
		subSegmentList: subSegmentList(3),
		type: 'process',
		color: 'c'
	}
];

export default processList;
