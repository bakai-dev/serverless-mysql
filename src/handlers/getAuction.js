import commonMiddleware from "../lib/commonMiddleware";
import createError from 'http-errors';
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuction(event, context) {
  let auction;
  const { id } = event.pathParameters;

  try {
    const result = await dynamodb.get({
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: {id}
    }).promise();
    auction = result.Item;

  } catch (error) {
    console.log(error)
    throw new createError(500, error)
  }
  if (!auction) {
    throw new createError(404, `Auction with id "${id}" not found`);
  }

  return {
    statusCode: 201,
    body: JSON.stringify({auction}),
  };
}

export const handler = commonMiddleware(getAuction);


