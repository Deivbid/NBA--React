import React from 'react'
import {Link} from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'



const generateBlocks = ({blocks}) => {
	if(blocks)
	{
		return(
			blocks.map((item) => {
				return(
					<div className={`item ${item.type}`}>

						<Reveal key={item.id} effect="animated fadeInUp">
							<div className="veil"></div>
							<Link to={item.link}>
								<div 
								className="image"
								style={{background:`url(/images/blocks/${item.image}) no-repeat`}}
								>
								</div>
							</Link>
							
						</Reveal>
					</div>
				)
			})
		)
	}
}

const Blocks = (props) => {

	console.log(props)
	return(
		<div className="home_blocks">
			{generateBlocks(props)}
		</div>

	)

}

export default Blocks