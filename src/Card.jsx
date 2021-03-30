import React from 'react';
import './Card.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
function Card({ title, price, lis1, lis2, lis3, lis4, Icon, fun = true, thime }) {
	return (
		<div className="card">
			<div className={`box ${thime && 'light'}`}>
				<div className="content">
					<div className="icon">
						<Icon />
					</div>
					<h3>{title}</h3>
					<h4>
						<sup>$</sup>
						{price}
					</h4>
					<ul>
						<li>
							<FaCheck className="check" />
							{lis1}
						</li>
						<li>
							<FaCheck className="check" />
							{lis2}
						</li>
						<li>
							<FaCheck className="check" />
							{lis3}
						</li>
						<li>
							{fun ? <FaTimes className="times" /> : <FaCheck className="check" />}
							{lis4}
						</li>
					</ul>
					<a href="/">Order Now</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
