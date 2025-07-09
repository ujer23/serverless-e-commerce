import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('productdata')

def lambda_handler(event, context):
    # Read user ID from query string
    userid = event.get('queryStringParameters', {}).get('userid')
    
    if not userid:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Missing userid parameter'})
        }

    # Query using GSI or filter (assuming 'userid' is partition key or indexed)
    response = table.query(
        IndexName='userid-index',  # Only if you created a GSI on 'userid'
        KeyConditionExpression=boto3.dynamodb.conditions.Key('userid').eq(userid)
    )

    items = response.get('Items', [])
    
    return {
        'statusCode': 200,
        'body': json.dumps(items)
    }
