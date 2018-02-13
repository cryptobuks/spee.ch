import React from 'react';
import NavBar from 'containers/NavBar';
import AssetTitle from 'components/AssetTitle';
import AssetDisplay from 'components/AssetDisplay';
import AssetInfo from 'components/AssetInfo';

class ShowAssetDetails extends React.Component {
  render () {
    return (
      <div>
        <NavBar/>
        <div className="row row--tall row--padded">
          <div className="column column--10">
            <AssetTitle />
          </div>
          <div className="column column--5 column--sml-10 align-content-top">
            <div className="row row--padded">
              <AssetDisplay />
            </div>
          </div><div className="column column--5 column--sml-10 align-content-top">
          <div className="row row--padded">
            <AssetInfo />
          </div>
        </div>
        </div>
        }
      </div>
    );
  }
};

export default ShowAssetDetails;
