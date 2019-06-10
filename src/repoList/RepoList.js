import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import RepoCard from './RepoCard';
import OrgInfo from './OrgInfo';
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css';

const RepoList = () => {
	const [repoList, setRepoList] = useState([]);
	const [orgInfo, setOrgInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		api.get('orgs/vincit/repos?per_page=100').then(res => {
			setRepoList(res.data);
		});
		api.get('orgs/vincit').then(res => {
			setOrgInfo(res.data);
		});
	}, []);

	return (
		<div>
			<OrgInfo orgDetails={orgInfo} />
			{repoList.length > 0 &&
				repoList
					.filter(
						(item, index) =>
							index >= pageNumber * 30 && index < (pageNumber + 1) * 30
					)
					.map(repo => <RepoCard repoDetails={repo} key={repo.id} />)}
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				breakLabel={'...'}
				breakClassName={'break'}
				pageCount={Math.ceil(repoList.length / 30)}
				marginPagesDisplayed={2}
				pageRangeDisplayed={30}
				onPageChange={page => {
					setPageNumber(page.selected);
				}}
				containerClassName={'pagination'}
				activeClassName={'activePage'}
			/>
		</div>
	);
};
export default RepoList;
