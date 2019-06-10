import React from 'react';
import Octicon, { Link, Mail } from '@primer/octicons-react';
import '../styles/OrgInfo.css';

const OrgInfo = ({ orgDetails }) => (
	<div className="orgHead">
		<img
			className="orgAvatar"
			src={orgDetails.avatar_url}
			width="100"
			height="100"
			alt={`@${orgDetails.name}`}
		/>
		<div className="orgInfo">
			<h1 className="orgName">{orgDetails.name}</h1>
			<div className="orgDescription">{orgDetails.description}</div>
			<div>
				<span className="orgLink">
					<Octicon icon={Link} size="small" ariaLabel="GitHub" />
					<a href={orgDetails.blog} className="orgLink-text" target="_blank" rel="noopener noreferrer">
						{orgDetails.blog}
					</a>
				</span>
				<span className="orgEmail">
					<Octicon icon={Mail} size="small" ariaLabel="GitHub" />
					<a href={`mailto:${orgDetails.email}`} className="orgLink-text">
						{orgDetails.email}
					</a>
				</span>
			</div>
		</div>
		<hr className="hr"/>
	</div>
);
export default OrgInfo;
