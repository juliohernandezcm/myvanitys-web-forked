/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import './NoProductCard.css';
import './NoProductCard.responsive.css';
import { VanitysContext } from '../../context/index';
import createProduct from '../../assets/CreateProduct.png';

const NoProductCard = () => {
	const { toggleCreateProductPopup } = useContext(VanitysContext);

	return (
		<div className='noProductCard'>
			<img
				className='noProductCard__image'
				src={createProduct}
				alt='No product image'
			/>
			<div className='noProductCard__text'>
				<p className='noProductCard__text--bold'>
					Add your first product and start organizing your cosmetic
					collection
				</p>
				<p className='noProductCard__text--regular'>
					It only takes a few seconds! Click on "Create Product" and take
					control of your vanity. Organize your products now!
				</p>
			</div>
			<button
				onClick={() => toggleCreateProductPopup()}
				className='noProductCard__button'
			>
				Create Product
			</button>
		</div>
	);
};

export { NoProductCard };
