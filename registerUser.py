import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('userdata')

def lambda_handler(event, context):
    body = json.loads(event['body'])
    userid = body.get('userid')
    password = body.get('password')
    
    # Check if user already exists
    existing = table.get_item(Key={'userid': userid})
    if 'Item' in existing:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'User already exists'})
        }
    
    table.put_item(Item={
        'userid': userid,
        'password': password
    })
    
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'User registered successfully'})
    }
