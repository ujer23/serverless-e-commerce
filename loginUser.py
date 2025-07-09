import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('userdata')

def lambda_handler(event, context):
    body = json.loads(event['body'])
    userid = body.get('userid')
    password = body.get('password')
    
    response = table.get_item(Key={'userid': userid})
    item = response.get('Item')
    
    if item and item.get('password') == password:
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Login successful'})
        }
    else:
        return {
            'statusCode': 401,
            'body': json.dumps({'message': 'Invalid credentials'})
        }
