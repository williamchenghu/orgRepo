import React, { Component } from 'react';
import RepoCardCmp from '../components/RepoCard';

export class RepoListContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        repoList: []
      };
    }
  
    componentDidMount = () => {
      // get repo info from organization
      // GET xxx
      this.setState({
        repoList: []
    });
    };
  
    render() {
        let { repoList } = this.state;
        return (
        <div>
            {repoList.map(repo => {
            return (
                <div key={repo.id}>
                    <RepoCardCmp repoDetails={repo} />
                </div>
            );
            })}
        </div>
        );
    }
  }
  export default RepoListContainer;
  