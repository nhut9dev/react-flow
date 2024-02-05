import { SketchPicker } from 'react-color';
import styles from './ColorPicker.module.scss';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

const PopoverContent = ({ backgroundColor, textColor: textColorProp }) => {
	const [isBgColorActive, setIsBgColorActive] = useState(true);

	const [bgColor, setBgColor] = useState(backgroundColor);
	const [textColor, setTextColor] = useState(textColorProp);

	useEffect(() => {
		setBgColor(backgroundColor);
	}, [backgroundColor]);

	useEffect(() => {
		setTextColor(textColorProp);
	}, [textColorProp]);

	useEffect(() => {
		setIsBgColorActive(true);
	}, []);

	return (
		<div className={styles.popoverContent}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: 10
				}}
			>
				<div>{`Background: ${bgColor}`}</div>
				<div>{`Text color: ${textColor}`}</div>
			</div>
			<div>
				<SketchPicker
					key={isBgColorActive ? 'backgroundColor' : 'textColor'}
					color={isBgColorActive ? bgColor : textColor}
					onChange={(color) => {
						if (isBgColorActive) {
							setBgColor(color.hex);
						} else {
							setTextColor(color.hex);
						}
					}}
				/>
			</div>
			<div
				style={{
					marginTop: 10,
					display: 'flex',
					justifyContent: 'flex-end',
					gap: 10
				}}
			>
				<Button>Hủy</Button>
				<Button>OK</Button>
			</div>
		</div>
	);
};

export default PopoverContent;
