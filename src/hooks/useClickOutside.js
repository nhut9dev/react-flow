import { useEffect } from 'react';

const useClickOutside = (ref, customRef, callback) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				// When clicking clear icon of antd select
				event.target?.parentNode?.getAttribute('data-icon') !==
					'close-circle' &&
				event.target?.getAttribute('data-icon') !== 'close-circle'
			) {
				// In case of using renderItem, disable handleClickOutside to not overlap with the renderItem setOpenDropdown event
				if (customRef.current && customRef.current.contains(event.target))
					return;

				callback(ref);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, callback, customRef]);
};

export default useClickOutside;
