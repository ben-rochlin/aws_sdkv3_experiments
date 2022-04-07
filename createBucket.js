import { s3Client } from "./libs/sampleClient.js";
import { CreateBucketCommand } from "@aws-sdk/client-s3";

const createBucket = async () => {
    const bucketCreate = await s3Client.send(
        new CreateBucketCommand({ Bucket: 'test-bucket-photoupload232692' })
    )
        .then((response) => {
            console.log(response);
            console.log('successfully created a bucket called ', response.Location);
        })
        .catch((err) => {
            console.log('error: ', err)
        })

}

createBucket()