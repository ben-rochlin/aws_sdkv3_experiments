import { s3Client } from "./libs/sampleClient.js";
import { ListBucketsCommand } from "@aws-sdk/client-s3";

const listBuckets = async () => {
  const listCommand = await s3Client.send(new ListBucketsCommand(''))
  .then((response) => {
    console.log(response.Buckets)
  })
  .catch((err) => {
    console.log(err)
  })
}

listBuckets()