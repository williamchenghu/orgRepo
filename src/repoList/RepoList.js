import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import RepoCard from './RepoCard';

const RepoList = () => {
	const [repoList, setRepoList] = useState([]);

	useEffect(() => {
		api.get('orgs/vincit/repos').then(res => setRepoList(res.data));
	});

	return (
		<div>
			{repoList.map(repo => {
				return (
					<div key={repo.id}>
						<RepoCard repoDetails={repo} />
					</div>
				);
			})}
		</div>
	);
};
export default RepoList;
