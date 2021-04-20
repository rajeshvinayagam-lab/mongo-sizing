import { Component, Input } from "angular2/core";
import { MongoService } from "/app/services/mongo.service";
import { MongoCollection } from "/app/services/collection.service";
import { MongoIndex } from "/app/services/index.service";

@Component({
  selector: "mdb-sizing",
  templateUrl: "/app/templates/app.sizing.html",
})
export class SizingComponent {
  // totalDocuments:number = 0;
  // totalDocumentsInMemory: number = 0;
  // totalIndexes:number= 0;
  // totalAverageDocumentSize:number= 0;

  // totalDataSize:number= 0;
  // totalIndexSize:number= 0;
  // totalStorageSize:number= 0;
  // totalMemoryRequirement:number= 0;

  constructor(mongo: MongoService) {
    this.mongo = mongo;
    // this.calcSummary();
  }

  // calcSummary() {
  //   this.totalDocuments = this.mongo.collections
  //     .map((a) => a.numberOfDocument)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalDocumentsInMemory = this.mongo.collections
  //     .map((a) => a.numberOfDocumentInMemory)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalIndexes = this.mongo.collections
  //     .map((a) => a.indexes.length)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalAverageDocumentSize = this.mongo.collections
  //     .map((a) => a.averageDocumentSize)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalDataSize = this.mongo.collections
  //     .map((a) => a.dataSize)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalIndexSize = this.mongo.collections
  //     .map((a) => a.indexSize)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalStorageSize = this.mongo.collections
  //     .map((a) => a.storageSize)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });

  //   this.totalMemoryRequirement = this.mongo.collections
  //     .map((a) => a.memoryRequirement)
  //     .reduce(function (a, b) {
  //       return a + b;
  //     });
  // }
}
