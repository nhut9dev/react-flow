import { SketchPicker } from 'react-color';
import { useEffect, useState } from 'react';
import { Button, Space } from 'antd';

import COLORS from '../../constants/colors';
import styles from './ColorPicker.module.scss';
import PaintColorIcon from './paint-color.svg?react';
import useChart from '../../../hooks/useChart';
import { useNodeStore } from '../../../hooks/useStores';

const ColorPicker = ({
	backgroundColor,
	textColor: textColorProp,
	toolbarOpen
}) => {
	const [open, setOpen] = useState(false);
	const [isBgColorActive, setIsBgColorActive] = useState(true);
	const { selectedNode } = useNodeStore();
	console.log('🚀 ~ selectedNode:', selectedNode);

	const [bgColor, setBgColor] = useState(backgroundColor);
	const [textColor, setTextColor] = useState(textColorProp);

	const { setNodes } = useChart();

	const handleOnChangeColor = (bgColor, textColor, selectedNode) => {
		setNodes((nodes) => {
			return nodes.map((node) => {
				if (selectedNode.id === node.id) {
					return {
						...node,
						data: {
							...node.data,
							style: node?.data?.style
								? {
										backgroundColor: bgColor,
										color: textColor
								  }
								: {}
						},
						style: { ...node.style, backgroundColor: bgColor, color: textColor }
					};
				}
				return node;
			});
		});
	};

	const handleCancelChangeColor = (selectedNode) => {
		setNodes((nodes) => {
			return nodes.map((node) => {
				if (selectedNode.id === node.id) {
					return {
						...node,
						data: {
							...node.data,
							style: node?.data?.style
								? {
										backgroundColor: selectedNode.originData.backgroundColor,
										color: selectedNode.originData.color
								  }
								: {}
						},
						style: {
							...node.style,
							backgroundColor: selectedNode.originData.backgroundColor,
							color: selectedNode.originData.color
						}
					};
				}
				return node;
			});
		});
	};

	useEffect(() => {
		setBgColor(backgroundColor);
	}, [backgroundColor, toolbarOpen]);

	useEffect(() => {
		setTextColor(textColorProp);
	}, [textColorProp, toolbarOpen]);

	useEffect(() => {
		if (open && !toolbarOpen) {
			setOpen(false);
		}
	}, [open, toolbarOpen]);

	return (
		<>
			<div className={styles.colorPickerWrapper}>
				<PaintColorIcon
					fill={COLORS.SECONDARY.hex}
					onClick={() => setOpen(!open)}
				/>
			</div>
			{open && (
				<div className={styles.popupWrapper}>
					<div className={styles.colorRow}>
						<Space>
							<span>{`Màu nền: `}</span>
							<Button
								className={styles.resultColorButton}
								onClick={() => setIsBgColorActive(true)}
							>
								<div
									style={{ backgroundColor: bgColor, width: 30, height: 12 }}
								></div>
							</Button>
						</Space>

						<Space>
							<span>{`Màu chữ: `}</span>
							<Button
								className={styles.resultColorButton}
								onClick={() => setIsBgColorActive(false)}
							>
								<div
									style={{ backgroundColor: textColor, width: 30, height: 12 }}
								></div>
							</Button>
						</Space>
					</div>
					<SketchPicker
						width={240}
						className={styles.sketchPicker}
						key={isBgColorActive ? 'backgroundColor' : 'textColor'}
						color={isBgColorActive ? bgColor : textColor}
						onChange={(color) => {
							if (isBgColorActive) {
								setBgColor(color.hex);
								handleOnChangeColor(color.hex, textColor, selectedNode);
							} else {
								setTextColor(color.hex);
								handleOnChangeColor(bgColor, color.hex, selectedNode);
							}
						}}
						presetColors={[]}
					/>
					<div
						style={{
							marginTop: 10,
							display: 'flex',
							justifyContent: 'flex-end',
							gap: 10
						}}
					>
						<Button
							onClick={() => {
								handleCancelChangeColor(selectedNode);
							}}
						>
							Reset
						</Button>
						{/* <Button
							onClick={() => {
								handleOnChangeColor(bgColor, textColor, selectedNode);
							}}
						>
							OK
						</Button> */}
					</div>
				</div>
			)}
		</>
	);
};

export default ColorPicker;
