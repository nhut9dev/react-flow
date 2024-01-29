const subSegmentList = () => {
	return [
		{
			_id: `segment-${id}-1`,
			name: `Phân đoạn ${id}-1`
		}
	];
};

const segmentList = (id) => {
	return [
		{
			_id: `segment-${id}-1`,
			name: `Phân đoạn ${id}-1`,
			prevId: null,
			nextId: `segment-${id}-2`
		},
		{
			_id: `segment-${id}-2`,
			name: `Phân đoạn ${id}-2`,
			prevId: `segment-${id}-1`,
			nextId: `segment-${id}-3`
		},
		{
			_id: `segment-${id}-3`,
			name: `Phân đoạn ${id}-3`,
			prevId: `segment-${id}-2`,
			nextId: `segment-${id}-4`
		},
		{
			_id: `segment-${id}-4`,
			name: `Phân đoạn ${id}-4`,
			prevId: `segment-${id}-3`,
			nextId: `segment-${id}-5`
		},
		{
			_id: `segment-${id}-5`,
			name: `Phân đoạn ${id}-5`,
			prevId: `segment-${id}-4`,
			nextId: `segment-${id}-6`
		},
		{
			_id: `segment-${id}-6`,
			name: `Phân đoạn ${id}-6`,
			prevId: `segment-${id}-5`,
			nextId: `segment-${id}-7`
		},
		{
			_id: `segment-${id}-7`,
			name: `Phân đoạn ${id}-7`,
			prevId: `segment-${id}-6`,
			nextId: null
		}
	];
};

const processList = [
	{
		_id: 'process-1',
		name: 'Tiến trình 1',
		segmentList: segmentList(1)
	},
	{
		_id: 'process-2',
		name: 'Tiến trình 2',
		segmentList: segmentList(2)
	},
	{
		_id: 'process-3',
		name: 'Tiến trình 3',
		segmentList: segmentList(3)
	}
];

export default processList;
