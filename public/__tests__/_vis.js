const ngMock = require('ngMock');
const expect = require('expect.js');

require('../kibi_timeline');

describe('Kibi Timeline', function () {
  describe('Visualization', function () {

    let vis;

    beforeEach(function () {

      ngMock.module('kibana', function ($provide) {
        $provide.constant('kbnDefaultAppId', '');
        $provide.constant('kibiDefaultDashboardTitle', '');
        $provide.constant('kibiEnterpriseEnabled', false);
        $provide.constant('elasticsearchPlugins', ['siren-join']);
      });

      ngMock.inject(function ($injector, Private) {
        const Vis = Private(require('ui/Vis'));
        const indexPattern = Private(require('fixtures/stubbed_logstash_index_pattern'));
        vis = new Vis(indexPattern, {
          type: 'kibi_timeline'
        });
      });
    });

    it('check vis', function () {
      expect(vis.type.name).to.be('kibi_timeline');
    });

  });
});
