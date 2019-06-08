import React from 'react';
import Octicon, {
	FileCode,
	Law,
	RepoForked,
	Star,
	IssueOpened
} from '@primer/octicons-react';

const RepoCard = ({ repoDetails }) => (
	<div>
		<a href={repoDetails.html_url}>{repoDetails.name}</a>
		<div>{repoDetails.description}</div>
		<div>
			<span>
				<Octicon icon={FileCode} size="small" ariaLabel="GitHub" />
				{repoDetails.language}
			</span>
			<span>
				{repoDetails.license && (
					<>
						<Octicon icon={Law} size="small" ariaLabel="GitHub" />
						{repoDetails.license.spdx_id}
					</>
				)}
			</span>
			<span>
				<Octicon icon={RepoForked} size="small" ariaLabel="GitHub" />
				{repoDetails.forks}
			</span>
			<span>
				<Octicon icon={Star} size="small" ariaLabel="GitHub" />
				{repoDetails.watchers}
			</span>
			<span>
				<Octicon icon={IssueOpened} size="small" ariaLabel="GitHub" />
				{repoDetails.open_issues}
			</span>
		</div>
		<div />
		<br />
	</div>
);

export default RepoCard;
