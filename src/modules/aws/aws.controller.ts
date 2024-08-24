import {
  S3ServiceController,
  S3ServiceControllerMethods,
  UploadImage,
  UploadImageResponse,
} from "@shared/generated/s3.proto";
import { Observable } from "rxjs";

import { Controller } from "@nestjs/common";

import { AwsService } from "./aws.service";

@Controller()
@S3ServiceControllerMethods()
export class AwsController implements S3ServiceController {
  constructor(private readonly awsService: AwsService) {}

  uploadImage(
    request: UploadImage,
  ):
    | Promise<UploadImageResponse>
    | Observable<UploadImageResponse>
    | UploadImageResponse {
    return this.awsService
      .uploadImage(request.base64Image)
      .then((imagePath) => {
        return { imagePath };
      });
  }
}
