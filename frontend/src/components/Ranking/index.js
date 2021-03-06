import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import User from './User'

import './ranking.scss'

//PAGE CLASSEMENT

const Ranking = ({
  username,
  users,
  loading,
  manageLoadRank,
  manageLoad,
  resetLoading,
}) => {

  //Recherche du classement
  useEffect(
    manageLoadRank,
    [],
  );

  return (
    <div className="ranking">
      {/* Loader pendant le chargement du classement */}
      {loading && <div className="ranking__waitLoadding">
          <FontAwesomeIcon
            size="5x"
            color="#4fdb88"
            icon={faSpinner}
            spin
          />
        </div>}

      {/*Classement  */}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Pseudo</th>
              <th>Capital</th>
              <th>Evolution</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <User
                  key={user.username}
                  manageLoad={manageLoad}
                  resetLoading={resetLoading}
                  myUsername={username}
                  {...user}
                />
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

Ranking.proptypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  manageLoadRank: PropTypes.func.isRequired,
  manageLoad: PropTypes.func.isRequired,
  resetLoading: PropTypes.func.isRequired,
}

export default Ranking;
