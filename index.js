var AWS = require('aws-sdk');
exports.handler = async(event,context) => {
    var awsddbdc = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})
    const {id} = event.pathParameters;
    
    var params = {
        TableName: 'Pizza',
        Key: {
            //id:'1'
            id:id
        }
    };
    const data = await awsddbdc.get(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify(data.Item)
    }
    return response;
};

//URL TESTING https://szevmyojbk.execute-api.us-east-2.amazonaws.com/Test/pizza/1