

describe('Dbz Services', function() {
  
  beforeEach(function() {
    module('dbzDb.services');
  });
  
  describe('DbZData', function() {
    
    it('should call backend to retrieve a list of characters', 
      inject(function(DbzData, $httpBackend) {
        $httpBackend.expectGET('data/data.json').respond(200,[]);
        DbzData.list();
        $httpBackend.flush();
      })
    );

  });

});