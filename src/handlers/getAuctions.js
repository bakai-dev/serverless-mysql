import commonMiddleware from "../lib/commonMiddleware";

async function getAuctions(event, context) {
  return {
    statusCode: 201,
    body: 1
  };
}

export const handler = commonMiddleware(getAuctions);


