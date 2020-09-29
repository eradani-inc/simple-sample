const { Connection, CommandCall } = require('itoolkit');
const { parseString } = require('xml2js');
 
const connection = new Connection({
  transport: 'rest',
  transportOptions: { url: 'http://eradani-connect-test.eradani.com:57700/cgi-bin/xmlcgi.pgm', username: 'demo', password: 'eradani' },
});
 
const command = new CommandCall({ type: 'cl', command: 'RTVJOBA USRLIBL(?) SYSLIBL(?)' });
 
connection.add(command);
 
connection.run((error, xmlOutput) => {
  if (error) {
    throw error;
  }
  parseString(xmlOutput, (parseError, result) => {
    if (parseError) {
      throw parseError;
    }
    console.log(JSON.stringify(result));
  });
});
