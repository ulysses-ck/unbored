import React, { Fragment, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

const Button = ({
	message,
	handleMethod,
}: {
	message: string;
	handleMethod?: MouseEventHandler;
}) => (
	<Fragment>
		{/* Template for the button */}
		<button type="button" className={styles.button} onClick={handleMethod}>
			{message}
		</button>
	</Fragment>
);

export default Button;
