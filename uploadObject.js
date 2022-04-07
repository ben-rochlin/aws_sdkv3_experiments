import { s3Client } from "./libs/sampleClient.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const params = {
    Bucket: 'test-bucket-photoupload',
    Key: 'sampletext.txt',
    Body: 'heyyy yo buddy, jus uploading some text to s3, YEEEET!!'
}

const uploadObj = async () => {
  const sendit = await s3Client.send(new PutObjectCommand(params))
  .then((resp) => {
    console.log(
        "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    )
    console.log(resp)
  })

  .catch((err) => {
    console.log(err)
  })
}

uploadObj()