import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "prime";
  toDos;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .subscribe((response: Response) => {
        this.toDos = response;
      });
  }
}
