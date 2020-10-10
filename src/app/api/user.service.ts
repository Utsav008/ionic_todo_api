import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(public http: HttpClient) {}

  Savedata(dataToSend) {
    var url = "http://localhost/ionic_api/insert_api.php";
    return this.http.post(url, dataToSend, {
      headers: new HttpHeaders({ "content-Type": "application/json" }),
    });
  }

  Getdata() {
    var url = "http://localhost/ionic_api/view_api.php";
    return this.http.get(url);
  }
}
