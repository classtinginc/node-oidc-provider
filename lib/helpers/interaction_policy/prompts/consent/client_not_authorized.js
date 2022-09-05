const Check = require('../../check');

module.exports = () => new Check('client_not_authorized', 'client not authorized for End-User session yet', 'interaction_required', (ctx) => {
  const { oidc } = ctx;

  console.log('----client not authorized for End-User session yet----');
  console.log({ session: oidc.session, client: oidc.client });
  console.log('-------');

  if (oidc.session.sidFor(oidc.client.clientId)) {
    return false;
  }

  return true;
});
