import 'source-map-support/register'
// import * as uuid from 'uuid'
// import * as AWS  from 'aws-sdk'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
// import { parseUserId } from '../../auth/utils'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest'

import { createTodo } from '../../helpers/Todos';

// const docClient = new AWS.DynamoDB.DocumentClient()
// const todosTable = process.env.TODOS_TABLE

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body)

  // TODO: Implement creating a new TODO item
  // const itemId = uuid.v4()
  // const authorization = event.headers.Authorization
  // const split = authorization.split(' ')
  // const jwtToken = split[1]

  // const newItem = {
  //   id: itemId,
  //   userId: parseUserId(jwtToken),
  //   ...newTodo
  // }

  // await docClient.put({
  //   TableName: todosTable,
  //   Item: newItem
  // }).promise()

  // return {
  //   statusCode: 201,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     //'Access-Control-Allow-Credentials': true
  //   },
  //   body: JSON.stringify({
  //     newItem
  //   })
  // }

  
  if (!newTodo.name) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'name is empty'
      })
    };
  }

  const todoItem = await createTodo(event, newTodo);

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item: todoItem
    })
  };

}
