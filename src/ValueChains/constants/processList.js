const subSegmentList = () => {
	const id = 1;
	return [
		{
			id: `sub-segment-${id}-1`,
			nodes: [
				{
					id: `sub-segment-${id}-1`,
					name: `Phân đoạn nhánh ${id}-1`,
					prevId: `segment-${id}-1`,
					nextId: `sub-segment-${id}-2`,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},
				{
					id: `sub-segment-${id}-2`,
					name: `Phân đoạn nhánh ${id}-2`,
					prevId: `sub-segment-${id}-1`,
					nextId: `segment-${2}-5`,
					nextNode: {
						nextId: `segment-${2}-5`,
						index: 4
					},
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				}
			]
		},

		{
			id: `sub-segment-${id}-12`,
			nodes: [
				{
					id: `sub-segment-${id}-12`,
					name: `Phân đoạn nhánh ${id}-12`,
					prevId: `segment-${id}-2`,
					nextId: `sub-segment-${id}-22`,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},
				{
					id: `sub-segment-${id}-22`,
					name: `Phân đoạn nhánh ${id}-22`,
					prevId: `sub-segment-${id}-12`,
					nextId: `segment-${3}-5`,
					nextNode: {
						nextId: `segment-${3}-5`,
						index: 4
					},
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				}
			]
		},

		{
			id: `sub-segment-${id}46-4`,
			nodes: [
				{
					id: `sub-segment-${id}46-4`,
					name: `Phân đoạn nhánh ${id}46-4`,
					prevId: `segment-${id}-4`,
					nextId: `segment-${3}-6`,
					nextNode: {
						nextId: `segment-${3}-6`,
						index: 5
					},
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				}
			]
		},
		// no target
		{
			id: `sub-segment-${id}1-1`,
			nodes: [
				{
					id: `sub-segment-${id}1-1`,
					name: `Phân đoạn nhánh ${id}1-1`,
					prevId: `segment-${id}-1`,
					nextId: `sub-segment-${id}1-2`,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},
				{
					id: `sub-segment-${id}1-2`,
					name: `Phân đoạn nhánh ${id}1-2`,
					prevId: `sub-segment-${id}1-1`,
					nextId: `sub-segment-${id}1-3`,
					nextNode: null,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},

				{
					id: `sub-segment-${id}1-3`,
					name: `Phân đoạn nhánh ${id}1-3`,
					prevId: `sub-segment-${id}1-2`,
					nextId: null,
					nextNode: null,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				}
			]
		},
		{
			id: `sub-segment-${id}4-1`,
			nodes: [
				{
					id: `sub-segment-${id}4-1`,
					name: `Phân đoạn nhánh ${id}4-1`,
					prevId: `segment-${id}-4`,
					nextId: `sub-segment-${id}4-2`,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},
				{
					id: `sub-segment-${id}4-2`,
					name: `Phân đoạn nhánh ${id}4-2`,
					prevId: `sub-segment-${id}4-1`,
					nextId: `sub-segment-${id}4-3`,
					nextNode: null,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
				},

				{
					id: `sub-segment-${id}4-3`,
					name: `Phân đoạn nhánh ${id}4-3`,
					prevId: `sub-segment-${id}4-2`,
					nextId: null,
					nextNode: null,
					type: 'subSegment',
					backgroundColor: '#ffffff',
					textColor: '#272727'
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
			type: 'segment',
			index: 0,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-2`,
			name: `Phân đoạn ${id}-2`,
			prevId: `segment-${id}-1`,
			nextId: `segment-${id}-3`,
			type: 'segment',
			index: 1,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-3`,
			name: `Phân đoạn ${id}-3`,
			prevId: `segment-${id}-2`,
			nextId: `segment-${id}-4`,
			type: 'segment',
			index: 2,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-4`,
			name: `Phân đoạn ${id}-4`,
			prevId: `segment-${id}-3`,
			nextId: `segment-${id}-5`,
			type: 'segment',
			index: 3,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-5`,
			name: `Phân đoạn ${id}-5`,
			prevId: `segment-${id}-4`,
			nextId: `segment-${id}-6`,
			type: 'segment',
			index: 4,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-6`,
			name: `Phân đoạn ${id}-6`,
			prevId: `segment-${id}-5`,
			nextId: `segment-${id}-7`,
			type: 'segment',
			index: 5,
			backgroundColor: '#ffffff',
			textColor: '#272727'
		},
		{
			id: `segment-${id}-7`,
			name: `Phân đoạn ${id}-7`,
			prevId: `segment-${id}-6`,
			nextId: null,
			type: 'segment',
			index: 6,
			backgroundColor: '#ffffff',
			textColor: '#272727'
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
		color: 'a',
		index: 0,
		backgroundColor: '#E78895',
		textColor: '#272727'
	},
	{
		id: 'process-2',
		name: 'Tiến trình 2',
		segmentList: segmentList(2),
		type: 'process',
		color: 'b',
		index: 1,
		backgroundColor: '#E8C872',
		textColor: '#272727'
	},
	{
		id: 'process-3',
		name: 'Tiến trình 3',
		segmentList: segmentList(3),
		type: 'process',
		color: 'c',
		index: 2,
		backgroundColor: '#BED1CF',
		textColor: '#272727'
	}
];

export default processList;
