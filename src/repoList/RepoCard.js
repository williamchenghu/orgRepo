import React from 'react';
import Octicon, {
	FileCode,
	Law,
	RepoForked,
	Star,
	IssueOpened
} from '@primer/octicons-react';
import './RepoCard.css';

const RepoCard = ({ repoDetails }) => (
	<div className="repoCard">
		<a className="repoName" href={repoDetails.html_url}>
			{repoDetails.name}
		</a>
		<div className="repoDescription">{repoDetails.description}</div>
		<div>
			{repoDetails.language && (
				<span className="repoInfo">
					<span className="repoInfo-icon">
						<Octicon icon={FileCode} size="small" ariaLabel="GitHub" />
					</span>
					{repoDetails.language}
				</span>
			)}
			{repoDetails.license && (
				<span className="repoInfo">
					<span className="repoInfo-icon">
						<Octicon icon={Law} size="small" ariaLabel="GitHub" />
					</span>
					{repoDetails.license.spdx_id}
				</span>
			)}
			<span className="repoInfo">
				<span className="repoInfo-icon">
					<Octicon icon={RepoForked} size="small" ariaLabel="GitHub" />
				</span>
				{repoDetails.forks}
			</span>
			<span className="repoInfo">
				<span className="repoInfo-icon">
					<Octicon icon={Star} size="small" ariaLabel="GitHub" />
				</span>
				{repoDetails.watchers}
			</span>
			<span className="repoInfo">
				<span className="repoInfo-icon">
					<Octicon icon={IssueOpened} size="small" ariaLabel="GitHub" />
				</span>
				{repoDetails.open_issues}
			</span>
		</div>
		<div />
	</div>
);

export default RepoCard;
