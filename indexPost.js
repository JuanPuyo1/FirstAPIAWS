var AWS = require('aws-sdk');
// Set the region 

// Create the DynamoDB service object
exports.handler = async (event, context) => {
var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//const {id,size,topping} = JSON.parse(event.body)
var params = {
  TableName: 'Pizza',
  Item: {
    //: id,
    //size: size,
    //topping: topping
    id: '5',size: 'medium', topping:'green peppers'
  }
};

const data = await ddb.put(params).promise();
const response = {
    statusCode: '201',
    body: JSON.stringify(data)
}
return response;
};