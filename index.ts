import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
// Fake change
const bucket = new aws.s3.Bucket("kashweeney-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;
