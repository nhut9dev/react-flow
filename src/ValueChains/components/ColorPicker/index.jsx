import { Popover } from 'antd';
import COLORS from '../../constants/colors';
import styles from './ColorPicker.module.scss';
import PaintColorIcon from './paint-color.svg?react';
import { useEffect, useMemo, useState } from 'react';
import PopoverContent from './PopoverContent';

const ColorPicker = ({
	backgroundColor,
	textColor: textColorProp,
	toolbarOpen
}) => {
	const [open, setOpen] = useState(false);

	const [bgColor, setBgColor] = useState(backgroundColor);
	const [textColor, setTextColor] = useState(textColorProp);

	const popoverContent = useMemo(() => {
		return <PopoverContent />;
	}, []);

	useEffect(() => {
		setBgColor(backgroundColor);
	}, [backgroundColor]);

	useEffect(() => {
		setTextColor(textColorProp);
	}, [textColorProp]);

	useEffect(() => {
		if (open && !toolbarOpen) {
			setOpen(false);
		}
	}, [open, toolbarOpen]);

	return (
		<div className={styles.colorPickerWrapper}>
			<Popover
				placement="bottom"
				content={popoverContent}
				trigger="click"
				open={open}
				onOpenChange={(open) => setOpen(open)}
				getPopupContainer={(trigger) => trigger.parentNode}
			>
				<PaintColorIcon fill={COLORS.SECONDARY.hex} />
			</Popover>
		</div>
	);
};

export default ColorPicker;
