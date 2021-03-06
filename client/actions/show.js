import * as actions from 'constants/show_action_types';

import { CHANNEL, ASSET_LITE, ASSET_DETAILS } from 'constants/show_request_types';

// basic request parsing
export function onHandleShowPageUri (params) {
  return {
    type: actions.HANDLE_SHOW_URI,
    data: params,
  };
};

export function onRequestError (error) {
  return {
    type: actions.REQUEST_ERROR,
    data: error,
  };
};

export function onNewChannelRequest (channelName, channelId) {
  const requestType = CHANNEL;
  const requestId = `cr#${channelName}#${channelId}`;
  return {
    type: actions.CHANNEL_REQUEST_NEW,
    data: { requestType, requestId, channelName, channelId },
  };
};

export function onNewAssetRequest (name, id, channelName, channelId, extension) {
  const requestType = extension ? ASSET_LITE : ASSET_DETAILS;
  const requestId = `ar#${name}#${id}#${channelName}#${channelId}`;
  return {
    type: actions.ASSET_REQUEST_NEW,
    data: {
      requestType,
      requestId,
      name,
      modifier: {
        id,
        channel: {
          name: channelName,
          id  : channelId,
        },
      },
    },
  };
};

export function onRequestUpdate (requestType, requestId) {
  return {
    type: actions.REQUEST_UPDATE,
    data: {
      requestType,
      requestId,
    },
  };
};

export function addRequestToRequestList (id, error, key) {
  return {
    type: actions.REQUEST_LIST_ADD,
    data: { id, error, key },
  };
};

// asset actions

export function addAssetToAssetList (id, error, name, claimId, shortId, claimData) {
  return {
    type: actions.ASSET_ADD,
    data: { id, error, name, claimId, shortId, claimData },
  };
}

// channel actions

export function addNewChannelToChannelList (id, name, shortId, longId, claimsData) {
  return {
    type: actions.CHANNEL_ADD,
    data: { id, name, shortId, longId, claimsData },
  };
};

export function onUpdateChannelClaims (channelKey, name, longId, page) {
  return {
    type: actions.CHANNEL_CLAIMS_UPDATE_ASYNC,
    data: {channelKey, name, longId, page},
  };
};

export function updateChannelClaims (channelListId, claimsData) {
  return {
    type: actions.CHANNEL_CLAIMS_UPDATE_SUCCESS,
    data: {channelListId, claimsData},
  };
};

// display a file

export function fileRequested (name, claimId) {
  return {
    type: actions.FILE_REQUESTED,
    data: { name, claimId },
  };
};

export function updateFileAvailability (status) {
  return {
    type: actions.FILE_AVAILABILITY_UPDATE,
    data: status,
  };
};

export function updateDisplayAssetError (error) {
  return {
    type: actions.DISPLAY_ASSET_ERROR,
    data: error,
  };
};
