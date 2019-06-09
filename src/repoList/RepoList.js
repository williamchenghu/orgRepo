import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import RepoCard from './RepoCard';
import OrgInfo from './OrgInfo';

const RepoList = () => {
	const [repoList, setRepoList] = useState([]);
	const [orgInfo, setOrgInfo] = useState([]);

	useEffect(() => {
		api.get('orgs/vincit/repos').then(res => {
			setRepoList(res.data);
		});
		api.get('orgs/vincit').then(res => {
			setOrgInfo(res.data);
		});
	}, []);

	return (
		<div>
			<OrgInfo orgDetails={orgInfo} />
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
