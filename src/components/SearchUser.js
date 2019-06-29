import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value)
    .then((response) => {
      this.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value)
    .then((response) => {
      this.props.updateRepos(response.data);
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">GitHub Info</h1>
        <p className="lead"><a href="https://jscasts.teachable.com/"><small> JSCast | Matheus Lima</small></a></p>
        <hr className="my-4"/>
        <div className="row">
          <form className="col-sm-6" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Nome de Usuário</label>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: matheusml"
              />
              <small id="usernamelHelp" className="form-text text-muted">Digite o nome de usuário.</small>
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// SearchUser.propTypes = {
//   updateUser: React.PropTypes.func.isRequired,
//   updateRepos: React.PropTypes.func.isRequired,
// };

export default SearchUser;