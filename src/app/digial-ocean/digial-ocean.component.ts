import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListBucketsCommand, S3 } from '@aws-sdk/client-s3';

@Component({
  selector: 'app-digial-ocean',
  templateUrl: './digial-ocean.component.html',
  styleUrls: ['./digial-ocean.component.scss']
})
export class S3Service implements OnInit {

  private s3Client: any;

  constructor(private http: HttpClient) {
    this.s3Client = new S3({
      forcePathStyle: false,
      endpoint: 'https://api.digitaloceanspaces.com',
      region: 'nyc3',
      credentials: { 
        accessKeyId: "dop_v1_ded01d0af8f1a7be5476ad436f32891043b54061d417abf347909d603831f975",
        secretAccessKey: "hhDs9ktySdLu2ly38t5W+auVeC3Mlehae/7I0KBRDcE"
      }
    });
    this.listBuckets();
 
  }  

  async listBuckets(): Promise<any> {
    try {
      const data = await this.s3Client.send(new ListBucketsCommand({}));
      console.log('Success', data.Buckets);
      return data; // For unit tests.
    } catch (err) {
      console.log('Error', err);
      throw err;
    }
  }

  ngOnInit(): void {
  }

}
