//in the V3 of the aws SDK, it will automatically utilise credentials provided in the .env file.
import 'dotenv/config'
import { S3Client } from "@aws-sdk/client-s3";

//becasue of the automatic credentials import all we need to provide to the S3 client is the region.
const s3Client = new S3Client({region: "ap-southeast-2"});

export {s3Client};