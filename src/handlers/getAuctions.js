import commonMiddleware from "../lib/commonMiddleware";
import createError from 'http-errors';
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
  let auctions;

  try {
    const result = await dynamodb.scan({
      TableName: process.env.AUCTIONS_TABLE_NAME
    }).promise();
    auctions = result.Items;

  } catch (error) {
    console.log(error)
    throw new createError(500, error)
  }

  return {
    statusCode: 201,
    body: JSON.stringify({auctions}),
  };
}

export const handler = commonMiddleware(getAuctions)


