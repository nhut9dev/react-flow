import { useRef } from 'react';
import styles from './NodeToolbar.module.scss';
import PlusIcon from './plus-circle.svg?react';
import ColorPicker from '../ColorPicker';

const NodeToolbar = ({ open, width, node }) => {
	const ref = useRef();

	return (
		<div ref={ref} className={styles.relativeWrapper}>
			<div
				className={styles.nodeToolbar}
				style={{ width: width, display: open ? 'flex' : 'none' }}
			>
				<PlusIcon />
				<ColorPicker
					toolbarOpen={open}
					backgroundColor={node.style.backgroundColor}
					textColor={node.style.color}
				/>
			</div>
		</div>
	);
};

export default NodeToolbar;
