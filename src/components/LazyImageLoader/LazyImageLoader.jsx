import React, { useRef, useState, useEffect } from 'react';
const ONE_PX_PNG =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const LazyLoadImage = ({
	src,
	visibleByDefault,
	placeholderSrc,
	threshold,
	onVisibilityChange,
	...otherProps
}) => {
	const rootRef = useRef();
	const [isVisible, setIsVisible] = useState(visibleByDefault);
	const checkIntersections = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			}
		});
	};

	useEffect(() => {
		if (!isVisible) {
			const newIntersectionObserver = new IntersectionObserver(
				checkIntersections,
				{
					rootMargin: threshold + 'px',
				}
			);
			newIntersectionObserver.observe(rootRef.current);
			return () => newIntersectionObserver.disconnect();
		}
	}, [isVisible, checkIntersections]);
	useEffect(() => {
		if (isVisible) {
			onVisibilityChange && onVisibilityChange();
		}
	}, [isVisible, onVisibilityChange]);
	return (
		<img ref={rootRef} src={isVisible ? src : placeholderSrc} {...otherProps} />
	);
};

LazyLoadImage.defaultProps = {
	visibleByDefault: false,
	placeholderSrc: ONE_PX_PNG,
	threshold: 100,
};

export default LazyLoadImage;