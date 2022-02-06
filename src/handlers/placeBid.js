import commonMiddleware from "../lib/commonMiddleware";
import createError from 'http-errors';
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function placeBid(event, context) {
  let auction;
  const { id } = event.pathParameters;
  const { amount } = event.body;

  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    Key: {id},
    UpdateExpression: 'set highestBid.amount = :amount',
    ExpressionAttributeValues: {
      ':amount': amount
    },
    ReturnValues: 'ALL_NEW'
  };

  let updatedAuction;
  try {
    const result = await dynamodb.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error) {
    console.log(error)
    throw new createError(500, error)
  }

  return {
    statusCode: 201,
    body: JSON.stringify({updatedAuction}),
  };
}

export const handler = commonMiddleware(placeBid);


