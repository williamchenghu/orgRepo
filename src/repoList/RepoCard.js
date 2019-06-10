import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Octicon, {
	Code,
	Law,
	RepoForked,
	Star,
	IssueOpened,
	GitCommit,
	Flame
} from '@primer/octicons-react';
import '../styles/RepoCard.css';

const RepoCard = ({ repoDetails }) => {
	const [contributor, setContributor] = useState({});

	useEffect(() => {
		api.get(`/repos/vincit/${repoDetails.name}/contributors`).then(res => {
			res.data.length > 0 && setContributor(res.data[0]);
		});
	}, [repoDetails.name]);

	return (
		<div className="repoCard">
			<div className="repoInfo">
				<a className="repoName" href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">
					{repoDetails.name}
				</a>
				<div className="repoDescription">{repoDetails.description}</div>
				<div>
					{repoDetails.language && (
						<span className="repoDetails">
							<span className="repoDetails-icon">
								<Octicon icon={Code} size="small" ariaLabel="GitHub" />
							</span>
							{repoDetails.language}
						</span>
					)}
					{repoDetails.license && (
						<span className="repoDetails">
							<span className="repoDetails-icon">
								<Octicon icon={Law} size="small" ariaLabel="GitHub" />
							</span>
							{repoDetails.license.spdx_id}
						</span>
					)}
					<span className="repoDetails">
						<span className="repoDetails-icon">
							<Octicon icon={RepoForked} size="small" ariaLabel="GitHub" />
						</span>
						{repoDetails.forks}
					</span>
					<span className="repoDetails">
						<span className="repoDetails-icon">
							<Octicon icon={Star} size="small" ariaLabel="GitHub" />
						</span>
						{repoDetails.watchers}
					</span>
					<span className="repoDetails">
						<span className="repoDetails-icon">
							<Octicon icon={IssueOpened} size="small" ariaLabel="GitHub" />
						</span>
						{repoDetails.open_issues}
					</span>
				</div>
			</div>
			{contributor && (
				<div className="repoContributor">
					<a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
						<img
							className="contributorAvatar"
							src={contributor.avatar_url}
							width="32"
							height="32"
							alt={`@${contributor.login}`}
						/>
					</a>
					<div>
						<span className="contributorOnFire">
							<Octicon icon={Flame} size="small" ariaLabel="GitHub" />
						</span>
						<a href={contributor.html_url} className="contributorName" target="_blank" rel="noopener noreferrer">
							{contributor.login}
						</a>
					</div>
					<div>
						<span className="repoDetails-icon">
							<Octicon icon={GitCommit} size="small" ariaLabel="GitHub" />
						</span>
						{contributor.contributions}
					</div>
				</div>
			)}
		</div>
	);
};

export default RepoCard;
