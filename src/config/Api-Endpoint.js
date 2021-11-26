import CONFIG from './index';

const API_ENDPOINT = {
  users: `${CONFIG.BASE_URL}user`,
  userId: (id) => `${CONFIG.BASE_URL}user/${id}`,
  calon: `${CONFIG.BASE_URL}calon`,
  calonId: (id) => `${CONFIG.BASE_URL}calon/${id}`,
  vote: `${CONFIG.BASE_URL}vote`,
  voteId: (id) => `${CONFIG.BASE_URL}vote/${id}`,
  countAllVote: `${CONFIG.BASE_URL}vote/get/totalvote`,
  countByCalonVoteId: (idCalon) => `${CONFIG.BASE_URL}vote/${idCalon}/sumVote`
};

export default API_ENDPOINT;