const subSegmentList = (id) => {
	return [
		{
			id: `sub-segment-${id}-1`,
			nodes: [
				{
					id: `sub-segment-${id}-1`,
					name: `Phân đoạn nhánh ${id}-1`,
					prevId: `segment-${id}-2`,
					nextId: `sub-segment-${id}-2`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-2`,
					name: `Phân đoạn nhánh ${id}-2`,
					prevId: `sub-segment-${id}-1`,
					nextId: `segment-${id}-22a`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-22a`,
					name: `Phân đoạn nhánh ${id}-22a`,
					prevId: `sub-segment-${id}-2`,
					nextId: `segment-${id}-6`,
					type: 'subSegment'
				}
			]
		},
		{
			id: `sub-segment-${id}-3`,
			nodes: [
				{
					id: `sub-segment-${id}-3`,
					name: `Phân đoạn nhánh ${id}-3`,
					prevId: `segment-${id}-4`,
					nextId: `sub-segment-${id}-4`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-4`,
					name: `Phân đoạn nhánh ${id}-4`,
					prevId: `sub-segment-${id}-3`,
					nextId: `sub-segment-${id}-4g`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-4g`,
					name: `Phân đoạn nhánh ${id}-4g`,
					prevId: `sub-segment-${id}-4`,
					nextId: null,
					type: 'subSegment'
				}
			]
		},
		{
			id: `sub-segment-${id}-a`,
			nodes: [
				{
					id: `sub-segment-${id}-a`,
					name: `Phân đoạn nhánh ${id}-a`,
					prevId: `segment-${id}-1`,
					nextId: `segment-${id}-2`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-b`,
					name: `Phân đoạn nhánh ${id}-b`,
					prevId: `sub-segment-${id}-a`,
					nextId: `sub-segment-${id}-4g2`,
					type: 'subSegment'
				},
				{
					id: `sub-segment-${id}-4g2`,
					name: `Phân đoạn nhánh ${id}-4g2`,
					prevId: `sub-segment-${id}-b`,
					nextId: `segment-${id === 1 ? 3 : 1}-7`,
					type: 'subSegment'
				}
			]
		},
		{
			id: `sub-segment-${id}-one`,
			nodes: [
				{
					id: `sub-segment-${id}-one`,
					name: `Phân đoạn nhánh ${id}-one`,
					prevId: `segment-${id}-3`,
					nextId: `segment-${id}-4`,
					type: 'subSegment'
				}
			]
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
		subSegmentChains: subSegmentList(1),
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
		subSegmentChains: subSegmentList(3),
		type: 'process',
		color: 'c'
	}
];

export default processList;
