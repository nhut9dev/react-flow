import { useRef } from 'react';
import styles from './NodeToolbar.module.scss';
import PlusIcon from './plus-circle.svg?react';
import useClickOutside from '../../../hooks/useClickOutside';

const NodeToolbar = ({ open, setOpen, width }) => {
	const customRef = useRef();
	const ref = useRef();

	useClickOutside(ref, customRef, () => {
		if (open) {
			setOpen(false);
		}
	});

	return (
		<div ref={ref} className={styles.relativeWrapper}>
			<div
				className={styles.nodeToolbar}
				style={{ width: width, display: open ? 'flex' : 'none' }}
			>
				<PlusIcon />
			</div>
		</div>
	);
};

export default NodeToolbar;
