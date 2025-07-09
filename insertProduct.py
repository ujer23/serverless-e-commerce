import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('productdata')

def lambda_handler(event, context):
    body = json.loads(event['body'])
    
    product_id = str(uuid.uuid4())  # Unique ID for each item
    userid = body.get('userid')
    product_name = body.get('productid')
    image = body.get('image')
    timestamp = body.get('timestamp')
    
    table.put_item(
        Item={
            'productid': product_id,
            'userid': userid,
            'productname': product_name,
            'image': image,
            'timestamp': timestamp
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Product inserted', 'productid': product_id})
    }
